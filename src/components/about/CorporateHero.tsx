import React from "react";
import { getImagePath } from "@/utils/assets";

export const CorporateHero = () => (
  <section className="relative min-h-[100vh] flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 -z-20">
      <img
        src={getImagePath("medical-pictures/image (4).png")}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70" />
    </div>

    {/* Decorative elements */}
    {/* <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-white/20 rounded-full animate-spin-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 border-2 border-white/30 rounded-full animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full blur-xl animate-blob" />
    </div> */}

    {/* Content */}
    <div className="container-wide relative z-10 text-center text-white">
      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
          <span className="text-lg font-semibold">Kurumsal</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight">
          <span className="block">Farklı Teknolojiler</span>
          <span className="block bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            İleri Çözümler
          </span>
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl mb-16 leading-relaxed font-light opacity-95 max-w-4xl mx-auto">
          Klinik denemeler için tam hizmet laboratuvarınız. Misyonumuz, doğru ve
          kesin bulguların üretilmesini sağlamaktır.
        </p>

        {/* Floating Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { value: "10+", label: "Yıllık Deneyim", icon: "🏆" },
            { value: "100+", label: "Farklı Test", icon: "🧪" },
            { value: "50K+", label: "Mutlu Hasta", icon: "❤️" },
            { value: "7/24", label: "Hizmet", icon: "⚡" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Floating background */}

              <div className="relative ">
                <div className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 text-white">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white/90 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accreditation Logos */}
        <div className="border-t border-white/20 pt-12">
          <p className="text-lg text-white/80 mb-8 font-medium">
            Akredite Kalite Standartları
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {[
              "/accreditations/kktc.png",
              "/accreditations/kbudek.png",
              "/accreditations/etik-hastanesi.png",
            ].map((src, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl group-hover:bg-white/20 transition-all" />
                <img
                  src={getImagePath(src)}
                  className="relative h-12 md:h-16 lg:h-20 opacity-90 hover:opacity-100 transition-all group-hover:scale-110 rounded-xl"
                  alt="Akreditasyon"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
