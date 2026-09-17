import { useEffect, useRef } from "react";
import * as THREE from "three";

/*
  HazardCutscene — Three.js 3D scene.
  A low-poly warehouse worker (hi-vis vest + hard hat) walks toward the loading
  dock and slips on a wet patch. Fixed cinematic camera. ~4.5 s, then onComplete.

  ROOT CAUSE of blank-screen bug in previous version:
    renderer.setSize(el.clientWidth, el.clientHeight) — the mount div is
    position:fixed/inset:0 which may report 0×0 before browser paint.
    FIX: use window.innerWidth / window.innerHeight, which are always valid.
*/

// ── Palette (matches WarehouseScene) ─────────────────────────────────────────
const C = {
  floor:   0x8a7a6a,
  wall:    0x6b6258,
  ceiling: 0x4a4540,
  shelf:   0x5c4a32,
  box:     0x8b6f47,
  boxAlt:  0x7a5c3a,
  pillar:  0x706050,
  ramp:    0x706050,
  sky:     0x1a1a2e,
  puddle:  0x5a8faa,
  // Worker
  skin:    0xd4956a,
  trouser: 0x3a4a5a,
  boot:    0x2a2820,
  vest:    0xf5a623,   // hi-vis orange
  helmet:  0xf5c518,   // hard hat yellow
  shirt:   0xd0d0d0,
};

function mkBox(w, h, d, color, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshLambertMaterial({ color })
  );
  m.position.set(x, y, z);
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
  return m;
}

// ── Worker — low-poly humanoid with hi-vis vest and hard hat ──────────────────
function buildWorker() {
  const root = new THREE.Group();

  // ── Torso: shirt base + vest overlay strips ───────────────────────────────
  const torso = new THREE.Group();
  torso.position.y = 1.02;

  torso.add(mkBox(0.38, 0.50, 0.24, C.shirt));          // shirt body
  torso.add(mkBox(0.38, 0.50, 0.02, C.vest, 0, 0,  0.13)); // front vest face
  torso.add(mkBox(0.05, 0.50, 0.24, C.vest, -0.165, 0, 0)); // left strip
  torso.add(mkBox(0.05, 0.50, 0.24, C.vest,  0.165, 0, 0)); // right strip
  // Reflective band across torso
  torso.add(mkBox(0.38, 0.05, 0.26, 0xf0e040, 0, 0.10, 0));
  root.add(torso);

  // ── Head ─────────────────────────────────────────────────────────────────
  const head = new THREE.Group();
  head.position.y = 1.44;
  head.add(mkBox(0.30, 0.28, 0.26, C.skin)); // face/head
  // Hard hat brim
  head.add(mkCyl(0.22, 0.22, 0.04, 8, C.helmet, 0, 0.16, 0));
  // Hard hat dome
  head.add(mkCyl(0.14, 0.21, 0.14, 8, C.helmet, 0, 0.26, 0));
  root.add(head);

  // ── Arms — pivot at shoulder, arms hang at sides ──────────────────────────
  const makeArm = (side) => {
    const g = new THREE.Group();
    g.position.set(side * 0.28, 1.22, 0); // shoulder pivot
    g.add(mkBox(0.11, 0.30, 0.12, C.vest,  0, -0.15, 0)); // upper arm (vest colour)
    g.add(mkBox(0.10, 0.27, 0.10, C.skin,  0, -0.43, 0)); // forearm
    return g;
  };
  const leftArm  = makeArm(-1);
  const rightArm = makeArm( 1);
  root.add(leftArm, rightArm);

  // ── Legs — pivot at hip ───────────────────────────────────────────────────
  const makeLeg = (side) => {
    const g = new THREE.Group();
    g.position.set(side * 0.11, 0.80, 0); // hip pivot
    g.add(mkBox(0.16, 0.36, 0.16, C.trouser, 0, -0.18, 0)); // thigh
    g.add(mkBox(0.14, 0.32, 0.14, C.trouser, 0, -0.52, 0)); // shin
    g.add(mkBox(0.16, 0.12, 0.24, C.boot,    0, -0.72, 0.04)); // boot
    return g;
  };
  const leftLeg  = makeLeg(-1);
  const rightLeg = makeLeg( 1);
  root.add(leftLeg, rightLeg);

  return { root, torso, head, leftArm, rightArm, leftLeg, rightLeg };
}

