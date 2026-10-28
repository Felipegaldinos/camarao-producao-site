import { readdir, mkdir, rename, access } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const workspace = path.resolve(".");
const directory = path.resolve("public/images");
const originals = path.resolve("outputs/image-originals");
for (const target of [directory, originals]) {
  if (!target.startsWith(workspace + path.sep))
    throw new Error("Image directory outside workspace");
}
await mkdir(originals, { recursive: true });
let count = 0;
for (const name of await readdir(directory)) {
  if (!name.endsWith(".png")) continue;
  const source = path.join(directory, name);
  const preserved = path.join(originals, name);
  try {
    await access(preserved);
    throw new Error(`Original already preserved: ${name}`);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  await sharp(source)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 84 })
    .toFile(path.join(directory, name.replace(/\.png$/, ".webp")));
  await rename(source, preserved);
  count++;
}
console.log(
  `${count} photographs optimized; original PNG files preserved in outputs/image-originals.`,
);
