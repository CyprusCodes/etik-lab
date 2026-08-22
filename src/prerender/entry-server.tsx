import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes } from "../AppRoutes";

export { prerenderRoutes } from "../prerenderRoutes";

export function render(url: string) {
  const renderedHtml = renderToString(
    <HelmetProvider>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>,
  );
  const headTags: string[] = [];
  const appHtml = renderedHtml.replace(
    /<title\b[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>|<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi,
    (tag) => {
      headTags.push(tag);
      return "";
    },
  );

  return {
    appHtml,
    headHtml: headTags.join("\n"),
  };
}
