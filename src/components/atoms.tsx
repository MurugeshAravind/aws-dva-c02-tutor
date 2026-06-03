
// ============================================================
// FILE: src/components/atoms.tsx
// Tiny shared presentational pieces.
// ============================================================

import type { ReactNode } from "react";
import { Terminal } from "lucide-react";

export const Cursor = () => (
  <span className="inline-block w-2 h-4 bg-amber-400 ml-1 animate-pulse align-middle" />
);

export const Header = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-2 text-amber-400 font-mono text-sm mb-1">
    <Terminal size={16} />
    <span>{children}</span>
  </div>
);
