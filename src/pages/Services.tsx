import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Building2,
  Truck,
  Dna,
  Activity,
  Shield,
  ArrowRight,
  Clock,
  CheckCircle,
} from "lucide-react";
import { getImagePath } from "@/utils/assets";

const services = [
  {
    id: 1,
    icon: Building2,
    title: "Ayaktan Hasta Hizmetleri",
    description:
      "Kliniğimizde hızlı, güvenilir ve profesyonel laboratuvar test hizmetleri.",
    image: getImagePath("hizmetleri/ahh.jpg"),
    href: "/hizmetlerimiz/ayaktan-hasta",
    features: ["Hızlı Sonuç", "Profesyonel Kadro", "Modern Ekipman"],
  },
  {
    id: 2,
    icon: Truck,
    title: "Evden Kan Alma",
    description:
      "Evden ayrılmadan, uzman ekibimiz tarafından güvenli numune alma hizmeti.",
    image: getImagePath("hizmetleri/eka.jpg"),
    href: "/hizmetlerimiz/evde-kan-alma",
    features: ["Evde Hizmet", "Güvenli Alma", "Randevu Sistemi"],
  },
  {
    id: 3,
    icon: Activity,
    title: "Koronavirus Hakkında",
    description:
      "Koronavirus, insanlar soğuk algınlığı ve grip gibi solunum yolu hastalıklarına neden olan bir virüstür.",
    image: getImagePath("hizmetleri/coronavirus.jpg"),
    href: "/hizmetlerimiz/covid-testleri",
    features: ["PCR Testi", "Antikor Testi", "Hızlı Sonuç"],
  },
  {
    id: 4,
    icon: Dna,
    title: "Hamilelik Öncesi & Sonrası Genetik Testler",
    description:
      "Anne ve bebek sağlığı için ileri düzey genetik tarama testleri.",
    image: getImagePath("hizmetleri/gene.jpg"),
    href: "/hizmetlerimiz/genetik-testler",
    features: ["Kapsamlı Tarama", "Uzman Analiz", "Güvenilir Sonuç"],
  },
  {
    id: 5,
    icon: Activity,
    title: "SMA Testi",
    description:
      "Spinal Musküler Atrofi için güvenilir tarama ve tanı testleri.",
    image: getImagePath("hizmetleri/sma.jpg"),
    href: "/hizmetlerimiz/sma-testi",
    features: ["Erken Tanı", "Genetik Danışmanlık", "Aile Taraması"],
  },
  {
    id: 6,
    icon: Shield,
    title: "Kurumsal Hizmetler",
    description:
      "Şirketlere özel, akredite ve profesyonel laboratuvar çözümleri.",
    image: getImagePath("hizmetleri/kurumsal.jpg"),
    href: "/hizmetlerimiz/kurumsal",
    features: ["Toplu Tarama", "Özel Paketler", "Raporlama Sistemi"],
  },
];

export default function Services() {
  return (
    <Layout>
      <PageHeader
        title="Hizmetlerimiz"
        description="Modern altyapımız ve uzman kadromuzla geniş yelpazede laboratuvar hizmetleri sunuyoruz."
        breadcrumbs={[{ label: "Hizmetlerimiz" }]}
      />

      {/* Clean Services Section */}
      <section className="relative py-20 lg:py-32 bg-white">
        <div className="container-wide">
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} to={service.href} className="group h-full">
                <div className="h-full bg-card rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col overflow-hidden">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Service Icon Overlay */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          <CheckCircle className="w-3 h-3" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <div className="flex items-center gap-2 text-primary font-medium text-sm mt-auto">
                      <span>Detaylı Bilgi</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 border border-border/50">
              <Clock className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Hızlı ve Güvenilir Hizmet
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Tüm hizmetlerimiz için randevu alabilir, sorularınızı iletişim
                kanallarımızdan sorabilirsiniz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link
                    to="/randevu"
                    className="inline-flex items-center gap-2"
                  >
                    Randevu Al
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link
                    to="/iletisim"
                    className="inline-flex items-center gap-2"
                  >
                    İletişim
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
