import React from "react";

const services = [
  {
    title: "Özel Laboratuvar Analitik Raporlarının Sunulması",
    description:
      "Özel laboratuvar analitik raporları, kesinlik ve güvenilirlikle hastaların sağlık hikayelerini destekler, sağlık profesyonellerine önemli bilgi sunar.",
    features: ["Detaylı Analiz", "Uzman Yorumlar", "Hızlı Raporlama"],
  },
  {
    title: "Sağlık Paketleri",
    description:
      "Kapsamlı check-up paketleri ile sağlığınızı düzenli olarak kontrol altında tutun.",
    features: ["Genel Check-up", "Özel Paketler", "Yaş Gruplarına Özel"],
  },
  {
    title: "Uzman Laboratuvar Testleri",
    description:
      "Uzman laboratuvar bilimcilerimiz tarafından yapılan testler için randevu oluşturun.",
    features: ["Uzman Kadro", "Modern Teknoloji", "Güvenilir Sonuçlar"],
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
            className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
          >
            <h3 className="heading-4 text-foreground mb-4">{service.title}</h3>
            <p className="body-base text-muted-foreground mb-6">
              {service.description}
            </p>
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
