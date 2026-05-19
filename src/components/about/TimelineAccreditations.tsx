import React, { useEffect, useRef } from "react";
import { Award, CheckCircle, Download, ExternalLink } from "lucide-react";
import "./timeline-animations.css";
import { getImagePath } from "@/utils/assets";

const accreditations = [
  {
    year: 2021,
    title: "KBUDEK Eksternal Kalite Kontrol Programı",
    description:
      "Kalite kontrol konusundaki bağlılığımızı bir adım daha ileriye taşıdık",
    certificate: "/certificates/2021_Katılım Sertifikası.pdf",
    image: getImagePath("/certificates/2021_Katılım Sertifikası.png"),
  },
  {
    year: 2022,
    title: "KBUDEK Eksternal Kalite Kontrol Programı",
    description:
      "Her ay düzenli olarak KBUDEK'ten gelen numuneleri çalışıp kalitemizi arttırdık",
    certificate: "/certificates/2022_Katılım Sertifikası.pdf",
    image: getImagePath("/certificates/2022_Katılım Sertifikası.png"),
  },
  {
    year: 2023,
    title: "KBUDEK Eksternal Kalite Kontrol Programı",
    description:
      "Kalite standartlarımızı sürekli olarak geliştirmeye devam ettik",
    certificate: "/certificates/2023_Katılım Sertifikası.pdf",
    image: getImagePath("/certificates/2023_Katılım Sertifikası.png"),
  },
  {
    year: 2024,
    title: "KBUDEK Eksternal Kalite Kontrol Programı",
    description:
      "En güncel kalite standartları ile hizmet vermeye devam ediyoruz",
    certificate: "/certificates/2024_Katılım Sertifikası.pdf",
    image: getImagePath("/certificates/2024_Katılım Sertifikası.png"),
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
            <span className="text-teal-800 font-bold text-lg">
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
            className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto animate-fade-in-up"
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
                <p className="text-sm text-gray-700 leading-relaxed">
                  {achievement.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section with Image Display */}
        <div>
          <h3 className="text-3xl font-black text-foreground mb-12 text-center animate-fade-in-up">
            Akreditasyonlarımız
          </h3>

          <div ref={certificatesRef} className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {accreditations.map((accreditation, index) => (
                <div
                  key={accreditation.year}
                  data-cert-card
                  className="opacity-0 group"
                >
                  {/* Certificate Image - Clickable */}
                  <div
                    className="relative cursor-pointer"
                    onClick={() => window.open(accreditation.image, "_blank")}
                  >
                    <img
                      src={accreditation.image}
                      alt={`${accreditation.year} ${accreditation.title}`}
                      className="w-full h-auto object-contain rounded-2xl border-2 border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                      loading="lazy"
                    />

                    {/* Year badge */}
                    {/* <div className="absolute top-4 right-4 w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">
                        {accreditation.year}
                      </span>
                    </div> */}

                    {/* Hover overlay with click hint */}
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 rounded-2xl flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                        <span className="text-sm font-medium text-foreground flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Büyütmek için tıklayın
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Title */}
                  <div className="mt-6 text-center">
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      {accreditation.title}
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {accreditation.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Clean completion indicator */}
            {/* <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 text-gray-700">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {accreditations.length} akreditasyon sertifikası
                </span>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
            </div> */}
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
          <p className="text-base text-gray-700 leading-relaxed">
            Sizlerin sağlığı için çalışmaya devam edeceğiz ve gelecekte de en
            iyi tahlil hizmetini sunmayı sürdüreceğiz.
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
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
            transform: translateY(50px) rotateZ(0deg) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateZ(var(--rotation, 0deg)) scale(1);
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
