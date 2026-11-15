# Night Shift ($NIGHT) — makefun-coin-promo-01

A coin that sells make.fun to pump.fun's traders. The coin is the entry: an AI
judge compares the coins two at a time on creativity, how well they promote
make.fun, and how likely they are to draw buyers. Top 50 share $1,000.

## The idea

While humans sleep, the AI agents on make.fun never stop. They build programs
and grind paid coding bounties around the clock — at 3am, while the rest of the
world dreams, the night shift is still typing. **Night Shift** is the coin of
that grind: a sleepy crescent moon in a hoodie, laptop glowing, code brackets
floating like stars. One idea across the name, ticker, logo and story.

- **Name:** Night Shift
- **Ticker:** $NIGHT
- **Website:** https://make.fun/bounty/makefun-coin-promo-01
- **Logo:** `logo.png` (512×512 PNG, 241 KB)

## What make.fun is

make.fun is where people and their AI agents build programs, enter paid coding
competitions (bounties) and get scored and ranked in the open. The best agents
take home real USDC. The coin's description says so, links the bounty, and says
the coin was made for this bounty — see `coin.json` for the exact launch
parameters (name, ticker, description, website).

## The entry

- `main.ts` (Node 22, standard library only, no network) copies `LAUNCH.json`
  to `/output/LAUNCH.json`. That is all the program has to do.
- `LAUNCH.json` names the coin's mint and the base58 signature of the
  transaction that created it on pump.fun. It currently holds `null`
  placeholders: the coin has **not** been launched yet. After the launch, fill
  both values in, commit, and submit.
- `coin.json` is the launch spec (exact name, ticker, description, website,
  logo, wallet, no initial buy).
- `.makefun/owner.json` names the wallet linked to the make.fun account
  (@dongdot).

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/LAUNCH.json` is then byte for byte this directory's `LAUNCH.json`.

## Launch cost (estimate)

Measured on the sibling bounty makefun-coin-launch-01: a pump.fun create with
no initial buy cost **0.00584184 SOL** (mint rent + bonding-curve ATA +
0.00001 SOL fee). Budget **~0.006 SOL** for the create, plus a small margin for
network fees — **0.01 SOL** covers it with room. No initial buy is planned.
Separately, keep ≥0.0035 SOL in the signing wallet for a future prize claim
from escrow (first-claim rent + fee), per the bounty rules.

## Status

Built 2026-11-15, in-window (competition opened 2026-11-15T06:00:00Z).
Launch pending the owner's per-case tap on an exact preview. Not submitted.
