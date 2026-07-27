import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getImagePath } from "@/utils/assets";
import { blogPosts } from "@/data/blogPosts";
import { SEO } from "@/components/SEO";

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
      <SEO
        title="Sağlık Blogu"
        description="Laboratuvar testleri, sağlık kontrolleri ve güncel sağlık konuları hakkında bilgilendirici içerikleri okuyun."
        path="/blog"
      />
      <PageHeader
        title="Blog"
        description="Uzmanlarımızdan güncel sağlık bilgileri ve öneriler."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700" />
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
                to={`/blog/${post.slug}`}
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
                  <div className="flex items-center gap-4 text-sm text-gray-700 mb-3">
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
                  <div className="flex items-center gap-2 text-teal-800 font-medium text-sm">
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
