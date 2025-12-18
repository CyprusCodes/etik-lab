import React from "react";
import { getImagePath } from "@/utils/assets";

const technologies = [
  {
    title: "Evde Numune Alma",
    description: "Konforlu ve güvenli numune alma hizmeti",
    image: getImagePath("medical-pictures/home_experience_02.jpg"),
  },
  {
    title: "En Yüksek Kalitede Sonuçlar",
    description: "Uluslararası standartlarda doğruluk",
    image: getImagePath("medical-pictures/home_experience_03.jpg"),
  },
  {
    title: "En Yeni Ekipmanlar",
    description: "Son teknoloji laboratuvar cihazları",
    image: getImagePath("medical-pictures/home_experience_04.jpg"),
  },
  {
    title: "En Hızlı Sonuçlar",
    description: "Hızlı ve güvenilir test sonuçları",
    image: getImagePath("medical-pictures/image (1).png"),
  },
];

export const AboutTechnologies = () => (
  <section className="section-padding bg-secondary/30">
    <div className="container-wide">
      <div className="text-center mb-16">
        <h2 className="heading-2 text-foreground mb-4">Farklı Teknolojiler</h2>
        <p className="body-large text-muted-foreground max-w-3xl mx-auto">
          +10 yıllık tecrübe ile modern teknoloji ve uzman kadromuzla size en
          iyi hizmeti sunuyoruz.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {technologies.map((tech) => (
          <div
            key={tech.title}
            className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
          >
            <img
              src={tech.image}
              alt={tech.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="heading-4 text-foreground mb-2">{tech.title}</h3>
              <p className="body-base text-muted-foreground">
                {tech.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
