import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useParallax";
import { useRef, useState, useEffect } from "react";
import { getImagePath } from "@/utils/assets";

const packages = [
  {
    id: 1,
    title: "Sporcu Check – Up Paketi",
    image: getImagePath("paketleri/Sporcu-Paketi.jpg"),
    href: "/paketler/sporcu-check-up-paketi",
  },
  {
    id: 2,
    title: "Saç Dökülmesi Paketi",
    image: getImagePath("paketleri/Sac-Dokulmesi-Paketi.jpg"),
    href: "/paketler/sac-dokulmesi-paketi",
  },
  {
    id: 3,
    title: "Kardiyak Checkup Paketi",
    image: getImagePath("paketleri/Kardiyak-Check-Up-Paketi.jpg"),
    href: "/paketler/kardiyak-checkup-paketi",
  },
  {
    id: 4,
    title: "Kansızlık ve Vitamin Eksikliği Kontrolü",
    image: getImagePath(
      "paketleri/Kansizlik-ve-Vitamin-Eksikligi-Kontrolu-Paketi.jpg"
    ),
    href: "/paketler/kansizlik-ve-vitamin-eksikligi-kontrolu",
  },
  {
    id: 5,
    title: "Kadın Checkup Paketi",
    image: getImagePath("paketleri/Kadin-Check-Up-Paketi.jpg"),
    href: "/paketler/kadin-checkup-paketi",
  },
  {
    id: 6,
    title: "Erkek Checkup Paketi",
    image: getImagePath("paketleri/Erkek-Check-Up.jpg"),
    href: "/paketler/erkek-checkup-paketi",
  },
  {
    id: 7,
    title: "Cinsel Yolla Bulaşan Hastalıklar",
    image: getImagePath("paketleri/Cinsel-Yolla-Bulasan.jpg"),
    href: "/test-panelleri/cinsel-hastaliklar",
  },
];

export function CheckUpSection() {
  const { ref, isInView } = useInView();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const cardWidth = 360 + 24; // card width + gap
        const nextIndex = (activeIndex + 1) % packages.length;

        container.scrollTo({
          left: nextIndex * cardWidth,
          behavior: "smooth",
        });

        setActiveIndex(nextIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, isAutoScrolling]);

  // Handle manual scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      setIsAutoScrolling(false);
      const container = scrollRef.current;
      const cardWidth = 360 + 24;
      const index = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(index);

      // Resume auto-scroll after 5 seconds of inactivity
      setTimeout(() => setIsAutoScrolling(true), 5000);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      setIsAutoScrolling(false);
      const cardWidth = 360 + 24;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);

      setTimeout(() => setIsAutoScrolling(true), 5000);
    }
  };

  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center mb-16 lg:mb-20 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            SAĞLIK PAKETLERİ
          </p>
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-foreground">
            Size Özel <span className="text-primary">Check-Up Paketleri</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Farklı ihtiyaçlara yönelik hazırlanmış sağlık kontrol paketleri.
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] snap-start"
              >
                <Link to={pkg.href} className="group block">
                  <div className="rounded-2xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4 leading-snug min-h-[56px]">
                        {pkg.title}
                      </h3>

                      <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        <span>Detayları İncele</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {packages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to package ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Packages Button */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="px-8 py-6 text-lg">
            <Link to="/paketler" className="inline-flex items-center gap-2">
              Tüm Paketleri Görüntüle
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
