import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Heart } from "lucide-react";
import { getImagePath } from "@/utils/assets";
import { useLikes } from "@/hooks/useLikes";

export default function ColyakPaneli() {
  const { likes, hasLiked, toggleLike } = useLikes("colyak-paneli");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-20">
          <img
            src={getImagePath("panell/cp.png")}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Çölyak Paneli
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Çölyak hastalığı ve gluten intoleransının değerlendirilmesine
              yönelik serolojik testler
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
                  Çölyak Paneli Nedir?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Çölyak paneli, çölyak hastalığının teşhisinde kullanılan
                  serolojik testlerden oluşur. Bu testler, gluten intoleransını
                  ve otoimmün reaksiyonları değerlendirmek için kullanılır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Panelde Yer Alan Testler
                </h3>
                <div className="space-y-3">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <strong className="text-amber-700">
                      Anti-tTG (Anti-Transglutaminaz):
                    </strong>{" "}
                    Çölyak hastalığının en spesifik göstergesi
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <strong className="text-amber-700">
                      Anti-DGP (Anti-Deamidated Gliadin Peptit):
                    </strong>{" "}
                    Özellikle çocuklarda duyarlı test
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <strong className="text-amber-700">Total IgA:</strong> IgA
                    eksikliğini değerlendirmek için
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <strong className="text-amber-700">Anti-Endomysium:</strong>{" "}
                    Konfirmasyon testi olarak kullanılır
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Çölyak Hastalığı Nedir?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Çölyak hastalığı, gluten içeren gıdaları sindiremeyen
                  kişilerde gelişen otoimmün bir hastalıktır. Genetik yatkınlık
                  gerektirir ve yaşam boyu sürer.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Belirtiler
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Çölyak hastalığının belirtileri şunlardır:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Kronik ishal
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Karın şişkinliği ve ağrısı
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Kilo kaybı
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Yorgunluk
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Demir eksikliği anemisi
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Kemik ağrıları
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Deri döküntüleri
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Çocuklarda büyüme geriliği
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Risk Faktörleri
                </h3>
                <div className="space-y-3">
                  <div className="bg-yellow-50 p-4 rounded-lg text-yellow-700">
                    Aile öyküsü (birinci derece akrabalarda %10 risk)
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg text-yellow-700">
                    Tip 1 diyabet
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg text-yellow-700">
                    Tiroid hastalıkları
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg text-yellow-700">
                    Down sendromu
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg text-yellow-700">
                    İrritabl bağırsak sendromu
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  Test Öncesi Hazırlık
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Testler gluten içeren diyetle yapılmalıdır. Glutensiz diyete
                  geçmeden önce test yaptırmak önemlidir. Test öncesi en az 6
                  hafta gluten tüketimi gerekir.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-4">
                  Tedavi
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Çölyak hastalığının tek tedavisi yaşam boyu glutensiz diyet
                  uygulamaktır. Gluten içeren buğday, arpa, çavdar tamamen
                  eliminasyon edilmelidir.
                </p>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Glutensiz Yaşam
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-lg border border-primary/20 text-gray-700">
                    Etiket okuma alışkanlığı edinin
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-primary/20 text-gray-700">
                    Çapraz kontaminasyondan kaçının
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-primary/20 text-gray-700">
                    Glutensiz ürün markalarını öğrenin
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-primary/20 text-gray-700">
                    Dışarıda yemek yerken dikkatli olun
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-primary/20 text-gray-700 md:col-span-2">
                    Ailenizi bilgilendirin
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-200">
              <Link
                to="/test-panelleri/anemi"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-sm text-gray-500">Önceki Panel</div>
                  <div className="font-semibold">Anemi Paneli</div>
                </div>
              </Link>

              <Link
                to="/test-panelleri"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Tüm Paneller
              </Link>

              <Link
                to="/test-panelleri/diyabet"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-right group"
              >
                <div>
                  <div className="text-sm text-gray-500">Sonraki Panel</div>
                  <div className="font-semibold">Diyabet Paneli</div>
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
