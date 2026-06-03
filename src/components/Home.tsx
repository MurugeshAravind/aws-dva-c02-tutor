// ============================================================
// FILE: src/components/Home.tsx
//
// Landing screen: intro, progress card, the three mode entry points,
// the optional "review missed" card, and the exam-blueprint chart.
// Stateless — receives progress values and navigation callbacks as props.
// ============================================================

import { Terminal, BookOpen, Zap, FileText, Repeat } from "lucide-react";
import { Cursor } from "./atoms";
import { ProgressPanel } from "./ProgressPanel";
import { BANK, BANK_TOTAL } from "../data/bank";
import type { Stats, MockEntry } from "../types";

type HomeProps = {
  // progress
  hasProgress: boolean;
  stats: Stats;
  masteredCount: number;
  missedCount: number;
  lastMock: MockEntry | undefined;
  onReset: () => void;
  // navigation
  onLearn: () => void;
  onPractice: () => void;
  onMock: () => void;
  onReviewMissed: () => void;
};

export function Home({
  hasProgress, stats, masteredCount, missedCount, lastMock, onReset,
  onLearn, onPractice, onMock, onReviewMissed,
}: HomeProps) {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-amber-400 font-mono text-sm flex items-center gap-2"><Terminal size={16} /> ~/aws-developer-associate<Cursor /></div>
        <h1 className="text-2xl text-neutral-50 font-semibold mt-2">AWS Certified Developer – Associate</h1>
        <p className="text-neutral-400 text-sm mt-1">{BANK_TOTAL} curated questions across 4 domains. Fully offline — no keys, no costs.</p>
      </div>

      {hasProgress && (
        <ProgressPanel
          stats={stats}
          masteredCount={masteredCount}
          missedCount={missedCount}
          lastMock={lastMock}
          onReset={onReset}
        />
      )}

      <div className="grid gap-3">
        <button onClick={onLearn} className="text-left rounded-lg border border-amber-500/30 bg-amber-500/5 p-5 hover:border-amber-500/60 group">
          <div className="flex items-start gap-3">
            <BookOpen className="text-amber-400 mt-0.5" size={20} />
            <div>
              <div className="text-neutral-50 font-medium group-hover:text-amber-300 flex items-center gap-2">Learn Mode <span className="text-[10px] font-mono text-amber-400">TUTOR</span></div>
              <p className="text-neutral-400 text-sm mt-1">Concept-by-concept with a mastery gate. Explanation → restate in your words → quiz. You don't advance until you pass.</p>
            </div>
          </div>
        </button>

        <div className="grid sm:grid-cols-2 gap-3">
          <button onClick={onPractice} className="text-left rounded-lg border border-neutral-800 bg-neutral-900/40 p-5 hover:border-neutral-600 group">
            <Zap className="text-amber-400 mb-2" size={18} />
            <div className="text-neutral-50 font-medium text-sm group-hover:text-amber-300">Practice</div>
            <p className="text-neutral-400 text-xs mt-1">Focused domain drills with instant explanations.</p>
          </button>
          <button onClick={onMock} className="text-left rounded-lg border border-neutral-800 bg-neutral-900/40 p-5 hover:border-neutral-600 group">
            <FileText className="text-amber-400 mb-2" size={18} />
            <div className="text-neutral-50 font-medium text-sm group-hover:text-amber-300">Mock Exam</div>
            <p className="text-neutral-400 text-xs mt-1">Weighted, timed, scaled score + breakdown.</p>
          </button>
        </div>

        {missedCount > 0 && (
          <button onClick={onReviewMissed} className="text-left rounded-lg border border-red-500/30 bg-red-500/5 p-4 hover:border-red-500/50 group flex items-center gap-3">
            <Repeat className="text-red-400" size={18} />
            <div>
              <div className="text-neutral-50 font-medium text-sm group-hover:text-red-300">Review missed ({missedCount})</div>
              <p className="text-neutral-400 text-xs mt-0.5">Spaced repetition — drill what you got wrong. Get one right and it leaves the pile.</p>
            </div>
          </button>
        )}
      </div>

      <div className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-4">
        <div className="text-[10px] font-mono text-neutral-600 mb-2">EXAM BLUEPRINT</div>
        <div className="space-y-1.5">
          {BANK.map((d) => (
            <div key={d.id} className="flex items-center gap-3 text-xs font-mono">
              <span className="text-neutral-300 w-52 truncate">{d.name}</span>
              <div className="flex-1 h-1.5 bg-neutral-800 rounded"><div className="h-full bg-amber-500/60 rounded" style={{ width: `${d.weight * 2.5}%` }} /></div>
              <span className="text-amber-400 w-9 text-right">{d.weight}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}