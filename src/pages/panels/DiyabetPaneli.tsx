import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Heart } from "lucide-react";
import { getImagePath } from "@/utils/assets";
import { useLikes } from "@/hooks/useLikes";

export default function DiyabetPaneli() {
  const { likes, hasLiked, toggleLike } = useLikes("diyabet-paneli");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-20">
          <img
            src={getImagePath("panell/dp.png")}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Diyabet Paneli
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Kan şekeri metabolizmasını değerlendiren kapsamlı diyabet tarama
              testleri
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
                  Diyabet Paneli Nedir?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Diyabet paneli, kan şekeri metabolizmasını kapsamlı olarak
                  değerlendiren test grubudur. Bu testler, diyabet tanısı,
                  prediabet durumu ve kan şekeri kontrolünü değerlendirmek için
                  kullanılır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Panelde Yer Alan Testler
                </h3>
                <div className="space-y-3">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <strong className="text-emerald-700">
                      Açlık Kan Şekeri (Glukoz):
                    </strong>{" "}
                    8-12 saat açlık sonrası ölçülen kan şekeri
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <strong className="text-emerald-700">
                      HbA1c (Glikozillenmiş Hemoglobin):
                    </strong>{" "}
                    Son 2-3 aylık ortalama kan şekeri
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <strong className="text-emerald-700">İnsülin:</strong>{" "}
                    Pankreas tarafından üretilen hormon düzeyi
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <strong className="text-emerald-700">HOMA-IR:</strong>{" "}
                    İnsülin direncini değerlendiren indeks
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <strong className="text-emerald-700">C-Peptit:</strong>{" "}
                    İnsülin üretim kapasitesini gösterir
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Diyabet Türleri
                </h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <strong className="text-blue-700">Tip 1 Diyabet:</strong>{" "}
                    Otoimmün, insülin üretimi durur
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <strong className="text-blue-700">Tip 2 Diyabet:</strong>{" "}
                    İnsülin direnci ve yetersizliği
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <strong className="text-blue-700">
                      Gestasyonel Diyabet:
                    </strong>{" "}
                    Hamilelik diyabeti
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <strong className="text-blue-700">MODY:</strong> Genetik
                    kaynaklı diyabet
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Risk Faktörleri
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Diyabet riski aşağıdaki durumlarda artar:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-yellow-50 p-3 rounded-lg text-yellow-700">
                    45 yaş üzeri olmak
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-yellow-700">
                    Aile öyküsü
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-yellow-700">
                    Obezite (BKİ &gt; 30)
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-yellow-700">
                    Sedanter yaşam
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-yellow-700">
                    Yüksek tansiyon
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-yellow-700">
                    Gestasyonel diyabet öyküsü
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-yellow-700">
                    Polikistik over sendromu
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-yellow-700">
                    Metabolik sendrom
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Erken Belirtiler
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Diyabetin erken belirtileri:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Aşırı susama
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Sık idrara çıkma
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Yorgunluk
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Bulanık görme
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Yavaş iyileşen yaralar
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Sık enfeksiyonlar
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Açıklanamayan kilo kaybı (Tip 1)
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Karıncalanma hissi
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-700 mb-4">
                  Tanı Kriterleri
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Diyabet tanısı için kullanılan değerler:
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-orange-200">
                    <strong className="text-orange-700">Açlık Glukoz:</strong>{" "}
                    ≥126 mg/dL (diyabet), 100-125 mg/dL (prediabet)
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-orange-200">
                    <strong className="text-orange-700">HbA1c:</strong> ≥6.5%
                    (diyabet), 5.7-6.4% (prediabet)
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-orange-200">
                    <strong className="text-orange-700">OGTT (2. saat):</strong>{" "}
                    ≥200 mg/dL (diyabet), 140-199 mg/dL (prediabet)
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Komplikasyonlar
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kontrol edilmeyen diyabetin komplikasyonları:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-rose-50 p-3 rounded-lg text-rose-700">
                    Kardiyovasküler hastalıklar
                  </div>
                  <div className="bg-rose-50 p-3 rounded-lg text-rose-700">
                    Nefropati (böbrek hasarı)
                  </div>
                  <div className="bg-rose-50 p-3 rounded-lg text-rose-700">
                    Retinopati (göz hasarı)
                  </div>
                  <div className="bg-rose-50 p-3 rounded-lg text-rose-700">
                    Nöropati (sinir hasarı)
                  </div>
                  <div className="bg-rose-50 p-3 rounded-lg text-rose-700">
                    Diyabetik ayak
                  </div>
                  <div className="bg-rose-50 p-3 rounded-lg text-rose-700">
                    Enfeksiyon riski artışı
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-4">
                  Yaşam Tarzı Önerileri
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Diyabeti önlemek ve kontrol etmek için:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-lg border border-green-200 text-green-700">
                    Düzenli egzersiz (haftada 150 dakika)
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200 text-green-700">
                    Sağlıklı beslenme
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200 text-green-700">
                    Kilo kontrolü
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200 text-green-700">
                    Stres yönetimi
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200 text-green-700">
                    Düzenli uyku
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200 text-green-700">
                    Sigara ve alkol bırakma
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200 text-green-700 md:col-span-2">
                    Düzenli kontroller
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-200">
              <Link
                to="/test-panelleri/colyak"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-sm text-gray-500">Önceki Panel</div>
                  <div className="font-semibold">Çölyak Paneli</div>
                </div>
              </Link>

              <Link
                to="/test-panelleri"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Tüm Paneller
              </Link>

              <Link
                to="/test-panelleri/romatoloji"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-right group"
              >
                <div>
                  <div className="text-sm text-gray-500">Sonraki Panel</div>
                  <div className="font-semibold">Romatoloji Paneli</div>
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
