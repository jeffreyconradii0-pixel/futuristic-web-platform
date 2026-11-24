import { spawnSync } from "node:child_process";
import { writeFileSync } from "node:fs";

writeFileSync(
  "open-next.config.ts",
  `import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default {
  ...defineCloudflareConfig(),
  buildCommand: "npx next build",
};
`,
);

const result = spawnSync(
  process.execPath,
  ["node_modules/@opennextjs/cloudflare/dist/cli/index.js", "build"],
  { stdio: "inherit" },
);

process.exit(result.status ?? 1);