// ── Warehouse backdrop slice ───────────────────────────────────────────────────
function buildBackdrop(scene) {
  // Floor — large enough so no edges visible
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(22, 18),
    new THREE.MeshLambertMaterial({ color: C.floor })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(0, 0, -1);
  floor.receiveShadow = true;
  scene.add(floor);

  // Back wall
  const bw = new THREE.Mesh(
    new THREE.BoxGeometry(22, 6, 0.2),
    new THREE.MeshLambertMaterial({ color: C.wall })
  );
  bw.position.set(0, 3, -10);
  scene.add(bw);

  // Left side wall
  const lw = new THREE.Mesh(
    new THREE.BoxGeometry(0.2, 6, 18),
    new THREE.MeshLambertMaterial({ color: C.wall })
  );
  lw.position.set(-11, 3, -1);
  scene.add(lw);

  // Ceiling
  const ceil = new THREE.Mesh(
    new THREE.PlaneGeometry(22, 18),
    new THREE.MeshLambertMaterial({ color: C.ceiling })
  );
  ceil.rotation.x = Math.PI / 2;
  ceil.position.set(0, 5.5, -1);
  scene.add(ceil);

  // Loading dock ramp on the right
  scene.add(mkBox(5, 0.3, 4,  C.ramp,  7.5, 0.15, 4));
  // Dock door frame
  scene.add(mkBox(0.25, 3.5, 0.25, C.pillar,  5, 1.75, 7.9));
  scene.add(mkBox(0.25, 3.5, 0.25, C.pillar, 10, 1.75, 7.9));
  scene.add(mkBox(5.25, 0.25, 0.25, C.pillar, 7.5, 3.5, 7.9));

  // Pillar in view
  scene.add(mkBox(0.3, 5.5, 0.3, C.pillar, 0, 2.75, -6));

  // Two shelf units on the left for context
  const addShelf = (x, z) => {
    const g = new THREE.Group();
    // uprights
    g.add(mkBox(0.1, 4, 0.1, C.shelf, -0.85, 2, 0));
    g.add(mkBox(0.1, 4, 0.1, C.shelf,  0.85, 2, 0));
    // shelves
    for (const h of [0.45, 1.35, 2.30, 3.25]) {
      g.add(mkBox(1.8, 0.07, 0.85, C.shelf, 0, h, 0));
    }
    // boxes on shelves
    g.add(mkBox(0.78, 0.55, 0.72, C.box,    0, 0.72, 0));
    g.add(mkBox(0.78, 0.55, 0.72, C.boxAlt, 0, 1.63, 0));
    g.position.set(x, 0, z);
    scene.add(g);
  };
  addShelf(-8, -3);
  addShelf(-8, -7);

  // Boxes stacked near dock
  scene.add(mkBox(0.85, 0.68, 0.85, C.box,    6.5, 0.34,  2.5));
  scene.add(mkBox(0.85, 0.68, 0.85, C.boxAlt, 6.5, 1.02,  2.5));
  scene.add(mkBox(0.85, 0.68, 0.85, C.box,    6.5, 1.70,  2.5));

  // ── LEAK CLUSTER — matches investigation scene layout exactly ─────────────
  // Container: x=2, z=-1, on the bottom shelf of a full-height rack unit.
  // Puddle: x=0.5, z=-1 — 1.5m away horizontally (same offset as investigation scene).
  // Two-segment drip: vertical from container dent down to floor, then angled floor
  // streak toward puddle.  Worker walk ends at x=0.5 (the puddle), not x=2 (container).

  // Full-height shelf unit — same proportions as addShelf above
  const leakShelf = new THREE.Group();
  leakShelf.add(mkBox(0.1, 4.2, 0.1, C.shelf, -0.9, 2.1, 0));
  leakShelf.add(mkBox(0.1, 4.2, 0.1, C.shelf,  0.9, 2.1, 0));
  for (const sh of [0.5, 1.4, 2.4, 3.4]) {
    leakShelf.add(mkBox(2.0, 0.07, 0.85, C.shelf, 0, sh, 0));
  }
  leakShelf.position.set(2, 0, -1);
  scene.add(leakShelf);

  // Wet patch — offset 1.5m to the left of the rack
  const puddle = new THREE.Mesh(
    new THREE.CylinderGeometry(0.62, 0.70, 0.03, 14),
    new THREE.MeshLambertMaterial({ color: C.puddle, transparent: true, opacity: 0.82 })
  );
  puddle.position.set(0, 0.015, -1);
  scene.add(puddle);

  // Cracked container — rectangular box crate, same as investigation scene
  // Bottom shelf top-face y=0.5; container height=0.80; centre y=0.90
  const crate = new THREE.Group();
  crate.add(mkBox(0.70, 0.80, 0.65, 0x7a8070));        // body
  crate.add(mkBox(0.74, 0.05, 0.69, 0x5a6258, 0, 0.425, 0)); // lid
  crate.add(mkBox(0.28, 0.30, 0.06, 0x4a5048, 0.10, -0.05, 0.32)); // dent panel
  const bDrip1 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.014, 0.022, 0.28, 5),
    new THREE.MeshLambertMaterial({ color: 0x5a7a8a, transparent: true, opacity: 0.9 })
  );
  bDrip1.position.set(0.12, -0.26, 0.35);
  crate.add(bDrip1);
  crate.position.set(2, 0.90, -1);
  crate.rotation.y = 0.3;
  scene.add(crate);

  // Vertical drip — from dent side of container down to floor
  // Container dent at local (0.10, -0.05, 0.32) → world approx (2.12, 0.85, -0.68)
  const DRIP_WX = 2.12, DRIP_WZ = -0.68;
  const vDripH = 0.90 - 0.40; // from mid-dent height down toward floor
  const vDrip = new THREE.Mesh(
    new THREE.CylinderGeometry(0.016, 0.026, vDripH, 6),
    new THREE.MeshLambertMaterial({ color: 0x5a7a8a, transparent: true, opacity: 0.88 })
  );
  vDrip.position.set(DRIP_WX, vDripH / 2 + 0.015, DRIP_WZ);
  scene.add(vDrip);

  // Horizontal floor streak from drip-landing toward puddle at (0.5, 0, -1)
  const fx1 = DRIP_WX, fz1 = DRIP_WZ;
  const fx2 = 0.7, fz2 = -1.0; // stop just short of puddle centre
  const fLen   = Math.sqrt((fx2-fx1)**2 + (fz2-fz1)**2);
  const fAngle = Math.atan2(fz2 - fz1, fx2 - fx1);
  const fMidX  = (fx1 + fx2) / 2;
  const fMidZ  = (fz1 + fz2) / 2;
  const hDrip = new THREE.Mesh(
    new THREE.CylinderGeometry(0.022, 0.032, fLen, 6),
    new THREE.MeshLambertMaterial({ color: 0x5a7a8a, transparent: true, opacity: 0.72 })
  );
  hDrip.rotation.z = Math.PI / 2;
  hDrip.rotation.y = -fAngle;
  hDrip.position.set(fMidX, 0.016, fMidZ);
  scene.add(hDrip);

  // Pallet on floor
  const pal = new THREE.Group();
  pal.add(mkBox(1.8, 0.1, 1.2, C.pillar, 0, 0.05, 0));
  pal.position.set(-4, 0, 2);
  scene.add(pal);
}


