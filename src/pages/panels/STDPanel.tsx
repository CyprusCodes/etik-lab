import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, AlertTriangle, CheckCircle2 } from "lucide-react";

const diseases = [
  { name: "AIDS / HIV", description: "İnsan Bağışıklık Yetmezliği Virüsü testi", tests: ["HIV 1/2 Antikor", "HIV RNA PCR"] },
  { name: "HPV", description: "İnsan Papilloma Virüsü testi", tests: ["HPV DNA", "HPV Genotipleme"] },
  { name: "Herpes Simpleks", description: "Herpes virüsü antikor testleri", tests: ["HSV-1 IgG/IgM", "HSV-2 IgG/IgM"] },
  { name: "Klamidya", description: "Chlamydia trachomatis testi", tests: ["Klamidya PCR", "Klamidya Antikor"] },
  { name: "Mycoplasma & Ureaplasma", description: "Genital enfeksiyon testleri", tests: ["Mycoplasma PCR", "Ureaplasma PCR"] },
];

export default function STDPanel() {
  return (
    <Layout>
      <PageHeader
        title="Cinsel Hastalıklar Paneli"
        description="AIDS, HPV, Herpes, Klamidya ve diğer cinsel yolla bulaşan hastalık testleri."
        breadcrumbs={[{ label: "Test Panelleri", href: "/test-panelleri" }, { label: "Cinsel Hastalıklar" }]}
      />
      
      <section className="section-padding">
        <div className="container-wide">
          <div className="bg-warning-light rounded-2xl p-6 mb-8 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Gizlilik Garantisi</h3>
              <p className="text-muted-foreground">Tüm testleriniz ve sonuçlarınız tam gizlilik içinde işlenir. Sonuçlarınız sadece size özel şifreli portaldan erişilebilir.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {diseases.map((disease) => (
              <div key={disease.name} className="bg-card rounded-2xl p-6 border border-border">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="heading-4 text-foreground mb-2">{disease.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{disease.description}</p>
                <ul className="space-y-2">
                  {disease.tests.map((test) => (
                    <li key={test} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">{test}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
