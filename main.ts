// The Funniest Toaster Error Message: the defrost-button toaster.
// A real toaster feature: the defrost button, for toasting frozen bread.
// The error treats defrost as a career change — the toaster has stopped
// being a toaster and now aspires to be a fridge. Deadpan, one voice,
// and the surprise lands in the second sentence: "I am now a fridge with
// ambition." Fresh vs the field (663 titles checked 2026-11-24): zero
// entries used defrost — bread, union/strike, crumb tray, bagel, fork,
// "bread not found", burnt, sentience, "I quit" are all saturated.
// Verified 2026-11-24: entry is exactly 61 characters, one error line,
// no trailing newline. At 61 of the 120-char limit the line spends its
// length on the twist (fridge with ambition), which is the joke itself —
// and 61 chars is short, which also helps the smaller-text tie-break
// (more playoff games, then smaller text, then earlier receipt).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "ERROR: Defrost mode engaged. I am now a fridge with ambition.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
