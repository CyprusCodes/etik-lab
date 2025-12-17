import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useAutoScroll } from "@/hooks/useAutoScroll";
import { getImagePath } from "@/utils/assets";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const marqueeRef = useAutoScroll(0.6);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container-wide text-center max-w-3xl">
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8">
            <span className="block">Bilimin Işığında</span>
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              İleri Teknoloji
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-white/90 mb-12 font-light">
            10+ yıllık deneyim, akredite kalite, modern teknoloji ile sağlığınız
            için en doğru tanı
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary font-bold h-14 px-10 rounded-full"
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
              className="border-white text-white h-14 px-10 rounded-full bg-white/10"
              asChild
            >
              <a
                href="https://etiklabsonuc.com"
                target="_blank"
                rel="noreferrer"
              >
                Sonuçları Kontrol Et
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 pt-12 border-t border-white/20 grid grid-cols-3 gap-8">
            {[
              { value: "10+", label: "Yıllık Deneyim" },
              { value: "100+", label: "Farklı Test" },
              { value: "7/24", label: "Hizmet" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl lg:text-5xl font-black text-white">
                  {s.value}
                </div>
                <p className="text-white/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Accreditation text — CENTERED */}
      {/* Accreditation text — CENTERED */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-8 px-4">
        <div className="container-wide max-w-5xl mx-auto">
          {/* Accreditation badges */}
          <div className="flex justify-center items-center gap-2 lg:gap-3 mb-6">
            {[
              "2021 – KBUDEK Eksternal Kalite Kontrol Programı",
              "2022 – KBUDEK Eksternal Kalite Kontrol Programı",
            ].map((item) => (
              <span
                key={item}
                className="px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[10px] sm:text-xs lg:text-sm whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Scrolling logos - no background */}
          <div className="relative w-full overflow-hidden flex justify-center">
            <div
              className="flex items-center gap-8 md:gap-12 lg:gap-16"
              // style={{ animation: "scroll 30s linear infinite" }}
            >
              {[
                "/accreditations/kktc.png",
                "/accreditations/kbudek.png",
                "/accreditations/etik-hastanesi.png",
                "/accreditations/turak.png",
              ].map((src, i) => (
                <img
                  key={i}
                  src={getImagePath(src)}
                  className="h-12 md:h-14 lg:h-16 opacity-90 flex-shrink-0"
                  alt="Akreditasyon"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
      {/* Fade into next section
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-white" /> */}
    </section>
  );
}
