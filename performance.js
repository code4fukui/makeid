import { ulid } from "https://code4fukui.github.io/ulid/ulid.js";
import { cuid } from "https://code4fukui.github.io/cuid/cuid.js";
import { nanoid } from "https://code4fukui.github.io/nanoid/nanoid.js";
import { uuid } from "https://code4fukui.github.io/uuid/uuid.js";

const gens = { uuid, ulid, cuid, nanoid };
for (const name in gens) {
  const gen = gens[name];
  const t = performance.now();
  const n = 1000000;
  for (let i = 0; i < n; i++) {
    const s = gen();
  }
  const dt = performance.now() - t;
  const s = gen();
  console.log(name, s, s.length, (Math.floor(dt) / 1000) + "msec");
}
/*
uuid a079b64a-c8ac-4651-9c30-07c49ea978f5 36 0.35msec
ulid 01GW9WAE5ZTK05Z8XN0GTESM5C 26 3.893msec
cuid mi0ik4y5l9w7lpe9od943law 24 9.204msec
nanoid mKm0GvN-n7jV9f8_4mmI0 21 0.78msec
*/
