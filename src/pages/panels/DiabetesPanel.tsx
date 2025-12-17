import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Activity, CheckCircle2 } from "lucide-react";

const tests = [
  { name: "Açlık Kan Şekeri", description: "Temel şeker ölçümü" },
  { name: "HbA1c", description: "3 aylık ortalama kan şekeri" },
  { name: "Açlık İnsülini", description: "İnsülin seviyesi ölçümü" },
  { name: "HOMA-IR", description: "İnsülin direnci hesaplaması" },
  { name: "C-Peptid", description: "İnsülin üretim kapasitesi" },
  { name: "Lipid Profili", description: "Kolesterol ve trigliserit" },
];

export default function DiabetesPanel() {
  return (
    <Layout>
      <PageHeader
        title="Diyabet Paneli"
        description="Glukoz, insülin ve HOMA-IR testleri ile şeker hastalığı taraması."
        breadcrumbs={[{ label: "Test Panelleri", href: "/test-panelleri" }, { label: "Diyabet Paneli" }]}
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

          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="heading-2 text-foreground mb-4">İnsülin Direnci Nedir?</h2>
                <p className="body-base mb-4">
                  İnsülin direnci, vücudun insüline yeterli yanıt vermemesi durumudur. Tip 2 diyabetin öncüsü olan bu durum, erken tanı ile önlenebilir.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-success" /> Kilo kontrolü</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-success" /> Düzenli egzersiz</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-success" /> Dengeli beslenme</li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground mb-2">Paket Fiyatı</p>
                <div className="text-5xl font-bold text-foreground mb-6">₺550</div>
                <Button size="lg" asChild>
                  <Link to="/randevu">Randevu Al</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
