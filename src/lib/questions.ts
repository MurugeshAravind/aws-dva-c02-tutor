// ============================================================
// FILE: src/lib/questions.ts
//
// Pure question-selection logic. No React, no side effects —
// everything here is deterministic given its inputs (modulo the
// intentional randomness in shuffle), which makes it easy to unit test.
// ============================================================

import { BANK } from "../data/bank";
import type { RawQuestion, PreppedQuestion, Option } from "../types";

/** Fisher–Yates shuffle. Returns a new array; does not mutate the input. */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Convert an authored RawQuestion into a runtime PreppedQuestion:
 * resolves correctness onto each option, attaches explanations, and
 * shuffles option order so answer position can't be memorised.
 */
export function prep(raw: RawQuestion, code: string, concept: string): PreppedQuestion {
  const opts: Option[] = raw.o.map((text, i) => ({
    text,
    correct: raw.c.includes(i),
    explanation: raw.e[i] || "",
  }));
  return {
    id: `q-${Math.random().toString(36).slice(2, 8)}`,
    key: raw.q, // stable identity for missed-pool dedup
    domain: code,
    concept,
    type: raw.t === "m" ? "multi" : "single",
    question: raw.q,
    options: shuffle(opts),
  };
}

type RawRef = { raw: RawQuestion; code: string; domainId: string; concept: string };

/** Flatten the whole bank into prep-ready references. */
function allRaw(): RawRef[] {
  const out: RawRef[] = [];
  BANK.forEach((d) =>
    d.concepts.forEach((c) =>
      c.questions.forEach((q) => out.push({ raw: q, code: d.code, domainId: d.id, concept: c.name }))
    )
  );
  return out;
}

/** Random sample of `count` questions from a single domain. */
export function samplePractice(domainId: string, count: number): PreppedQuestion[] {
  return shuffle(allRaw().filter((x) => x.domainId === domainId))
    .slice(0, count)
    .map((x) => prep(x.raw, x.code, x.concept));
}

/**
 * Domain-weighted sample for a mock exam (32/26/24/18%). Wraps around a
 * domain's pool if it's smaller than the slice it was allotted, so the
 * requested total is always met even on a small bank.
 */
export function sampleMock(total: number): PreppedQuestion[] {
  const out: PreppedQuestion[] = [];
  BANK.forEach((d, i) => {
    const n = i === BANK.length - 1 ? total - out.length : Math.round((total * d.weight) / 100);
    const pool = shuffle(allRaw().filter((x) => x.domainId === d.id));
    for (let k = 0; k < n; k++) {
      const x = pool[k % pool.length];
      if (x) out.push(prep(x.raw, x.code, x.concept));
    }
  });
  return shuffle(out);
}

/** Questions for one concept (Learn-mode quizzing). */
export function conceptQuestions(domainId: string, conceptName: string, count = 3): PreppedQuestion[] {
  const d = BANK.find((x) => x.id === domainId);
  const c = d?.concepts.find((y) => y.name === conceptName);
  if (!c) return [];
  return shuffle(c.questions)
    .slice(0, count)
    .map((q) => prep(q, d!.code, conceptName));
}