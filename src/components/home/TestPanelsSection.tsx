import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";
import { getImagePath } from "@/utils/assets";

const testPanels = [
  {
    title: "Tiroid Paneli",
    description:
      "Tiroid bezinin fonksiyonlarını ve otoimmün durumlarını değerlendiren testler.",
    image: getImagePath("panell/tp.png"),
    href: "/test-panelleri/tiroid",
    tests: ["TSH", "Serbest T4", "Serbest T3", "Anti-TPO"],
  },
  {
    title: "TORCH Paneli",
    description:
      "Hamilelik öncesi ve sırasında önemli enfeksiyonların taranmasına yönelik testler.",
    image: getImagePath("panell/torch.png"),
    href: "/test-panelleri/torch",
    tests: ["Toxoplasma", "Rubella", "CMV", "HSV 1/2"],
  },
  {
    title: "Kolon Kanseri Paneli",
    description:
      "Kolon kanseri erken tanısı ve taramasına yönelik kapsamlı test paneli.",
    image: getImagePath("panell/kkp.png"),
    href: "/test-panelleri/kolon-kanseri",
    tests: ["CEA", "CA 19-9", "Okült Kan", "Genetik Belirteçler"],
  },
  {
    title: "Anemi Paneli",
    description:
      "Demir eksikliği ve kansızlık tanısı için kapsamlı kan analizleri.",
    image: getImagePath("panell/ap.png"),
    href: "/test-panelleri/anemi",
    tests: ["Ferritin", "Demir", "Vitamin B12", "Folat"],
  },
  {
    title: "Çölyak Paneli",
    description:
      "Çölyak hastalığı ve gluten intoleransının değerlendirilmesine yönelik serolojik testler.",
    image: getImagePath("panell/cp.png"),
    href: "/test-panelleri/colyak",
    tests: ["Anti-tTG", "Anti-DGP", "Total IgA"],
  },
  {
    title: "Diyabet Paneli",
    description:
      "Kan şekeri metabolizmasını değerlendiren kapsamlı diyabet tarama testleri.",
    image: getImagePath("panell/dp.png"),
    href: "/test-panelleri/diyabet",
    tests: ["Glukoz", "HbA1c", "İnsülin", "HOMA-IR"],
  },
  {
    title: "Romatoloji Paneli",
    description:
      "Romatizmal hastalıkların tanısı ve takibi için özel test paneli.",
    image: getImagePath("panell/rp.png"),
    href: "/test-panelleri/romatoloji",
    tests: ["RF", "Anti-CCP", "ANA", "ESR"],
  },
  {
    title: "Cinsel Hastalıklar",
    description:
      "HIV, HPV, Herpes, Klamidya ve diğer cinsel yolla bulaşan hastalıkların tanı ve tarama testleri.",
    image: getImagePath("panell/ch.png"),
    href: "/test-panelleri/cinsel-hastaliklar",
    tests: ["HIV", "HPV", "Herpes Simplex", "Klamidya"],
  },
];

export function TestPanelsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress through the section
      const scrollStart = rect.top;
      const scrollEnd = rect.bottom - viewportHeight;
      const totalScrollDistance = sectionHeight - viewportHeight;

      if (scrollStart <= 0 && scrollEnd >= 0) {
        const progress = Math.abs(scrollStart) / totalScrollDistance;
        setScrollProgress(Math.min(Math.max(progress, 0), 1));

        // Calculate active card index
        const cardIndex = Math.floor(progress * testPanels.length);
        setActiveIndex(Math.min(cardIndex, testPanels.length - 1));
      } else if (scrollStart > 0) {
        setScrollProgress(0);
        setActiveIndex(0);
      } else {
        setScrollProgress(1);
        setActiveIndex(testPanels.length - 1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: `${100 + testPanels.length * 60}vh` }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-20">
        <div className="container-wide">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              TEST PANELLERİ
            </p>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-foreground">
              Kapsamlı <span className="text-primary">Test Panellerimiz</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hastalık gruplarına göre hazırlanmış özel test paketlerimizle
              doğru tanı için doğru testler.
            </p>
          </div>

          {/* Card Stack */}
          <div className="relative h-[420px] max-w-7xl mx-auto">
            {testPanels.map((panel, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;
              const isFuture = index > activeIndex;

              // Calculate individual card progress
              const cardProgress = scrollProgress * testPanels.length - index;
              const clampedProgress = Math.min(Math.max(cardProgress, 0), 1);

              // Stack offset for upcoming cards
              const stackOffset = isFuture ? (index - activeIndex) * 12 : 0;
              const stackScale = isFuture
                ? 1 - (index - activeIndex) * 0.03
                : 1;

              return (
                <Link
                  key={panel.title}
                  to={panel.href}
                  className="absolute inset-0 block"
                  style={{
                    zIndex: testPanels.length - index + (isActive ? 10 : 0),
                    opacity: isPast ? 0 : 1,
                    transform: `
                      translateY(${isPast ? -100 : stackOffset}px) 
                      scale(${isPast ? 0.9 : stackScale})
                      ${isPast ? "rotateX(10deg)" : ""}
                    `,
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <div className="h-full bg-card rounded-3xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="grid md:grid-cols-2 h-full">
                      {/* Image Side */}
                      <div className="relative h-48 md:h-full overflow-hidden">
                        <img
                          src={panel.image}
                          alt={panel.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card/80 via-transparent to-transparent" />

                        {/* Card Counter */}
                        <div className="absolute top-4 left-4 px-3 py-1.5 bg-foreground/80 backdrop-blur-sm text-background text-xs font-semibold rounded-full">
                          {index + 1} / {testPanels.length}
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                          {panel.title}
                        </h3>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {panel.description}
                        </p>

                        {/* Test Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {panel.tests.map((test) => (
                            <span
                              key={test}
                              className="px-3 py-1.5 bg-secondary rounded-full text-xs font-medium text-secondary-foreground"
                            >
                              {test}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-primary font-semibold group">
                          <span>Paneli İncele</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testPanels.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-primary"
                    : index < activeIndex
                    ? "bg-primary/40"
                    : "bg-border"
                }`}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Button variant="default" size="lg" asChild>
              <Link to="/test-panelleri">
                Tüm Test Panellerini Görüntüle
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
