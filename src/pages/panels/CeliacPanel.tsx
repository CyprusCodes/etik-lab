import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wheat, CheckCircle2 } from "lucide-react";

const tests = ["Anti-Transglutaminaz IgA (Anti-tTG)", "Anti-Transglutaminaz IgG", "Anti-Deamidated Gliadin IgA", "Anti-Deamidated Gliadin IgG", "Total IgA", "Anti-Endomisyum Antikorları"];

export default function CeliacPanel() {
  return (
    <Layout>
      <PageHeader
        title="Çölyak Paneli"
        description="Gluten intoleransı ve çölyak hastalığı için serolojik testler."
        breadcrumbs={[{ label: "Test Panelleri", href: "/test-panelleri" }, { label: "Çölyak Paneli" }]}
      />
      
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <Wheat className="w-12 h-12 text-warning mb-4" />
              <h2 className="heading-2 text-foreground mb-4">Çölyak Hastalığı Nedir?</h2>
              <p className="body-large mb-6">
                Çölyak hastalığı, gluten adlı proteine karşı gelişen otoimmün bir hastalıktır. Buğday, arpa ve çavdarda bulunan gluten, çölyak hastalarında ince bağırsak mukozasında hasar oluşturur.
              </p>
              <p className="body-base">
                Erken tanı ve glutensiz diyet ile hastalık kontrol altına alınabilir ve komplikasyonlar önlenebilir.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="heading-4 text-foreground mb-6">Panel İçeriği</h3>
              <ul className="space-y-3">
                {tests.map((test) => (
                  <li key={test} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{test}</span>
                  </li>
                ))}
              </ul>
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
