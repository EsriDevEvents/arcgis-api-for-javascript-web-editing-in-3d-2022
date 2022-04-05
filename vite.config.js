import { defineConfig } from "vite";
import { readdirSync } from "fs";
import { resolve } from "path";

const samplesFolder = resolve("src/samples");

const sampleFolders = readdirSync(samplesFolder, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

const input = {
  "presentation": resolve("index.html"),
  ...sampleFolders.reduce((res, sampleFolder) => {
    res[sampleFolder] = resolve(samplesFolder, sampleFolder, "index.html");
    return res;
  }, {}),
};

module.exports = defineConfig(({ command }) => ({
  base: command === "build" ? "https://esridevsummit.github.io/DS2022-Web-Editing-in-3D/" : "./",
  build: {
    rollupOptions: { input },
    minify: "esbuild",
  },
}));
