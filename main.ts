import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line alien tourist review of Earth. Gate: /output/entry.txt must be
// UTF-8 text of 1 to 200 characters, not only whitespace, single line.
const entry =
  "Beautiful blue planet, would visit again \u2014 but the locals built machines to talk to each other, then used them to avoid each other.";

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), entry, "utf8");
