import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getImagePath } from "@/utils/assets";

export const AboutHero = () => (
  <section className="relative overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 -z-20">
      <img
        src={getImagePath("hero-bgs/about-us.jpg")}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/70" />
    </div>

    {/* Content */}
    <div className="relative z-10 min-h-[70vh] flex items-center">
      <div className="container-wide text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
          Hakkımızda
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
          Klinik denemeler için tam hizmet laboratuvarınız. Misyonumuz, doğru ve
          kesin bulguların üretilmesini sağlamaktır.
        </p>
        <div className="text-lg text-white/90 mb-12">
          Farklı Teknolojiler • İleri Çözümler • Güvenilir Sonuçlar
        </div>
      </div>
    </div>
  </section>
);
