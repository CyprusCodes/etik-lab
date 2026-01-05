import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Heart } from "lucide-react";
import { getImagePath } from "@/utils/assets";
import { useLikes } from "@/hooks/useLikes";

export default function RomatolojiPaneli() {
  const { likes, hasLiked, toggleLike } = useLikes("romatoloji-paneli");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-20">
          <img
            src={getImagePath("panell/rp.png")}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Romatoloji Paneli
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Romatizmal hastalıkların tanısı ve takibi için özel test paneli
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
                  Romatoloji Paneli Nedir?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Romatoloji paneli, romatizmal ve otoimmün hastalıkların
                  tanısında kullanılan özel laboratuvar testlerinden oluşur. Bu
                  testler, eklem, kas ve bağ dokularını etkileyen hastalıkları
                  değerlendirir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Panelde Yer Alan Testler
                </h3>
                <div className="space-y-3">
                  <div className="bg-violet-50 p-4 rounded-lg">
                    <strong className="text-violet-700">
                      RF (Romatoid Faktör):
                    </strong>{" "}
                    Romatoid artrit tanısında kullanılır
                  </div>
                  <div className="bg-violet-50 p-4 rounded-lg">
                    <strong className="text-violet-700">
                      Anti-CCP (Siklik Sitrullinlenmiş Peptit):
                    </strong>{" "}
                    Romatoid artrit için spesifik antikor
                  </div>
                  <div className="bg-violet-50 p-4 rounded-lg">
                    <strong className="text-violet-700">
                      ANA (Antinuklear Antikor):
                    </strong>{" "}
                    Otoimmün hastalıkların genel tarama testi
                  </div>
                  <div className="bg-violet-50 p-4 rounded-lg">
                    <strong className="text-violet-700">
                      ESR (Eritrosit Sedimantasyon Hızı):
                    </strong>{" "}
                    İnflamasyon göstergesi
                  </div>
                  <div className="bg-violet-50 p-4 rounded-lg">
                    <strong className="text-violet-700">
                      CRP (C-Reaktif Protein):
                    </strong>{" "}
                    Aküt faz reaktanı
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Romatizmal Hastalıklar
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Panel ile tespit edilebilen belli başlı hastalıklar:
                </p>
                <div className="space-y-3">
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <strong className="text-cyan-700">Romatoid Artrit:</strong>{" "}
                    Eklemlerde kronik inflamasyon
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <strong className="text-cyan-700">Sjögren Sendromu:</strong>{" "}
                    Tükürük ve gözyaşı bezlerini etkiler
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <strong className="text-cyan-700">
                      Sistemik Lupus Eritematosus (SLE):
                    </strong>{" "}
                    Çoklu organ tutulumu
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <strong className="text-cyan-700">Skleroderma:</strong> Deri
                    ve iç organları etkiler
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <strong className="text-cyan-700">
                      Ankylosing Spondylitis:
                    </strong>{" "}
                    Omurga tutulumu
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Belirtiler
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Romatizmal hastalıkların genel belirtileri:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-rose-50 p-3 rounded-lg text-rose-700">
                    Eklem ağrısı ve şişlik
                  </div>
                  <div className="bg-rose-50 p-3 rounded-lg text-rose-700">
                    Sabah tutukluk
                  </div>
                  <div className="bg-rose-50 p-3 rounded-lg text-rose-700">
                    Yorgunluk ve halsizlik
                  </div>
                  <div className="bg-rose-50 p-3 rounded-lg text-rose-700">
                    Ateş
                  </div>
                  <div className="bg-rose-50 p-3 rounded-lg text-rose-700">
                    Deri döküntüleri
                  </div>
                  <div className="bg-rose-50 p-3 rounded-lg text-rose-700">
                    Ağız ve göz kuruluğu
                  </div>
                  <div className="bg-rose-50 p-3 rounded-lg text-rose-700">
                    Kas ağrıları
                  </div>
                  <div className="bg-rose-50 p-3 rounded-lg text-rose-700">
                    Raynaud fenomeni
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Risk Faktörleri
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-amber-50 p-3 rounded-lg text-amber-700">
                    Genetik yatkınlık
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg text-amber-700">
                    Cinsiyet (kadınlarda daha sık)
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg text-amber-700">
                    Yaş (orta yaş)
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg text-amber-700">
                    Sigara kullanımı
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg text-amber-700">
                    Enfeksiyonlar
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg text-amber-700">
                    Stres
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg text-amber-700 md:col-span-2">
                    Çevresel faktörler
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  Test Sonuçlarının Değerlendirilmesi
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Romatoloji testleri tek başına tanı koydurmaz. Klinik
                  bulgularla birlikte değerlendirilmelidir. Pozitif sonuçlar her
                  zaman hastalık anlamına gelmez, sağlıklı kişilerde de
                  görülebilir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Tedavi Yaklaşımları
                </h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-4 rounded-lg text-green-700">
                    Anti-inflamatuar ilaçlar (NSAİD)
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-green-700">
                    Hastalık modifiye edici ilaçlar (DMARD)
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-green-700">
                    Biyolojik ilaçlar
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-green-700">
                    Fizik tedavi
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-green-700">
                    Egzersiz programı
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-green-700">
                    Yaşam tarzı değişiklikleri
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Yaşam Kalitesini Artırma
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-lg border border-primary/20 text-gray-700">
                    Düzenli egzersiz
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-primary/20 text-gray-700">
                    Sağlıklı beslenme
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-primary/20 text-gray-700">
                    Stres yönetimi
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-primary/20 text-gray-700">
                    Yeterli uyku
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-primary/20 text-gray-700">
                    Sigara bırakma
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-primary/20 text-gray-700">
                    Sosyal destek
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-200">
              <Link
                to="/test-panelleri/diyabet"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-sm text-gray-500">Önceki Panel</div>
                  <div className="font-semibold">Diyabet Paneli</div>
                </div>
              </Link>

              <Link
                to="/test-panelleri"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Tüm Paneller
              </Link>

              <Link
                to="/test-panelleri/cinsel-hastaliklar"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-right group"
              >
                <div>
                  <div className="text-sm text-gray-500">Sonraki Panel</div>
                  <div className="font-semibold">Cinsel Hastalıklar</div>
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
