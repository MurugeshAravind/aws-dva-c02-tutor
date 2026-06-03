// ============================================================
// FILE: src/App.tsx
//
// View routing + glue. All study state lives in useProgress(); all
// rendering lives in the components. This file just decides what's on
// screen and wires each screen's results back into progress.
// ============================================================

import { useState } from "react";
import { ArrowLeft, Clock } from "lucide-react";
import { Header } from "./components/atoms";
import { Home } from "./components/Home";
import { QuizRunner } from "./components/QuizRunner";
import { LearnMode } from "./components/LearnMode";
import { useProgress } from "./hooks/useProgress";
import { BANK, TOPICS } from "./data/bank";
import { samplePractice, sampleMock, shuffle } from "./lib/questions";
import type { View, Domain, DomainWithTopics } from "./types";

const DOMAINS: DomainWithTopics[] = BANK.map((d) => ({ ...d, topics: TOPICS[d.id] }));
const MOCK_OPTIONS = [
  { n: 10, l: "Quick", t: "~20 min" },
  { n: 20, l: "Half", t: "~40 min" },
  { n: 30, l: "Long", t: "~60 min" },
];
const PRACTICE_COUNTS = [5, 8, 12];

export default function App() {
  const [view, setView] = useState<View>("home");
  const [pickedDomain, setPickedDomain] = useState<DomainWithTopics | null>(null);
  const [pCount, setPCount] = useState<number | null>(null);
  const [mockLen, setMockLen] = useState<number | null>(null);

  const progress = useProgress();
  const reset = () => { setView("home"); setPickedDomain(null); setPCount(null); setMockLen(null); };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 p-5 sm:p-8" style={{ fontFamily: "ui-monospace, monospace" }}>
      <div className="max-w-4xl mx-auto">
        {/* top bar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
          <button onClick={reset} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center text-neutral-950 font-bold text-sm">λ</div>
            <div>
              <div className="text-neutral-100 font-semibold text-sm group-hover:text-amber-300">aws-dva-tutor</div>
              <div className="text-[10px] text-neutral-600 font-mono">DVA-C02 · pass = 720/1000</div>
            </div>
          </button>
          <div className="text-[10px] font-mono text-green-400 hidden sm:block">offline · no API key</div>
        </div>

        {/* ---------- HOME ---------- */}
        {view === "home" && (
          <Home
            hasProgress={progress.hasProgress}
            stats={progress.stats}
            masteredCount={progress.masteredCount}
            missedCount={progress.missedList.length}
            lastMock={progress.lastMock}
            onReset={progress.resetAll}
            onLearn={() => setView("learn-pick")}
            onPractice={() => setView("practice-pick")}
            onMock={() => setView("mock-pick")}
            onReviewMissed={() => setView("practice-missed")}
          />
        )}

        {/* ---------- LEARN ---------- */}
        {view === "learn-pick" && (
          <div className="space-y-4">
            <button onClick={reset} className="font-mono text-sm text-neutral-500 hover:text-neutral-300 flex items-center gap-1"><ArrowLeft size={14} /> back</button>
            <Header>learn mode › select domain</Header>
            <div className="grid sm:grid-cols-2 gap-3">
              {DOMAINS.map((d) => {
                const m = d.concepts.filter((c) => progress.mastered[c.name]).length;
                return (
                  <button key={d.id} onClick={() => { setPickedDomain(d); setView("learn"); }} className="text-left rounded-lg border border-neutral-800 bg-neutral-900/40 p-4 hover:border-amber-500/50 group">
                    <div className="flex items-center justify-between mb-1"><span className="text-[10px] font-mono text-neutral-600">{d.code}</span><span className="text-xs font-mono text-amber-400">{d.weight}%</span></div>
                    <div className="text-neutral-100 text-sm font-medium mb-2 group-hover:text-amber-300">{d.name}</div>
                    <div className="text-[11px] font-mono text-neutral-500">{m}/{d.concepts.length} concepts mastered · {d.concepts.reduce((s, c) => s + c.questions.length, 0)} questions</div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
        {view === "learn" && pickedDomain && (
          <LearnMode
            domain={pickedDomain as Domain}
            mastered={progress.mastered}
            onMaster={progress.masterConcept}
            onResult={(c, w) => { progress.recordMissed(w); progress.updateStats(c, w); }}
            onExit={reset}
          />
        )}

        {/* ---------- PRACTICE ---------- */}
        {view === "practice-pick" && !pickedDomain && (
          <div className="space-y-4">
            <button onClick={reset} className="font-mono text-sm text-neutral-500 hover:text-neutral-300 flex items-center gap-1"><ArrowLeft size={14} /> back</button>
            <Header>practice › select domain</Header>
            <div className="grid sm:grid-cols-2 gap-3">
              {DOMAINS.map((d) => (
                <button key={d.id} onClick={() => setPickedDomain(d)} className="text-left rounded-lg border border-neutral-800 bg-neutral-900/40 p-4 hover:border-amber-500/50 group">
                  <div className="flex items-center justify-between mb-1"><span className="text-[10px] font-mono text-neutral-600">{d.code}</span><span className="text-xs font-mono text-amber-400">{d.weight}%</span></div>
                  <div className="text-neutral-100 text-sm font-medium mb-2 group-hover:text-amber-300">{d.name}</div>
                  <div className="text-[11px] font-mono text-neutral-500">{d.topics.slice(0, 4).join(" · ")}</div>
                </button>
              ))}
            </div>
          </div>
        )}
        {view === "practice-pick" && pickedDomain && (
          <div className="space-y-4">
            <button onClick={() => setPickedDomain(null)} className="font-mono text-sm text-neutral-500 hover:text-neutral-300 flex items-center gap-1"><ArrowLeft size={14} /> back</button>
            <Header>practice › {pickedDomain.name} › how many?</Header>
            <div className="flex gap-3">
              {PRACTICE_COUNTS.map((n) => (
                <button key={n} onClick={() => { setPCount(n); setView("practice"); }} className="flex-1 rounded-lg border border-neutral-800 bg-neutral-900/40 py-5 hover:border-amber-500/50 font-mono">
                  <div className="text-2xl text-neutral-50">{n}</div><div className="text-[11px] text-neutral-500">questions</div>
                </button>
              ))}
            </div>
          </div>
        )}
        {view === "practice" && pickedDomain && pCount && (
          <QuizRunner
            questions={samplePractice(pickedDomain.id, pCount)}
            onExit={reset}
            onFinish={(c, w) => { progress.recordMissed(w); progress.updateStats(c, w); }}
          />
        )}

        {/* ---------- REVIEW MISSED ---------- */}
        {view === "practice-missed" && (
          <QuizRunner
            questions={progress.missedList.map((q) => ({ ...q, id: `r-${Math.random().toString(36).slice(2, 7)}`, options: shuffle(q.options) }))}
            onExit={reset}
            onFinish={(c, w) => { progress.graduateMissed(c); progress.updateStats(c, w); }}
          />
        )}

        {/* ---------- MOCK ---------- */}
        {view === "mock-pick" && (
          <div className="space-y-4">
            <button onClick={reset} className="font-mono text-sm text-neutral-500 hover:text-neutral-300 flex items-center gap-1"><ArrowLeft size={14} /> back</button>
            <Header>mock exam › select length</Header>
            <div className="grid sm:grid-cols-3 gap-3">
              {MOCK_OPTIONS.map((o) => (
                <button key={o.n} onClick={() => { setMockLen(o.n); setView("mock"); }} className="rounded-lg border border-neutral-800 bg-neutral-900/40 py-5 hover:border-amber-500/50 font-mono">
                  <div className="text-2xl text-neutral-50">{o.n}</div><div className="text-xs text-amber-400">{o.l}</div>
                  <div className="text-[11px] text-neutral-500 mt-0.5 flex items-center justify-center gap-1"><Clock size={11} />{o.t}</div>
                </button>
              ))}
            </div>
            <p className="text-[11px] font-mono text-neutral-600">Domain-weighted 32/26/24/18%. Drawn from your bank — free and instant.</p>
          </div>
        )}
        {view === "mock" && mockLen && (() => {
          const qs = sampleMock(mockLen);
          return (
            <QuizRunner
              questions={qs}
              timed
              timeLimitSec={Math.round((130 * 60 * qs.length) / 65)}
              scaled
              onExit={reset}
              onFinish={(c, w, s) => { progress.recordMissed(w); progress.updateStats(c, w); progress.pushMock({ ts: Date.now(), len: s.total, scaled: s.scaled, pct: s.pct }); }}
            />
          );
        })()}
      </div>
    </div>
  );
}