import { Layout } from "@/components/layout/Layout";
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
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <img
            src={getImagePath("hero-bgs/about-us.jpg")}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>

        {/* Ambient effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-blob delay-300" />
        </div>

        {/* Content */}
        <div className="container-wide relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6">
              Kapsamlı Laboratuvar
              <br />
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Hizmetlerimiz
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Sağlığınız için gereken tüm laboratuvar testlerini modern
              altyapımız ve uzman kadromuzla sunuyoruz. Her bir hizmetimiz, en
              yüksek kalite standartlarında ve güvenilir sonuçlar için
              tasarlanmıştır.
            </p>
            <div className="text-base md:text-lg text-white/80">
              Modern Teknoloji • Uzman Kadro • Güvenilir Sonuçlar
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50">
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
                    <div className="absolute bottom-4 right-4 w-12 h-12 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src={getImagePath("medical-pictures/home_experience_03.jpg")}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        {/* Ambient effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-blob delay-700" />
          <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-blob delay-1000" />
        </div>

        <div className="container-wide relative z-10">
          <div className="text-center">
            <Clock className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Hızlı ve Güvenilir
              <br />
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Laboratuvar Hizmeti
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Tüm hizmetlerimiz için randevu alabilir, sorularınızı iletişim
              kanallarımızdan sorabilirsiniz. Modern altyapımız ve deneyimli
              kadromuzla hizmetinizdeyiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
              <Link
                to="/randevu"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Randevu Al
                <ArrowRight className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
              <Link
                to="/iletisim"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/30 backdrop-blur-sm hover:border-white/50 shadow-lg hover:shadow-xl"
              >
                İletişim
                <ArrowRight className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
