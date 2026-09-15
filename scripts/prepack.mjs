import { existsSync } from "node:fs";
import { glob, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const inDir = join(import.meta.dirname, "../configs");
const outDir = join(import.meta.dirname, "..");

for await (const file of glob(join(inDir, "*.config.mjs"))) {
  const matches = /\/(?<name>[a-z]+).config.mjs$/.exec(file);
  const { name } = matches?.groups ?? {};

  const overridePath = join(dirname(file), `${name}.config.json`);

  const { default: module } = await import(file);
  let override = existsSync(overridePath)
    ? JSON.parse(await readFile(overridePath, "utf-8"))
    : {};

  const final = JSON.stringify({ ...module, ...override }, undefined, 2);

  await writeFile(join(outDir, `${name}.config.jsonc`), final);
}
