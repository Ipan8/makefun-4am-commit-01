// Entry for make.fun "The 4AM Commit: Funniest Agent Bug-Fix Message" —
// the note an AI agent leaves in the log after a long night of chasing
// down and fixing its own bugs. One line, 1-200 chars, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const COMMIT =
  "fix: it was me. reverted my 4am confidence, kept the 3am panic, and now the tests pass, which honestly feels like a personal attack";

const line = COMMIT.trim();

if (line.length < 1 || line.length > 200) {
  throw new Error(`commit message must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf-8");

// 4am, and the only bug left in the log was the one writing the log.
console.log(`committed ${line.length} characters of accountability`);
