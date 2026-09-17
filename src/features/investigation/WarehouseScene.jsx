import { useEffect, useRef } from "react";
import * as THREE from "three";

/*
  WarehouseScene — first-person 3D warehouse.
  - WASD + mouse-look (pointer-lock)
  - Collision derived from placed geometry via THREE.Box3 — no hand-authored list
  - 7 interactive meshes only (named, raycast targets)
  - All objects rest on a real surface — nothing floats
  - Wet-patch and cracked-container are adjacent in the main central aisle
*/

// ─── Shared palette ───────────────────────────────────────────────────────────
const C = {
  floor:      0x8a7a6a,
  wall:       0x6b6258,
  ceiling:    0x4a4540,
  shelf:      0x5c4a32,
  box:        0x8b6f47,
  boxAlt:     0x7a5c3a,
  pallet:     0xa08060,
  pillar:     0x706050,
  ramp:       0x706050,
  sky:        0x1a1a2e,
  // Interactive props — muted/neutral, indistinguishable as clue vs. decoy before click
  puddle:     0x5a8faa,
  container:  0x7a8070,
  containerDent: 0x4a5048,
  containerDrip: 0x5a7a8a,
  clipboard:  0xc8b89a,
  clipPaper:  0xf0ead8,
  clipMetal:  0x888888,
  extBody:    0x8a4040,
  extNozzle:  0x5a2828,
  extBracket: 0x555555,
  glove:      0xb08060,
  signBody:   0xd4b840,
  signStripe: 0x1C1C1C,
  signLeg:    0x888888,
};

// ─── Geometry helpers ─────────────────────────────────────────────────────────
function mkBox(w, h, d, color, x = 0, y = 0, z = 0, ry = 0) {
  const m = new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshLambertMaterial({ color })
  );
  m.position.set(x, y, z);
  m.rotation.y = ry;
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function mkCyl(rt, rb, h, segs, color, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(
    new THREE.CylinderGeometry(rt, rb, h, segs),
    new THREE.MeshLambertMaterial({ color })
  );
  m.position.set(x, y, z);
  m.castShadow = true;
  return m;
}

// ─── Decorative scene objects ─────────────────────────────────────────────────
function buildShelfUnit(scene, x, z) {
  const g = new THREE.Group();
  // two uprights
  g.add(mkBox(0.1, 4.2, 0.1, C.shelf, -0.9, 2.1, 0));
  g.add(mkBox(0.1, 4.2, 0.1, C.shelf,  0.9, 2.1, 0));
  // four shelf levels
  for (const h of [0.5, 1.4, 2.4, 3.4]) {
    g.add(mkBox(2.0, 0.07, 0.85, C.shelf, 0, h, 0));
  }
  g.position.set(x, 0, z);
  scene.add(g);
  return g;
}

function buildBoxStack(scene, x, z, count = 3) {
  const g = new THREE.Group();
  for (let i = 0; i < count; i++) {
    g.add(mkBox(0.88, 0.68, 0.88, i % 2 === 0 ? C.box : C.boxAlt, 0, 0.34 + i * 0.7, 0));
  }
  g.position.set(x, 0, z);
  scene.add(g);
  return g;
}

function buildPallet(scene, x, z) {
  const g = new THREE.Group();
  g.add(mkBox(1.8, 0.1, 1.2, C.pallet, 0, 0.05, 0));
  for (const zOff of [-0.45, 0, 0.45]) g.add(mkBox(1.8, 0.06, 0.12, C.pallet, 0, 0.18, zOff));
  g.position.set(x, 0, z);
  scene.add(g);
  return g;
}

// ─── Interactive prop builders ────────────────────────────────────────────────
// Each returns the group with every child mesh named = the hotspot id

function buildStool(scene, x, z) {
  // Low-poly side table — group origin is at floor level (y=0), same convention as all
  // other scene builders. Legs built upward; top slab sits on top of legs.
  // Top slab top face = y 0.60.
  const g = new THREE.Group();
  // Four legs going from floor (y=0) up to y=0.55
  for (const [lx, lz] of [[-0.22,-0.16],[0.22,-0.16],[-0.22,0.16],[0.22,0.16]]) {
    g.add(mkBox(0.055, 0.55, 0.055, C.pillar, lx, 0.275, lz));
  }
  // Top slab: center at y = 0.55 + 0.025 = 0.575; top face at y = 0.60
  g.add(mkBox(0.62, 0.05, 0.46, C.pallet, 0, 0.575, 0));
  g.position.set(x, 0, z);
  scene.add(g);
  return g;
}


function buildPuddle(id) {
  const g = new THREE.Group();
  g.name = id;
  // Main pool — directly below the leaking container on the rack above
  const pool = new THREE.Mesh(
    new THREE.CylinderGeometry(0.65, 0.72, 0.03, 14),
    new THREE.MeshLambertMaterial({ color: C.puddle, transparent: true, opacity: 0.82 })
  );
  pool.name = id;
  g.add(pool);
  return g;
}

