import { Link } from "react-router-dom";
import {
  Building2,
  Truck,
  Dna,
  Activity,
  Shield,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useParallax";
import { getImagePath } from "@/utils/assets";

const services = [
  {
    id: 1,
    icon: Building2,
    title: "Ayaktan Hasta Hizmetleri",
    description:
      "Kliniğimizde hızlı, güvenilir ve profesyonel laboratuvar test hizmetleri.",
    image: getImagePath("medical-pictures/image (1).png"),
    href: "/hizmetlerimiz/ayaktan-hasta",
  },
  {
    id: 2,
    icon: Truck,
    title: "Evden Numune Alma",
    description:
      "Evden ayrılmadan, uzman ekibimiz tarafından güvenli numune alma hizmeti.",
    image: getImagePath("medical-pictures/image (2).png"),
    href: "/hizmetlerimiz/evden-numune",
  },
  {
    id: 3,
    icon: Activity,
    title: "Sağlık Kontrol Paketleri",
    description:
      "Erken teşhis ve düzenli takip için kapsamlı check-up paketleri.",
    image: getImagePath("medical-pictures/image (3).png"),
    href: "/hizmetlerimiz/saglik-kontrol-paketleri",
  },
  {
    id: 4,
    icon: Dna,
    title: "Hamilelik Öncesi & Sonrası Genetik Testler",
    description:
      "Anne ve bebek sağlığı için ileri düzey genetik tarama testleri.",
    image: getImagePath("medical-pictures/image (4).png"),
    href: "/hizmetlerimiz/genetik-testler",
  },
  {
    id: 5,
    icon: Activity,
    title: "SMA Testi",
    description:
      "Spinal Musküler Atrofi için güvenilir tarama ve tanı testleri.",
    image: getImagePath("medical-pictures/image.png"),
    href: "/hizmetlerimiz/sma-testi",
  },
  {
    id: 6,
    icon: Shield,
    title: "Kurumsal Hizmetler",
    description:
      "Şirketlere özel, akredite ve profesyonel laboratuvar çözümleri.",
    image: getImagePath("medical-pictures/image (1).png"),
    href: "/hizmetlerimiz/kurumsal",
  },
];

export function ServicesSection() {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: gridRef, isInView: gridInView } = useInView();

  // Small inner component so we can use hooks per-card
  function ServiceCard({ service, idx }: { service: any; idx: number }) {
    return (
      <Link to={service.href} className="group">
        <div
          className={`rounded-2xl overflow-hidden shadow-lg bg-white transition-all duration-500 ${
            gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: gridInView ? `${idx * 100}ms` : "0ms" }}
        >
          {/* Image */}
          <div className="h-44 md:h-48 w-full overflow-hidden bg-gray-100">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-2">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {service.description}
            </p>
            <div>
              <span className="inline-flex items-center gap-2 text-primary font-semibold">
                Detaylar
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-3xl mx-auto text-center mb-16 lg:mb-20 transition-all duration-1000 ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            HİZMETLERİMİZ
          </p>
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-foreground">
            Kapsamlı <span className="text-primary">Sağlık Hizmetleri</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Modern altyapımız ve uzman kadromuzla geniş yelpazede laboratuvar
            hizmetleri sunuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} idx={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-dark text-white font-bold h-14 px-10 rounded-full shadow-md"
            asChild
          >
            <Link
              to="/hizmetlerimiz"
              className="inline-flex items-center gap-2"
            >
              Tüm Hizmetleri Gör
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
