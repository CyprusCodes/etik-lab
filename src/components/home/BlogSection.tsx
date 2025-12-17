import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Anemi Nedir? Anemi Belirtileri Nelerdir?",
    excerpt:
      "Anemi, kırmızı kan hücrelerinin veya hemoglobin seviyesinin düşük olmasıyla ortaya çıkan bir durumdur. Belirtileri ve önemi hakkında bilinçlendirici rehber.",
    image: "https://etiklab.net/wp-content/uploads/2023/09/anemi.png",
    date: "7 Eylül 2023",
    author: "Etiklab",
    category: "Sağlık Rehberi",
    href: "/blog/anemi-nedir",
  },
  {
    id: 2,
    title: "İnsülin Direnci Nedir ? Önemi Nelerdir ?",
    excerpt:
      "İnsülin direnci nedir, nasıl tespit edilir, testlerin önemi ve sağlığa etkileri hakkında bilgilendirici makale.",
    image: "https://etiklab.net/wp-content/uploads/2023/09/insulin-direnci.png",
    date: "7 Eylül 2023",
    author: "Etiklab",
    category: "Sağlık Rehberi",
    href: "/blog/insulin-direnci-nedir",
  },
  {
    id: 3,
    title: "Çölyak Hastalığı Nedir? Belirtileri Nelerdir?",
    excerpt:
      "Çölyak hastalığı, glütene aşırı hassasiyeti olan bireylerde görülen otoimmün hastalıktır. Belirtileri ve tanı yöntemlerini öğrenin.",
    image: "https://etiklab.net/wp-content/uploads/2023/09/colyak.png",
    date: "7 Eylül 2023",
    author: "Etiklab",
    category: "Sağlık Rehberi",
    href: "/blog/colyak-hastaligi",
  },
  // {
  //   id: 4,
  //   title: "Laboratuvar Testlerinin Önemi ve Kullanım Alanları",
  //   excerpt:
  //     "Laboratuvar testlerinin sağlık alanında rolü, neden önemli oldukları ve kullanım alanlarına genel bakış.",
  //   image:
  //     "https://etiklab.net/wp-content/uploads/2023/09/labovatuvar-Kopya.png",
  //   date: "4 Eylül 2023",
  //   author: "Etiklab",
  //   category: "Sağlık Rehberi",
  //   href: "/blog/laboratuvar-testleri-onemi",
  // },
  // {
  //   id: 5,
  //   title: "Kolon Kanseri Nedir? Testi Nasıl Yapılır?",
  //   excerpt:
  //     "Kolon kanserinin belirtileri, risk faktörleri ve kolon kanseri testinin nasıl yapıldığını açıklayan rehber yazı.",
  //   image: "https://etiklab.net/wp-content/uploads/2023/09/kolon-kanseri.png",
  //   date: "4 Eylül 2023",
  //   author: "Etiklab",
  //   category: "Sağlık Rehberi",
  //   href: "/blog/kolon-kanseri-nedir",
  // },
];

export function BlogSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 lg:mb-20">
          <div className="animate-fade-in-up">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              BLOG
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
              Sağlık <span className="text-primary">Rehberi</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Uzmanlarımızdan güncel sağlık bilgileri ve öneriler.
            </p>
          </div>
          <Button variant="default" size="lg" asChild>
            <Link to="/blog" className="inline-flex items-center gap-2">
              Tüm Yazılar
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <Link key={post.id} to={post.href} className="group">
              <div
                className="relative h-full overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-primary/50 transition-all duration-500 card-3d"
                style={{
                  animation: `fadeInUp 0.6s ease-out forwards`,
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover image-3d group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover:to-black/40 transition-all duration-500" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white text-xs font-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-7">
                  {/* Metadata */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-5 group-hover:text-primary transition-colors duration-300">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {post.excerpt}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Devamını Oku</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Floating accent */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