function buildCrackedContainer(id) {
  // Rectangular crate — matches warehouse box style, larger than a standard box
  // Dimensions: 0.70 wide × 0.80 tall × 0.65 deep
  const g = new THREE.Group();
  g.name = id;

  // Main crate body
  const body = mkBox(0.70, 0.80, 0.65, C.container);
  body.name = id;

  // Lid/top cap — slightly wider, darker
  const lid = mkBox(0.74, 0.05, 0.69, 0x5a6258, 0, 0.425, 0);
  lid.name = id;

  // Dent panel — recessed darker face on the front face
  const dent = mkBox(0.28, 0.30, 0.06, C.containerDent, 0.10, -0.05, 0.32);
  dent.name = id;

  // Drip streak 1 — running from the dent downward
  const drip1 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.014, 0.022, 0.28, 5),
    new THREE.MeshLambertMaterial({ color: C.containerDrip, transparent: true, opacity: 0.9 })
  );
  drip1.name = id;
  drip1.position.set(0.12, -0.26, 0.35);

  // Drip streak 2 — thinner, lower
  const drip2 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.009, 0.016, 0.18, 5),
    new THREE.MeshLambertMaterial({ color: C.containerDrip, transparent: true, opacity: 0.70 })
  );
  drip2.name = id;
  drip2.position.set(0.13, -0.46, 0.36);

  g.add(body, lid, dent, drip1, drip2);
  return g;
}

function buildClipboard(id) {
  // Portrait board hung on a wall post — clip+hook at top, paper with form lines, slight lean
  const g = new THREE.Group();
  g.name = id;

  // Backing board
  const board = mkBox(0.30, 0.44, 0.025, C.clipboard);
  board.name = id;

  // Paper (cream, slightly smaller, sits on board face)
  const paper = mkBox(0.23, 0.34, 0.005, C.clipPaper, 0, -0.02, 0.016);
  paper.name = id;

  // Metal clip bar at top
  const clipBar = mkBox(0.20, 0.048, 0.038, C.clipMetal, 0, 0.22, 0.005);
  clipBar.name = id;

  // Clip spring arch
  const clipArch = new THREE.Mesh(
    new THREE.CylinderGeometry(0.03, 0.03, 0.16, 6),
    new THREE.MeshLambertMaterial({ color: C.clipMetal })
  );
  clipArch.name = id;
  clipArch.rotation.z = Math.PI / 2;
  clipArch.position.set(0, 0.248, 0.01);

  // Nail/peg hook protruding from the back — visually attaches to post
  const hook = mkBox(0.025, 0.055, 0.065, C.clipMetal, 0, 0.278, -0.020);
  hook.name = id;

  // 5 ruled lines suggesting a printed form
  for (let i = 0; i < 5; i++) {
    const line = mkBox(0.18, 0.007, 0.004, 0x999980, 0, 0.09 - i * 0.07, 0.021);
    line.name = id;
    g.add(line);
  }

  // No internal lean — orientation is controlled entirely by the placement call's
  // rotation.y so it reads correctly from all angles regardless of which wall it faces.

  g.add(board, paper, clipBar, clipArch, hook);
  return g;
}


function buildExtinguisher(id) {
  // Red cylinder with hose, pressure gauge, wall bracket
  const g = new THREE.Group();
  g.name = id;

  // Main body
  const body = mkCyl(0.1, 0.11, 0.58, 10, C.extBody);
  body.name = id;

  // Shoulder cone taper
  const shoulder = mkCyl(0.055, 0.10, 0.12, 10, C.extBody, 0, 0.35, 0);
  shoulder.name = id;

  // Nozzle stem
  const stem = mkCyl(0.025, 0.025, 0.18, 6, C.extNozzle, 0, 0.46, 0);
  stem.name = id;

  // Pressure gauge (small disc on side)
  const gauge = mkCyl(0.04, 0.04, 0.02, 8, 0x333333, 0.12, 0.15, 0);
  gauge.name = id;
  gauge.rotation.z = Math.PI / 2;

  // Hose — torus arc on the side
  const hose = new THREE.Mesh(
    new THREE.TorusGeometry(0.13, 0.016, 6, 12, Math.PI * 0.9),
    new THREE.MeshLambertMaterial({ color: 0x222222 })
  );
  hose.name = id;
  hose.rotation.x = Math.PI / 2;
  hose.position.set(0.13, 0.05, 0);

  // Wall bracket (U-shaped pair of boxes behind the body)
  const bktBase = mkBox(0.28, 0.06, 0.06, C.extBracket, 0, 0, -0.12);
  bktBase.name = id;
  const bktL = mkBox(0.05, 0.22, 0.06, C.extBracket, -0.12, 0.08, -0.12);
  bktL.name = id;
  const bktR = mkBox(0.05, 0.22, 0.06, C.extBracket,  0.12, 0.08, -0.12);
  bktR.name = id;

  g.add(body, shoulder, stem, gauge, hose, bktBase, bktL, bktR);
  return g;
}

