import React, { useEffect, useRef } from "react";
import { Award, CheckCircle, Download, ExternalLink } from "lucide-react";
import "./timeline-animations.css";

const accreditations = [
  {
    year: 2021,
    title: "KBUDEK Eksternal Kalite Kontrol Programı",
    description:
      "Kalite kontrol konusundaki bağlılığımızı bir adım daha ileriye taşıdık",
    certificate: "/certificates/2021_Katılım Sertifikası.pdf",
  },
  {
    year: 2022,
    title: "KBUDEK Eksternal Kalite Kontrol Programı",
    description:
      "Her ay düzenli olarak KBUDEK'ten gelen numuneleri çalışıp kalitemizi arttırdık",
    certificate: "/certificates/2022_Katılım Sertifikası.pdf",
  },
  {
    year: 2023,
    title: "KBUDEK Eksternal Kalite Kontrol Programı",
    description:
      "Kalite standartlarımızı sürekli olarak geliştirmeye devam ettik",
    certificate: "/certificates/2023_Katılım Sertifikası.pdf",
  },
  {
    year: 2024,
    title: "KBUDEK Eksternal Kalite Kontrol Programı",
    description:
      "En güncel kalite standartları ile hizmet vermeye devam ediyoruz",
    certificate: "/certificates/2024_Katılım Sertifikası.pdf",
  },
];

const achievements = [
  {
    title: "İleri Teknoloji",
    subtitle: "Güvenilir Çözümler, İleri Teknolojiyle",
    icon: "🔬",
  },
  {
    title: "+100 Farklı Test",
    subtitle: "Kapsamlı test yelpazesi",
    icon: "🧪",
  },
  {
    title: "Güvenli Teşhisler",
    subtitle:
      "Güvenilir Laboratuvar, Sağlığınıza Duyduğumuz Saygının Bir Yansımasıdır",
    icon: "🛡️",
  },
  {
    title: "Sağlık Paketleri",
    subtitle: "Check-Up Paketleri",
    icon: "📋",
  },
];

export const TimelineAccreditations = () => {
  const certificatesRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Animate achievements
      if (achievementsRef.current) {
        const rect = achievementsRef.current.getBoundingClientRect();
        const progress = (window.innerHeight - rect.top) / window.innerHeight;

        if (progress > 0.2) {
          const cards = achievementsRef.current.querySelectorAll(
            "[data-achievement-card]"
          );
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("animate-float-in");
            }, index * 150);
          });
        }
      }

      // Animate certificate stacks
      if (certificatesRef.current) {
        const rect = certificatesRef.current.getBoundingClientRect();
        const progress = (window.innerHeight - rect.top) / window.innerHeight;

        if (progress > 0.1) {
          const cards =
            certificatesRef.current.querySelectorAll("[data-cert-card]");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("animate-stack-reveal");
            }, index * 200);
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-blob delay-1000" />
      </div>

      <div className="container-wide relative z-10">
        {/* Accredited Quality Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 bg-primary/10 backdrop-blur-sm rounded-full mb-8 animate-fade-in-up shadow-lg">
            <Award className="w-6 h-6 text-primary mr-3" />
            <span className="text-primary font-bold text-lg">
              ACCREDITED QUALITY
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 animate-fade-in-up leading-tight"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              "Her Zaman En İyi Sonuçları Almanızı Sağlayacağız"
            </span>
          </h2>

          <p
            className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Etiklab: Güvenilir Teşhisler, Yüksek Kalite
          </p>

          {/* Achievement Cards */}
          <div
            ref={achievementsRef}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                data-achievement-card
                className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 group opacity-0 translate-y-8 hover:-translate-y-2"
                style={{
                  transform: `rotate(${(index % 2 === 0 ? -1 : 1) * 2}deg)`,
                }}
              >
                <div className="text-4xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section with Stacked Animation */}
        <div>
          <h3 className="text-3xl font-black text-foreground mb-12 text-center animate-fade-in-up">
            Akreditasyonlarımız
          </h3>

          <div ref={certificatesRef} className="relative max-w-6xl mx-auto">
            {/* Stack effect container */}
            <div className="relative h-[600px] md:h-[400px]">
              {accreditations.map((accreditation, index) => (
                <div
                  key={accreditation.year}
                  data-cert-card
                  className="absolute w-full md:w-80 bg-card rounded-3xl p-8 border-2 border-border shadow-2xl opacity-0 transition-all duration-700 hover:shadow-3xl group cursor-pointer"
                  style={{
                    left: `${index * 15}%`,
                    top: `${index * 20}px`,
                    transform: `rotate(${
                      (index % 2 === 0 ? -1 : 1) * (index + 1) * 2
                    }deg) scale(${1 - index * 0.05})`,
                    zIndex: accreditations.length - index,
                  }}
                >
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-3xl font-black text-primary group-hover:text-accent transition-colors">
                        {accreditation.year}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      {accreditation.title}
                    </h4>

                    <p className="text-sm text-muted-foreground mb-8 leading-relaxed line-clamp-3">
                      {accreditation.description}
                    </p>

                    <div className="flex gap-3">
                      <a
                        href={accreditation.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-md"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Download className="w-4 h-4" />
                        Sertifika PDF
                      </a>
                      <a
                        href={accreditation.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border-2 border-border rounded-xl hover:bg-secondary transition-all hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Thank You Message with Floating Animation */}
        <div className="text-center mt-24 p-10 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm rounded-3xl border border-border/50 shadow-2xl animate-float">
          <div className="animate-bounce-slow mb-6">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
          </div>
          <p className="text-xl text-foreground mb-6 font-semibold">
            Etik Laboratuvarı olarak, 2013 yılından bu yana bize güvenen
            hastalarımıza teşekkür ediyoruz.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Sizlerin sağlığı için çalışmaya devam edeceğiz ve gelecekte de en
            iyi tahlil hizmetini sunmayı sürdüreceğiz.
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .animate-float-in {
          animation: floatIn 0.8s ease-out forwards;
        }

        .animate-stack-reveal {
          animation: stackReveal 1s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(50px) rotateZ(10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateZ(var(--rotation, 0deg));
          }
        }

        @keyframes stackReveal {
          from {
            opacity: 0;
            transform: translateY(100px) rotateZ(0deg) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateZ(var(--rotation))
              scale(var(--scale));
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};
