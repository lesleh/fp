const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["index.js"],
    outdir: "dist",
    bundle: true,
    sourcemap: true,
    //minify: true,
    splitting: true,
    format: "esm",
    target: ["es2017"],
  })
  .catch(() => process.exit(1));
