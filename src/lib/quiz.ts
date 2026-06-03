import type { PreppedQuestion } from "../types";

export function isCorrect(q: PreppedQuestion, answers: Record<string, Set<number>>): boolean {
  const sel = answers[q.id] || new Set<number>();
  const ci = q.options.map((o, i) => (o.correct ? i : -1)).filter((i) => i >= 0);
  return sel.size === ci.length && ci.every((i) => sel.has(i));
}

export function toggleAnswer(
  answers: Record<string, Set<number>>,
  qid: string,
  oi: number,
  type: "single" | "multi"
): Record<string, Set<number>> {
  const set = new Set<number>(answers[qid] || []);
  if (type === "single") { set.clear(); set.add(oi); } else if (set.has(oi)) { set.delete(oi); } else { set.add(oi); }
  return { ...answers, [qid]: set };
}
