import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const packages = [
  { title: "Erkek Check-Up", description: "Erkekler için kapsamlı sağlık taraması", price: "1.500", features: ["Tam Kan Sayımı", "Karaciğer Fonksiyonları", "Böbrek Fonksiyonları", "Lipid Profili", "PSA", "Tiroid", "Vitamin D & B12"], href: "/check-up/erkek", popular: false },
  { title: "Kadın Check-Up", description: "Kadınlar için özel sağlık paketi", price: "1.750", features: ["Tam Kan Sayımı", "Hormon Paneli", "Tiroid Fonksiyonları", "Demir & B12 & Ferritin", "PAP Smear", "Meme USG", "Vitamin D"], href: "/check-up/kadin", popular: true },
  { title: "Kardiyak Check-Up", description: "Kalp sağlığı için detaylı tarama", price: "2.000", features: ["Lipid Profili", "CRP & Homosistein", "Troponin", "Pro-BNP", "EKG", "Efor Testi", "Kalp USG"], href: "/check-up/kardiyak", popular: false },
  { title: "Metabolizma Paketi", description: "İnsülin direnci ve metabolizma taraması", price: "1.200", features: ["Glukoz & HbA1c", "İnsülin & HOMA-IR", "Lipid Profili", "Tiroid Paneli", "Karaciğer Enzimleri", "Böbrek Fonksiyonları"], href: "/check-up/metabolizma", popular: false },
  { title: "STD Paketi", description: "Cinsel yolla bulaşan hastalık taraması", price: "1.800", features: ["HIV 1/2", "Hepatit B & C", "Sifiliz", "Klamidya", "Gonore", "HPV", "Herpes"], href: "/check-up/std", popular: false },
  { title: "Saç Dökülmesi Paketi", description: "Saç sağlığı ve dökülme analizi", price: "800", features: ["Demir & Ferritin", "B12 & Folik Asit", "Tiroid Paneli", "Çinko", "D Vitamini", "Hormon Paneli"], href: "/check-up/sac-dokulmesi", popular: false },
];

export default function CheckUp() {
  return (
    <Layout>
      <PageHeader
        title="Check-Up Paketleri"
        description="Yaş, cinsiyet ve risk faktörlerinize göre hazırlanmış kapsamlı check-up paketleri."
        breadcrumbs={[{ label: "Check-Up Paketleri" }]}
      />
      
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.title} className={`relative bg-card rounded-2xl p-6 border ${pkg.popular ? "border-primary shadow-lg" : "border-border"} card-hover`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    En Popüler
                  </div>
                )}
                <h3 className="heading-4 text-foreground mb-2">{pkg.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">₺{pkg.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={pkg.popular ? "default" : "outline"} className="w-full" asChild>
                  <Link to={pkg.href}>Paketi Seç</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
