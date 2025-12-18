import React from "react";
import { getImagePath } from "@/utils/assets";

export const TimelineHero = () => (
  <section className="relative overflow-hidden min-h-[70vh] flex items-center">
    {/* Background */}
    <div className="absolute inset-0 -z-20">
      <img
        src={getImagePath("medical-pictures/image (2).png")}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/70" />
    </div>

    {/* Decorative elements */}
    {/* <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 right-20 w-64 h-64 border border-white/20 rounded-full animate-spin-slow" />
      <div className="absolute bottom-20 left-20 w-48 h-48 border-2 border-white/30 rounded-full animate-pulse" />
    </div> */}

    {/* Content */}
    <div className="container-wide relative z-10 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
          Zaman Tüneli
        </h1>
        <p className="text-xl md:text-2xl mb-12 leading-relaxed font-light opacity-95">
          Klinik denemeler için tam hizmet laboratuvarınız. Misyonumuz, doğru ve
          kesin bulguların üretilmesini sağlamaktır.
        </p>
        <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <span className="text-lg font-medium">
            2012'den Bugüne Yolculuğumuz
          </span>
        </div>
      </div>
    </div>
  </section>
);
