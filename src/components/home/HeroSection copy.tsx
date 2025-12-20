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
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background image with parallax effect */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${getImagePath(
            "medical-pictures/image.png"
          )}')`,
          transform: `translateY(${scrollY * 0.5}px)`,
          willChange: "transform",
        }}
      />

      {/* Dark gradient overlay - professional look */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* Additional overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Animated accent elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob opacity-30" />
        <div className="absolute -bottom-40 left-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-blob opacity-20 delay-300" />
      </div>

      {/* Content - positioned absolutely for proper overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container-wide w-full">
          <div className="max-w-3xl mx-auto text-center">
            {/* Upper label with fade-in */}
            {/* <div className="mb-8 animate-fade-in-down" style={{ animationDelay: '0ms' }}>
              <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-semibold tracking-wider">
                ✨ Akredite Laboratuvar Hizmetleri
              </span>
            </div> */}

            {/* Main headline with staggered animation */}
            <h1
              className="text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-tight animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <span className="block">Bilimin Işığında</span>
              <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                İleri Teknoloji
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed font-light animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              10+ yıllık deneyim, akredite kalite, modern teknoloji ile
              sağlığınız için en doğru tanı
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-bold h-14 px-10 rounded-full group shadow-2xl"
                asChild
              >
                <Link to="/randevu" className="inline-flex items-center gap-3">
                  Randevu Al
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="border-2 border-white bg-white/10 text-white hover:bg-white/20 font-bold h-14 px-10 rounded-full backdrop-blur-md transition-all duration-300"
                variant="outline"
                asChild
              >
                <a
                  href="http://93.182.78.97:8080/Bireysel.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sonuçları Kontrol Et
                </a>
              </Button>
            </div>

            {/* Stats with parallax offset */}
            <div
              className="mt-20 pt-12 border-t border-white/20 grid grid-cols-3 gap-8 animate-fade-in-up"
              style={{
                animationDelay: "400ms",
                transform: `translateY(${scrollY * 0.1}px)`,
              }}
            >
              {[
                { value: "10+", label: "Yıllık Deneyim" },
                { value: "100+", label: "Farklı Test" },
                { value: "7/24", label: "Hizmet" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl lg:text-5xl font-black text-white mb-2">
                    {stat.value}
                  </div>
                  <p className="text-white/80 text-sm lg:text-base font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Text-based accreditations */}
      <div className="absolute left-1/2 bottom-32 z-20 w-[92%] max-w-6xl">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "2021 – KBUDEK Eksternal Kalite Kontrol Programı",
            "2022 – KBUDEK Eksternal Kalite Kontrol Programı",
          ].map((item, idx) => (
            <div
              key={idx}
              className="
          px-4 py-2
          rounded-full
          bg-white/15 backdrop-blur-md
          border border-white/25
          text-white text-sm font-medium
          tracking-wide
          shadow-sm
        "
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Embedded accreditations marquee (part of hero, glass morphism) */}
      <div className="absolute left-1/2 bottom-1 z-20 w-[92%] max-w-6xl">
        {/* <div className="relative w-full rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg overflow-hidden"> */}
        {/* Decorative inner gradient */}
        {/* <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/10 via-transparent to-white/10" /> */}

        {/* Auto-scroll container - logos duplicated for smooth loop */}
        {/* Embedded accreditations logos (no glass slab) */}
        <div className="absolute left-1/2 bottom-6 md:bottom-8 z-20 w-[92%] max-w-6xl">
          {/* subtle blur strip so logos stay readable */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-2xl pointer-events-none" />

          <div
            ref={marqueeRef}
            className="
      relative z-10
      flex items-center gap-12
      px-8 py-4
      overflow-hidden
      whitespace-nowrap
    "
          >
            {[
              "/accreditations/image__5_-removebg-preview.png",
              "/accreditations/image__6_-removebg-preview.png",
              "/accreditations/image__7_-removebg-preview.png",
            ].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Akreditasyon ${idx + 1}`}
                className="h-10 md:h-12 lg:h-14 object-contain opacity-90 grayscale-[20%] flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* </div> */}
      </div>
    </section>
  );
}
