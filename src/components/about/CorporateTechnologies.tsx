import React from "react";
import { getImagePath } from "@/utils/assets";

const technologies = [
  {
    title: "Evde Numune Alma",
    description: "Konforlu ve güvenli numune alma hizmeti",
    image: getImagePath("medical-pictures/home_experience_02.jpg"),
    features: ["Güvenli", "Pratik", "Hızlı"],
  },
  {
    title: "En Yüksek Kalitede Sonuçlar",
    description: "Uluslararası standartlarda doğruluk",
    image: getImagePath("medical-pictures/home_experience_03.jpg"),
    features: ["%99.9 Doğruluk", "ISO Standart", "Güvenilir"],
  },
  {
    title: "En Yeni Ekipmanlar",
    description: "Son teknoloji laboratuvar cihazları",
    image: getImagePath("medical-pictures/home_experience_04.jpg"),
    features: ["Modern", "Otomatik", "Hassas"],
  },
  {
    title: "En Hızlı Sonuçlar",
    description: "Hızlı ve güvenilir test sonuçları",
    image: getImagePath("medical-pictures/image (1).png"),
    features: ["Acil Servis", "Online", "24 Saat"],
  },
];

export const CorporateTechnologies = () => (
  <section className="section-padding bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-blob delay-1000" />
    </div>

    <div className="container-wide relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            İleri Teknoloji
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          +10 yıllık tecrübe ile modern teknoloji ve uzman kadromuzla size en
          iyi hizmeti sunuyoruz.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {technologies.map((tech, index) => (
          <div
            key={tech.title}
            className={`group relative ${index % 2 === 1 ? "md:mt-16" : ""}`}
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Feature badges on image */}
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                  {tech.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
