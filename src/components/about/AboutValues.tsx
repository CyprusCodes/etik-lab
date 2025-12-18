import React from "react";
import { Award, Users, Target, Heart } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Kalite",
    description: "Uluslararası standartlarda hizmet kalitesi",
  },
  {
    icon: Users,
    title: "Güven",
    description: "25 yılı aşkın deneyim ve güvenilirlik",
  },
  {
    icon: Target,
    title: "Doğruluk",
    description: "%99.9 doğruluk oranı ile sonuçlar",
  },
  {
    icon: Heart,
    title: "Hasta Odaklılık",
    description: "Her zaman hastalarımızın yanında",
  },
];

export const AboutValues = () => (
  <section className="container-wide grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
    {values.map((value) => (
      <div
        key={value.title}
        className="bg-card rounded-2xl p-6 border border-border card-hover"
      >
        <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4">
          <value.icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="heading-4 text-foreground mb-2">{value.title}</h3>
        <p className="body-base">{value.description}</p>
      </div>
    ))}
  </section>
);
