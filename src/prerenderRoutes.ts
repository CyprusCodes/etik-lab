import { blogPosts } from "@/data/blogPosts";

export type PublicRoute = {
  path: string;
  active: boolean;
  indexing: "index" | "noindex";
  prerender: boolean;
};

const activeStaticPaths = [
  "/",
  "/hakkimizda",
  "/hakkimizda/kurumsal",
  "/hakkimizda/zaman-tuneli",
  "/kariyer",
  "/hizmetlerimiz",
  "/hizmetlerimiz/ayaktan-hasta",
  "/hizmetlerimiz/evde-kan-alma",
  "/hizmetlerimiz/genetik-testler",
  "/hizmetlerimiz/sma-testi",
  "/hizmetlerimiz/kurumsal",
  "/hizmetlerimiz/covid-testleri",
  "/test-panelleri",
  "/test-panelleri/tiroid",
  "/test-panelleri/torch",
  "/test-panelleri/kolon-kanseri",
  "/test-panelleri/anemi",
  "/test-panelleri/colyak",
  "/test-panelleri/diyabet",
  "/test-panelleri/romatoloji",
  "/test-panelleri/cinsel-hastaliklar",
  "/test-panelleri/kardiyovaskuler",
  "/paketler",
  "/blog",
  "/iletisim",
  "/randevu",
  "/test-istem-formu",
] as const;

export const publicRoutes: PublicRoute[] = [
  ...activeStaticPaths.map((path) => ({
    path,
    active: true,
    indexing: "index" as const,
    prerender: true,
  })),
  ...blogPosts.map(({ slug }) => ({
    path: `/blog/${slug}`,
    active: true,
    indexing: "index" as const,
    prerender: true,
  })),
  {
    path: "/hakkimizda/ekibimiz",
    active: false,
    indexing: "index",
    prerender: false,
  },
  {
    path: "/paketler/sporcu-paketi",
    active: false,
    indexing: "index",
    prerender: false,
  },
];

export const prerenderRoutes = publicRoutes.filter(
  ({ active, prerender }) => active && prerender,
);