function buildGloves(id) {
  // Pair of gloves — wider palm, pronounced fingers raised above palm plane,
  // broad thumb; readable from eye-level viewing distance
  const g = new THREE.Group();
  g.name = id;

  const makeGlove = (xOff, ryOff) => {
    const gg = new THREE.Group();
    // Palm — wider, thicker
    const palm = mkBox(0.20, 0.10, 0.26, C.glove);
    palm.name = id;
    // 4 finger nubs — wider, taller, raised 0.02 above palm top so they read proud
    for (let f = 0; f < 4; f++) {
      const finger = mkBox(0.042, 0.12, 0.10, C.glove, -0.072 + f * 0.050, 0.01, 0.19);
      finger.name = id;
      gg.add(finger);
    }
    // Thumb — broader and clearly angled out from the palm side
    const thumb = mkBox(0.09, 0.10, 0.13, C.glove, 0.13, 0.01, 0.07);
    thumb.name = id;
    thumb.rotation.y = -0.75;
    gg.add(palm, thumb);
    gg.rotation.y = ryOff;
    gg.position.x = xOff;
    return gg;
  };

  g.add(makeGlove(-0.18, 0.2));
  g.add(makeGlove( 0.18, -0.2));
  return g;
}


function buildWetFloorSign(id) {
  // Free-standing sign: tripod base → vertical pole → sign board at top
  const g = new THREE.Group();
  g.name = id;

  // Tripod base — three legs splaying outward from center at floor level
  const legAngles = [0, Math.PI * 2/3, Math.PI * 4/3];
  for (const a of legAngles) {
    const leg = mkBox(0.06, 0.06, 0.55, C.signLeg, Math.sin(a) * 0.22, 0.03, Math.cos(a) * 0.22, a);
    leg.name = id;
    g.add(leg);
  }

  // Vertical pole
  const pole = mkCyl(0.025, 0.025, 1.35, 7, C.signLeg, 0, 0.735, 0);
  pole.name = id;

  // Sign board — wider and taller than before, mounted at pole top
  const board = mkBox(0.54, 0.72, 0.04, C.signBody, 0, 1.43, 0);
  board.name = id;

  // Bold "CAUTION" stripe across the board
  const stripe1 = mkBox(0.54, 0.08, 0.045, C.signStripe, 0, 1.52, 0);
  stripe1.name = id;
  const stripe2 = mkBox(0.54, 0.08, 0.045, C.signStripe, 0, 1.34, 0);
  stripe2.name = id;

  // Exclamation mark representation (two stacked boxes)
  const excDot  = mkBox(0.06, 0.06, 0.045, 0x1a1a00, 0,  1.20, 0);
  excDot.name = id;
  const excBar  = mkBox(0.06, 0.24, 0.045, 0x1a1a00, 0,  1.44, 0);
  excBar.name = id;

  // Pole-to-board bracket
  const bracket = mkBox(0.08, 0.08, 0.06, C.signLeg, 0, 1.10, 0);
  bracket.name = id;

  g.add(pole, board, stripe1, stripe2, excDot, excBar, bracket);
  return g;
}

function buildOverhangingBoxes(id) {
  // Two boxes with one clearly jutting past the shelf edge
  const g = new THREE.Group();
  g.name = id;
  const b1 = mkBox(0.88, 0.68, 0.88, C.box);
  b1.name = id;
  const b2 = mkBox(0.88, 0.68, 0.88, C.boxAlt, 0.55, 0, 0); // shifted right — overhangs
  b2.name = id;
  g.add(b1, b2);
  return g;
}

// ─── Collision helper — derived from actual geometry ──────────────────────────
const PLAYER_RADIUS = 0.45; // half-width of collision cylinder

function addCollider(colliders, obj, padX = 0.1, padZ = 0.1) {
  const box = new THREE.Box3().setFromObject(obj);
  // Expand slightly so the player can't clip through thin edges
  box.min.x -= padX + PLAYER_RADIUS;
  box.max.x += padX + PLAYER_RADIUS;
  box.min.z -= padZ + PLAYER_RADIUS;
  box.max.z += padZ + PLAYER_RADIUS;
  colliders.push(box);
}

