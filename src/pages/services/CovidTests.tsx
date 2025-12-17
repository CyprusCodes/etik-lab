import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Clock, FileText } from "lucide-react";

const tests = [
  { title: "PCR Testi", description: "Aktif enfeksiyonu tespit eden altın standart test", time: "24 saat", price: "350" },
  { title: "Antijen Testi", description: "Hızlı sonuç veren tarama testi", time: "30 dakika", price: "150" },
  { title: "Antikor Testi", description: "Geçirilmiş enfeksiyon veya aşı yanıtını ölçen test", time: "24 saat", price: "200" },
];

export default function CovidTests() {
  return (
    <Layout>
      <PageHeader
        title="Koronavirüs Testleri"
        description="PCR ve antikor testleri ile güvenilir COVID-19 tanı hizmetleri."
        breadcrumbs={[{ label: "Hizmetlerimiz", href: "/hizmetlerimiz" }, { label: "Koronavirüs Testleri" }]}
      />
      
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {tests.map((test) => (
              <div key={test.title} className="bg-card rounded-2xl p-6 border border-border card-hover">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="heading-4 text-foreground mb-2">{test.title}</h3>
                <p className="text-muted-foreground mb-4">{test.description}</p>
                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" /> {test.time}
                  </span>
                </div>
                <div className="text-2xl font-bold text-foreground">₺{test.price}</div>
              </div>
            ))}
          </div>

          <div className="bg-secondary rounded-2xl p-8 text-center">
            <h2 className="heading-3 text-foreground mb-4">Seyahat Belgesi</h2>
            <p className="text-muted-foreground mb-6">
              Yurt dışı seyahatleri için gerekli COVID-19 test sonuç belgeleri İngilizce olarak düzenlenmektedir.
            </p>
            <Button size="lg" asChild>
              <Link to="/randevu">Test Randevusu Al</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
