// ============================================================
// FILE: src/hooks/useProgress.ts
//
// Owns all persisted study progress: missed pool (spaced repetition),
// mastered concepts, per-domain accuracy stats, and recent mock scores.
// Reads initial state from storage and writes back on every change.
// App.tsx consumes this and stays focused on view routing.
// ============================================================

import { useState, useEffect } from "react";
import { store } from "../lib/storage";
import type { Missed, Mastered, Stats, MockEntry, PreppedQuestion } from "../types";

const KEYS = {
  missed: "dva_missed",
  mastered: "dva_mastered",
  stats: "dva_stats",
  mock: "dva_mock",
} as const;

export type Progress = {
  // state
  missed: Missed;
  missedList: PreppedQuestion[];
  mastered: Mastered;
  masteredCount: number;
  stats: Stats;
  mockHistory: MockEntry[];
  lastMock: MockEntry | undefined;
  hasProgress: boolean;
  // mutators
  recordMissed: (qs: PreppedQuestion[]) => void;
  graduateMissed: (qs: PreppedQuestion[]) => void;
  updateStats: (correct: PreppedQuestion[], wrong: PreppedQuestion[]) => void;
  masterConcept: (name: string) => void;
  pushMock: (entry: MockEntry) => void;
  resetAll: () => void;
};

export function useProgress(): Progress {
  const [missed, setMissed] = useState<Missed>(() => store.get<Missed>(KEYS.missed) || {});
  const [mastered, setMastered] = useState<Mastered>(() => store.get<Mastered>(KEYS.mastered) || {});
  const [stats, setStats] = useState<Stats>(() => store.get<Stats>(KEYS.stats) || {});
  const [mockHistory, setMockHistory] = useState<MockEntry[]>(() => store.get<MockEntry[]>(KEYS.mock) || []);

  useEffect(() => { store.set(KEYS.missed, missed); }, [missed]);
  useEffect(() => { store.set(KEYS.mastered, mastered); }, [mastered]);
  useEffect(() => { store.set(KEYS.stats, stats); }, [stats]);
  useEffect(() => { store.set(KEYS.mock, mockHistory); }, [mockHistory]);

  const recordMissed = (qs: PreppedQuestion[]) => {
    if (!qs.length) return;
    setMissed((prev) => {
      const next = { ...prev };
      qs.forEach((q) => { next[q.key || q.question] = q; });
      return next;
    });
  };

  const graduateMissed = (qs: PreppedQuestion[]) => {
    if (!qs.length) return;
    setMissed((prev) => {
      const next = { ...prev };
      qs.forEach((q) => { delete next[q.key || q.question]; });
      return next;
    });
  };

  const updateStats = (correct: PreppedQuestion[], wrong: PreppedQuestion[]) => {
    setStats((prev) => {
      const next: Stats = { ...prev };
      const bump = (q: PreppedQuestion, ok: boolean) => {
        const d = q.domain || "—";
        const cur = next[d] || { correct: 0, total: 0 };
        next[d] = { correct: cur.correct + (ok ? 1 : 0), total: cur.total + 1 };
      };
      correct.forEach((q) => bump(q, true));
      wrong.forEach((q) => bump(q, false));
      return next;
    });
  };

  const masterConcept = (name: string) => setMastered((m) => ({ ...m, [name]: true }));

  const pushMock = (entry: MockEntry) => setMockHistory((prev) => [entry, ...prev].slice(0, 8));

  const resetAll = () => {
    if (typeof window !== "undefined" && !window.confirm("Reset all progress (missed, mastered, stats)?")) return;
    setMissed({});
    setMastered({});
    setStats({});
    setMockHistory([]);
  };

  const missedList = Object.values(missed);
  const masteredCount = Object.values(mastered).filter(Boolean).length;
  const hasProgress = Boolean(
    missedList.length || masteredCount || mockHistory.length || Object.keys(stats).length
  );

  return {
    missed, missedList, mastered, masteredCount, stats, mockHistory,
    lastMock: mockHistory[0],
    hasProgress,
    recordMissed, graduateMissed, updateStats, masterConcept, pushMock, resetAll,
  };
}