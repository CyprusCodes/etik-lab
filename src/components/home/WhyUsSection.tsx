import {
  Microscope,
  Clock,
  Users,
  Shield,
  Truck,
  HeadphonesIcon,
} from "lucide-react";
import { useInView } from "@/hooks/useParallax";

const features = [
  {
    id: 1,
    icon: Microscope,
    title: "Modern Ekipman",
    description: "Son teknoloji laboratuvar cihazları ile en doğru sonuçlar.",
  },
  {
    id: 2,
    icon: Clock,
    title: "Hızlı Sonuçlar",
    description: "Çoğu test için aynı gün içinde sonuç alabilirsiniz.",
  },
  {
    id: 3,
    icon: Users,
    title: "Uzman Kadro",
    description: "Deneyimli hekim ve laborantlarımızla güvenilir hizmet.",
  },
  {
    id: 4,
    icon: Shield,
    title: "Yüksek Doğruluk",
    description: "%99.9 doğruluk oranı ile güvenilir test sonuçları.",
  },
  {
    id: 5,
    icon: Truck,
    title: "Evde Hizmet",
    description: "Evinizden çıkmadan numune alma hizmeti.",
  },
  {
    id: 6,
    icon: HeadphonesIcon,
    title: "7/24 Destek",
    description: "Her zaman ulaşabileceğiniz müşteri hizmetleri.",
  },
];

export function WhyUsSection() {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: gridRef, isInView: gridInView } = useInView();

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            NEDEN BİZ?
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
            Etik Laboratuvarı'nı{" "}
            <span className="text-primary">Tercih Edin</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            25 yılı aşkın deneyimimiz ve modern altyapımızla sağlığınız için en
            doğru sonuçları sunuyoruz.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className={`group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/50 hover:shadow-lg transition-all duration-500 card-3d overflow-hidden ${
                  gridInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: gridInView ? `${index * 100}ms` : "0ms",
                }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-full" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Floating accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
