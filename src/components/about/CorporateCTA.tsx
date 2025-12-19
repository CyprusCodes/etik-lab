import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, FileText, ArrowRight, Award } from "lucide-react";
import { getImagePath } from "@/utils/assets";

export const CorporateCTA = () => (
  <section className="relative overflow-hidden min-h-[80vh] flex items-center">
    {/* Background */}
    <div className="absolute inset-0 -z-20">
      <img
        src={getImagePath("medical-pictures/image (3).png")}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-accent/70 to-primary/90" />
    </div>

    {/* Floating elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-blob delay-700" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 border border-white/20 rounded-full animate-spin-slow" />
    </div>

    {/* Grid pattern */}
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="cta-grid"
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
        <rect width="100%" height="100%" fill="url(#cta-grid)" />
      </svg>
    </div>

    {/* Content */}
    <div className="container-wide relative z-10 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
          <Award className="w-5 h-5 mr-2" />
          <span className="font-semibold">Akredite Kalite</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
          <span className="block">Sağlığınız İçin</span>
          <span className="block bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            Güvenilir Partner
          </span>
        </h2>

        <p className="text-xl md:text-2xl mb-12 leading-relaxed font-light opacity-95">
          +10 yıllık deneyimimiz ve modern teknolojimizle sağlığınız için en
          doğru sonuçları sunuyoruz. Hemen randevu alın ve farkı yaşayın.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-50 font-bold h-16 px-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all group text-lg"
            asChild
          >
            <Link to="/randevu" className="inline-flex items-center gap-3">
              <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Hemen Randevu Al
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white bg-white/10 text-white hover:bg-white/20 font-bold h-16 px-10 rounded-2xl backdrop-blur-sm transition-all group text-lg"
            asChild
          >
            <a
              href="http://185.37.185.41:8080/Bireysel.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
            >
              <FileText className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Test Sonuçları
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white bg-white/10 text-white hover:bg-white/20 font-bold h-16 px-10 rounded-2xl backdrop-blur-sm transition-all group text-lg"
            asChild
          >
            <a
              href="tel:+905338712042"
              className="inline-flex items-center gap-3"
            >
              <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Bizi Arayın
            </a>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Akredite Kalite", value: "ISO 15189" },
            { label: "Deneyim", value: "10+ Yıl" },
            { label: "Test Çeşidi", value: "100+" },
            { label: "Hasta Memnuniyeti", value: "%99.5" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black mb-2">
                {item.value}
              </div>
              <div className="text-sm md:text-base text-white/80 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-20" />
  </section>
);
