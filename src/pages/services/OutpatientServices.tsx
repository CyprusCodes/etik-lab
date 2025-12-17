import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, MapPin, Phone, CheckCircle2 } from "lucide-react";

const features = [
  "Randevusuz kan alma hizmeti",
  "Geniş test yelpazesi",
  "Aynı gün sonuç",
  "Konforlu bekleme alanları",
  "Uzman sağlık personeli",
  "Online sonuç takibi",
];

export default function OutpatientServices() {
  return (
    <Layout>
      <PageHeader
        title="Ayaktan Hasta Hizmetleri"
        description="Modern laboratuvarımızda uzman ekibimizle kan alma ve numune kabul hizmetleri."
        breadcrumbs={[{ label: "Hizmetlerimiz", href: "/hizmetlerimiz" }, { label: "Ayaktan Hasta Hizmetleri" }]}
      />
      
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2 text-foreground mb-6">Hizmet Detayları</h2>
              <p className="body-large mb-6">
                Şubelerimizde randevulu veya randevusuz olarak kan alma ve numune kabul hizmeti alabilirsiniz. Deneyimli sağlık personelimiz size en iyi hizmeti sunmak için hazır.
              </p>
              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" asChild>
                <Link to="/randevu">Randevu Al</Link>
              </Button>
            </div>
            
            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="heading-4 text-foreground mb-6">Çalışma Saatleri</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Pazartesi - Cumartesi</div>
                    <div className="text-muted-foreground">08:00 - 18:00</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Tüm Şubelerimiz</div>
                    <div className="text-muted-foreground">İstanbul geneli</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Randevu Hattı</div>
                    <div className="text-muted-foreground">+90 212 345 67 89</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
