// ============================================================
// FILE: src/types.ts
// ============================================================

/** A bank entry as authored. t: 's' single | 'm' multi. */
export type RawQuestion = {
  t: "s" | "m";
  q: string;
  o: string[];   // options
  c: number[];   // indices of correct option(s)
  e: string[];   // per-option explanations (parallel to `o`)
  ctx?: string;  // optional scenario/context paragraph shown above the question
};

export type Concept = {
  name: string;
  explanation: string;
  questions: RawQuestion[];
};

export type Domain = {
  id: string;
  code: string;
  name: string;
  weight: number;
  concepts: Concept[];
};

export type DomainWithTopics = Domain & { topics: string[] };

/** A single answer option after prep (shuffled, with correctness resolved). */
export type Option = {
  text: string;
  correct: boolean;
  explanation: string;
};

/** A runtime-ready question: options shuffled, stable `key` for dedup. */
export type PreppedQuestion = {
  id: string;       // unique per render instance
  key: string;      // stable identity (the question text) for missed-pool dedup
  domain: string;   // domain code, e.g. "Domain 1"
  concept: string;
  type: "single" | "multi";
  question: string;
  options: Option[];
  ctx?: string;     // optional scenario context paragraph
};

/** Result summary emitted when a quiz is submitted. */
export type Summary = {
  total: number;
  correct: number;
  pct: number;
  scaled: number;   // 100–1000 estimate
};

// ----- persisted progress shapes -----
export type Missed = Record<string, PreppedQuestion>;     // keyed by question text
export type Mastered = Record<string, boolean>;           // keyed by concept name
export type Stats = Record<string, { correct: number; total: number }>; // keyed by domain code
export type MockEntry = { ts: number; len: number; scaled: number; pct: number };
export type Flagged = Record<string, boolean>;            // keyed by q.key

/** App navigation state. */
export type View =
  | "home"
  | "learn-pick"
  | "learn"
  | "practice-pick"
  | "practice"
  | "practice-missed"
  | "mock-pick"
  | "mock"
  | "drill-weakest";
