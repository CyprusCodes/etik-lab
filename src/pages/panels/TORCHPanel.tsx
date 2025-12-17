import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Baby, CheckCircle2, AlertTriangle } from "lucide-react";

const tests = [
  { name: "Toxoplasma IgG/IgM", description: "Toxoplasmosis taraması" },
  { name: "Rubella IgG/IgM", description: "Kızamıkçık taraması" },
  { name: "CMV IgG/IgM", description: "Sitomegalovirüs taraması" },
  { name: "HSV 1/2 IgG/IgM", description: "Herpes simplex taraması" },
];

export default function TORCHPanel() {
  return (
    <Layout>
      <PageHeader
        title="TORCH Paneli"
        description="Hamilelik döneminde önemli enfeksiyon tarama testleri."
        breadcrumbs={[{ label: "Test Panelleri", href: "/test-panelleri" }, { label: "TORCH Paneli" }]}
      />
      
      <section className="section-padding">
        <div className="container-wide">
          <div className="bg-warning-light rounded-2xl p-6 mb-8 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Hamilelikte Önemli</h3>
              <p className="text-muted-foreground">TORCH enfeksiyonları hamilelik döneminde bebek sağlığını etkileyebilir. Erken tanı ve tedavi ile riskler minimize edilebilir.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <Baby className="w-12 h-12 text-primary mb-4" />
              <h2 className="heading-2 text-foreground mb-4">TORCH Nedir?</h2>
              <p className="body-large mb-4">
                TORCH, hamilelik döneminde fetüse zarar verebilecek enfeksiyonların baş harflerinden oluşur:
              </p>
              <ul className="space-y-2 body-base">
                <li><strong>T</strong> - Toxoplasmosis</li>
                <li><strong>O</strong> - Other (Diğer enfeksiyonlar)</li>
                <li><strong>R</strong> - Rubella (Kızamıkçık)</li>
                <li><strong>C</strong> - Cytomegalovirus (CMV)</li>
                <li><strong>H</strong> - Herpes Simplex Virus (HSV)</li>
              </ul>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="heading-4 text-foreground mb-6">Panel İçeriği</h3>
              <ul className="space-y-4">
                {tests.map((test) => (
                  <li key={test.name} className="flex items-start gap-3 p-4 bg-secondary rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">{test.name}</div>
                      <div className="text-sm text-muted-foreground">{test.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
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
