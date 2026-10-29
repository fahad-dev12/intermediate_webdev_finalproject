const path = require("path");
const fs = require("fs");

class CopyAssetsPlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap("CopyAssetsPlugin", (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: "CopyAssetsPlugin",
          stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL
        },
        () => {
          for (const file of ["index.html", "favicon.ico", "style.css", "script.js"]) {
            const filePath = path.resolve(__dirname, file);

            if (fs.existsSync(filePath)) {
              compilation.emitAsset(
                file,
                new compiler.webpack.sources.RawSource(fs.readFileSync(filePath))
              );
            }
          }
        }
      );
    });
  }
}

module.exports = {
  mode: "production",
  entry: "./src/script.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  plugins: [new CopyAssetsPlugin()]
};
