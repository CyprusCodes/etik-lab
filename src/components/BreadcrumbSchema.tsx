import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbSchemaProps {
  items?: BreadcrumbItem[];
}

const SITE_URL = "https://etiklab.net";

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  if (!items?.length) return null;

  const itemListElement = items.map((item, index) => {
    const name = item.name.trim();
    const path = item.path.trim();

    if (!name || !path) return null;

    try {
      const url = new URL(path, SITE_URL);

      if (url.origin !== SITE_URL) return null;

      return {
        "@type": "ListItem",
        position: index + 1,
        name,
        item: url.toString(),
      };
    } catch {
      return null;
    }
  });

  if (itemListElement.some((item) => item === null)) return null;

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbList).replace(/</g, "\\u003c")}
      </script>
    </Helmet>
  );
}
