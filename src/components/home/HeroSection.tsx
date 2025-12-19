import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getImagePath } from "@/utils/assets";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden flex flex-col"
      style={{ minHeight: "100vh", paddingTop: "120px" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${getImagePath(
            "medical-pictures/image.png"
          )}')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/75" />

      <div className="relative z-10 flex-1 flex items-center justify-center px-4">
        <div className="container-wide text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-6">
            <span className="block">Bilimin Işığında</span>
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              İleri Teknoloji
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8  font-light px-4">
            10+ yıllık deneyim, akredite kalite, modern teknoloji ile sağlığınız
            için en doğru tanı
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Button
              size="lg"
              className="bg-white text-primary font-bold h-12 sm:h-14 px-8 sm:px-10 rounded-full hover:scale-105 hover:bg-primary hover:text-white transition-all duration-300"
              asChild
            >
              <Link to="/randevu" className="flex items-center gap-3">
                Randevu Al
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white h-12 sm:h-14 px-8 sm:px-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all"
              asChild
            >
              <a
                href="http://185.37.185.41:8080/Bireysel.html"
                target="_blank"
                rel="noreferrer"
              >
                Test Sonuçları
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { value: "10+", label: "Yıllık Deneyim" },
              { value: "100+", label: "Farklı Test" },
              { value: "7/24", label: "Hizmet" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
                  {s.value}
                </div>
                <p className="text-xs sm:text-sm md:text-base text-white/80 mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="relative z-20 pb-6 sm:pb-8 md:pb-10 px-4 mt-8 sm:mt-12 md:mt-16">
        <div className="container-wide max-w-6xl mx-auto space-y-4 sm:space-y-6">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
            {[
              "2021 – KBUDEK Eksternal Kalite Kontrol Programı",
              "2022 – KBUDEK Eksternal Kalite Kontrol Programı",
            ].map((item) => (
              <span
                key={item}
                className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Scrolling logos */}
          <div className="relative w-full overflow-hidden">
            <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 flex-wrap">
              {[
                "/accreditations/kktc.png",
                "/accreditations/kbudek.png",
                "/accreditations/etik-hastanesi.png",
              ].map((src, i) => (
                <img
                  key={i}
                  src={getImagePath(src)}
                  className=" h-10 sm:h-12 md:h-14 lg:h-16 opacity-90 hover:opacity-100 transition-all  rounded-xl"
                  alt="Akreditasyon"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
