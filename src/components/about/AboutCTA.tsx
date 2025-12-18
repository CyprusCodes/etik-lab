import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Calendar,
  FileText,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { getImagePath } from "@/utils/assets";

export const AboutCTA = () => (
  <section className="relative overflow-hidden -mt-32 z-30 min-h-[80vh]">
    {/* Background */}
    <div className="absolute inset-0 -z-20">
      <img
        src={getImagePath("medical-pictures/hero-home-03.jpg")}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/70" />
    </div>

    {/* Top transition */}
    <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-background via-background/70 to-transparent z-10 pointer-events-none" />

    {/* Content */}
    <div className="relative z-10 pt-20 lg:pt-32">
      <div className="relative p-8 md:p-12 lg:p-16 text-center overflow-hidden items-center pt-15">
        {/* Ambient effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-blob delay-300" />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-blob delay-700 opacity-50" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 animate-fade-in-up">
            Şimdi Randevu Al
          </h2>

          <p className="text-lg lg:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up">
            Uzman laboratuvar bilimcilerimiz tarafından yapılan testler için
            randevu oluşturun. Sağlığınız için ilk adımı bugün atın.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap animate-fade-in-up">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-50 font-bold h-14 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all group"
              asChild
            >
              <Link to="/randevu" className="inline-flex items-center gap-3">
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Randevu Al
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white/10 text-white hover:bg-white/20 font-bold h-14 px-8 rounded-full backdrop-blur-sm transition-all group"
              asChild
            >
              <Link to="/iletisim" className="inline-flex items-center gap-3">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                İletişim
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white/10 text-white hover:bg-white/20 font-bold h-14 px-8 rounded-full backdrop-blur-sm transition-all group"
              asChild
            >
              <a
                href="tel:+905338712042"
                className="inline-flex items-center gap-3"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Bizi Arayın
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-background pointer-events-none z-20" />
  </section>
);
