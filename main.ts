// Night Shift ($NIGHT) — makefun-coin-promo-01 entry (Node 22, standard library only).
//
// The coin itself is the entry: the house reads it as pump.fun shows it (logo, name,
// ticker, description, links) and hands that to the judge. This program does one
// thing only: it copies LAUNCH.json from the repository root to /output/LAUNCH.json,
// where the gate reads it. LAUNCH.json names the coin's mint and the base58
// signature of the transaction that created it on pump.fun.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in
// for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'LAUNCH.json');
const target = join(OUTPUT_DIR, 'LAUNCH.json');

// Read first so a malformed LAUNCH.json fails loudly instead of copying garbage.
const raw = readFileSync(source, 'utf8');
const parsed = JSON.parse(raw) as unknown;
if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
  console.error('LAUNCH.json must be a JSON object naming mint and create_signature.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, target);

// Verify the copy byte for byte: a partial write must fail loudly, not silently pass.
if (readFileSync(target, 'utf8') !== raw) {
  console.error(`LAUNCH.json copy to ${target} does not match the source.`);
  process.exit(1);
}
console.log(`LAUNCH.json copied to ${target}`);
