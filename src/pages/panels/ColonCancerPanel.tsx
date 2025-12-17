import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

const tests = ["Gaitada Gizli Kan Testi", "CEA (Karsinoembriyonik Antijen)", "CA 19-9", "Tam Kan Sayımı", "Demir ve Ferritin"];

const riskFactors = ["50 yaş üstü olmak", "Ailede kolon kanseri öyküsü", "İnflamatuar bağırsak hastalıkları", "Obezite ve hareketsiz yaşam", "Sigara ve alkol kullanımı"];

export default function ColonCancerPanel() {
  return (
    <Layout>
      <PageHeader
        title="Kolon Kanseri Paneli"
        description="Kolorektal kanser tarama testleri ile erken tanı."
        breadcrumbs={[{ label: "Test Panelleri", href: "/test-panelleri" }, { label: "Kolon Kanseri Paneli" }]}
      />
      
      <section className="section-padding">
        <div className="container-wide">
          <div className="bg-warning-light rounded-2xl p-6 mb-8 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Erken Tanı Hayat Kurtarır</h3>
              <p className="text-muted-foreground">Kolon kanseri erken evrede tanı konulduğunda %90'dan fazla başarı oranı ile tedavi edilebilir.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="heading-3 text-foreground mb-6">Panel İçeriği</h2>
              <ul className="space-y-3">
                {tests.map((test) => (
                  <li key={test} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{test}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-secondary rounded-2xl p-8">
              <h2 className="heading-3 text-foreground mb-6">Risk Faktörleri</h2>
              <ul className="space-y-3">
                {riskFactors.map((factor) => (
                  <li key={factor} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-warning" />
                    <span className="text-muted-foreground">{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/randevu">Tarama Randevusu Al</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
