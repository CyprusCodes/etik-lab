import React from "react";
import { getImagePath } from "@/utils/assets";

export const CheckUpHero = () => (
  <section className="relative min-h-[80vh] flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 -z-20">
      <img
        src={getImagePath("medical-pictures/image (2).png")}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-accent/75 to-primary/90" />
    </div>

    {/* Decorative elements */}
    {/* <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 right-1/4 w-80 h-80 border border-white/20 rounded-full animate-spin-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 border-2 border-white/30 rounded-full animate-pulse" />
    </div> */}

    {/* Grid pattern */}
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="checkup-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#checkup-grid)" />
      </svg>
    </div>

    {/* Content */}
    <div className="container-wide relative z-10 text-center text-white">
      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
          <span className="text-lg font-semibold">Check-Up Paketleri</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight">
          <span className="block">Sağlığınız İçin</span>
          <span className="block bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            Erken Teşhis
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-12 leading-relaxed font-light opacity-95 max-w-4xl mx-auto">
          Henüz belirti vermeyen hastalıkların erken tanısı için kritik öneme
          sahip kapsamlı check-up paketleri. Yaş, cinsiyet ve risk
          faktörlerinize göre özel olarak hazırlanmıştır.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "15+", label: "Farklı Paket", icon: "📋" },
            { value: "100+", label: "Test Çeşidi", icon: "🧪" },
            { value: "24h", label: "Hızlı Sonuç", icon: "⚡" },
            { value: "7/24", label: "Danışmanlık", icon: "💬" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute" />

              <div className="relative">
                <div className="text-2xl md:text-3xl font-black mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/90 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