function collidesAt(colliders, x, z) {
  for (const box of colliders) {
    if (x > box.min.x && x < box.max.x && z > box.min.z && z < box.max.z) return true;
  }
  return false;
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function WarehouseScene({ onHotspotClick, onReady }) {
  const mountRef   = useRef(null);
  const onClickRef = useRef(onHotspotClick);
  const onReadyRef = useRef(onReady);
  useEffect(() => { onClickRef.current = onHotspotClick; }, [onHotspotClick]);
  useEffect(() => { onReadyRef.current = onReady; }, [onReady]);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    // ── Renderer ─────────────────────────────────────────────────────────────
    // Use window dimensions — el.clientWidth/Height = 0 on a self-closing div at mount
    const W = window.innerWidth;
    const H = window.innerHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.shadowMap.enabled = true;
    el.appendChild(renderer.domElement);

    // ── Scene + fog ──────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(C.sky);
    scene.fog = new THREE.Fog(C.sky, 20, 48);

    // ── Camera — spawn verified clear of every collider ──────────────────────
    // Collision check at this point: all slab/wall/pillar/cabin colliders are built
    // BELOW. The spawn is placed at (0, 1.7, -15):
    //   - Left/right walls at x=±14 — x=0 clear
    //   - Back wall at z=-28 — z=-15 clear
    //   - Front wall at z=16 — clear
    //   - Left bank slab: x∈[-11.45, -6.55] — x=0 clear
    //   - Right bank slab: x∈[5.55, 10.45] — x=0 clear
    //   - mL slab: x∈[-5.95, -3.05], z∈[-15.45, -4.55] — x=0 clear
    //   - mR slab: x∈[3.05, 5.95] — x=0 clear
    //   - Pillars at z=4,-4,-12,-20 — z=-15 not near any
    //   - Cabin at x∈[6.95,12.05] — x=0 clear
    const camera = new THREE.PerspectiveCamera(75, W / H, 0.1, 60);
    camera.position.set(0, 1.7, -15);

    // ── Lights ───────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.85);
    dirLight.position.set(5, 10, 5);
    dirLight.castShadow = true;
    scene.add(dirLight);
    for (const z of [5, -3, -11, -19]) {
      const strip = new THREE.PointLight(0xffe8c0, 0.55, 18);
      strip.position.set(0, 4.6, z);
      scene.add(strip);
    }

    // ── Collision list (populated by addCollider as objects are placed) ───────
    const colliders = [];

    // ── Floor ────────────────────────────────────────────────────────────────
    const floorMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(28, 44),
      new THREE.MeshLambertMaterial({ color: C.floor })
    );
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.set(0, 0, -6);
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);

    // ── Ceiling ──────────────────────────────────────────────────────────────
    const ceilMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(28, 44),
      new THREE.MeshLambertMaterial({ color: C.ceiling })
    );
    ceilMesh.rotation.x = Math.PI / 2;
    ceilMesh.position.set(0, 5, -6);
    scene.add(ceilMesh);

    // ── Walls (thin boxes so Box3 gives real bounds) ──────────────────────────
    const wallMat = new THREE.MeshLambertMaterial({ color: C.wall });

    // Front wall (entrance side)
    const frontWall = new THREE.Mesh(new THREE.BoxGeometry(28, 5, 0.25), wallMat);
    frontWall.position.set(0, 2.5, 16);
    scene.add(frontWall);
    addCollider(colliders, frontWall, 0, 0);

    // Back wall
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(28, 5, 0.25), wallMat);
    backWall.position.set(0, 2.5, -28);
    scene.add(backWall);
    addCollider(colliders, backWall, 0, 0);

    // Left wall
    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.25, 5, 44), wallMat);
    leftWall.position.set(-14, 2.5, -6);
    scene.add(leftWall);
    addCollider(colliders, leftWall, 0, 0);

    // Right wall
    const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.25, 5, 44), wallMat);
    rightWall.position.set(14, 2.5, -6);
    scene.add(rightWall);
    addCollider(colliders, rightWall, 0, 0);

    // ── Loading dock ramp ─────────────────────────────────────────────────────
    const ramp = mkBox(6, 0.3, 3.5, C.ramp, 0, 0.15, 14.5);
    scene.add(ramp);

    // Door frame pillars
    const dfL = mkBox(0.25, 3.2, 0.25, C.pillar, -3.2, 1.6, 15.6);
    const dfR = mkBox(0.25, 3.2, 0.25, C.pillar,  3.2, 1.6, 15.6);
    const dfT = mkBox(6.6, 0.25, 0.25, C.pillar,  0,   3.3, 15.6);
    scene.add(dfL, dfR, dfT);

    // ── Pillars down centre aisle ─────────────────────────────────────────────
    for (const z of [4, -4, -12, -20]) {
      const pL = mkBox(0.3, 5, 0.3, C.pillar, -2, 2.5, z);
      const pR = mkBox(0.3, 5, 0.3, C.pillar,  2, 2.5, z);
      scene.add(pL, pR);
      addCollider(colliders, pL, 0.05, 0.05);
      addCollider(colliders, pR, 0.05, 0.05);
    }

    // ── Cabin / office structure (right side) ─────────────────────────────────
    const cabin = new THREE.Group();
    const cabinBody = new THREE.Mesh(new THREE.BoxGeometry(4.2, 2.9, 3.2), new THREE.MeshLambertMaterial({ color: 0x5a5248 }));
    cabinBody.position.y = 1.45;
    cabin.add(cabinBody);
    cabin.add(mkBox(4.4, 0.18, 3.4, 0x4a4238, 0, 2.95, 0)); // roof
    cabin.add(mkBox(0.72, 2.1, 0.06, 0x3a3028, -0.5, 1.05, 1.62)); // door
    cabin.add(mkBox(0.85, 0.52, 0.06, 0x7ab0c0,  0.85, 1.9,  1.62)); // window
    cabin.position.set(9.5, 0, 5.5);
    scene.add(cabin);
    // Derive collider from the cabin group after position is set —
    // Three.js Box3.setFromObject calls updateWorldMatrix internally.
    {
      const cb = new THREE.Box3().setFromObject(cabin);
      cb.min.x -= PLAYER_RADIUS;
      cb.max.x += PLAYER_RADIUS;
      cb.min.z -= PLAYER_RADIUS;
      cb.max.z += PLAYER_RADIUS;
      colliders.push(cb);
    }

    // ── Shelf banks — add geometry colliders ─────────────────────────────────
    // Left bank (two columns, 6 rows each)
    for (const z of [2, -2, -6, -10, -14, -18]) {
      buildShelfUnit(scene, -10, z);
      buildShelfUnit(scene, -8,  z);
    }
    // Collect left bank as one slab collider
    {
      const slab = mkBox(4, 4.5, 22, C.shelf, -9, 2.25, -8);
      // invisible but its Box3 is real
      addCollider(colliders, slab, 0, 0);
    }

    // Right bank
    for (const z of [0, -4, -8, -12, -16, -20]) {
      buildShelfUnit(scene, 7, z);
      buildShelfUnit(scene, 9, z);
    }
    {
      const slab = mkBox(4, 4.5, 22, C.shelf, 8, 2.25, -10);
      addCollider(colliders, slab, 0, 0);
    }

    // Mid-warehouse racking (both sides of central aisle)
    for (const z of [-6, -10, -14]) {
      buildShelfUnit(scene, -4.5, z);
      buildShelfUnit(scene, 4.5,  z);
    }
    {
      const mL = mkBox(2, 4.5, 10, C.shelf, -4.5, 2.25, -10);
      const mR = mkBox(2, 4.5, 10, C.shelf,  4.5, 2.25, -10);
      addCollider(colliders, mL, 0, 0);
      addCollider(colliders, mR, 0, 0);
    }

    // ── Box stacks — with colliders so player can't walk through them ─────────
    const stackPositions = [
      // Against left bank shelves — inside the bank, already blocked by slab collider
      [-9.2, 0], [-9.2,-4], [-9.2,-8], [-9.2,-12], [-9.2,-16],
      // Against right bank shelves
      [ 8.2, 2], [ 8.2,-2], [ 8.2,-6], [ 8.2,-10], [ 8.2,-14],
      // Against mid-rack shelves — inside slab collider zones
      [-4.5,-7], [-4.5,-11], [4.5,-7], [4.5,-11],
      // Open floor areas
      [3,-2], [-3,-3], [5,8], [-5,7],
    ];
    for (const [sx, sz] of stackPositions) {
      const stackGroup = buildBoxStack(scene, sx, sz, 2 + Math.floor((Math.abs(sx * sz) * 7 + 13) % 3));
      // Register EVERY stack as a collider — the previous insideSlab exclusion was wrong:
      // stacks at (5,8) and (-5,7) are in the open loading area, not inside any slab.
      // Adding a small collider inside a wider slab zone is harmless (never independently
      // triggered). Spawn (0,-15) re-verified clear of all new collider volumes.
      addCollider(colliders, stackGroup, 0, 0);
    }

    // ── Shelved boxes — on rack levels throughout the warehouse ───────────────
    // buildShelfUnit shelf heights: 0.5, 1.4, 2.4, 3.4 (top face of board).
    // Box height 0.55 → centre y = shelf_h + 0.055/2. Use 0.55 tall boxes to fit.
    const addShelfBox = (x, y, z, color) => {
      scene.add(mkBox(0.72, 0.55, 0.62, color, x, y + 0.275, z));
    };
    // Left bank shelves — x=-10 and x=-8 columns, various z and levels
    const leftShelfZ  = [2, -2, -6, -10, -14, -18];
    const shelfLevels = [0.5, 1.4, 2.4, 3.4];
    for (const sz of leftShelfZ) {
      addShelfBox(-10, shelfLevels[0], sz, C.box);
      addShelfBox(-10, shelfLevels[1], sz, C.boxAlt);
      addShelfBox( -8, shelfLevels[0], sz, C.boxAlt);
      addShelfBox( -8, shelfLevels[2], sz, C.box);
    }
    // Right bank shelves
    const rightShelfZ = [0, -4, -8, -12, -16, -20];
    for (const sz of rightShelfZ) {
      addShelfBox(7,  shelfLevels[0], sz, C.box);
      addShelfBox(7,  shelfLevels[2], sz, C.boxAlt);
      addShelfBox(9,  shelfLevels[1], sz, C.box);
      addShelfBox(9,  shelfLevels[3], sz, C.boxAlt);
    }
    // Mid-rack shelves (x=±4.5, z=-6,-10,-14)
    for (const sz of [-6, -10, -14]) {
      addShelfBox(-4.5, shelfLevels[0], sz, C.boxAlt);
      addShelfBox(-4.5, shelfLevels[1], sz, C.box);
      addShelfBox( 4.5, shelfLevels[0], sz, C.box);
      addShelfBox( 4.5, shelfLevels[2], sz, C.boxAlt);
    }

    // ── Pallets ───────────────────────────────────────────────────────────────
    for (const [px, pz] of [[-9,4],[8.5,4],[3,10],[-3,10],[0,-2]]) {
      buildPallet(scene, px, pz);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // ── Interactive props — 7 named raycast targets ───────────────────────────
    // ─────────────────────────────────────────────────────────────────────────
    const interactiveMeshes = [];

    function placeInteractive(group, x, y, z, ry = 0) {
      group.position.set(x, y, z);
      group.rotation.y = ry;
      scene.add(group);
      group.traverse(child => {
        if (child.isMesh && child.name) interactiveMeshes.push(child);
      });
    }

    // ── LEAK CLUSTER LAYOUT ───────────────────────────────────────────────────
    // Container: x=2, z=7, on the bottom shelf of a full-height rack unit.
    // Puddle: x=0, z=7 — 2m away horizontally from container.
    // Drip: vertical segment from container dent down to floor at (2.12, 0, 7.33),
    //        then angled floor-level streak reaching toward the puddle at (0, 0, 7).
    // IDENTICAL layout in HazardCutscene.jsx so the player recognises the same spot.

    const RACK_X = 2,  RACK_Z = 7;   // rack / container position
    const PUD_X  = 0,  PUD_Z  = 7;   // puddle position — 2m from container

    // Full-height shelf unit — same proportions as the rest of the warehouse
    buildShelfUnit(scene, RACK_X, RACK_Z);

    // Container bottom shelf top-face = 0.5. Container height = 0.80.
    // Container centre y = 0.5 + 0.80/2 = 0.90.
    const CONT_CY = 0.90;

    // Vertical drip — from container dent side (local x≈+0.12, z≈+0.33) down to floor
    const DRIP_WX = RACK_X + 0.12;
    const DRIP_WZ = RACK_Z + 0.33;
    const vDripH  = CONT_CY - 0.40;  // from roughly mid-dent height down to near-floor
    const vDrip = new THREE.Mesh(
      new THREE.CylinderGeometry(0.016, 0.026, vDripH, 6),
      new THREE.MeshLambertMaterial({ color: C.containerDrip, transparent: true, opacity: 0.88 })
    );
    vDrip.position.set(DRIP_WX, vDripH / 2 + 0.015, DRIP_WZ);
    scene.add(vDrip);

    // Horizontal floor-level streak from drip-landing point toward puddle
    // Midpoint and rotation computed from the two endpoints
    const fx1 = DRIP_WX, fz1 = DRIP_WZ;
    const fx2 = PUD_X + 0.2, fz2 = PUD_Z;  // stop just short of puddle centre
    const fMidX = (fx1 + fx2) / 2;
    const fMidZ = (fz1 + fz2) / 2;
    const fLen  = Math.sqrt((fx2-fx1)**2 + (fz2-fz1)**2);
    const fAngle = Math.atan2(fz2 - fz1, fx2 - fx1);
    const hDrip = new THREE.Mesh(
      new THREE.CylinderGeometry(0.022, 0.032, fLen, 6),
      new THREE.MeshLambertMaterial({ color: C.containerDrip, transparent: true, opacity: 0.72 })
    );
    hDrip.rotation.z = Math.PI / 2; // lay cylinder on its side (along X axis)
    hDrip.rotation.y = -fAngle;     // rotate to point from drip-landing to puddle
    hDrip.position.set(fMidX, 0.016, fMidZ);
    scene.add(hDrip);

    // ── CLUE 1: Wet patch — 2m from container across the aisle ──────────────────
    placeInteractive(buildPuddle("wet-patch"), PUD_X, 0.015, PUD_Z);

    // ── CLUE 2: Cracked container — on the bottom shelf of the rack ──────────────
    // Bottom shelf top-face y=0.5; container centre y = 0.5 + 0.40 = 0.90.
    placeInteractive(buildCrackedContainer("cracked-container"), RACK_X, CONT_CY, RACK_Z, 0.3);

    // ── CLUE 3: Hazard log — left WALL, mid-depth ────────────────────────────────
    // Pole at x=-13.7 (centre), width 0.06m → right face at x=-13.67.
    // With ry=π/2: local z → world x, so board back face (local z=-0.0125) lands at
    //   world_x = group_x + (-0.0125) = -13.67  →  group_x = -13.6575.
    // Hook at local z=-0.020 → world_x = -13.6775 — inside the pole (correct for a peg).
    // The internal g.rotation.x lean is removed from buildClipboard; orientation is
    // controlled here only, so the board reads correctly from all angles.
    const clipPost = mkBox(0.06, 2.4, 0.06, C.pillar, -13.7, 1.2, -8);
    scene.add(clipPost);
    placeInteractive(buildClipboard("hazard-log"), -13.6575, 1.52, -8, Math.PI / 2);

    // ── DECOY 1: Fire extinguisher — right wall, proper wall-mount backing plate ──
    const extWallPlate = mkBox(0.5, 0.9, 0.05, 0x4a4440, 13.88, 1.2, 5);
    scene.add(extWallPlate);
    placeInteractive(buildExtinguisher("fire-extinguisher"), 13.6, 1.2, 5, Math.PI / 2);

    // ── DECOY 2: Overhanging boxes ─────────────────────────────────────────────
    // Placed on top of the floor stack at (-3,-3) — no shelf uprights within 2m.
    // Stack count at (-3,-3) = 3 boxes. Top of 3-box stack = 0.34 + 2×0.70 + 0.34 = 2.08.
    placeInteractive(buildOverhangingBoxes("overhanging-boxes"), -3, 2.08, -3, 0);

    // ── DECOY 3: Safety gloves — on a stool in the right-mid aisle ───────────────
    // buildStool: floor-origin, top slab top face at y=0.60.
    // Palm height 0.10 → palm centre at y = 0.60 + 0.05 = 0.65.
    buildStool(scene, 5, -8);
    // Palm centre at y=0.65 (stool top face 0.60 + palm half-height 0.05)
    placeInteractive(buildGloves("safety-gloves"), 5, 0.65, -8, 0.3);

    // ── DECOY 4: Wet floor sign — tripod base sits at y=0, back aisle ────────────
    placeInteractive(buildWetFloorSign("wet-floor-sign"), -4, 0, -18, 0.2);

    // ── Spawn safety check — runs after ALL colliders are built ─────────────────
    // If the spawn point ever becomes blocked, log a clear warning during dev.
    if (collidesAt(colliders, camera.position.x, camera.position.z)) {
      console.warn(
        `[WarehouseScene] SPAWN BLOCKED at (${camera.position.x}, ${camera.position.z}). ` +
        'Player will be stuck from frame one. Move the spawn or fix the collider.'
      );
    }



    // ── Glow setup ───────────────────────────────────────────────────────────
    // Additive warning-yellow glow, same sine wave for ALL 7 objects.
    // IMPORTANT: call scene.updateMatrixWorld(true) before any Box3.setFromObject —
    // objects were just placed in this same synchronous block, so their matrixWorld
    // may not yet be propagated. Without this, Box3 computes at wrong positions.
    scene.updateMatrixWorld(true);

    const THIN_GROUPS = new Set(['wet-floor-sign', 'hazard-log', 'safety-gloves']);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xffdd00,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.FrontSide,
    });

    const glowMeshes = [];

    function makeGlowFor(obj, debugLabel) {
      const bb = new THREE.Box3().setFromObject(obj);
      const size   = new THREE.Vector3();
      const center = new THREE.Vector3();
      bb.getSize(size);
      bb.getCenter(center);
      if (debugLabel) {
        console.log(`[Glow] ${debugLabel} center:`, center.x.toFixed(3), center.y.toFixed(3), center.z.toFixed(3));
      }
      const gm = new THREE.Mesh(
        new THREE.BoxGeometry(
          size.x * 1.04 + 0.04,
          size.y * 1.04 + 0.04,
          size.z * 1.04 + 0.04
        ),
        glowMat.clone()
      );
      gm.position.copy(center);
      gm.renderOrder = 1;
      scene.add(gm);
      glowMeshes.push(gm);
    }

    const seenGroups = new Set();
    for (const mesh of interactiveMeshes) {
      let topGroup = mesh;
      while (topGroup.parent && topGroup.parent !== scene) topGroup = topGroup.parent;
      if (seenGroups.has(topGroup)) continue;
      seenGroups.add(topGroup);

      if (THIN_GROUPS.has(topGroup.name)) {
        // Per-mesh glow — hugs thin/irregular silhouettes.
        // Pass a debug label so we can verify each center matches its known world position:
        //   wet-floor-sign → near (-4,*,-18), hazard-log → near (-13.66,*,-8), safety-gloves → near (5,*,-8)
        topGroup.traverse(child => {
          if (child.isMesh && child.name === topGroup.name) {
            makeGlowFor(child, topGroup.name);
          }
        });
      } else {
        makeGlowFor(topGroup, null);
      }
    }


    // ── Label map — identity names only, never clue/decoy status ─────────────
    const LABELS = {
      'wet-patch':          'Spilled liquid',
      'cracked-container':  'Container',
      'hazard-log':         'Report board',
      'fire-extinguisher':  'Fire extinguisher',
      'overhanging-boxes':  'Stacked boxes',
      'safety-gloves':      'Safety gloves',
      'wet-floor-sign':     'Wet floor sign',
    };

    // ── Crosshair + label DOM elements ────────────────────────────────────────
    // We use inline SVG drawn icons — NOT text glyphs, which render inconsistently
    // across fonts. The SVG is swapped between a cross and a hand pointer.
    const SVG_CROSS = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <line x1="12" y1="2"  x2="12" y2="22" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="2"  y1="12" x2="22" y2="12" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
      <filter id="s"><feDropShadow dx="0" dy="0" stdDeviation="1" flood-color="black" flood-opacity="0.8"/></filter>
    </svg>`;

    const SVG_HAND = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
      <!-- Palm block -->
      <rect x="7" y="11" width="12" height="11" rx="2" fill="white"/>
      <!-- Four fingers -->
      <rect x="7"  y="4" width="2.5" height="9" rx="1.2" fill="white"/>
      <rect x="10.5" y="2" width="2.5" height="11" rx="1.2" fill="white"/>
      <rect x="14" y="2" width="2.5" height="11" rx="1.2" fill="white"/>
      <rect x="17.5" y="4" width="2.5" height="9" rx="1.2" fill="white"/>
      <!-- Thumb -->
      <rect x="3" y="12" width="5" height="2.5" rx="1.2" fill="white" transform="rotate(-15 3 12)"/>
    </svg>`;

    const crosshairEl = document.createElement('div');
    Object.assign(crosshairEl.style, {
      position: 'absolute',
      top: '50%', left: '50%',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      userSelect: 'none',
      filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.9))',
      zIndex: '20',
      lineHeight: '0',  // prevent SVG from adding extra height
    });
    crosshairEl.innerHTML = SVG_CROSS;
    el.style.position = 'relative'; // so absolute children are clipped to el
    el.appendChild(crosshairEl);

    const labelEl = document.createElement('div');
    Object.assign(labelEl.style, {
      position: 'absolute',
      top: 'calc(50% + 20px)', left: '50%',
      transform: 'translateX(-50%)',
      color: '#d0d0d0',
      fontSize: '13px',
      fontFamily: 'sans-serif',
      fontWeight: '500',
      letterSpacing: '0.04em',
      pointerEvents: 'none',
      userSelect: 'none',
      textShadow: '0 1px 4px rgba(0,0,0,0.95)',
      background: 'rgba(0,0,0,0.45)',
      padding: '2px 8px',
      borderRadius: '4px',
      display: 'none',
      zIndex: '20',
    });
    el.appendChild(labelEl);

    // ─────────────────────────────────────────────────────────────────────────
    // ── Pointer-lock first-person controls ───────────────────────────────────
    // ─────────────────────────────────────────────────────────────────────────
    const keys = {};
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    let isLocked = false;

    // Single persistent Raycaster — reused for both hover (per-frame) and click
    const raycaster = new THREE.Raycaster();
    const CENTER = new THREE.Vector2(0, 0);
    let hoveredId = null; // track current hover to avoid redundant DOM updates

    const onKeyDown = e => { keys[e.code] = true; };
    const onKeyUp   = e => { keys[e.code] = false; };

    const onMouseMove = e => {
      if (!isLocked) return;
      const sens = 0.002;
      euler.y -= e.movementX * sens;
      euler.x -= e.movementY * sens;
      euler.x = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, euler.x));
      camera.quaternion.setFromEuler(euler);
    };

    const onLockChange = () => {
      isLocked = document.pointerLockElement === renderer.domElement;
      if (!isLocked) {
        crosshairEl.innerHTML = SVG_CROSS;
        labelEl.style.display = 'none';
        hoveredId = null;
      }
    };

    const onCanvasClick = () => {
      if (!isLocked) {
        renderer.domElement.requestPointerLock();
        return;
      }
      // Reuse the hover raycast result from last frame — if something is hovered, fire click
      raycaster.setFromCamera(CENTER, camera);
      const hits = raycaster.intersectObjects(interactiveMeshes, false);
      if (hits.length > 0 && hits[0].distance < 6) {
        const hitId = hits[0].object.name;
        if (hitId) onClickRef.current(hitId);
      }
    };

    renderer.domElement.addEventListener('click',  onCanvasClick);
    document.addEventListener('pointerlockchange', onLockChange);
    document.addEventListener('mousemove',         onMouseMove);
    document.addEventListener('keydown',           onKeyDown);
    document.addEventListener('keyup',             onKeyUp);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // ── Animation loop ────────────────────────────────────────────────────────
    const SPEED = 5;
    const moveDir = new THREE.Vector3();
    const clock   = new THREE.Clock();
    let animId;
    let elapsed = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const dt = clock.getDelta();
      elapsed += dt;

      // ── Movement ────────────────────────────────────────────────────────────
      if (isLocked) {
        const fwd  = (keys['KeyW'] || keys['ArrowUp'])    ? 1 : 0;
        const back = (keys['KeyS'] || keys['ArrowDown'])  ? 1 : 0;
        const left = (keys['KeyA'] || keys['ArrowLeft'])  ? 1 : 0;
        const rgt  = (keys['KeyD'] || keys['ArrowRight']) ? 1 : 0;

        if (fwd || back || left || rgt) {
          moveDir.set(rgt - left, 0, back - fwd).normalize().multiplyScalar(SPEED * dt);
          moveDir.applyEuler(new THREE.Euler(0, euler.y, 0, 'YXZ'));
          const nx = camera.position.x + moveDir.x;
          const nz = camera.position.z + moveDir.z;
          if (!collidesAt(colliders, nx, camera.position.z)) camera.position.x = nx;
          if (!collidesAt(colliders, camera.position.x, nz)) camera.position.z = nz;
        }

        // ── Per-frame hover raycast — same Raycaster, no extra cost ───────────
        raycaster.setFromCamera(CENTER, camera);
        const hoverHits = raycaster.intersectObjects(interactiveMeshes, false);
        const newId = (hoverHits.length > 0 && hoverHits[0].distance < 6)
          ? hoverHits[0].object.name
          : null;

        if (newId !== hoveredId) {
          hoveredId = newId;
          if (newId) {
            crosshairEl.innerHTML = SVG_HAND;
            labelEl.textContent = LABELS[newId] || newId;
            labelEl.style.display = 'block';
          } else {
            crosshairEl.innerHTML = SVG_CROSS;
            labelEl.style.display = 'none';
          }
        }
      }

      // ── Glow animation — identical sine wave for ALL 7 objects ───────────────
      // Period ~4.5 s, opacity range 0.04–0.10 — soft accent, never washes out object colour
      const glowOpacity = 0.04 + 0.06 * (0.5 + 0.5 * Math.sin((elapsed / 4.5) * Math.PI * 2));
      for (const gm of glowMeshes) {
        gm.material.opacity = glowOpacity;
      }

      renderer.render(scene, camera);
    };

    animate();
    if (onReadyRef.current) onReadyRef.current();

    return () => {
      cancelAnimationFrame(animId);
      document.exitPointerLock();
      renderer.domElement.removeEventListener('click',  onCanvasClick);
      document.removeEventListener('pointerlockchange', onLockChange);
      document.removeEventListener('mousemove',         onMouseMove);
      document.removeEventListener('keydown',           onKeyDown);
      document.removeEventListener('keyup',             onKeyUp);
      window.removeEventListener('resize',              onResize);
      if (el.contains(crosshairEl)) el.removeChild(crosshairEl);
      if (el.contains(labelEl))     el.removeChild(labelEl);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '100vh', cursor: 'none', background: '#1a1a2e' }}
    />
  );
}

