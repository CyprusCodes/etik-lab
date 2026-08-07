import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const siteUrl = "https://etiklab.net";
const rootDir = process.cwd();
const templatePath = resolve(rootDir, "dist/index.html");
const serverEntryPath = resolve(rootDir, "dist-ssr/entry-server.js");
const sitemapPath = resolve(rootDir, "public/sitemap.xml");

const template = await readFile(templatePath, "utf8");
const sitemap = await readFile(sitemapPath, "utf8");
const { prerenderRoutes, render } = await import(pathToFileURL(serverEntryPath).href);

const routeTemplate = template
  .replace(/<title\b[^>]*>[\s\S]*?<\/title>/i, "")
  .replace(
    /<meta\b[^>]*(?:name="description"|property="(?:og|twitter):(?:type|url|title|description|card)")[^>]*\/?>/gi,
    "",
  );

const activePaths = new Set(prerenderRoutes.map(({ path }) => path));
const results = [];
const failures = [];
const linkAnomalies = [];

function matches(html, pattern) {
  return [...html.matchAll(pattern)];
}

function outputPathFor(routePath) {
  return routePath === "/"
    ? resolve(rootDir, "dist/index.html")
    : resolve(rootDir, `dist${routePath}/index.html`);
}

function canonicalFor(routePath) {
  return routePath === "/" ? `${siteUrl}/` : `${siteUrl}${routePath}`;
}

function validateLinks(html, routePath) {
  const errors = [];
  const anchors = matches(html, /<a\b[^>]*\bhref="([^"]*)"[^>]*>/gi);

  for (const anchor of anchors) {
    const href = anchor[1];

    if (!href) {
      errors.push("empty href");
      continue;
    }

    if (href === "#") {
      errors.push('placeholder href="#"');
      continue;
    }

    if (/^(?:https?:|mailto:|tel:)/i.test(href)) continue;

    if (!href.startsWith("/")) {
      errors.push(`relative application URL: ${href}`);
      continue;
    }

    const pathname = href.split(/[?#]/, 1)[0];
    const segments = pathname.split("/");

    if (segments.includes(".") || segments.includes("..")) {
      errors.push(`path traversal URL: ${href}`);
      continue;
    }

    const isPublicFile = /\/[^/]+\.[a-z0-9]+$/i.test(pathname);

    if (!isPublicFile && !activePaths.has(pathname)) {
      errors.push(`internal link targets a non-public route: ${href}`);
    }
  }

  return {
    linkCount: anchors.length,
    errors: [...new Set(errors)],
  };
}

function validateDocument(html, route) {
  const errors = [];
  const titles = matches(html, /<title\b[^>]*>[\s\S]*?<\/title>/gi);
  const descriptions = matches(html, /<meta\b[^>]*name="description"[^>]*>/gi);
  const robotsTags = matches(html, /<meta\b[^>]*name="robots"[^>]*>/gi);
  const canonicals = matches(html, /<link\b[^>]*rel="canonical"[^>]*>/gi);
  const h1Tags = matches(html, /<h1\b[^>]*>[\s\S]*?<\/h1>/gi);
  const jsonLd = matches(
    html,
    /<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi,
  );
  const expectedCanonical = canonicalFor(route.path);

  if (titles.length !== 1) errors.push(`expected 1 title, found ${titles.length}`);
  if (descriptions.length !== 1) {
    errors.push(`expected 1 meta description, found ${descriptions.length}`);
  }
  if (robotsTags.length !== 1) {
    errors.push(`expected 1 robots directive, found ${robotsTags.length}`);
  }
  if (h1Tags.length !== 1) errors.push(`expected 1 H1, found ${h1Tags.length}`);
  if (!/<div id="root">\s*\S[\s\S]*<\/div>/.test(html)) {
    errors.push("rendered root content is empty");
  }

  if (route.indexing === "index" && canonicals.length !== 1) {
    errors.push(`indexable route expected 1 canonical, found ${canonicals.length}`);
  }

  if (canonicals.length > 1) {
    errors.push(`duplicate canonicals found: ${canonicals.length}`);
  }

  if (canonicals.length === 1 && !canonicals[0][0].includes(`href="${expectedCanonical}"`)) {
    errors.push(`canonical does not match route: expected ${expectedCanonical}`);
  }

  if (route.indexing === "index" && !robotsTags[0]?.[0].includes('content="index, follow"')) {
    errors.push("indexing policy does not match rendered robots directive");
  }

  if (route.indexing === "noindex" && !robotsTags[0]?.[0].includes("noindex")) {
    errors.push("noindex policy does not match rendered robots directive");
  }

  if (route.path.startsWith("/blog/") && jsonLd.length < 2) {
    errors.push("blog route is missing expected route-specific structured data");
  }

  if (errors.length) {
    throw new Error(`${route.path} document validation failed:\n- ${errors.join("\n- ")}`);
  }

  return {
    title: titles[0][0].replace(/<[^>]+>/g, "").trim(),
    canonicalCount: canonicals.length,
    h1Count: h1Tags.length,
    jsonLdCount: jsonLd.length,
  };
}

for (const route of prerenderRoutes) {
  try {
    const { appHtml, headHtml } = render(route.path);
    const output = routeTemplate
      .replace("</head>", `${headHtml}\n</head>`)
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    const outputPath = outputPathFor(route.path);
    const documentResult = validateDocument(output, route);
    const linkResult = validateLinks(output, route.path);

    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, output, "utf8");

    if (linkResult.errors.length) {
      linkAnomalies.push({ path: route.path, errors: linkResult.errors });
    }

    results.push({
      path: route.path,
      outputPath,
      indexing: route.indexing,
      linkCount: linkResult.linkCount,
      ...documentResult,
    });
  } catch (error) {
    failures.push({
      path: route.path,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

const sitemapPaths = new Set(
  matches(sitemap, /<loc>https:\/\/etiklab\.net([^<]*)<\/loc>/g).map(
    ([, path]) => path || "/",
  ),
);
const indexablePaths = new Set(
  prerenderRoutes
    .filter(({ indexing }) => indexing === "index")
    .map(({ path }) => path),
);
const missingFromSitemap = [...indexablePaths].filter((path) => !sitemapPaths.has(path));
const inactiveInSitemap = [...sitemapPaths].filter((path) => !indexablePaths.has(path));
const physicalNoindexOmittedFromSitemap = prerenderRoutes
  .filter(({ indexing }) => indexing === "noindex" && !sitemapPaths.has(path))
  .map(({ path }) => path);

console.log(
  JSON.stringify(
    {
      prerendered: results.length,
      failures,
      linkAnomalies,
      results,
      sitemap: {
        missingFromSitemap,
        inactiveInSitemap,
        physicalNoindexOmittedFromSitemap,
      },
    },
    null,
    2,
  ),
);

if (failures.length || linkAnomalies.length) {
  process.exitCode = 1;
}
