import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HazardCutscene   from "./HazardCutscene";
import BriefingOverlay  from "./BriefingOverlay";
import WarehouseScene   from "./WarehouseScene";
import WhyChain         from "./WhyChain";
import useGameSession   from "./useGameSession";

/*
  Phase flow:
  "cutscene" → "briefing" → "exploring" → "clue-complete" → "why-chain" → "finished"

  "clue-complete" is a ~2 s transient: shows the transition message,
  releases the pointer lock so the cursor is free before the first Why
  question renders, then flips to "why-chain".

  Timer starts only when player dismisses briefing (phase becomes "exploring").
  Hotspots are only clickable during "exploring" and "why-chain" phases.
*/
export default function InvestigationScreen() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState("cutscene");
  const feedbackTimerRef  = useRef(null);
  const clueTransitionRef = useRef(false); // guard: fire transition once only

  const {
    attemptId, incident, cluesFound, runningScore,
    timeLeft, timerActive,
    feedback, clearFeedback,
    whyStep, whyDone, lastResult, currentWhyQuestion,
    startTimer, stopTimer,
    handleHotspotClick, submitWhyStep, finishGame,
    finishCalledRef,
    initLoading, initError,
  } = useGameSession();

  // ── Cutscene done ─────────────────────────────────────────────────────────
  const onCutsceneDone = useCallback(() => setPhase("briefing"), []);

  // ── Briefing dismissed → start exploring + timer ──────────────────────────
  const onBeginInvestigation = useCallback(() => {
    setPhase("exploring");
    startTimer();
  }, [startTimer]);

  // ── Effect 1: enter clue-complete phase + release pointer lock ───────────
  // Depends on [cluesFound, phase] to detect the moment exploration ends.
  // Does NOT start the timer here — that lives in Effect 2, which has a
  // stable dependency array and won't be torn down by its own state change.
  useEffect(() => {
    if (cluesFound >= 3 && phase === "exploring" && !clueTransitionRef.current) {
      clueTransitionRef.current = true;
      setPhase("clue-complete");
      try { document.exitPointerLock(); } catch (_) {}
    }
  }, [cluesFound, phase]);

  // ── Effect 2: delayed advance from clue-complete → why-chain ─────────────
  // Depends ONLY on [phase]. When phase becomes "clue-complete", starts a
  // 2-second timer then flips to "why-chain". Because this effect's deps
  // don't change while the timer is running, React never cleans it up early.
  useEffect(() => {
    if (phase === "clue-complete") {
      const t = setTimeout(() => setPhase("why-chain"), 2000);
      return () => clearTimeout(t);
    }
  }, [phase]);

  // ── Timer expired ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (timeLeft === 0 && timerActive && !finishCalledRef.current) {
      stopTimer();
      finishGame(180, true).then(result => {
        if (result) navigate("/game/result", { state: { result } });
      });
    }
  }, [timeLeft, timerActive, finishCalledRef, stopTimer, finishGame, navigate]);

  // ── Why chain complete → finish ───────────────────────────────────────────
  useEffect(() => {
    if (whyDone && phase === "why-chain" && !finishCalledRef.current) {
      const elapsed = 180 - timeLeft;
      setTimeout(() => {
        finishGame(elapsed, false).then(result => {
          if (result) navigate("/game/result", { state: { result } });
        });
      }, 1800);
    }
  }, [whyDone, phase, timeLeft, finishCalledRef, finishGame, navigate]);

  // ── Auto-dismiss feedback panel ───────────────────────────────────────────
  useEffect(() => {
    if (feedback) {
      clearTimeout(feedbackTimerRef.current);
      feedbackTimerRef.current = setTimeout(clearFeedback, 3500);
    }
    return () => clearTimeout(feedbackTimerRef.current);
  }, [feedback, clearFeedback]);

  // ── Hotspot click (only active during exploring / why-chain) ─────────────
  const onHotspotClick = useCallback((id) => {
    if (phase !== "exploring" && phase !== "why-chain") return;
    handleHotspotClick(id);
  }, [phase, handleHotspotClick]);

  // ── Timer formatting ──────────────────────────────────────────────────────
  const formatTime    = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  const timerUrgent   = timeLeft <= 30;
  const timerWarning  = !timerUrgent && timeLeft <= 60;

  // ── Feedback panel content ────────────────────────────────────────────────
  const getFeedbackMeta = (fb) => {
    if (!fb) return null;
    if (fb.alreadyFound) {
      return { label: "ALREADY LOGGED", labelColor: "var(--text-muted)", accent: "var(--border-strong)", delta: null };
    }
    if (fb.isDecoy) {
      return {
        label: "IRRELEVANT EVIDENCE",
        labelColor: "var(--accent-danger)",
        accent: "rgba(239,68,68,0.25)",
        delta: fb.pointDelta !== 0 ? `${fb.pointDelta}` : null,
      };
    }
    return {
      label: "EVIDENCE LOGGED",
      labelColor: "var(--accent-success)",
      accent: "rgba(74,222,128,0.20)",
      delta: fb.pointDelta !== undefined ? `+${fb.pointDelta}` : null,
    };
  };

  const fbMeta = getFeedbackMeta(feedback);

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", background: "#0f0f13", overflow: "hidden" }}>

      {/* ── Cutscene ──────────────────────────────────────────────────────── */}
      {phase === "cutscene" && <HazardCutscene onComplete={onCutsceneDone} />}

      {/* ── Briefing overlay ──────────────────────────────────────────────── */}
      {phase === "briefing" && (
        incident ? (
          <BriefingOverlay briefing={incident.briefing} onBegin={onBeginInvestigation} />
        ) : initError ? (
          /* Init failed — show error + retry */
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "var(--bg-primary)", zIndex: 300,
          }}>
            <div style={{
              maxWidth: "420px", width: "90%", textAlign: "center",
              background: "var(--bg-panel)", border: "1px solid rgba(239,68,68,0.30)",
              borderRadius: "12px", padding: "40px 32px",
            }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", color: "var(--accent-danger)", textTransform: "uppercase", marginBottom: "14px" }}>
                Load Error
              </div>
              <p style={{ fontSize: "15px", color: "var(--text-secondary)", marginBottom: "28px", lineHeight: 1.5 }}>
                {initError}
              </p>
              <button
                className="btn-primary"
                onClick={() => window.location.reload()}
                style={{ padding: "12px 32px", fontSize: "15px" }}
              >
                Retry
              </button>
            </div>
          </div>
        ) : (
          /* Still loading — show spinner text */
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "var(--bg-primary)", zIndex: 300,
          }}>
            <p style={{ color: "var(--text-secondary)", fontSize: "16px", letterSpacing: "0.04em" }}>
              Loading investigation…
            </p>
          </div>
        )
      )}

      {/* ── 3D Warehouse (mounted once, stays mounted) ────────────────────── */}
      {(phase === "exploring" || phase === "clue-complete" || phase === "why-chain" || phase === "finished") && (
        <WarehouseScene
          onHotspotClick={onHotspotClick}
          onReady={() => {}}
        />
      )}

      {/* ── HUD ───────────────────────────────────────────────────────────── */}
      {(phase === "exploring" || phase === "clue-complete" || phase === "why-chain") && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          padding: "14px 20px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          zIndex: 50,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, transparent 100%)",
          pointerEvents: "none",
        }}>
          {/* Left: timer + score */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {/* Timer chip */}
            <div style={{
              display: "flex", alignItems: "center", gap: "6px",
              background: timerUrgent  ? "rgba(239,68,68,0.18)"  :
                          timerWarning ? "rgba(249,115,22,0.15)"  : "rgba(255,255,255,0.08)",
              border: `1px solid ${timerUrgent  ? "rgba(239,68,68,0.55)"  :
                                   timerWarning ? "rgba(249,115,22,0.45)" : "rgba(255,255,255,0.15)"}`,
              padding: "6px 14px", borderRadius: "999px",
              fontSize: "14px", fontWeight: 700,
              color: timerUrgent  ? "var(--accent-danger)"  :
                     timerWarning ? "var(--accent-warning)" : "var(--text-primary)",
              backdropFilter: "blur(4px)",
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              {formatTime(timeLeft)}
            </div>
            {/* Score chip */}
            <div style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              padding: "6px 14px", borderRadius: "999px",
              fontSize: "14px", fontWeight: 600,
              color: "var(--text-primary)",
              backdropFilter: "blur(4px)",
            }}>
              {runningScore} pts
            </div>
          </div>

          {/* Right: clue counter */}
          <div style={{
            display: "flex", alignItems: "center", gap: "6px",
            background: cluesFound >= 3 ? "rgba(74,222,128,0.15)" : "rgba(255,255,255,0.08)",
            border: `1px solid ${cluesFound >= 3 ? "rgba(74,222,128,0.40)" : "rgba(255,255,255,0.15)"}`,
            padding: "6px 14px", borderRadius: "999px",
            fontSize: "14px", fontWeight: 600,
            color: cluesFound >= 3 ? "var(--accent-success)" : "var(--text-primary)",
            backdropFilter: "blur(4px)",
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            Evidence {cluesFound} / 3
          </div>
        </div>
      )}

      {/* ── Controls hint ─────────────────────────────────────────────────── */}
      {phase === "exploring" && !timerActive === false && (
        <div style={{
          position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.38)", fontSize: "12px", pointerEvents: "none",
          zIndex: 50, letterSpacing: "0.04em",
          textShadow: "0 1px 4px rgba(0,0,0,0.8)",
        }}>
          Click to lock cursor · WASD to move · Mouse to look · Click objects to investigate
        </div>
      )}

      {/* ── Evidence feedback panel ───────────────────────────────────────── */}
      {feedback && fbMeta && (
        <div style={{
          position: "absolute",
          bottom: "72px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(420px, 90vw)",
          background: "rgba(15,15,19,0.94)",
          border: `1px solid ${fbMeta.accent}`,
          borderRadius: "10px",
          padding: "16px 20px",
          zIndex: 200,
          pointerEvents: "none",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
        }}>
          {/* Header row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <div style={{
              fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em",
              color: fbMeta.labelColor, textTransform: "uppercase",
            }}>
              {fbMeta.label}
            </div>
            {fbMeta.delta && (
              <div style={{
                fontSize: "14px", fontWeight: 800,
                color: feedback.isPositive ? "var(--accent-success)" : "var(--accent-danger)",
              }}>
                {fbMeta.delta} pts
              </div>
            )}
          </div>
          {/* Message */}
          <div style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.55 }}>
            {feedback.message}
          </div>
        </div>
      )}

      {/* ── Clue-complete transition overlay ─────────────────────────────── */}
      {phase === "clue-complete" && (
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(0,0,0,0.65)",
          zIndex: 150,
          pointerEvents: "none",
        }}>
          <div style={{
            background: "rgba(15,15,19,0.92)",
            border: "1px solid rgba(74,222,128,0.30)",
            borderRadius: "12px",
            padding: "32px 48px",
            textAlign: "center",
            backdropFilter: "blur(16px)",
            boxShadow: "0 12px 48px rgba(0,0,0,0.7)",
          }}>
            <div style={{
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em",
              color: "var(--accent-success)", textTransform: "uppercase",
              marginBottom: "14px",
            }}>
              All Evidence Logged
            </div>
            <div style={{
              fontSize: "20px", fontWeight: 700,
              color: "var(--text-primary)", lineHeight: 1.4,
            }}>
              All clues found — preparing<br />your questions…
            </div>
          </div>
        </div>
      )}

      {/* ── 5-Why chain overlay ───────────────────────────────────────────── */}
      {phase === "why-chain" && !whyDone && currentWhyQuestion && (
        <WhyChain
          question={currentWhyQuestion}
          totalSteps={5}
          onSubmit={submitWhyStep}
          lastResult={lastResult}
        />
      )}

    </div>
  );
}
