import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Özel Laboratuvar Analitik Raporlarının Sunulması",
    description:
      "Özel laboratuvar analitik raporları, kesinlik ve güvenilirlikle hastaların sağlık hikayelerini destekler, sağlık profesyonellerine önemli bilgi sunar.",
    features: ["Detaylı Analiz", "Uzman Yorumlar", "Hızlı Raporlama"],
    link: "/hizmetlerimiz",
    linkText: "Hizmetlerimizi Görüntüle",
  },
  {
    title: "Sağlık Paketleri",
    description:
      "Kapsamlı check-up paketleri ile sağlığınızı düzenli olarak kontrol altında tutun.",
    features: ["Genel Check-up", "Özel Paketler", "Yaş Gruplarına Özel"],
    link: "/paketler",
    linkText: "Paketleri İncele",
  },
  {
    title: "Uzman Laboratuvar Testleri",
    description:
      "Uzman laboratuvar bilimcilerimiz tarafından yapılan testler için randevu oluşturun.",
    features: ["Uzman Kadro", "Modern Teknoloji", "Güvenilir Sonuçlar"],
    link: "/test-panelleri",
    linkText: "Test Panellerini Gör",
  },
];

export const AboutServices = () => (
  <section className="section-padding">
    <div className="container-wide">
      <div className="text-center mb-16">
        <h2 className="heading-2 text-foreground mb-4">Servisler</h2>
        <p className="body-large text-muted-foreground max-w-3xl mx-auto">
          Güvenilir çözümler ve ileri teknolojiyle güvenli teşhisler sunuyoruz.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
          >
            <h3 className="heading-4 text-foreground mb-4 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="body-base text-muted-foreground mb-6">
              {service.description}
            </p>
            <ul className="space-y-2 mb-8">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Navigation Link */}
            <Link
              to={service.link}
              className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:text-primary/80 transition-colors group-hover:gap-3"
            >
              {service.linkText}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);
