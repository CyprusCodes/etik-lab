import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Heart } from "lucide-react";
import { getImagePath } from "@/utils/assets";
import { useLikes } from "@/hooks/useLikes";

export default function TiroidPaneli() {
  const { likes, hasLiked, toggleLike } = useLikes("tiroid-paneli");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-20">
          <img
            src={getImagePath("panell/tp.png")}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Tiroid Paneli
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Tiroid bezinin fonksiyonlarını ve otoimmün durumlarını
              değerlendiren kapsamlı test paneli
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
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>18 Aralık 2024</span>
              </div>
              <div className="flex items-center gap-4 ml-auto">
                <button
                  onClick={toggleLike}
                  className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-colors ${
                    hasLiked
                      ? "text-red-500 bg-red-50"
                      : "text-muted-foreground hover:text-red-500"
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
                  Tiroid Paneli Nedir?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Tiroid paneli, tiroid bezinin fonksiyonlarını değerlendirmek
                  için kullanılan bir dizi kan testidir. Bu testler, tiroid
                  hormonlarının düzeylerini ölçer ve tiroid bezinin çalışma
                  durumunu belirler.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Panelde Yer Alan Testler
                </h3>
                <div className="space-y-3">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <strong className="text-indigo-700">
                      TSH (Tiroid Stimülan Hormon):
                    </strong>{" "}
                    Hipofiz bezinden salgılanan ve tiroid bezini uyaran
                    hormondur.
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <strong className="text-indigo-700">
                      Serbest T4 (Tiroksin):
                    </strong>{" "}
                    Tiroid bezinin ana hormonu olup, metabolizmayı düzenler.
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <strong className="text-indigo-700">
                      Serbest T3 (Triiyodotironin):
                    </strong>{" "}
                    T4'ten dönüşen aktif tiroid hormonu.
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <strong className="text-indigo-700">
                      Anti-TPO (Anti-Tiroid Peroksidaz):
                    </strong>{" "}
                    Tiroid otoimmün hastalıklarının tanısında kullanılan
                    antikordur.
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Hangi Durumlarda İstenir?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tiroid paneli aşağıdaki durumlarla karşılaşıldığında istenir:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    Yorgunluk, halsizlik
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    Kilo alma veya kilo kaybı
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    Kalp ritmi değişiklikleri
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    Saç dökülmesi
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    Uyku bozuklukları
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    Depresyon veya anksiyete
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700 md:col-span-2">
                    Aile öyküsünde tiroid hastalığı
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  Test Öncesi Hazırlık
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Tiroid testleri için özel bir hazırlık gerekmez. Ancak bazı
                  ilaçlar test sonuçlarını etkileyebilir. Tiroid ilaçları,
                  biotin supplements ve bazı kalp ilaçları kullanıyorsanız
                  doktorunuzu bilgilendirin.
                </p>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Sonuçların Değerlendirilmesi
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Test sonuçları birlikte değerlendirilir. Yüksek TSH ve düşük
                  T4 hipotiroidi, düşük TSH ve yüksek T4/T3 hipertiroidi işareti
                  olabilir. Anti-TPO pozitifliği otoimmün tiroid hastalığına
                  işaret eder.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-200">
              <Link
                to="/test-panelleri/cinsel-hastaliklar"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-sm text-gray-500">Önceki Panel</div>
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
                to="/test-panelleri/torch"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-right group"
              >
                <div>
                  <div className="text-sm text-gray-500">Sonraki Panel</div>
                  <div className="font-semibold">TORCH Paneli</div>
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
