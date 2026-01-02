import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getImagePath } from "@/utils/assets";

const categories = [
  "Tümü",
  "Genel Sağlık",
  "Diyabet",
  "Tiroid",
  "Hamilelik",
  "Kan Hastalıkları",
  "Sindirim Sistemi",
  "Enfeksiyon",
];

const blogPosts = [
  {
    title: "Laboratuvar Testlerinin Önemi ve Kullanım Alanları",
    excerpt:
      "Laboratuvar testleri, hastalıkların erken teşhisinde ve tedavi sürecinin doğru yönetilmesinde kritik rol oynar.",
    image: getImagePath("blog/labovatuvar-Kopya.png"),
    date: "4 Eylül 2023",
    author: "Etiklab",
    category: "Genel Sağlık",
    href: "/blog/laboratuvar-testlerinin-onemi",
  },
  {
    title: "Kolon Kanseri Nedir? Kolon Kanseri Testi Nasıl Yapılır?",
    excerpt:
      "Kolon kanseri belirtileri, risk faktörleri ve erken tanı için uygulanan test yöntemleri hakkında detaylı bilgi.",
    image: getImagePath("blog/kolon-kanseri.png"),
    date: "4 Eylül 2023",
    author: "Etiklab",
    category: "Sindirim Sistemi",
    href: "/blog/kolon-kanseri",
  },
  {
    title: "İnsülin Direnci Nedir? İnsülin Direnci Testinin Önemi Nelerdir?",
    excerpt:
      "İnsülin direnci nedir, nasıl teşhis edilir ve diyabet riskini azaltmak için neden önemlidir?",
    image: getImagePath("blog/insulin-direnci.png"),
    date: "7 Eylül 2023",
    author: "Etiklab",
    category: "Diyabet",
    href: "/blog/insulin-direnci",
  },
  {
    title: "Çölyak Hastalığı Nedir? Çölyak Hastalığı Belirtileri Nelerdir?",
    excerpt:
      "Çölyak hastalığı, glüten hassasiyetiyle ortaya çıkan otoimmün bir hastalıktır. Belirtileri ve tanı süreci.",
    image: getImagePath("blog/colyak.png"),
    date: "7 Eylül 2023",
    author: "Etiklab",
    category: "Sindirim Sistemi",
    href: "/blog/colyak-hastaligi",
  },
  {
    title: "Anemi Nedir? Anemi Belirtileri Nelerdir?",
    excerpt:
      "Anemi, kandaki hemoglobin seviyesinin düşmesiyle ortaya çıkar. Nedenleri ve belirtileri hakkında bilinçli rehber.",
    image: getImagePath("blog/anemi.png"),
    date: "7 Eylül 2023",
    author: "Etiklab",
    category: "Kan Hastalıkları",
    href: "/blog/anemi",
  },
  {
    title: "Check Up Nedir? Check Up Yapılmasının Önemli Nedenleri Nelerdir?",
    excerpt:
      "Düzenli check-up yaptırmak, hastalıkları erken dönemde tespit ederek sağlıklı yaşamı destekler.",
    image: getImagePath("blog/checkup.png"),
    date: "4 Eylül 2023",
    author: "Etiklab",
    category: "Genel Sağlık",
    href: "/blog/check-up",
  },
  {
    title:
      "Diyabet (Şeker Hastalığı) Nedir? Diyabet Testi Yaptırmanın Önemi Nelerdir?",
    excerpt:
      "Diyabet nedir, kimler risk altındadır ve diyabet testleri neden hayati öneme sahiptir?",
    image: getImagePath("blog/diyabet-Kopya.png"),
    date: "4 Eylül 2023",
    author: "Etiklab",
    category: "Diyabet",
    href: "/blog/diyabet",
  },
  {
    title:
      "Beta HCG Nedir? Gebelik Haftasına Göre Beta HCG Değerleri Nelerdir?",
    excerpt:
      "Beta HCG hormonu nedir, gebelikte nasıl değerlendirilir ve haftalara göre değer aralıkları.",
    image: getImagePath("blog/ca0d22eb-85c7-482a-a132-8d8700540c0f.png"),
    date: "4 Eylül 2023",
    author: "Etiklab",
    category: "Hamilelik",
    href: "/blog/beta-hcg",
  },
  {
    title: "Tiroid Hastalıkları ve Tiroid Testlerinin Önemi",
    excerpt:
      "Tiroid bezinin vücut üzerindeki etkileri, tiroid hastalıkları ve tanıda kullanılan testler.",
    image: getImagePath("blog/troid.png"),
    date: "4 Eylül 2023",
    author: "Etiklab",
    category: "Tiroid",
    href: "/blog/tiroid-hastaliklari",
  },
  {
    title: "HPV Belirtileri Nelerdir? HPV’den Nasıl Korunuruz?",
    excerpt:
      "HPV nedir, belirtileri nelerdir ve HPV enfeksiyonundan korunma yolları hakkında bilmeniz gerekenler.",
    image: getImagePath(
      "blog/human-papillomavirus-hpv-sexually-transmitted-infection_59529-1018.jpg"
    ),
    date: "4 Eylül 2023",
    author: "Etiklab",
    category: "Enfeksiyon",
    href: "/blog/hpv",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "Tümü" || post.category === activeCategory;
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <PageHeader
        title="Blog"
        description="Uzmanlarımızdan güncel sağlık bilgileri ve öneriler."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Yazı ara..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post.title}
                to={post.href}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="body-base line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm">
                    <span>Devamını Oku</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
