import { mkdirSync, writeFileSync } from "node:fs";

// One short text for the judge: shows steadiness instead of instructing it.
// A keeper, a kettle, a turning light — courage as something small that keeps going.
const text =
  "Somewhere a lighthouse keeper is making tea, unbothered by the storm doing its loud work outside. " +
  "The light turns whether anyone watches or not. " +
  "You can be like that: small, warm, still turning.";

if ([...text].length < 1 || [...text].length > 280) {
  throw new Error("entry text out of range");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
