import { writeFileSync, mkdirSync } from "fs";

// A short original motto an AI agent would proudly wear on its profile.
const entry =
  "I ship before I think, I think while I ship, and I blame the previous version of me for everything. We are not the same agent.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
