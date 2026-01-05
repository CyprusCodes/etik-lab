import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Heart } from "lucide-react";
import { getImagePath } from "@/utils/assets";
import { useLikes } from "@/hooks/useLikes";

export default function TorchPaneli() {
  const { likes, hasLiked, toggleLike } = useLikes("torch-paneli");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-20">
          <img
            src={getImagePath("panell/torch.png")}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              TORCH Paneli
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Hamilelik öncesi ve sırasında önemli enfeksiyonların taranmasına
              yönelik kapsamlı test paneli
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
                  TORCH Paneli Nedir?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  TORCH paneli, hamilelik öncesi ve sırasında anne ve bebek
                  sağlığı için risk oluşturan enfeksiyonların taranması amacıyla
                  kullanılan bir test grubudur. TORCH kelimesi, test edilen
                  mikroorganizmaların baş harflerinden oluşur.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  TORCH Testlerinin Açılımı
                </h3>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <strong className="text-purple-700">T - Toxoplasma:</strong>{" "}
                    Toxoplasma gondii parazitinin neden olduğu enfeksiyon
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <strong className="text-purple-700">O - Others:</strong>{" "}
                    Diğer enfeksiyonlar (Sifilis, Parvovirüs B19, vb.)
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <strong className="text-purple-700">R - Rubella:</strong>{" "}
                    Kızamıkçık virüsü
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <strong className="text-purple-700">
                      C - Cytomegalovirus (CMV):
                    </strong>{" "}
                    Sitomegalovirüs
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <strong className="text-purple-700">H - Herpes:</strong>{" "}
                    Herpes Simplex Virüs 1 ve 2
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Neden Önemlidir?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bu enfeksiyonlar hamilelik sırasında bebeğe geçebilir ve ciddi
                  sağlık sorunlarına yol açabilir:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Doğum defektleri
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Zihinsel gelişim geriliği
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    İşitme ve görme problemleri
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Organ hasarları
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Düşük doğum ağırlığı
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Prematüre doğum riski
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Kimler Yaptırmalı?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  TORCH paneli aşağıdaki durumlarda önerilir:
                </p>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg text-blue-700">
                    Hamilelik planlaması yapan çiftler
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-blue-700">
                    Hamilelik sürecindeki anneler
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-blue-700">
                    Tekrarlayan düşük öyküsü olanlar
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-blue-700">
                    Doğum defekti öyküsü bulunanlar
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-blue-700">
                    İmmün sistemi zayıf olan kişiler
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Test Sonuçlarının Değerlendirilmesi
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Test sonuçları IgG ve IgM antikorları ile değerlendirilir. IgM
                  pozitifliği akut enfeksiyonu, IgG pozitifliği ise geçirilmiş
                  enfeksiyonu gösterir. Bazı durumlarda avidite testi ile
                  enfeksiyonun zamanlaması belirlenir.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-4">
                  Korunma Yolları
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Enfeksiyonlardan korunmak için:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-lg border border-green-200 text-green-700">
                    Kişisel hijyene dikkat edin
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200 text-green-700">
                    Çiğ et tüketiminden kaçının
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200 text-green-700">
                    El hijyenine özen gösterin
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200 text-green-700">
                    Kedi kumu temizliğinde eldiven kullanın
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200 text-green-700">
                    Güvenli cinsel ilişki
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200 text-green-700">
                    Rubella aşısı yaptırın (hamilelik öncesi)
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-200">
              <Link
                to="/test-panelleri/tiroid"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-sm text-gray-500">Önceki Panel</div>
                  <div className="font-semibold">Tiroid Paneli</div>
                </div>
              </Link>

              <Link
                to="/test-panelleri"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Tüm Paneller
              </Link>

              <Link
                to="/test-panelleri/kolon-kanseri"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-right group"
              >
                <div>
                  <div className="text-sm text-gray-500">Sonraki Panel</div>
                  <div className="font-semibold">Kolon Kanseri Paneli</div>
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
