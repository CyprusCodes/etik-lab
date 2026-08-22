import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { useLikes } from "@/hooks/useLikes";
import { getImagePath } from "@/utils/assets";
import { ArrowLeft, ArrowRight, Calendar, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const tumorMarkers = [
  {
    name: "AFP – Alfa Fetoprotein",
    description:
      "Özellikle karaciğer ve bazı germ hücreli tümörlerin değerlendirilmesinde kullanılabilen bir tümör belirtecidir.",
  },
  {
    name: "CEA – Karsinoembriyonik Antijen",
    description:
      "Başta kolorektal kanserler olmak üzere bazı kanserlerin değerlendirilmesinde kullanılabilir. Tedavi ve takip süreçlerinde de doktor tarafından istenebilir.",
  },
  {
    name: "CA 15-3",
    description:
      "Özellikle meme kanseri ile ilişkili durumların değerlendirilmesi ve takip süreçlerinde kullanılabilen tümör belirteçlerinden biridir.",
  },
  {
    name: "CA 125",
    description:
      "Özellikle yumurtalık (over) kanseri ile ilişkili durumların değerlendirilmesinde kullanılabilir. Ancak farklı kanser dışı durumlarda da yükselebileceği için tek başına tanı testi değildir.",
  },
  {
    name: "CA 19-9",
    description:
      "Özellikle pankreas ve safra yolları ile ilişkili bazı kanserlerin değerlendirilmesinde kullanılabilir.",
  },
  {
    name: "CA 72-4",
    description:
      "Özellikle mide ve bazı gastrointestinal sistem kanserlerinin değerlendirilmesinde kullanılabilen tümör belirteçlerinden biridir.",
  },
  {
    name: "Total PSA (Prostat Spesifik Antijen)",
    description:
      "Prostatın değerlendirilmesinde kullanılan önemli bir laboratuvar belirtecidir.",
  },
  {
    name: "Free PSA (Serbest PSA)",
    description:
      "Özellikle Total PSA sonucu ile birlikte değerlendirilerek prostat kaynaklı durumların ayırıcı değerlendirmesine yardımcı olabilir.",
  },
];

export default function KanserTaramaTestleri() {
  const { likes, hasLiked, toggleLike } = useLikes(
    "kanser-tarama-testleri-paneli"
  );

  return (
    <Layout>
      <SEO
        title="Kanser Tarama Testleri ve Tümör Belirteçleri"
        description="Kanser tarama testleri kapsamında AFP, CEA, CA 15-3, CA 125, CA 19-9, CA 72-4, Total PSA ve Free PSA tümör belirteçleri hakkında bilgi alın."
        path="/test-panelleri/kanser-tarama-testleri"
      />
      <BreadcrumbSchema
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Test Panelleri", path: "/test-panelleri" },
          {
            name: "Kanser Tarama Testleri",
            path: "/test-panelleri/kanser-tarama-testleri",
          },
        ]}
      />

      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-20">
          <img
            src={getImagePath("panels/kanser-tarama-testleri.webp")}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Kanser Tarama Testleri
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Tümör belirteçleri ile kanser riskinin değerlendirilmesine yardımcı
              laboratuvar testleri
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-6 mb-12 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="w-4 h-4" />
                <span>21 Ağustos 2026</span>
              </div>
              <div className="flex items-center gap-4 ml-auto">
                <button
                  onClick={toggleLike}
                  className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-colors ${
                    hasLiked
                      ? "text-red-500 bg-red-50"
                      : "text-gray-700 hover:text-red-500"
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${hasLiked ? "fill-current" : ""}`}
                  />
                  <span>{likes}</span>
                </button>
              </div>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Kanser tarama testleri nedir?
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Kanser tarama testleri, belirli kanser türleri açısından risk
                    değerlendirmesi ve gerekli durumlarda ileri incelemelerin
                    planlanmasına yardımcı olmak amacıyla kullanılan testleri
                    kapsar.
                  </p>
                  <p>
                    Laboratuvarımızda AFP, CEA, CA 15-3, CA 125, CA 19-9 ve CA
                    72-4 gibi tümör belirteçleri çalışılmaktadır.
                  </p>
                  <p>
                    Bu testlerin sonuçları tek başına kanser tanısı koydurmaz.
                    Sonuçların kişinin yaşı, cinsiyeti, şikâyetleri, tıbbi öyküsü
                    ve gerekli diğer tetkiklerle birlikte doktor tarafından
                    değerlendirilmesi gerekir.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Laboratuvarımızda yapılan tümör belirteçleri
                </h2>
                <div className="space-y-3">
                  {tumorMarkers.map((marker) => (
                    <div key={marker.name} className="bg-teal-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-teal-700 mb-1">
                        {marker.name}
                      </h3>
                      <p className="text-gray-700 leading-relaxed m-0">
                        {marker.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-teal-800 mb-4">
                  Tümör belirteçleri kanser tanısı koyar mı?
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="font-semibold text-teal-800">Hayır.</p>
                  <p>
                    Tümör belirteçlerinin yüksek veya düşük çıkması tek başına
                    kanser tanısı anlamına gelmez.
                  </p>
                  <p>
                    Bazı tümör belirteçleri kanser dışındaki hastalık ve
                    durumlarda da yükselebilir. Aynı şekilde bazı kanserlerde
                    tümör belirteçleri normal seviyelerde bulunabilir.
                  </p>
                  <p>
                    Bu nedenle sonuçların doktor tarafından kişinin klinik
                    bulguları ve diğer tanısal yöntemlerle birlikte
                    değerlendirilmesi gerekir.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Kanser tarama testleri kimler için uygundur?
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>Kanser taraması kişiye özel olarak planlanmalıdır.</p>
                  <p>
                    Yaş, aile öyküsü, genetik riskler, yaşam tarzı, mevcut
                    şikâyetler ve diğer risk faktörleri değerlendirilerek hangi
                    taramaların gerekli olduğuna doktor tarafından karar
                    verilebilir.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Test öncesinde açlık gerekir mi?
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="font-semibold">Hayır.</p>
                  <p>
                    Tümör belirteçleri için hazırlık koşulları, istenen testlere
                    ve aynı anda yapılacak diğer laboratuvar testlerine göre
                    değişebilir.
                  </p>
                  <p>
                    Test öncesinde laboratuvarımızdan bilgi alınması önerilir.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-200">
              <Link
                to="/test-panelleri/kardiyovaskuler"
                className="flex items-center gap-3 text-gray-700 hover:text-teal-800 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-sm text-gray-700">Önceki Panel</div>
                  <div className="font-semibold">Kardiyovasküler Panel</div>
                </div>
              </Link>

              <Link
                to="/test-panelleri"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Tüm Paneller
              </Link>

              <Link
                to="/test-panelleri/tiroid"
                className="flex items-center gap-3 text-gray-700 hover:text-teal-800 transition-colors text-right group"
              >
                <div>
                  <div className="text-sm text-gray-700">Sonraki Panel</div>
                  <div className="font-semibold">Tiroid Paneli</div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
