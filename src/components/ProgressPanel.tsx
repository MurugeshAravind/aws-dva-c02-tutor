// ============================================================
// FILE: src/components/ProgressPanel.tsx
// The "Your Progress" card on the home screen. Pure presentation —
// all data and the reset action come in via props from useProgress().
// ============================================================

import { TrendingUp, Trash2 } from "lucide-react";
import { BANK, TOTAL_CONCEPTS } from "../data/bank";
import type { Stats, MockEntry } from "../types";

type ProgressPanelProps = {
  stats: Stats;
  masteredCount: number;
  missedCount: number;
  mockHistory: MockEntry[];
  onReset: () => void;
};

function MockSparkline({ history }: { history: MockEntry[] }) {
  if (history.length < 2) return null;
  const pts = [...history].reverse(); // oldest first
  const VW = 180, VH = 36, PAD = 4;
  const xStep = (VW - PAD * 2) / (pts.length - 1);
  const yScale = (v: number) => PAD + ((1000 - v) / 900) * (VH - PAD * 2);
  const passY = yScale(720);
  const polyline = pts.map((m, i) => `${PAD + i * xStep},${yScale(m.scaled)}`).join(" ");
  const lastPt = pts[pts.length - 1];
  const lastX = PAD + (pts.length - 1) * xStep;
  const lastY = yScale(lastPt.scaled);
  const pass = lastPt.scaled >= 720;

  return (
    <svg viewBox={`0 0 ${VW} ${VH}`} width="100%" className="overflow-visible" style={{ maxWidth: VW }}>
      <line x1={PAD} y1={passY} x2={VW - PAD} y2={passY} stroke="#6b7280" strokeWidth="1" strokeDasharray="3 3" />
      <polyline points={polyline} fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx={lastX} cy={lastY} r="3" fill={pass ? "#4ade80" : "#f59e0b"} />
    </svg>
  );
}

export function ProgressPanel({ stats, masteredCount, missedCount, mockHistory, onReset }: ProgressPanelProps) {
  const lastMock = mockHistory[0];

  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500">
          <TrendingUp size={13} className="text-amber-400" /> YOUR PROGRESS
        </div>
        <button onClick={onReset} className="flex items-center gap-1 text-[10px] font-mono text-neutral-600 hover:text-red-400">
          <Trash2 size={11} /> reset
        </button>
      </div>

      <div className="space-y-1.5 mb-3">
        {BANK.map((d) => {
          const s = stats[d.code];
          const acc = s && s.total ? Math.round((s.correct / s.total) * 100) : null;
          return (
            <div key={d.id} className="flex items-center gap-3 text-xs font-mono">
              <span className="text-neutral-400 w-52 truncate">{d.name}</span>
              <div className="flex-1 h-1.5 bg-neutral-800 rounded">
                <div
                  className={`h-full rounded ${acc == null ? "" : acc >= 72 ? "bg-green-500" : "bg-amber-500"}`}
                  style={{ width: `${acc || 0}%` }}
                />
              </div>
              <span className="text-neutral-500 w-16 text-right">{acc == null ? "—" : `${acc}% (${s!.total})`}</span>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-[11px] font-mono text-neutral-500 pt-2 border-t border-neutral-800">
        <span>concepts mastered: <span className="text-green-400">{masteredCount}/{TOTAL_CONCEPTS}</span></span>
        <span>to review: <span className="text-red-400">{missedCount}</span></span>
        {lastMock && (
          <span>
            last mock: <span className={lastMock.scaled >= 720 ? "text-green-400" : "text-amber-400"}>{lastMock.scaled}</span> ({lastMock.pct}%)
          </span>
        )}
        {mockHistory.length >= 2 && (
          <div className="flex items-center gap-2 mt-1 w-full">
            <span className="text-neutral-600">trend</span>
            <MockSparkline history={mockHistory} />
            <span className="text-neutral-600 text-[10px]">pass · 720</span>
          </div>
        )}
      </div>
    </div>
  );
}
