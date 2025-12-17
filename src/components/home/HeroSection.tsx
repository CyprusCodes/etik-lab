import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useAutoScroll } from "@/hooks/useAutoScroll";

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
          backgroundImage: `url('/medical-pictures/image.png')`,
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
      <div className="absolute left-1/2 -translate-x-1/2 bottom-36 z-20 w-[92%] max-w-6xl">
        <div className="flex justify-center gap-3 flex-wrap">
          {[
            "2021 – KBUDEK Eksternal Kalite Kontrol Programı",
            "2022 – KBUDEK Eksternal Kalite Kontrol Programı",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      {/* Logos marquee — CENTERED + LOCKED */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-12 z-20 w-[92%] max-w-6xl">
        {/* subtle readability strip */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-2xl pointer-events-none" />

        <div
          ref={marqueeRef}
          className="relative flex items-center gap-14 px-8 py-4 overflow-hidden whitespace-nowrap"
        >
          {[
            "/accreditations/image__5_-removebg-preview.png",
            "/accreditations/image__6_-removebg-preview.png",
            "/accreditations/image__7_-removebg-preview.png",
            "/accreditations/image__8_-removebg-preview.png",
            "/accreditations/image__5_-removebg-preview.png",
            "/accreditations/image__6_-removebg-preview.png",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              className="h-10 md:h-12 lg:h-14 opacity-90 grayscale-[20%] flex-shrink-0"
              alt="Akreditasyon"
            />
          ))}
        </div>
      </div>
      {/* Fade into next section
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-white" /> */}
    </section>
  );
}
