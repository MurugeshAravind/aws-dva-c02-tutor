// ============================================================
// FILE: src/components/QuizRunner.tsx
//
// The question-answering engine, shared by Practice, Mock, and the
// missed-review screen. Handles selection, optional timer, grading,
// scaled-score results, and a per-domain breakdown. On submit it calls
// onFinish(correct, wrong, summary) so the parent can update progress.
// ============================================================

import { useState, useEffect } from "react";
import { Award, Clock, CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react";
import type { PreppedQuestion, Summary } from "../types";

type QuizRunnerProps = {
  questions: PreppedQuestion[];
  timed?: boolean;
  timeLimitSec?: number;
  scaled?: boolean;
  onExit: () => void;
  onFinish?: (correct: PreppedQuestion[], wrong: PreppedQuestion[], summary: Summary) => void;
};

export function QuizRunner({ questions, timed = false, timeLimitSec = 0, scaled = false, onExit, onFinish }: QuizRunnerProps) {
  const [answers, setAnswers] = useState<Record<string, Set<number>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [remaining, setRemaining] = useState(timeLimitSec);
  const [cur, setCur] = useState(0);

  useEffect(() => {
    if (!timed || submitted) return;
    if (remaining <= 0) { setSubmitted(true); return; }
    const t = setTimeout(() => setRemaining((r) => r - 1), 1000);
    return () => clearTimeout(t);
  }, [timed, remaining, submitted]);

  const isCorrect = (q: PreppedQuestion): boolean => {
    const sel = answers[q.id] || new Set<number>();
    const ci = q.options.map((o, i) => (o.correct ? i : -1)).filter((i) => i >= 0);
    return sel.size === ci.length && ci.every((i) => sel.has(i));
  };

  useEffect(() => {
    if (!submitted || !onFinish) return;
    const c = questions.filter(isCorrect);
    const w = questions.filter((q) => !isCorrect(q));
    const p = Math.round((c.length / questions.length) * 100);
    onFinish(c, w, { total: questions.length, correct: c.length, pct: p, scaled: Math.round(100 + (p / 100) * 900) });
  }, [submitted]);

  const toggle = (qid: string, oi: number, type: "single" | "multi") => {
    if (submitted) return;
    setAnswers((prev) => {
      const set = new Set<number>(prev[qid] || []);
      if (type === "single") { set.clear(); set.add(oi); } else { set.has(oi) ? set.delete(oi) : set.add(oi); }
      return { ...prev, [qid]: set };
    });
  };

  const correctCount = questions.filter(isCorrect).length;
  const pct = Math.round((correctCount / questions.length) * 100);
  const scaledScore = Math.round(100 + (pct / 100) * 900);

  const byDomain: Record<string, { c: number; t: number }> = {};
  questions.forEach((q) => {
    const d = q.domain || "—";
    byDomain[d] = byDomain[d] || { c: 0, t: 0 };
    byDomain[d].t++;
    if (isCorrect(q)) byDomain[d].c++;
  });

  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");

  // ---------- results ----------
  if (submitted) {
    return (
      <div className="space-y-5">
        <div className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-5">
          <div className="flex items-center gap-2 text-amber-400 mb-3"><Award size={18} /><span className="font-mono text-sm">RESULTS</span></div>
          {scaled ? (
            <div className="flex flex-wrap items-end gap-6">
              <div><div className="text-5xl font-mono font-bold text-neutral-50">{scaledScore}</div><div className="text-xs text-neutral-500 font-mono mt-1">scaled (100–1000)</div></div>
              <div className={`px-3 py-1 rounded font-mono text-sm font-bold ${scaledScore >= 720 ? "bg-green-500/15 text-green-400 border border-green-500/30" : "bg-red-500/15 text-red-400 border border-red-500/30"}`}>{scaledScore >= 720 ? "PASS ✓ (≥720)" : "FAIL ✗ (need 720)"}</div>
              <div className="font-mono text-sm text-neutral-400">{correctCount}/{questions.length} · {pct}%</div>
            </div>
          ) : (
            <div className="flex items-center gap-4"><div className="text-4xl font-mono font-bold text-neutral-50">{correctCount}/{questions.length}</div><div className="text-amber-400 font-mono text-lg">{pct}%</div></div>
          )}
          {Object.keys(byDomain).length > 1 && (
            <div className="mt-4 space-y-2">
              {Object.entries(byDomain).map(([d, v]) => (
                <div key={d} className="flex items-center gap-3 text-xs font-mono">
                  <span className="w-44 truncate text-neutral-400">{d}</span>
                  <div className="flex-1 h-2 bg-neutral-800 rounded overflow-hidden"><div className="h-full bg-amber-500" style={{ width: `${(v.c / v.t) * 100}%` }} /></div>
                  <span className="text-neutral-500 w-12 text-right">{v.c}/{v.t}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-4">
          {questions.map((q, qi) => {
            const sel = answers[q.id] || new Set<number>();
            const ok = isCorrect(q);
            return (
              <div key={q.id} className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-4">
                <div className="flex items-start gap-2 mb-3">
                  {ok ? <CheckCircle2 size={16} className="text-green-400 mt-0.5 shrink-0" /> : <AlertCircle size={16} className="text-red-400 mt-0.5 shrink-0" />}
                  <div className="text-sm text-neutral-200">{qi + 1}. {q.question}</div>
                </div>
                <div className="space-y-1.5 ml-6">
                  {q.options.map((o, oi) => {
                    const picked = sel.has(oi);
                    let cls = "border-neutral-800 text-neutral-400";
                    if (o.correct) cls = "border-green-500/40 bg-green-500/10 text-green-300";
                    else if (picked) cls = "border-red-500/40 bg-red-500/10 text-red-300";
                    return (
                      <div key={oi} className={`text-xs rounded border px-3 py-2 ${cls}`}>
                        <div className="flex items-center gap-2">{o.correct ? "✓" : picked ? "✗" : "·"} <span>{o.text}</span></div>
                        {(o.correct || picked) && o.explanation && <div className="mt-1 text-[11px] text-neutral-400 italic pl-4">{o.explanation}</div>}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <button onClick={onExit} className="font-mono text-sm flex items-center gap-2 text-amber-400 hover:text-amber-300"><ArrowLeft size={16} /> back to menu</button>
      </div>
    );
  }

  // ---------- in-progress ----------
  const q = questions[cur];
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between font-mono text-sm">
        <span className="text-neutral-400">Q {cur + 1} <span className="text-neutral-600">/ {questions.length}</span></span>
        {timed && <span className={`flex items-center gap-1.5 ${remaining < 60 ? "text-red-400" : "text-amber-400"}`}><Clock size={14} /> {mm}:{ss}</span>}
      </div>
      <div className="h-1 bg-neutral-800 rounded"><div className="h-full bg-amber-500 rounded transition-all" style={{ width: `${((cur + 1) / questions.length) * 100}%` }} /></div>

      <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
        <div className="flex items-center gap-2 mb-3">
          {q.domain && <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-400">{q.domain}</span>}
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${q.type === "multi" ? "bg-amber-500/15 text-amber-400" : "bg-neutral-800 text-neutral-500"}`}>{q.type === "multi" ? "MULTI-SELECT" : "SINGLE"}</span>
        </div>
        <div className="text-neutral-100 mb-4">{q.question}</div>
        <div className="space-y-2">
          {q.options.map((o, oi) => {
            const picked = (answers[q.id] || new Set<number>()).has(oi);
            return (
              <button key={oi} onClick={() => toggle(q.id, oi, q.type)} className={`w-full text-left text-sm rounded border px-3 py-2.5 transition-colors ${picked ? "border-amber-500 bg-amber-500/10 text-amber-100" : "border-neutral-800 text-neutral-300 hover:border-neutral-600"}`}>
                <span className="font-mono text-neutral-500 mr-2">{String.fromCharCode(65 + oi)}</span>{o.text}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button disabled={cur === 0} onClick={() => setCur((c) => c - 1)} className="font-mono text-sm text-neutral-400 disabled:opacity-30 hover:text-neutral-200">← prev</button>
        {cur < questions.length - 1 ? (
          <button onClick={() => setCur((c) => c + 1)} className="font-mono text-sm px-4 py-2 rounded bg-neutral-800 text-neutral-100 hover:bg-neutral-700">next →</button>
        ) : (
          <button onClick={() => setSubmitted(true)} className="font-mono text-sm px-4 py-2 rounded bg-amber-500 text-neutral-950 font-bold hover:bg-amber-400">submit</button>
        )}
      </div>
      <button onClick={onExit} className="font-mono text-xs text-neutral-600 hover:text-neutral-400">✕ abort</button>
    </div>
  );
}