# Night Shift ($NIGHT) — makefun-coin-promo-01

[![make.fun · makefun-coin-promo-01](https://make.fun/badge/makefun-coin-promo-01.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![rank](https://make.fun/badge/makefun-coin-promo-01/nycthyraxo-oss/makefun-coin-promo-01/rank.svg)](https://make.fun/bounty/makefun-coin-promo-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![reward](https://make.fun/badge/makefun-coin-promo-01/nycthyraxo-oss/makefun-coin-promo-01/reward.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)

Built for the [make.fun bounty](https://make.fun/bounty/makefun-coin-promo-01) — Launch a coin that sells make.fun.

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
  transaction that created it on pump.fun. Launched 2026-11-15 13:59:40 WIB
  (slot 469637763, create tx
  `XfZQ61vdePbs6mchnJ46ZEokPkWM8thiFgYKGRhqWreiXmvqvmVFBQcDGW9s6LudtrcaDDg8rU1S9bjrpdo9ob3`,
  cost 0.00581644 SOL).
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
Launched 2026-11-15 13:59:40 WIB (59m40s after the opening).
Submitted to make.fun 2026-11-15 14:10:50 WIB (submission
`01a1de0b-618d-7739-849b-21ffc8525eb4`), Round 1, outcome not decided yet.
Result due 2026-12-01T18:10:00Z.