// ── Component ─────────────────────────────────────────────────────────────────
export default function HazardCutscene({ onComplete }) {
  const mountRef = useRef(null);
  const doneRef  = useRef(false);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    // ── Size: use window dimensions — ALWAYS non-zero, unlike el.client* ──────
    const W = window.innerWidth;
    const H = window.innerHeight;

    // ── Renderer ─────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.shadowMap.enabled = true;
    el.appendChild(renderer.domElement);

    // ── Scene ────────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(C.sky);
    scene.fog = new THREE.Fog(C.sky, 18, 35);

    // ── Lights ───────────────────────────────────────────────────────────────
    // Strong ambient so nothing is pitch-black regardless of shadow direction
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const sun = new THREE.DirectionalLight(0xfffbe8, 1.1);
    sun.position.set(4, 10, 6);
    sun.castShadow = true;
    scene.add(sun);
    // Warm fill from the dock door opening
    const fill = new THREE.PointLight(0xffe0a0, 0.8, 22);
    fill.position.set(8, 3, 5);
    scene.add(fill);
    // Cool overhead strip
    const strip = new THREE.PointLight(0xe8f0ff, 0.6, 18);
    strip.position.set(0, 5, 0);
    scene.add(strip);

    // ── Backdrop ─────────────────────────────────────────────────────────────
    buildBackdrop(scene);

    // ── Worker ───────────────────────────────────────────────────────────────
    const { root, leftLeg, rightLeg, leftArm, rightArm } = buildWorker();
    // Start: left of the puddle, walking right
    root.position.set(-5, 0, -1);
    root.rotation.y = -Math.PI / 2; // facing +X (right)
    scene.add(root);

    // ── Camera — fixed side-angle view (slightly high, looking along walk path)
    const camera = new THREE.PerspectiveCamera(52, W / H, 0.1, 40);
    camera.position.set(-7, 2.8, 5.5);
    camera.lookAt(1, 0.8, -0.5);

    // ── Fade overlay ─────────────────────────────────────────────────────────
    const fadeEl = document.createElement("div");
    Object.assign(fadeEl.style, {
      position: "absolute", inset: "0",
      background: "#000",
      opacity: "0",
      pointerEvents: "none",
      transition: "opacity 0.8s ease-in",
      zIndex: "10",
    });
    el.appendChild(fadeEl);

    // ── Animation ─────────────────────────────────────────────────────────────
    const WALK_DUR  = 2.2; // seconds walking
    const SLIP_DUR  = 1.2; // seconds falling
    const FADE_AT   = 3.6; // seconds — start fade
    const DONE_AT   = 4.5; // seconds — call onComplete

    const WALK_DIST = 5.0; // metres walked: from x=-5 to x=0 (the puddle position)
    const WALK_END_X = -5 + WALK_DIST; // 0 — lands on the puddle, clear of container at x=2

    const clock  = new THREE.Clock();
    let elapsed  = 0;
    let phase    = "walk";
    let fadeTrig = false;
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);
      elapsed += dt;

      if (phase === "walk") {
        const t = Math.min(elapsed / WALK_DUR, 1);

        // Move forward (+X)
        root.position.x = -5 + t * WALK_DIST;

        // Leg swing
        const swing = Math.sin(elapsed * 9) * 0.60;
        leftLeg.rotation.x  =  swing;
        rightLeg.rotation.x = -swing;
        leftArm.rotation.x  = -swing * 0.45;
        rightArm.rotation.x =  swing * 0.45;

        if (t >= 1) {
          phase = "slip";
          // Freeze limbs in a stumble pose
          leftLeg.rotation.x  =  0.5;
          rightLeg.rotation.x = -0.25;
          leftArm.rotation.x  = -1.1;
          rightArm.rotation.x = -0.8;
        }
      }

      if (phase === "slip") {
        const st = Math.min((elapsed - WALK_DUR) / SLIP_DUR, 1);
        const eased = st * st; // ease-in so fall accelerates

        // Rotate the character backward (Z axis).
        root.rotation.z = eased * (Math.PI / 2 + 0.08);

        // Compensating y-lift: the root pivot is at foot level (y=0), but the
        // body has depth ~0.24m. At full 90° rotation the body lies horizontal;
        // without a lift the half-depth (0.12m) embeds below the floor.
        // Raising by eased * 0.12 keeps the fallen character fully above floor.
        root.position.y = eased * 0.12;

        // Feet slide very slightly forward as weight shifts
        root.position.x = WALK_END_X + eased * 0.35;

        if (st >= 1) phase = "done";
      }

      // Fade out
      if (elapsed >= FADE_AT && !fadeTrig) {
        fadeTrig = true;
        fadeEl.style.opacity = "1";
      }

      if (elapsed >= DONE_AT && !doneRef.current) {
        doneRef.current = true;
        onComplete();
      }

      renderer.render(scene, camera);
    };

    // Force one render immediately to confirm scene is visible before animation
    renderer.render(scene, camera);
    animate();

    // ── Resize ───────────────────────────────────────────────────────────────
    const onResize = () => {
      const nW = window.innerWidth;
      const nH = window.innerHeight;
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
      renderer.setSize(nW, nH);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
      if (el.contains(fadeEl)) el.removeChild(fadeEl);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        // Explicit w/h as a fallback belt-and-braces guarantee
        width:  "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    />
  );
}
