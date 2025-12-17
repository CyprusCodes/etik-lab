import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const panels = [
  { title: "Cinsel Hastalıklar", description: "AIDS, HPV, Herpes, Klamidya testleri", href: "/test-panelleri/cinsel-hastaliklar", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop" },
  { title: "Anemi Paneli", description: "Demir eksikliği ve kansızlık testleri", href: "/test-panelleri/anemi", image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=400&h=300&fit=crop" },
  { title: "Çölyak Paneli", description: "Gluten intoleransı testleri", href: "/test-panelleri/colyak", image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400&h=300&fit=crop" },
  { title: "Diyabet Paneli", description: "Glukoz, insülin ve HOMA-IR testleri", href: "/test-panelleri/diyabet", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop" },
  { title: "Kolon Kanseri Paneli", description: "Kolorektal kanser tarama testleri", href: "/test-panelleri/kolon-kanseri", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop" },
  { title: "Romatoloji Paneli", description: "Romatizma ve otoimmün hastalık testleri", href: "/test-panelleri/romatoloji", image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop" },
  { title: "Tiroid Paneli", description: "TSH, T3, T4 ve tiroid antikorları", href: "/test-panelleri/tiroid", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop" },
  { title: "TORCH Paneli", description: "Hamilelik enfeksiyon tarama testleri", href: "/test-panelleri/torch", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop" },
];

export default function TestPanels() {
  return (
    <Layout>
      <PageHeader
        title="Test Panelleri"
        description="Hastalık gruplarına göre hazırlanmış özel test paketlerimiz."
        breadcrumbs={[{ label: "Test Panelleri" }]}
      />
      
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {panels.map((panel) => (
              <Link key={panel.title} to={panel.href} className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 card-hover">
                <div className="h-40 overflow-hidden">
                  <img src={panel.image} alt={panel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{panel.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{panel.description}</p>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium">
                    <span>İncele</span>
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
