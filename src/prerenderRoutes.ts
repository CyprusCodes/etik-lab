import { blogPosts } from "@/data/blogPosts";

const staticPrerenderRoutes = [
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

export const prerenderRoutes = [
  ...staticPrerenderRoutes,
  ...blogPosts.map(({ slug }) => `/blog/${slug}`),
];
