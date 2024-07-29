import { deepkitType } from "@deepkit/bun";

const out = await Bun.build({
  entrypoints: ["./app.ts"],
  outdir: "./out",
  plugins: [deepkitType()],
  target: "bun",
});
if (!out.success) console.error(out.logs);
