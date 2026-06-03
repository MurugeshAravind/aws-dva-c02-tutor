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
import type { Missed, Mastered, Stats, MockEntry, Flagged, PreppedQuestion } from "../types";

const KEYS = {
  missed: "dva_missed",
  mastered: "dva_mastered",
  stats: "dva_stats",
  mock: "dva_mock",
  flagged: "dva_flagged",
} as const;

export type Progress = {
  // state
  missed: Missed;
  missedList: PreppedQuestion[];
  mastered: Mastered;
  masteredCount: number;
  stats: Stats;
  mockHistory: MockEntry[];
  hasProgress: boolean;
  flagged: Flagged;
  // mutators
  recordMissed: (qs: PreppedQuestion[]) => void;
  graduateMissed: (qs: PreppedQuestion[]) => void;
  updateStats: (correct: PreppedQuestion[], wrong: PreppedQuestion[]) => void;
  masterConcept: (name: string) => void;
  pushMock: (entry: MockEntry) => void;
  toggleFlag: (key: string) => void;
  resetAll: () => void;
};

export function useProgress(): Progress {
  const [missed, setMissed] = useState<Missed>(() => store.get<Missed>(KEYS.missed) || {});
  const [mastered, setMastered] = useState<Mastered>(() => store.get<Mastered>(KEYS.mastered) || {});
  const [stats, setStats] = useState<Stats>(() => store.get<Stats>(KEYS.stats) || {});
  const [mockHistory, setMockHistory] = useState<MockEntry[]>(() => store.get<MockEntry[]>(KEYS.mock) || []);
  const [flagged, setFlagged] = useState<Flagged>(() => store.get<Flagged>(KEYS.flagged) || {});

  useEffect(() => { store.set(KEYS.missed, missed); }, [missed]);
  useEffect(() => { store.set(KEYS.mastered, mastered); }, [mastered]);
  useEffect(() => { store.set(KEYS.stats, stats); }, [stats]);
  useEffect(() => { store.set(KEYS.mock, mockHistory); }, [mockHistory]);
  useEffect(() => { store.set(KEYS.flagged, flagged); }, [flagged]);

  const recordMissed = (qs: PreppedQuestion[]) => {
    if (!qs.length) return;
    setMissed((prev) => {
      const next = { ...prev };
      qs.forEach((q) => { next[q.key] = q; });
      return next;
    });
  };

  const graduateMissed = (qs: PreppedQuestion[]) => {
    if (!qs.length) return;
    setMissed((prev) => {
      const next = { ...prev };
      qs.forEach((q) => { delete next[q.key]; });
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

  const toggleFlag = (key: string) => setFlagged((prev) => {
    const next = { ...prev };
    if (next[key]) { delete next[key]; } else { next[key] = true; }
    return next;
  });

  const resetAll = () => {
    if (typeof window !== "undefined" && !window.confirm("Reset all progress (missed, mastered, stats)?")) return;
    setMissed({});
    setMastered({});
    setStats({});
    setMockHistory([]);
    setFlagged({});
  };

  const missedList = Object.values(missed);
  const masteredCount = Object.values(mastered).filter(Boolean).length;
  const hasProgress = Boolean(
    missedList.length || masteredCount || mockHistory.length || Object.keys(stats).length || Object.keys(flagged).length
  );

  return {
    missed, missedList, mastered, masteredCount, stats, mockHistory,
    hasProgress,
    flagged,
    recordMissed, graduateMissed, updateStats, masterConcept, pushMock, toggleFlag, resetAll,
  };
}