import assert from "node:assert/strict";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { createHash } from "node:crypto";
import { build } from "esbuild";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";

const routes = [
  "/",
  "/sobre",
  "/producao",
  ...["pos-larvas", "fazenda", "manejo", "sanidade", "beneficiamento"].map(
    (slug) => `/producao/${slug}`,
  ),
  "/produtos",
  ...["inteiro", "sem-cabeca", "descascado"].map((slug) => `/produtos/${slug}`),
  "/conhecimento",
  ...["ciclo", "agua", "classificacao"].map((slug) => `/conhecimento/${slug}`),
  "/qualidade",
  "/sustentabilidade",
  "/para-empresas",
  "/logistica",
  "/privacidade",
  "/contato",
  "/perguntas-frequentes",
];

mkdirSync("outputs", { recursive: true });
const bundlePath = path.resolve("outputs/image-audit-app.mjs");
await build({
  entryPoints: ["src/App.jsx"],
  bundle: true,
  platform: "node",
  format: "esm",
  packages: "external",
  jsx: "automatic",
  outfile: bundlePath,
  logLevel: "silent",
});
const { default: App } = await import(pathToFileURL(bundlePath));
const placements = new Map();
const hashes = new Map();
const pending = [];
for (const route of routes) {
  const html = renderToStaticMarkup(
    React.createElement(
      MemoryRouter,
      { initialEntries: [route] },
      React.createElement(App),
    ),
  );
  for (const match of html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) {
    const src = match[1];
    assert(
      !placements.has(src),
      `Imagem repetida: ${src}, em ${placements.get(src)} e ${route}`,
    );
    placements.set(src, route);
    const assetPath = path.join("public", src);
    if (!existsSync(assetPath)) {
      pending.push(src);
      continue;
    }
    const hash = createHash("sha256")
      .update(readFileSync(assetPath))
      .digest("hex");
    assert(
      !hashes.has(hash),
      `Arquivos com a mesma imagem: ${src} e ${hashes.get(hash)}`,
    );
    hashes.set(hash, src);
  }
}
assert.equal(
  placements.size,
  50,
  "Quantidade inesperada de imagens nas páginas",
);
if (pending.length && !process.argv.includes("--allow-pending")) {
  throw new Error(`Imagens ausentes: ${pending.join(", ")}`);
}
console.log(
  `${routes.length} rotas verificadas; ${placements.size} usos únicos; nenhuma repetição de caminho ou conteúdo.`,
);
if (pending.length) console.log(`${pending.length} imagens aguardam geração.`);
