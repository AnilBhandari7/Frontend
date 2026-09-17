import { useNavigate } from "react-router-dom";

export default function GameIntroScreen() {
  const navigate = useNavigate();

  const S = {
    page:      { background: "var(--bg-primary)", minHeight: "100vh", color: "var(--text-primary)", display: "flex", flexDirection: "column" },
    nav:       { background: "var(--bg-panel)", borderBottom: "1px solid var(--border-subtle)", height: "60px", flexShrink: 0 },
    navLogo:   { fontSize: "16px", fontWeight: 700, letterSpacing: "0.04em" },
    navAmt:    { color: "var(--accent-safety)" },
    card:      { background: "var(--bg-panel)", border: "1px solid var(--border-subtle)", borderRadius: "12px", padding: "40px" },
    eyebrow:   { fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", color: "var(--accent-safety)", textTransform: "uppercase", marginBottom: "12px" },
    h1:        { fontSize: "36px", fontWeight: 800, marginBottom: "24px", lineHeight: 1.1 },
    briefP:    { fontSize: "17px", lineHeight: 1.65, color: "var(--text-secondary)", marginBottom: "16px" },
    paramsBox: { background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)", borderRadius: "8px", padding: "24px", marginBottom: "36px" },
    paramsH:   { fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "16px" },
    paramList: { listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" },
    paramLi:   { fontSize: "15px", color: "var(--text-primary)", display: "flex", gap: "10px" },
    paramKey:  { color: "var(--text-muted)", minWidth: "130px", fontSize: "14px" },
    paramVal:  { fontWeight: 600 },
    btnRow:    { display: "flex", gap: "14px", flexWrap: "wrap" },
  };

  return (
    <div style={S.page}>
      <nav style={S.nav}>
        <div className="pg-nav-inner">
          <div style={S.navLogo}>Safety<span style={S.navAmt}> Detective</span></div>
          <button onClick={() => navigate("/dashboard/case/001")} className="btn-secondary" style={{ padding: "7px 16px", fontSize: "13px" }}>← Back</button>
        </div>
      </nav>

      <div className="pg-body-narrow">
        <div style={S.card}>
          <div style={S.eyebrow}>Case File #001</div>
          <h1 style={S.h1}>Warehouse Slip Incident</h1>

          <p style={S.briefP}>
            A warehouse employee slipped near the loading dock this morning. No serious injury — but it could have been.
          </p>
          <p style={{ ...S.briefP, marginBottom: "32px" }}>
            Investigate the scene, find out what really happened, and figure out the root cause — not just what's sitting on the surface.
          </p>

          <div style={S.paramsBox}>
            <div style={S.paramsH}>Investigation Parameters</div>
            <ul style={S.paramList}>
              <li style={S.paramLi}><span style={S.paramKey}>Clues to find</span><span style={S.paramVal}>3</span></li>
              <li style={S.paramLi}><span style={S.paramKey}>Time limit</span><span style={S.paramVal}>3 minutes</span></li>
              <li style={S.paramLi}><span style={S.paramKey}>Pass threshold</span><span style={S.paramVal}>60 / 100 points</span></li>
              <li style={S.paramLi}><span style={S.paramKey}>Speed bonus</span><span style={S.paramVal}>+10 pts if under 2 minutes</span></li>
            </ul>
          </div>

          <div style={S.btnRow}>
            <button onClick={() => navigate("/game/play")} className="btn-primary" style={{ padding: "14px 32px", fontSize: "17px" }}>
              Enter Investigation
            </button>
            <button onClick={() => navigate("/game/help")} className="btn-secondary" style={{ padding: "14px 28px", fontSize: "16px" }}>
              How to Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
