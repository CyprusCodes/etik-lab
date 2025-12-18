import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Trophy,
  Check,
  Star,
  Calendar,
  ArrowRight,
  Award,
  Activity,
  Heart,
  Zap,
} from "lucide-react";

const athleticTests = [
  {
    category: "Kardiyovasküler Sistem",
    icon: Heart,
    color: "from-red-500 to-pink-500",
    tests: [
      "Dinlenik ve Efor EKG",
      "Ekokardiyografi (Kalp USG)",
      "Holter EKG (24 saat)",
      "Efor Testi (Bruce Protokolü)",
      "Kan Basıncı Holter",
      "Arteriyel Doppler USG",
    ],
  },
  {
    category: "Metabolik Profil",
    icon: Zap,
    color: "from-orange-500 to-yellow-500",
    tests: [
      "Laktat ve Laktat Dehidrojenaz",
      "Kreatin Kinaz (CK) ve CK-MB",
      "Glukoz ve HbA1c",
      "Lipid Profili Detaylı",
      "Böbrek Fonksiyon Testleri",
      "Karaciğer Enzimleri",
    ],
  },
  {
    category: "Hormon Analizi",
    icon: Activity,
    color: "from-blue-500 to-cyan-500",
    tests: [
      "Testosteron (Total ve Serbest)",
      "Growth Hormon (GH)",
      "IGF-1 (Büyüme Faktörü)",
      "Kortizol (Sabah ve Akşam)",
      "Tiroid Hormonu Paneli",
      "DHEA-S ve Androstenedion",
    ],
  },
  {
    category: "Vitamin ve Mineral",
    icon: Star,
    color: "from-green-500 to-emerald-500",
    tests: [
      "Vitamin D3 (25-OH)",
      "Vitamin B12 ve Folik Asit",
      "Magnezyum ve Çinko",
      "Demir, Ferritin, TIBC",
      "Kalsiyum ve Fosfor",
      "Selenyum ve E Vitamini",
    ],
  },
];

const benefits = [
  {
    title: "Performans Optimizasyonu",
    description: "Spor performansınızı artırmak için kişiye özel öneriler",
    icon: "🎯",
  },
  {
    title: "Yaralanma Önleme",
    description:
      "Risk faktörlerini erkenden tespit ederek yaralanmaları önleyin",
    icon: "🛡️",
  },
  {
    title: "Beslenme Planı",
    description: "Metabolik profilinize uygun beslenme ve supplement önerileri",
    icon: "🥗",
  },
  {
    title: "Antrenman Rehberi",
    description: "Fizyolojik durumunuza uygun antrenman programı önerileri",
    icon: "💪",
  },
];

export default function SportsCheckUp() {
  return (
    <Layout>
      <PageHeader
        title="Sporcu Check-Up Paketi"
        description="SAMİ HAMİDİ özel sporcu paketi ile performansınızı maksimuma çıkarın"
        breadcrumbs={[
          { label: "Check-Up Paketleri", href: "/paketler" },
          { label: "Sporcu Paketi" },
        ]}
        badge="Premium Paket"
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-6">
                <Trophy className="w-4 h-4 mr-2" />
                Özel Sporcu Paketi
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  SAMİ HAMİDİ
                </span>
                <br />
                Sporcu Check-Up
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Profesyonel ve amatör sporcular için özel olarak tasarlanmış
                kapsamlı sağlık ve performans değerlendirme paketi. Spor doktoru
                danışmanlığı ile kişiye özel öneriler.
              </p>

              <div className="flex items-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-foreground mb-1">
                    ₺2.500
                  </div>
                  <div className="text-sm text-muted-foreground line-through">
                    ₺3.200
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600 mb-1">
                    %22 İndirim
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Sınırlı Süre
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  asChild
                >
                  <Link
                    to="/randevu"
                    className="inline-flex items-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Randevu Al
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <a
                    href="tel:+905338712042"
                    className="inline-flex items-center gap-2"
                  >
                    Bilgi Al
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl blur-3xl opacity-20" />
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
                alt="Sporcu Check-Up"
                className="relative w-full h-80 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Test Categories */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
              Kapsamlı Test Kategorileri
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Her sporcunun ihtiyacına göre tasarlanmış 4 ana kategoride 50+
              test içeriği
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {athleticTests.map((category, index) => (
              <div key={category.category} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity blur-xl`}
                />

                <div className="relative bg-card rounded-3xl p-8 border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.category}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {category.tests.map((test) => (
                      <li key={test} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary/20">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
              Neden Sporcu Check-Up?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sadece sağlık kontrolü değil, performansınızı artıracak kapsamlı
              analiz ve öneriler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
              Check-Up Süreci
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Randevu Alma",
                desc: "Online veya telefon ile randevu alın",
              },
              {
                step: "2",
                title: "Test Aşaması",
                desc: "Açlık testleri ve fiziksel muayeneler",
              },
              {
                step: "3",
                title: "Analiz",
                desc: "Spor doktoru tarafından değerlendirme",
              },
              {
                step: "4",
                title: "Raporlama",
                desc: "Kişiye özel öneri raporu hazırlanması",
              },
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-orange-500 to-red-500 text-white">
        <div className="container-wide text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Performansınızı Zirveye Taşıyın
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            SAMİ HAMİDİ Sporcu Check-Up paketi ile sağlığınızı ve
            performansınızı optimize edin. Profesyonel sporcuların tercih ettiği
            kapsamlı analiz.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-50 font-bold h-16 px-10 rounded-2xl shadow-xl"
              asChild
            >
              <Link to="/randevu" className="inline-flex items-center gap-3">
                <Trophy className="w-6 h-6" />
                Hemen Başlayın
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-bold h-16 px-10 rounded-2xl"
              asChild
            >
              <a href="tel:+905338712042">Detaylı Bilgi Al</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
