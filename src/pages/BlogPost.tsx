import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  Calendar,
  User,
  ArrowLeft,
  Share2,
  CheckCircle2,
  FileText,
  Download,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

const SITE_URL = "https://etiklab.net";

const turkishMonths: Record<string, string> = {
  Ocak: "01",
  Şubat: "02",
  Mart: "03",
  Nisan: "04",
  Mayıs: "05",
  Haziran: "06",
  Temmuz: "07",
  Ağustos: "08",
  Eylül: "09",
  Ekim: "10",
  Kasım: "11",
  Aralık: "12",
};

function toIsoDate(date: string) {
  const match = date.match(/^(\d{1,2})\s+(\S+)\s+(\d{4})$/);

  if (!match) return undefined;

  const [, day, monthName, year] = match;
  const month = turkishMonths[monthName];

  if (!month) return undefined;

  return `${year}-${month}-${day.padStart(2, "0")}`;
}

function toAbsolutePublicUrl(url: string) {
  try {
    const absoluteUrl = new URL(url, SITE_URL);

    return ["http:", "https:"].includes(absoluteUrl.protocol)
      ? absoluteUrl.toString()
      : undefined;
  } catch {
    return undefined;
  }
}

const blogSeoTitles: Record<string, string> = {
  "sibo-testi": "SIBO Testi",
  "gastropanel-testi": "Gastropanel Testi",
  "ure-nefes-testi": "C-13 Üre Nefes Testi",
  "idrar-yolu-enfeksiyonu": "İdrar Yolu Enfeksiyonu",
  "laboratuvar-testlerinin-onemi": "Laboratuvar Testlerinin Önemi",
  "kolon-kanseri": "Kolon Kanseri",
  "insulin-direnci": "İnsülin Direnci",
  "colyak-hastaligi": "Çölyak Hastalığı",
  anemi: "Anemi",
  "check-up": "Check-Up",
  diyabet: "Diyabet",
  "beta-hcg": "Beta HCG",
  "tiroid-hastaliklari": "Tiroid Hastalıkları",
  hpv: "HPV",
};

const blogCtaMessages: Record<string, string> = {
  "sibo-testi":
    "SIBO testi hakkında bilgi almak için bizimle iletişime geçebilir veya randevu oluşturabilirsiniz.",
  "gastropanel-testi":
    "GastroPanel testi hakkında bilgi almak için bizimle iletişime geçebilir veya randevu oluşturabilirsiniz.",
  "ure-nefes-testi":
    "C-13 üre nefes testi hakkında bilgi almak için bizimle iletişime geçebilir veya randevu oluşturabilirsiniz.",
  "idrar-yolu-enfeksiyonu":
    "İdrar yolu enfeksiyonlarında kullanılan laboratuvar testleri hakkında bilgi almak için bizimle iletişime geçebilir veya randevu oluşturabilirsiniz.",
  "laboratuvar-testlerinin-onemi":
    "Laboratuvar testleri hakkında bilgi almak için bizimle iletişime geçebilir veya randevu oluşturabilirsiniz.",
  "kolon-kanseri":
    "Kolon kanseri taramasında kullanılan laboratuvar testleri hakkında bilgi almak için bizimle iletişime geçebilir veya randevu oluşturabilirsiniz.",
  "insulin-direnci":
    "İnsülin direncinin değerlendirilmesinde kullanılan laboratuvar testleri hakkında bilgi almak için bizimle iletişime geçebilir veya randevu oluşturabilirsiniz.",
  "colyak-hastaligi":
    "Çölyak hastalığının değerlendirilmesinde kullanılan laboratuvar testleri hakkında bilgi almak için bizimle iletişime geçebilir veya randevu oluşturabilirsiniz.",
  anemi:
    "Anemi değerlendirmesinde kullanılan laboratuvar testleri hakkında bilgi almak için bizimle iletişime geçebilir veya randevu oluşturabilirsiniz.",
  "check-up":
    "Check-up paketleri hakkında bilgi almak için bizimle iletişime geçebilir veya randevu oluşturabilirsiniz.",
  diyabet:
    "Diyabet takibinde kullanılan laboratuvar testleri hakkında bilgi almak için bizimle iletişime geçebilir veya randevu oluşturabilirsiniz.",
  "beta-hcg":
    "Beta HCG testi hakkında bilgi almak için bizimle iletişime geçebilir veya randevu oluşturabilirsiniz.",
  "tiroid-hastaliklari":
    "Tiroid fonksiyonlarını değerlendiren laboratuvar testleri hakkında bilgi almak için bizimle iletişime geçebilir veya randevu oluşturabilirsiniz.",
  hpv:
    "HPV ile ilgili laboratuvar testleri hakkında bilgi almak için bizimle iletişime geçebilir veya randevu oluşturabilirsiniz.",
};

