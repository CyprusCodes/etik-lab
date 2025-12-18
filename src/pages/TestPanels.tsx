import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getImagePath } from "@/utils/assets";

const panels = [
  {
    title: "Tiroid Paneli",
    description:
      "Tiroid bezinin fonksiyonlarını ve otoimmün durumlarını değerlendiren testler.",
    href: "/test-panelleri/tiroid",
    image: getImagePath("panell/tp.png"),
    tests: ["TSH", "Serbest T4", "Serbest T3", "Anti-TPO"],
  },
  {
    title: "TORCH Paneli",
    description:
      "Hamilelik öncesi ve sırasında önemli enfeksiyonların taranmasına yönelik testler.",
    href: "/test-panelleri/torch",
    image: getImagePath("panell/torch.png"),
    tests: ["Toxoplasma", "Rubella", "CMV", "HSV 1/2"],
  },
  {
    title: "Kolon Kanseri Paneli",
    description:
      "Kolon kanseri erken tanısı ve taramasına yönelik kapsamlı test paneli.",
    href: "/test-panelleri/kolon-kanseri",
    image: getImagePath("panell/kkp.png"),
    tests: ["CEA", "CA 19-9", "Okült Kan", "Genetik Belirteçler"],
  },
  {
    title: "Anemi Paneli",
    description:
      "Demir eksikliği ve kansızlık tanısı için kapsamlı kan analizleri.",
    href: "/test-panelleri/anemi",
    image: getImagePath("panell/ap.png"),
    tests: ["Ferritin", "Demir", "Vitamin B12", "Folat"],
  },
  {
    title: "Çölyak Paneli",
    description:
      "Çölyak hastalığı ve gluten intoleransının değerlendirilmesine yönelik serolojik testler.",
    href: "/test-panelleri/colyak",
    image: getImagePath("panell/cp.png"),
    tests: ["Anti-tTG", "Anti-DGP", "Total IgA"],
  },
  {
    title: "Diyabet Paneli",
    description:
      "Kan şekeri metabolizmasını değerlendiren kapsamlı diyabet tarama testleri.",
    href: "/test-panelleri/diyabet",
    image: getImagePath("panell/dp.png"),
    tests: ["Glukoz", "HbA1c", "İnsülin", "HOMA-IR"],
  },
  {
    title: "Romatoloji Paneli",
    description:
      "Romatizmal hastalıkların tanısı ve takibi için özel test paneli.",
    href: "/test-panelleri/romatoloji",
    image: getImagePath("panell/rp.png"),
    tests: ["RF", "Anti-CCP", "ANA", "ESR"],
  },
  {
    title: "Cinsel Hastalıklar",
    description:
      "HIV, HPV, Herpes, Klamidya ve diğer cinsel yolla bulaşan hastalıkların tanı ve tarama testleri.",
    href: "/test-panelleri/cinsel-hastaliklar",
    image: getImagePath("panell/ch.png"),
    tests: ["HIV", "HPV", "Herpes Simplex", "Klamidya"],
  },
];

export default function TestPanels() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
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
        <div className="container-wide relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6">
              Test Panelleri
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Hastalık gruplarına göre hazırlanmış özel test paketlerimizle
              doğru tanı için doğru testler.
            </p>
            <div className="text-base md:text-lg text-white/80">
              Kapsamlı Tarama • Doğru Tanı • Hızlı Sonuç
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {panels.map((panel) => (
              <Link
                key={panel.title}
                to={panel.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={panel.image}
                    alt={panel.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {panel.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {panel.description}
                  </p>

                  {/* Test Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {panel.tests.slice(0, 2).map((test) => (
                      <span
                        key={test}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {test}
                      </span>
                    ))}
                    {panel.tests.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        +{panel.tests.length - 2} daha
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <span>Paneli İncele</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
