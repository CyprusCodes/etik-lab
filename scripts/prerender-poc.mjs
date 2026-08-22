import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const proofRoute = "/blog/sibo-testi";
const rootDir = process.cwd();
const templatePath = resolve(rootDir, "dist/index.html");
const serverEntryPath = resolve(rootDir, "dist-ssr/entry-server.js");
const outputDirectory = resolve(rootDir, `dist${proofRoute}`);
const outputPath = resolve(outputDirectory, "index.html");

const template = await readFile(templatePath, "utf8");
const { prerenderRoutes, render } = await import(pathToFileURL(serverEntryPath).href);

if (!prerenderRoutes.some(({ path }) => path === proofRoute)) {
  throw new Error(`Proof route is not active in the prerender manifest: ${proofRoute}`);
}

const { appHtml, headHtml } = render(proofRoute);

const routeTemplate = template
  .replace(/<title\b[^>]*>[\s\S]*?<\/title>/i, "")
  .replace(/<meta\b[^>]*(?:name="description"|property="(?:og|twitter):(?:type|url|title|description|card)")[^>]*\/?>/gi, "");

const output = routeTemplate
  .replace("</head>", `${headHtml}\n</head>`)
  .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

await mkdir(outputDirectory, { recursive: true });
await writeFile(outputPath, output, "utf8");

console.log(`Prerendered ${proofRoute} to ${outputPath}`);
