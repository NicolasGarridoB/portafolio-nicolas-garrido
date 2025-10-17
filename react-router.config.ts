import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  prerender: ["/"],
  buildDirectory: "build",
  serverBuildFile: "server/index.js",
} satisfies Config;
