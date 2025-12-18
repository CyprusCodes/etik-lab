import React, { useEffect, useRef } from "react";
import { Calendar, Award, Microscope, TrendingUp } from "lucide-react";
import "./timeline-animations.css";

const timelineData = [
  {
    year: 2012,
    month: "Mart 2012",
    title: "Kuruluş",
    description:
      "Etik Laboratuvarı, sağlık sektöründe kalite, güvenilirlik ve etik değerlere dayalı hizmet sunmayı prensip edinip bunun ışığında geçen yıllarda hasta portföyünü genişleterek ve bunun yanında teknolojik ilerlemelerden olabildiğince yararlanarak günümüze gelmiştir.",
    icon: Calendar,
    color: "bg-blue-500",
    achievements: ["Kuruluş", "Vizyon Belirleme", "İlk Adımlar"],
  },
  {
    year: 2013,
    month: "2013",
    title: "Hizmet Başlangıcı",
    description:
      "Kıbrıs'ta tıbbi tahlil hizmetleri sunmaya başlayarak bölgedeki sağlık sektöründe önemli bir adım attık. Hasta odaklı yaklaşımımız ve kaliteye verdiğimiz önem sayesinde +50,000 hastaya test yaparak sağlık alanında önemli bir rol oynadık.",
    icon: Microscope,
    color: "bg-green-500",
    achievements: ["Tıbbi Tahlil", "+50,000 Hasta", "Sektörel Adım"],
  },
  {
    year: 2021,
    month: "Ocak 2021",
    title: "Kalite ve Mükemmellik",
    description:
      "Etik Laboratuvarı, kalite kontrol konusundaki bağlılığını bir adım daha ileriye taşıdık ve KBUDEK Eksternal Kalite Kontrol Programlarına katılarak her ay düzenli olarak KBUDEK'ten gelen numuneleri çalışıp kalitemizi arttırdık.",
    icon: Award,
    color: "bg-purple-500",
    achievements: ["KBUDEK Katılımı", "Kalite Kontrol", "Akreditasyon"],
  },
  {
    year: 2022,
    month: "Ocak 2022",
    title: "Farklı Testler",
    description:
      "Kuzey Kıbrıs'ta çalışılmayan çoğu testleri laboratuvarımız bünyesinde taşıdık. Örneğin, Gıda Alerji Paneli, Solunum Alerji Paneli, Calprotectin, NT-PRO BNP Testlerini çalışmamıza aldık.",
    icon: TrendingUp,
    color: "bg-orange-500",
    achievements: [
      "Gıda Alerji Paneli",
      "Solunum Alerji Paneli",
      "Calprotectin",
      "NT-PRO BNP",
    ],
  },
];

export const TimelineJourney = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !progressLineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Calculate progress based on scroll position
      const scrollProgress = Math.min(
        Math.max(
          (viewportHeight - elementTop) / (viewportHeight + elementHeight),
          0
        ),
        1
      );

      // Update progress line height
      progressLineRef.current.style.height = `${scrollProgress * 100}%`;

      // Animate timeline items
      const items = timelineRef.current.querySelectorAll(
        "[data-timeline-item]"
      );
      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemProgress = (viewportHeight - itemRect.top) / viewportHeight;

        if (itemProgress > 0.3) {
          item.classList.add("animate-slide-in-view");
          // Stagger animation delays
          (item as HTMLElement).style.animationDelay = `${index * 0.2}s`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-foreground mb-4 animate-fade-in-up">
            Yolculuğumuz
          </h2>
          <p
            className="body-large text-muted-foreground max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            2012'den bu yana sürekli gelişim ve yenilikçilik ilkeleriyle sağlık
            sektöründe öncü olmaya devam ediyoruz.
          </p>
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Background Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 rounded-full opacity-30" />

          {/* Animated Progress Line */}
          <div
            ref={progressLineRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full transition-all duration-300 ease-out"
            style={{ height: "0%", top: "0" }}
          />

          <div className="space-y-24">
            {timelineData.map((item, index) => (
              <div
                key={item.year}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } gap-8 opacity-0 translate-y-8`}
                data-timeline-item
              >
                {/* Content Card */}
                <div className="flex-1">
                  <div
                    className={`bg-card/90 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 ${
                      index % 2 === 0 ? "ml-8" : "mr-8"
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                      >
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-foreground mb-1 group-hover:text-primary transition-colors">
                          {item.year}
                        </h3>
                        <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">
                          {item.month}
                        </p>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement, idx) => (
                        <span
                          key={achievement}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold hover:bg-primary/20 transition-colors cursor-default"
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10">
                  <div className="w-8 h-8 bg-white rounded-full border-4 border-primary shadow-xl animate-pulse-slow">
                    <div className="w-full h-full bg-primary rounded-full animate-ping opacity-20" />
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .animate-slide-in-view {
          animation: slideInView 0.8s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes slideInView {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