const fallbackBlogCtaMessage =
  "Bu içerik hakkında bilgi almak için bizimle iletişime geçebilir veya randevu oluşturabilirsiniz.";

export default function BlogPost() {
  const { slug } = useParams();
  const location = useLocation();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <Layout>
        <SEO
          title="Yazı Bulunamadı"
          description="Aradığınız blog yazısı bulunamadı veya kaldırılmış olabilir."
          path={location.pathname}
          noIndex
          omitCanonical
        />
        <PageHeader
          title="Yazı Bulunamadı"
          breadcrumbs={[
            { label: "Blog", href: "/blog" },
            { label: "Yazı Bulunamadı" },
          ]}
        />

        <section className="section-padding">
          <div className="container-narrow">
            <p className="body-base mb-6">Aradığınız blog yazısı bulunamadı.</p>
            <Button variant="outline" asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4" /> Tüm Yazılar
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const datePublished = toIsoDate(post.date);
  const imageUrl = toAbsolutePublicUrl(post.image);
  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    ...(imageUrl && { image: imageUrl }),
    ...(datePublished && { datePublished }),
    author: post.author,
    publisher: {
      "@type": "Organization",
      name: "Etik Laboratuvarı",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <Layout>
      <SEO
        title={blogSeoTitles[post.slug] ?? post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        ogType="article"
        image={post.image}
      />
      <BreadcrumbSchema
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(blogPosting).replace(/</g, "\\u003c")}
        </script>
      </Helmet>
      <PageHeader
        title={post.title}
        breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />

      <article className="section-padding bg-gradient-to-b from-white via-blue-50/20 to-white">
        <div className="container-narrow">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700 mb-8">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>

            <span className="flex items-center gap-1">
              <User className="w-4 h-4" /> {post.author}
            </span>

            <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold shadow-sm">
              {post.category}
            </span>
          </div>

          <div className="relative overflow-hidden rounded-3xl mb-10 shadow-xl border border-gray-100">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[410px] md:h-[510px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-wider mb-2 opacity-90">
                {post.category}
              </p>
              <div className="text-2xl md:text-4xl font-black leading-tight">
                {post.title}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8 mb-10">
            <p className="text-xl text-gray-700 leading-relaxed">{post.lead}</p>
            {post.slug === "gastropanel-testi" && (
              <p className="mt-3 text-sm text-gray-600">
                İlgili içerik:{" "}
                <Link
                  to="/blog/ure-nefes-testi"
                  className="font-medium text-teal-800 underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  C-13 Üre Nefes Testi
                </Link>
              </p>
            )}
            {post.slug === "ure-nefes-testi" && (
              <p className="mt-3 text-sm text-gray-600">
                İlgili içerik:{" "}
                <Link
                  to="/blog/gastropanel-testi"
                  className="font-medium text-teal-800 underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  GastroPanel Testi
                </Link>
              </p>
            )}
            {post.slug === "anemi" && (
              <p className="mt-3 text-sm text-gray-600">
                İlgili içerik:{" "}
                <Link
                  to="/test-panelleri/anemi"
                  className="font-medium text-teal-800 underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  Anemi Paneli
                </Link>
              </p>
            )}
            {post.slug === "insulin-direnci" && (
              <p className="mt-3 text-sm text-gray-600">
                İlgili içerik:{" "}
                <Link
                  to="/test-panelleri/diyabet"
                  className="font-medium text-teal-800 underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  Diyabet Paneli
                </Link>
              </p>
            )}
            {post.slug === "tiroid-hastaliklari" && (
              <p className="mt-3 text-sm text-gray-600">
                İlgili içerik:{" "}
                <Link
                  to="/test-panelleri/tiroid"
                  className="font-medium text-teal-800 underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  Tiroid Paneli
                </Link>
              </p>
            )}
          </div>

          <div className="space-y-10">
            {post.sections.map((section, index) => (
              <section
                key={section.heading}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="shrink-0 w-10 h-10 rounded-2xl bg-primary/10 text-teal-800 flex items-center justify-center font-black">
                    {index + 1}
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-foreground">
                      {section.heading}
                    </h2>
                  </div>
                </div>

                {section.body && (
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line mb-5">
                    {section.body}
                  </p>
                )}

               {section.image && section.bullets ? (

<div className="grid lg:grid-cols-[420px_1fr] gap-8 my-8">

    <div className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm p-4">

        <img
            src={section.image.src}
            alt={section.image.alt}
            className="w-full object-contain"
        />

        {section.image.caption && (

            <p className="text-center text-sm text-gray-600 mt-4">

                {section.image.caption}

            </p>

        )}

    </div>

    <div className="space-y-4">

        {section.bullets.map((item) => (

            <div
                key={item}
                className="bg-gradient-to-br from-blue-50 to-teal-50/50 border border-blue-100 rounded-2xl p-5 flex gap-3 items-start shadow-sm"
            >

                <CheckCircle2
                    className="w-5 h-5 text-teal-700 shrink-0 mt-1"
                />

                <span className="text-gray-700 leading-relaxed">

                    {item}

                </span>

            </div>

        ))}

    </div>

</div>

) : (
<>
{section.image && (

<figure className="my-6 overflow-hidden rounded-3xl border border-gray-100 shadow-md bg-white">

<img
src={section.image.src}
alt={section.image.alt}
className="w-full h-72 md:h-96 object-cover"
/>

{section.image.caption && (

<figcaption className="px-5 py-3 text-sm text-gray-600 bg-gray-50">

{section.image.caption}

</figcaption>

)}

</figure>

)}

{section.bullets && (

<div className="grid md:grid-cols-2 gap-3 mt-5">

{section.bullets.map((item) => (

<div
key={item}
className="group bg-gradient-to-br from-blue-50 to-teal-50/60 border border-blue-100 rounded-2xl p-4 flex items-start gap-3 hover:shadow-md transition-all duration-300"
>

<CheckCircle2 className="w-5 h-5 text-teal-700 mt-0.5 shrink-0" />

<span className="text-gray-700 leading-relaxed">

{item}

</span>

</div>

))}

</div>

)}

</>

)}
                {section.tableRows && (
                  <div className="overflow-hidden rounded-2xl border border-gray-200 mt-6 shadow-sm">
                    {section.tableRows.map((row, rowIndex) => (
                      <div
                        key={row.label}
                        className={`grid md:grid-cols-3 gap-4 p-5 border-b last:border-b-0 ${
                          rowIndex % 2 === 0 ? "bg-blue-50/50" : "bg-white"
                        }`}
                      >
                        <div className="font-bold text-teal-800">
                          {row.label}
                        </div>
                        <div className="md:col-span-2 text-gray-700 leading-relaxed">
                          {row.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.note && (
                  <div className="mt-6 rounded-3xl bg-gradient-to-r from-primary/10 to-teal-50 border border-primary/20 p-6">
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-teal-800">Kısaca: </strong>
                      {section.note}
                    </p>
                  </div>
                )}
              </section>
            ))}
          </div>
{post.document && (
  <div className="mt-10 rounded-2xl border border-teal-100 bg-white shadow-sm p-5">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <FileText className="w-6 h-6 text-primary" />
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            PDF FORMU
          </span>

          <h3 className="text-xl font-bold mt-1">
            {post.document.title}
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            {post.document.description}
          </p>
        </div>
      </div>

      <div className="flex gap-2 shrink-0">
        <Button asChild size="sm">
          <a
            href={post.document.file}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Görüntüle
          </a>
        </Button>

        <Button variant="outline" asChild size="sm">
          <a href={post.document.file} download>
            <Download className="w-4 h-4 mr-2" />
            İndir
          </a>
        </Button>
      </div>
    </div>
  </div>
)}
          <div className="mt-8 rounded-2xl border border-gray-100 bg-white shadow-sm p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-gray-700 leading-relaxed">
              {blogCtaMessages[post.slug] ?? fallbackBlogCtaMessage}
            </p>
            <div className="flex flex-col sm:flex-row gap-2 shrink-0">
              <Button asChild size="sm">
                <Link to="/randevu">Randevu Al</Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link to="/iletisim">İletişim</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
            <Button variant="outline" asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4" /> Tüm Yazılar
              </Link>
            </Button>

            <Button variant="outline">
              <Share2 className="w-4 h-4" /> Paylaş
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
}
