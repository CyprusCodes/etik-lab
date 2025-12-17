import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Users, FileText, Phone } from "lucide-react";

const packages = [
  { title: "İşe Giriş Muayenesi", description: "Yasal zorunlulukları karşılayan kapsamlı işe giriş sağlık taraması" },
  { title: "Periyodik Muayene", description: "Çalışan sağlığının düzenli takibi için yıllık sağlık kontrolleri" },
  { title: "Sektörel Paketler", description: "Gıda, inşaat, sağlık gibi sektörlere özel test paketleri" },
  { title: "Toplu Tarama", description: "Şirket içi toplu test ve aşı kampanyaları organizasyonu" },
];

export default function CorporateServices() {
  return (
    <Layout>
      <PageHeader
        title="Kurumsal Hizmetler"
        description="İşletmeler için özel sağlık tarama paketleri ve periyodik muayeneler."
        breadcrumbs={[{ label: "Hizmetlerimiz", href: "/hizmetlerimiz" }, { label: "Kurumsal Hizmetler" }]}
      />
      
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {packages.map((pkg) => (
              <div key={pkg.title} className="bg-card rounded-2xl p-6 border border-border card-hover">
                <Building2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="heading-4 text-foreground mb-2">{pkg.title}</h3>
                <p className="text-muted-foreground">{pkg.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 md:p-12 text-primary-foreground text-center">
            <h2 className="heading-2 mb-4">Kurumsal Teklif Alın</h2>
            <p className="body-large text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Şirketinizin ihtiyaçlarına özel çözümler için bizimle iletişime geçin.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                <Link to="/iletisim">Teklif İste</Link>
              </Button>
              <Button size="lg" variant="heroOutline" asChild>
                <a href="tel:+902123456789"><Phone className="w-4 h-4" /> Bizi Arayın</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
