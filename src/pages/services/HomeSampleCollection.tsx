import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Truck, Clock, Shield, CheckCircle2 } from "lucide-react";

const steps = [
  { step: "1", title: "Randevu Alın", description: "Online veya telefonla randevu oluşturun" },
  { step: "2", title: "Evde Bekleyin", description: "Uzman personelimiz size gelsin" },
  { step: "3", title: "Numune Alımı", description: "Hijyenik ortamda numune alınır" },
  { step: "4", title: "Sonuç", description: "Online olarak sonuçlarınıza ulaşın" },
];

export default function HomeSampleCollection() {
  return (
    <Layout>
      <PageHeader
        title="Evde Numune Alma"
        description="Evinizden çıkmadan profesyonel sağlık personelimiz tarafından numune alımı."
        breadcrumbs={[{ label: "Hizmetlerimiz", href: "/hizmetlerimiz" }, { label: "Evde Numune Alma" }]}
      />
      
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card rounded-2xl p-6 border border-border text-center">
              <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="heading-4 text-foreground mb-2">Ücretsiz Ulaşım</h3>
              <p className="text-muted-foreground">İstanbul genelinde ücretsiz hizmet</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="heading-4 text-foreground mb-2">Esnek Saatler</h3>
              <p className="text-muted-foreground">07:00 - 12:00 arası randevu</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="heading-4 text-foreground mb-2">Hijyenik Ortam</h3>
              <p className="text-muted-foreground">Steril malzemelerle güvenli alım</p>
            </div>
          </div>

          <h2 className="heading-2 text-foreground mb-8 text-center">Nasıl Çalışır?</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/randevu">Evde Numune Randevusu Al</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
