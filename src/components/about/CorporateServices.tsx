import React from "react";
import { Shield, Award, Users, Zap, Heart, TrendingUp } from "lucide-react";

const services = [
  {
    title: "Özel Laboratuvar Analitik Raporlarının Sunulması",
    description:
      "Özel laboratuvar analitik raporları, kesinlik ve güvenilirlikle hastaların sağlık hikayelerini destekler, sağlık profesyonellerine önemli bilgi sunar.",
    icon: Shield,
    color: "from-blue-500 to-blue-600",
    stats: ["Detaylı Analiz", "Uzman Yorumlar", "Hızlı Raporlama"],
  },
  {
    title: "Sağlık Paketleri",
    description:
      "Kapsamlı check-up paketleri ile sağlığınızı düzenli olarak kontrol altında tutun.",
    icon: Heart,
    color: "from-red-500 to-pink-500",
    stats: ["Genel Check-up", "Özel Paketler", "Yaş Gruplarına Özel"],
  },
];

const achievements = [
  {
    icon: Award,
    title: "En Yüksek Kalitede Sonuçlar",
    description: "Uluslararası standartlarda laboratuvar hizmetleri",
    metric: "%99.9",
    metricLabel: "Doğruluk Oranı",
  },
  {
    icon: Zap,
    title: "En Yeni Ekipmanlar",
    description: "Son teknoloji laboratuvar cihazları ile hizmet",
    metric: "2024",
    metricLabel: "Model Cihazlar",
  },
  {
    icon: TrendingUp,
    title: "En Hızlı Sonuçlar",
    description: "Hızlı ve güvenilir test sonuçları",
    metric: "24/7",
    metricLabel: "Hizmet",
  },
  {
    icon: Users,
    title: "+10 Yıllık Tecrübe",
    description: "Deneyimli uzman kadro ile güvenilir hizmet",
    metric: "50K+",
    metricLabel: "Mutlu Hasta",
  },
];

export const CorporateServices = () => (
  <section className="section-padding bg-gradient-to-br from-secondary/20 to-accent/10 relative">
    {/* Background pattern */}
    <div className="absolute inset-0 opacity-5">
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="corporate-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#corporate-grid)" />
      </svg>
    </div>

    <div className="container-wide relative z-10">
      {/* Services Section */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Servislerimiz
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Güvenilir çözümler ve ileri teknolojiyle sağlığınız için en iyi
          hizmeti sunuyoruz.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid lg:grid-cols-2 gap-12 mb-24">
        {services.map((service, index) => (
          <div key={service.title} className="group relative">
            {/* Gradient background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity blur-xl`}
            />

            <div className="relative bg-card/90 backdrop-blur-sm rounded-3xl p-10 border border-border/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start gap-6 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {service.stats.map((stat, idx) => (
                  <span
                    key={stat}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold hover:bg-primary/20 transition-colors"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Achievements Grid */}
      <div className="text-center mb-16">
        <h3 className="text-3xl font-black text-foreground mb-4">
          Neden Bizi Seçmelisiniz?
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Kalite, güvenilirlik ve müşteri memnuniyeti odaklı yaklaşımımızla fark
          yaratıyoruz.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {achievements.map((achievement, index) => (
          <div
            key={achievement.title}
            className="group relative bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-3"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <achievement.icon className="w-8 h-8 text-primary" />
              </div>

              <div className="mb-4">
                <div className="text-3xl font-black text-primary mb-1">
                  {achievement.metric}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {achievement.metricLabel}
                </div>
              </div>

              <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {achievement.title}
              </h4>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
