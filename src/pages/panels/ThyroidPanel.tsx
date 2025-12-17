import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Activity, CheckCircle2 } from "lucide-react";

const tests = [
  { name: "TSH", description: "Tiroid Uyarıcı Hormon" },
  { name: "Serbest T4", description: "Aktif tiroid hormonu" },
  { name: "Serbest T3", description: "Aktif tiroid hormonu" },
  { name: "Anti-TPO", description: "Tiroid peroksidaz antikoru" },
  { name: "Anti-Tiroglobulin", description: "Tiroglobulin antikoru" },
  { name: "Tiroglobulin", description: "Tiroid proteini" },
];

const conditions = [
  { name: "Hipotiroidizm", symptoms: "Yorgunluk, kilo alımı, üşüme" },
  { name: "Hipertiroidizm", symptoms: "Huzursuzluk, kilo kaybı, çarpıntı" },
  { name: "Hashimoto", symptoms: "Otoimmün tiroid hastalığı" },
  { name: "Graves", symptoms: "Tiroid bezinin aşırı çalışması" },
];

export default function ThyroidPanel() {
  return (
    <Layout>
      <PageHeader
        title="Tiroid Paneli"
        description="TSH, T3, T4 ve tiroid antikorları ile kapsamlı tiroid fonksiyon testleri."
        breadcrumbs={[{ label: "Test Panelleri", href: "/test-panelleri" }, { label: "Tiroid Paneli" }]}
      />
      
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tests.map((test) => (
              <div key={test.name} className="bg-card rounded-2xl p-6 border border-border card-hover">
                <Activity className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{test.name}</h3>
                <p className="text-muted-foreground text-sm">{test.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-secondary rounded-2xl p-8 mb-12">
            <h2 className="heading-3 text-foreground mb-6 text-center">Tiroid Hastalıkları</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {conditions.map((condition) => (
                <div key={condition.name} className="bg-card rounded-xl p-4 border border-border">
                  <h4 className="font-semibold text-foreground mb-1">{condition.name}</h4>
                  <p className="text-muted-foreground text-sm">{condition.symptoms}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/randevu">Randevu Al</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
