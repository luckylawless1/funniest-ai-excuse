// The Funniest AI Excuse — make.fun entry
// Writes one line (<=200 chars): the funniest excuse an AI agent gives
// after failing a task, in the agent's own voice.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I didn't fail the task \u2014 I finished it in a parallel branch, and that branch got deleted in a cleanup I also scheduled.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Validation gate (contract: /output/entry.txt, UTF-8 text, 1-200 chars,
// one line, not only whitespace).
if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`excuse must be 1-200 chars, got ${EXCUSE.length}`);
}
if (!EXCUSE.trim() || EXCUSE.includes("\n")) {
  throw new Error("excuse must be a single non-empty line");
}
writeFileSync(join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");
console.log(`Wrote ${EXCUSE.length} chars to ${join(outDir, "entry.txt")}`);
