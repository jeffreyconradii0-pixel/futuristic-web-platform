import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default {
  ...defineCloudflareConfig(),
  // `npm run build` is this adapter. Call Next directly so the adapter does not call itself.
  buildCommand: "npx next build",
};
