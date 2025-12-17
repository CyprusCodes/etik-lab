import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bone, CheckCircle2 } from "lucide-react";

const tests = ["RF (Romatoid Faktör)", "Anti-CCP", "ANA (Antinükleer Antikor)", "CRP", "Sedimantasyon", "Ürik Asit", "Kompleman C3/C4", "Anti-dsDNA"];

export default function RheumatologyPanel() {
  return (
    <Layout>
      <PageHeader
        title="Romatoloji Paneli"
        description="Romatizma ve otoimmün hastalıklar için kapsamlı test paneli."
        breadcrumbs={[{ label: "Test Panelleri", href: "/test-panelleri" }, { label: "Romatoloji Paneli" }]}
      />
      
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <Bone className="w-12 h-12 text-primary mb-4" />
              <h2 className="heading-2 text-foreground mb-4">Romatolojik Hastalıklar</h2>
              <p className="body-large mb-6">
                Romatolojik hastalıklar, eklemleri, kasları, kemikleri ve bağ dokularını etkileyen kronik hastalıklardır. Erken tanı ile hastalık ilerlemesi yavaşlatılabilir.
              </p>
              <p className="body-base">
                Panelimiz, romatoid artrit, lupus, gut ve diğer otoimmün hastalıkların tanısında kullanılan temel testleri içerir.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="heading-4 text-foreground mb-6">Panel İçeriği</h3>
              <div className="grid grid-cols-2 gap-3">
                {tests.map((test) => (
                  <div key={test} className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-sm text-foreground">{test}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/randevu">Test Randevusu Al</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
