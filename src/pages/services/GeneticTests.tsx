import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Dna, Baby, Heart, ArrowRight } from "lucide-react";

const geneticTests = [
  { icon: Baby, title: "Prenatal Testler", description: "Hamilelik döneminde fetüs sağlığını değerlendiren testler", tests: ["NIPT", "Üçlü/Dörtlü Tarama", "Amniyosentez"] },
  { icon: Dna, title: "Taşıyıcılık Testleri", description: "Genetik hastalık taşıyıcılığını belirleyen testler", tests: ["SMA", "Kistik Fibrozis", "Talasemi"] },
  { icon: Heart, title: "Preimplantasyon Testleri", description: "Tüp bebek öncesi genetik tarama", tests: ["PGT-A", "PGT-M", "PGT-SR"] },
];

export default function GeneticTests() {
  return (
    <Layout>
      <PageHeader
        title="Genetik Testler"
        description="Hamilelik öncesi ve sonrası kapsamlı genetik tarama testleri."
        breadcrumbs={[{ label: "Hizmetlerimiz", href: "/hizmetlerimiz" }, { label: "Genetik Testler" }]}
      />
      
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {geneticTests.map((test) => (
              <div key={test.title} className="bg-card rounded-2xl p-6 border border-border card-hover">
                <div className="w-14 h-14 rounded-xl bg-success-light flex items-center justify-center mb-5">
                  <test.icon className="w-7 h-7 text-success" />
                </div>
                <h3 className="heading-4 text-foreground mb-3">{test.title}</h3>
                <p className="body-base mb-4">{test.description}</p>
                <ul className="space-y-2">
                  {test.tests.map((t) => (
                    <li key={t} className="text-sm text-muted-foreground flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-primary" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-secondary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="heading-2 text-foreground mb-4">Genetik Danışmanlık</h2>
            <p className="body-large mb-6 max-w-2xl mx-auto">
              Uzman genetik danışmanlarımız, test sonuçlarınızı değerlendirmenize ve sonraki adımlar konusunda size rehberlik etmeye hazır.
            </p>
            <Button size="lg" asChild>
              <Link to="/randevu">Danışmanlık Randevusu Al</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
