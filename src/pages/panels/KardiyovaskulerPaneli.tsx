import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Heart } from "lucide-react";
import { getImagePath } from "@/utils/assets";
import { useLikes } from "@/hooks/useLikes";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

export default function KardiyovaskulerPaneli() {
  const { likes, hasLiked, toggleLike } = useLikes("kardiyovaskuler-paneli");

  return (
    <Layout>
      <SEO
        title="Kardiyovasküler Panel"
        description="Kardiyovasküler panel kapsamında değerlendirilen testler ve laboratuvar süreci hakkında bilgi alın."
        path="/test-panelleri/kardiyovaskuler"
      />
      <BreadcrumbSchema
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Test Panelleri", path: "/test-panelleri" },
          {
            name: "Kardiyovasküler Panel",
            path: "/test-panelleri/kardiyovaskuler",
          },
        ]}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-20">
          <img
            src="/panell/kardiyovaskulerpanel.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Kardiyovasküler Panel
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Kalp-damar hastalıkları riskini ve kalp kası hasarını
              değerlendirmeye yardımcı kapsamlı test paneli
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-12 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="w-4 h-4" />
                <span>18 Aralık 2024</span>
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

            {/* Article Content */}
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Kardiyovasküler Panel Nedir?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Kardiyovasküler panel, kalp-damar hastalıkları riskini, damar
                  sağlığını, inflamasyon durumunu ve kalp kası hasarını
                  değerlendirmeye yardımcı olan laboratuvar testlerinden oluşur.
                  Bu panel, kalp krizi riski, damar tıkanıklığı, kalp yetmezliği
                  ve metabolik risklerin değerlendirilmesinde destekleyici bilgi
                  sağlar.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Panelde Yer Alan Testler
                </h3>
                <div className="space-y-3">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong className="text-red-700">
                      Apolipoprotein A (Apo A):
                    </strong>{" "}
                    HDL yani iyi kolesterol ile ilişkili ana proteindir. Kalp
                    damar hastalıkları ve damar sertliği riskinin
                    değerlendirilmesine yardımcı olur.
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong className="text-red-700">
                      Apolipoprotein B (Apo B):
                    </strong>{" "}
                    LDL yani kötü kolesterol ve damar sertliğiyle ilişkili
                    parçacıkların ana proteinidir. Apo B yüksekliği,
                    kardiyovasküler riskin değerlendirilmesinde önemli bir
                    göstergedir.
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong className="text-red-700">Troponin I:</strong>{" "}
                    Kalp kası hücrelerinde bulunan ve kalp hasarında kana geçen
                    bir proteindir. Kalp krizi ve kalp kası hasarını tespit
                    etmek için kullanılır.
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong className="text-red-700">Troponin T:</strong>{" "}
                    Kalp kası hasarında kana geçebilen önemli bir kalp
                    belirtecidir. Kalp krizi şüphesi ve kalp kası hasarının
                    değerlendirilmesinde kullanılır.
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong className="text-red-700">
                      Lp(a) - Lipoprotein(a):
                    </strong>{" "}
                    Genetik olarak belirlenen ve damar hastalığı riskini
                    artırabilen bir lipoprotein türüdür. Kalp-damar hastalığı
                    riskini ve ailesel yatkınlığı değerlendirmeye yardımcı olur.
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong className="text-red-700">Homosistein:</strong>{" "}
                    Vücutta doğal olarak oluşan bir aminoasit türevidir.
                    Kalp-damar hastalığı riski ile B12, B6 veya folat vitamini
                    eksikliklerinin araştırılmasında kullanılır.
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong className="text-red-700">
                      hs-CRP (Yüksek Duyarlılıklı CRP):
                    </strong>{" "}
                    Vücuttaki düşük düzeyli iltihabı ölçen hassas bir kan
                    testidir. Kalp-damar hastalığı riski ve kronik inflamasyonun
                    değerlendirilmesinde kullanılır.
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong className="text-red-700">CK-MB:</strong>{" "}
                    Ağırlıklı olarak kalp kasında bulunan bir enzimdir. Kalp
                    kası hasarını değerlendirmek ve kalp krizi şüphesinde
                    destekleyici bilgi sağlamak için kullanılır.
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong className="text-red-700">BNP:</strong>{" "}
                    Kalbin yük altında kaldığında salgıladığı bir hormondur.
                    Kalp yetmezliğinin tanı ve takibinde kullanılır.
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Neden Yapılır?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kardiyovasküler panel aşağıdaki durumların
                  değerlendirilmesinde tercih edilebilir:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    Kalp-damar hastalığı riskinin değerlendirilmesi
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    Kalp krizi şüphesi
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    Kalp kası hasarının araştırılması
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    Damar sertliği riskinin değerlendirilmesi
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    Ailesel kalp hastalığı yatkınlığı
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    Kalp yetmezliği tanı ve takibi
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    Kronik inflamasyonun değerlendirilmesi
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    Metabolik sendrom araştırmaları
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Neden Önemlidir?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bu panel, kalp-damar hastalıkları açısından risk
                  değerlendirmesini daha kapsamlı hale getirir. Bazı testler
                  erken kalp kası hasarının belirlenmesine, bazıları ise damar
                  hastalığı riskinin ve genetik yatkınlığın anlaşılmasına
                  yardımcı olur.
                </p>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <strong className="text-blue-700">Erken Tanı:</strong>{" "}
                    Kalp krizi ve kalp kası hasarı gibi acil durumların erken
                    değerlendirilmesine destek olur.
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <strong className="text-blue-700">
                      Risk Değerlendirmesi:
                    </strong>{" "}
                    Damar sertliği, damar tıkanıklığı ve kalp-damar hastalığı
                    riskinin daha ayrıntılı incelenmesini sağlar.
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <strong className="text-blue-700">Tedavi Takibi:</strong>{" "}
                    Kalp yetmezliği ve kalp kası hasarının izlenmesinde
                    yardımcı olabilir.
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-teal-800 mb-4">
                  Test Öncesi Hazırlık
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Kardiyovasküler panelde yer alan testler için hazırlık
                  durumu istenen teste göre değişebilir. Bazı lipid ve metabolik
                  değerlendirmeler için açlık gerekebilir. Düzenli ilaç
                  kullanıyorsanız veya kalp hastalığı öykünüz varsa test öncesi
                  sağlık ekibinizi bilgilendirmeniz önerilir.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-200">
              <Link
                to="/test-panelleri/cinsel-hastaliklar"
                className="flex items-center gap-3 text-gray-700 hover:text-teal-800 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-sm text-gray-700">Önceki Panel</div>
                  <div className="font-semibold">Cinsel Hastalıklar</div>
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
