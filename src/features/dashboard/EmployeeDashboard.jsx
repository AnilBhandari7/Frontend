import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import client from "../../api/client";

/*
  EmployeeDashboard — case list screen.
  Shows one tile per case. Clicking a tile navigates to /dashboard/case/:id.
  Locking structure is in place: cases unlock sequentially once the previous
  is passed. With only one case today, nothing is actually locked.
*/
export default function EmployeeDashboard() {
  const { user, logout } = useAuth();
  const [data, setData]   = useState(null);
  const navigate           = useNavigate();

  useEffect(() => {
    client.get("/employee/history")
      .then(res => setData(res.data))
      .catch(console.error);
  }, []);

  const attempts          = data?.attempts || [];
  const completedAttempts = attempts.filter(a => a.status === "completed");
  const bestScore         = completedAttempts.length > 0 ? Math.max(...completedAttempts.map(a => a.score)) : null;
  const everPassed        = completedAttempts.some(a => a.passed);

  // Derive per-case status label + colour for the tile badge
  const caseStatus = () => {
    if (completedAttempts.length === 0) return { label: "Not started", color: "var(--text-muted)", cls: null };
    if (everPassed) return { label: "Passed",       color: "var(--accent-success)", cls: "badge-pass" };
    return              { label: "In progress",   color: "var(--accent-warning)", cls: null };
  };
  const status = caseStatus();

  // One case definition — extend this array when a second case exists.
  // locked: true if the prerequisite case has not been passed.
  // With only one case, locked is always false.
  const cases = [
    {
      id:          "001",
      seq:         1,
      eyebrow:     "Case File #001",
      title:       "Warehouse Slip Incident",
      description: "A worker slips near the loading dock. Investigate the scene, find the evidence, and trace the root cause using the 5 Whys.",
      tags:        ["3D Investigation", "5 Whys", "Workplace Safety"],
      locked:      false,   // no prerequisite for the first case
    },
  ];

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh", color: "var(--text-primary)" }}>

      {/* Nav */}
      <nav style={{ background: "var(--bg-panel)", borderBottom: "1px solid var(--border-subtle)", height: "60px" }}>
        <div className="pg-nav-inner">
          <div style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "0.04em" }}>
            Safety<span style={{ color: "var(--accent-safety)" }}> Detective</span>
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center", fontSize: "14px", color: "var(--text-secondary)" }}>
            <span>{user?.name}</span>
            <button onClick={() => { logout(); navigate("/"); }} className="btn-secondary" style={{ padding: "7px 16px", fontSize: "13px" }}>Log Out</button>
          </div>
        </div>
      </nav>

      <div className="pg-body">
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "6px" }}>
          Employee Dashboard
        </div>
        <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "40px" }}>
          Welcome back, {user?.name}
        </h1>

        {/* Case list */}
        <div style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.10em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "16px" }}>
          Your Cases
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {cases.map(c => {
            const isLocked = c.locked;

            return (
              <div
                key={c.id}
                onClick={() => !isLocked && navigate(`/dashboard/case/${c.id}`)}
                style={{
                  background: "var(--bg-panel)",
                  border: `1px solid ${isLocked ? "var(--border-subtle)" : "var(--border-subtle)"}`,
                  borderRadius: "12px",
                  padding: "28px 32px",
                  cursor: isLocked ? "not-allowed" : "pointer",
                  opacity: isLocked ? 0.5 : 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "24px",
                  flexWrap: "wrap",
                  transition: "border-color 0.15s, background 0.15s",
                }}
                onMouseEnter={ev => {
                  if (!isLocked) ev.currentTarget.style.borderColor = "var(--border-strong)";
                }}
                onMouseLeave={ev => {
                  ev.currentTarget.style.borderColor = "var(--border-subtle)";
                }}
              >
                {/* Left: case info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", color: "var(--accent-safety)", textTransform: "uppercase", marginBottom: "6px" }}>
                    {isLocked ? "🔒 Locked" : c.eyebrow}
                  </div>
                  <div style={{ fontSize: "20px", fontWeight: 700, marginBottom: "6px" }}>{c.title}</div>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.55, marginBottom: "14px", maxWidth: "560px" }}>
                    {c.description}
                  </p>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {c.tags.map(t => (
                      <span key={t} style={{
                        background: "var(--bg-elevated)", color: "var(--text-secondary)",
                        border: "1px solid var(--border-subtle)", padding: "3px 10px",
                        borderRadius: "999px", fontSize: "12px", fontWeight: 500,
                      }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Right: status + chevron */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px", flexShrink: 0 }}>
                  {status.cls ? (
                    <span className={status.cls}>{status.label}</span>
                  ) : (
                    <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", color: status.color, textTransform: "uppercase" }}>
                      {status.label}
                    </span>
                  )}
                  {!isLocked && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
