import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Link } from "react-router-dom";
import {
  Building2,
  Truck,
  Dna,
  Activity,
  Shield,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Ayaktan Hasta Hizmetleri",
    description:
      "Modern laboratuvarımızda kan alma ve numune kabul hizmetleri.",
    href: "/hizmetlerimiz/ayaktan-hasta",
    color: "bg-primary-light text-primary",
  },
  {
    icon: Truck,
    title: "Evde Numune Alma",
    description: "Evinizden çıkmadan profesyonel numune alımı.",
    href: "/hizmetlerimiz/evde-numune",
    color: "bg-accent-light text-accent",
  },
  {
    icon: Dna,
    title: "Genetik Testler",
    description: "Hamilelik öncesi ve sonrası genetik tarama testleri.",
    href: "/hizmetlerimiz/genetik-testler",
    color: "bg-success-light text-success",
  },
  {
    icon: Activity,
    title: "SMA Testi",
    description: "Spinal Müsküler Atrofi taşıyıcılık testi.",
    href: "/hizmetlerimiz/sma-testi",
    color: "bg-warning-light text-warning",
  },
  {
    icon: Building2,
    title: "Kurumsal Hizmetler",
    description: "İşletmeler için özel sağlık tarama paketleri.",
    href: "/hizmetlerimiz/kurumsal",
    color: "bg-primary-light text-primary",
  },
  {
    icon: Shield,
    title: "Koronavirüs Testleri",
    description: "PCR ve antikor testleri ile COVID-19 tanı.",
    href: "/hizmetlerimiz/covid",
    color: "bg-accent-light text-accent",
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

      <section className="relative z-20 py-20 lg:py-32 bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 card-hover"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="heading-4 text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="body-base mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>Detaylı Bilgi</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
