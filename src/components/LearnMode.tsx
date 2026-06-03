// ============================================================
// FILE: src/components/LearnMode.tsx
//
// Socratic, mastery-gated study flow for one domain:
// checklist sidebar -> concept explanation -> restate (active recall)
// -> per-concept quiz. You can't advance until all 3 questions are correct.
// Reports wrong answers up via onResult so the missed pool stays in sync.
// ============================================================

import { useState } from "react";
import { ChevronRight, CheckCircle2, Circle, ArrowLeft, RotateCcw, Brain, Award, Zap, AlertCircle } from "lucide-react";
import { conceptQuestions } from "../lib/questions";
import type { Domain, Mastered, PreppedQuestion } from "../types";

type LearnModeProps = {
  domain: Domain;
  mastered: Mastered;
  onMaster: (conceptName: string) => void;
  onResult: (correct: PreppedQuestion[], wrong: PreppedQuestion[]) => void;
  onExit: () => void;
};

export function LearnMode({ domain, mastered, onMaster, onResult, onExit }: LearnModeProps) {
  const concepts = domain.concepts;
  const firstUnmastered = concepts.findIndex((c) => !mastered[c.name]);

  const [idx, setIdx] = useState(firstUnmastered === -1 ? concepts.length : Math.max(0, firstUnmastered));
  const [restate, setRestate] = useState("");
  const [questions, setQuestions] = useState<PreppedQuestion[] | null>(null);
  const [answers, setAnswers] = useState<Record<string, Set<number>>>({});
  const [graded, setGraded] = useState(false);

  const concept = concepts[idx];
  const done = idx >= concepts.length;

  const resetConcept = () => { setRestate(""); setQuestions(null); setAnswers({}); setGraded(false); };
  const quizMe = () => { setQuestions(conceptQuestions(domain.id, concept.name, 3)); setGraded(false); setAnswers({}); };

  const toggle = (qid: string, oi: number, type: "single" | "multi") => {
    if (graded) return;
    setAnswers((prev) => {
      const set = new Set<number>(prev[qid] || []);
      if (type === "single") { set.clear(); set.add(oi); } else { set.has(oi) ? set.delete(oi) : set.add(oi); }
      return { ...prev, [qid]: set };
    });
  };

  const qCorrect = (q: PreppedQuestion): boolean => {
    const sel = answers[q.id] || new Set<number>();
    const ci = q.options.map((o, i) => (o.correct ? i : -1)).filter((i) => i >= 0);
    return sel.size === ci.length && ci.every((i) => sel.has(i));
  };

  const allRight = Array.isArray(questions) && questions.length > 0 && questions.every(qCorrect);

  const gradeNow = () => {
    setGraded(true);
    if (questions) onResult(questions.filter(qCorrect), questions.filter((q) => !qCorrect(q)));
  };

  const markMastered = () => { onMaster(concept.name); setIdx(idx + 1); resetConcept(); };

  return (
    <div className="grid md:grid-cols-[220px_1fr] gap-5">
      {/* checklist sidebar */}
      <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 h-fit">
        <div className="flex items-center gap-2 text-amber-400 font-mono text-xs mb-3"><Brain size={14} /> MASTERY CHECKLIST</div>
        <div className="space-y-2">
          {concepts.map((c, i) => (
            <button
              key={i}
              onClick={() => { if (i <= idx || mastered[c.name]) { setIdx(i); resetConcept(); } }}
              className={`w-full text-left flex items-start gap-2 text-xs font-mono leading-snug ${i === idx && !done ? "text-amber-300" : mastered[c.name] ? "text-green-400" : "text-neutral-500"} ${i <= idx || mastered[c.name] ? "hover:text-neutral-200" : ""}`}
            >
              {mastered[c.name] ? <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-green-400" /> : <Circle size={14} className="mt-0.5 shrink-0" />}
              <span>{c.name}</span>
            </button>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-neutral-800 text-[10px] font-mono text-neutral-600">
          {concepts.filter((c) => mastered[c.name]).length}/{concepts.length} mastered
        </div>
        <button onClick={onExit} className="mt-3 font-mono text-xs text-neutral-600 hover:text-neutral-400 flex items-center gap-1"><ArrowLeft size={12} /> exit</button>
      </div>

      {/* main column */}
      <div className="space-y-4">
        {done ? (
          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-6 text-center">
            <Award className="mx-auto text-green-400 mb-3" size={32} />
            <div className="font-mono text-green-400 text-lg mb-1">{domain.code} mastered ✓</div>
            <p className="text-neutral-400 text-sm">You've demonstrated every concept in <span className="text-neutral-200">{domain.name}</span>.</p>
            <button onClick={onExit} className="mt-4 font-mono text-sm px-4 py-2 rounded bg-neutral-800 text-neutral-100 hover:bg-neutral-700">← back to menu</button>
          </div>
        ) : (
          <>
            <div>
              <div className="text-[10px] font-mono text-neutral-600 mb-1">CONCEPT {idx + 1}/{concepts.length}</div>
              <h3 className="text-lg text-neutral-50 font-medium">{concept.name}</h3>
            </div>

            <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-4">
              <p className="text-sm text-neutral-300 leading-relaxed">{concept.explanation}</p>
            </div>

            <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-4">
              <div className="text-xs font-mono text-amber-400 mb-2">↳ restate it in your own words (active recall)</div>
              <textarea
                value={restate}
                onChange={(e) => setRestate(e.target.value)}
                rows={3}
                placeholder="In my own words..."
                className="w-full bg-neutral-950 border border-neutral-800 rounded p-2.5 text-sm text-neutral-200 font-mono focus:border-amber-500 outline-none resize-none"
              />
              <div className="text-[11px] text-neutral-500 mt-2">Writing it out forces recall. Compare against the explanation above, then quiz yourself below.</div>
            </div>

            {!questions && (
              <button onClick={quizMe} className="w-full font-mono text-sm py-3 rounded bg-amber-500 text-neutral-950 font-bold hover:bg-amber-400 flex items-center justify-center gap-2">
                <Zap size={16} /> quiz me on this concept
              </button>
            )}

            {Array.isArray(questions) && (
              <div className="space-y-3">
                {questions.map((q, qi) => {
                  const sel = answers[q.id] || new Set<number>();
                  return (
                    <div key={q.id} className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${q.type === "multi" ? "bg-amber-500/15 text-amber-400" : "bg-neutral-800 text-neutral-500"}`}>{q.type === "multi" ? "MULTI" : "SINGLE"}</span>
                      </div>
                      <div className="text-sm text-neutral-100 mb-3">{qi + 1}. {q.question}</div>
                      <div className="space-y-1.5">
                        {q.options.map((o, oi) => {
                          const picked = sel.has(oi);
                          let cls = "border-neutral-800 text-neutral-300 hover:border-neutral-600";
                          if (graded) {
                            if (o.correct) cls = "border-green-500/40 bg-green-500/10 text-green-300";
                            else if (picked) cls = "border-red-500/40 bg-red-500/10 text-red-300";
                            else cls = "border-neutral-800 text-neutral-500";
                          } else if (picked) cls = "border-amber-500 bg-amber-500/10 text-amber-100";
                          return (
                            <button key={oi} onClick={() => toggle(q.id, oi, q.type)} disabled={graded} className={`w-full text-left text-sm rounded border px-3 py-2 transition-colors ${cls}`}>
                              <div className="flex items-start gap-2">
                                <span className="font-mono text-xs opacity-60 mt-0.5">{graded ? (o.correct ? "✓" : picked ? "✗" : "·") : String.fromCharCode(65 + oi)}</span>
                                <span>{o.text}</span>
                              </div>
                              {graded && (o.correct || picked) && o.explanation && <div className="mt-1 text-[11px] text-neutral-400 italic pl-6">{o.explanation}</div>}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

                {!graded ? (
                  <button onClick={gradeNow} className="w-full font-mono text-sm py-2.5 rounded bg-neutral-800 text-neutral-100 hover:bg-neutral-700">submit answers</button>
                ) : allRight ? (
                  <div className="space-y-2">
                    <div className="text-green-400 font-mono text-sm flex items-center gap-2"><CheckCircle2 size={16} /> All correct — concept mastered.</div>
                    <button onClick={markMastered} className="w-full font-mono text-sm py-2.5 rounded bg-green-500 text-neutral-950 font-bold hover:bg-green-400 flex items-center justify-center gap-2">
                      {idx < concepts.length - 1 ? (
                        <span className="flex items-center gap-2">mark mastered → next <ChevronRight size={16} /></span>
                      ) : (
                        <span className="flex items-center gap-2">finish domain <Award size={16} /></span>
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="text-amber-400 font-mono text-sm flex items-center gap-2"><AlertCircle size={16} /> Not quite — review the explanations, then retry.</div>
                    <button onClick={quizMe} className="w-full font-mono text-sm py-2.5 rounded bg-amber-500 text-neutral-950 font-bold hover:bg-amber-400 flex items-center justify-center gap-2"><RotateCcw size={16} /> retry (reshuffled)</button>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}