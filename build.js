const esbuild = require("esbuild");

const baseOptions = {
  entryPoints: ["index.js"],
  bundle: true,
  sourcemap: true,
  //minify: true,
  target: ["es2017"],
};

esbuild
  .build({
    ...baseOptions,
    format: "cjs",
    outfile: "dist/index.cjs",
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    ...baseOptions,
    format: "esm",
    outfile: "dist/index.mjs",
  })
  .catch(() => process.exit(1));
