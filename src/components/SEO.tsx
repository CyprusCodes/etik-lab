import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  robots?: string;
  noIndex?: boolean;
  omitCanonical?: boolean;
  ogType?: "website" | "article";
  image?: string;
}

const SITE_URL = "https://etiklab.net";

export function SEO({
  title,
  description,
  path,
  robots = "index, follow",
  noIndex = false,
  omitCanonical = false,
  ogType = "website",
  image,
}: SEOProps) {
  const fullTitle = `${title} | Etik Laboratuvar`;
  const pathWithoutQueryOrHash = path.trim().split(/[?#]/, 1)[0];
  const normalizedPath =
    pathWithoutQueryOrHash === "/"
      ? "/"
      : `/${pathWithoutQueryOrHash.replace(/^\/+|\/+$/g, "")}`;
  const canonicalUrl = `${SITE_URL}${normalizedPath}`;
  const robotsContent = noIndex ? "noindex, follow" : robots;
  const imageUrl = image ? new URL(image, SITE_URL).toString() : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />

      {!omitCanonical && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {!omitCanonical && <meta property="og:url" content={canonicalUrl} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
