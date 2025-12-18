import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Clock, Users, Briefcase, ArrowRight } from "lucide-react";

const sections = [
  {
    title: "Kurumsal",
    description:
      "Şirket bilgileri, misyon ve vizyonumuz hakkında detaylı bilgi",
    icon: Building2,
    path: "/hakkimizda/kurumsal",
    color: "bg-blue-500",
  },
  {
    title: "Zaman Tüneli",
    description:
      "Kuruluşumuzdan bugüne kadar olan yolculuğumuz ve başarılarımız",
    icon: Clock,
    path: "/hakkimizda/zaman-tuneli",
    color: "bg-green-500",
  },
  {
    title: "Ekibimiz",
    description: "Uzman kadromuz ve laboratuvar bilimcilerimiz ile tanışın",
    icon: Users,
    path: "/hakkimizda/ekibimiz",
    color: "bg-purple-500",
  },
  {
    title: "Kariyer",
    description: "Takımımıza katılın ve kariyer fırsatlarını keşfedin",
    icon: Briefcase,
    path: "/kariyer",
    color: "bg-orange-500",
  },
];

export const AboutNavigation = () => (
  <section className="section-padding bg-gradient-to-br from-secondary/30 to-accent/10 relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </div>

    <div className="container-wide relative z-10">
      <div className="text-center mb-16">
        <h2 className="heading-2 text-foreground mb-4">
          Daha Fazla Bilgi Edinin
        </h2>
        <p className="body-large text-muted-foreground max-w-2xl mx-auto">
          Şirketimiz ve hizmetlerimiz hakkında detaylı bilgi için aşağıdaki
          bölümleri keşfedin
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((section, index) => (
          <Link
            key={section.path}
            to={section.path}
            className="group relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:shadow-2xl transition-all hover:-translate-y-3 hover:scale-105 overflow-hidden"
          >
            {/* Card background pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full">
                <defs>
                  <pattern
                    id={`pattern-${index}`}
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="10" cy="10" r="1" fill="currentColor" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill={`url(#pattern-${index})`}
                />
              </svg>
            </div>

            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div
                className={`w-16 h-16 ${section.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg`}
              >
                <section.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="heading-4 text-foreground mb-3 group-hover:text-primary transition-colors">
                {section.title}
              </h3>

              <p className="body-base text-muted-foreground mb-6 line-clamp-3">
                {section.description}
              </p>

              <div className="flex items-center text-primary font-semibold group-hover:gap-4 transition-all">
                Keşfet
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
