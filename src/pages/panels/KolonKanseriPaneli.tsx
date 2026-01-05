import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Heart } from "lucide-react";
import { getImagePath } from "@/utils/assets";
import { useLikes } from "@/hooks/useLikes";

export default function KolonKanseriPaneli() {
  const { likes, hasLiked, toggleLike } = useLikes("kolon-kanseri-paneli");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-20">
          <img
            src={getImagePath("panell/kkp.png")}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Kolon Kanseri Paneli
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Kolorektal kanser erken tanısı ve taramasına yönelik kapsamlı test
              paneli
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
                  Kolon Kanseri Paneli Nedir?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Kolon kanseri paneli, büyük bağırsak (kolon) ve rektum
                  kanserlerinin erken teşhisinde kullanılan özel bir test
                  kombinasyonudur. Bu panel, kanser belirteçleri ve diğer tanı
                  yardımcı testleri içerir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Panelde Yer Alan Testler
                </h3>
                <div className="space-y-3">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <strong className="text-teal-700">
                      CEA (Karsinoembriyonik Antijen):
                    </strong>{" "}
                    Kolorektal kanserlerde yükselen tümör belirteci
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <strong className="text-teal-700">CA 19-9:</strong>{" "}
                    Gastrointestinal kanserlerde kullanılan tümör markırı
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <strong className="text-teal-700">
                      Gaitada Gizli Kan (FOBT):
                    </strong>{" "}
                    Dışkıda mikroskobik kan varlığını tespit eder
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <strong className="text-teal-700">
                      Genetik Belirteçler:
                    </strong>{" "}
                    Kalıtsal kanser riskini değerlendiren testler
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Risk Faktörleri
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Aşağıdaki durumlarla karşılaşanlarda kolon kanseri riski
                  artmıştır:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    50 yaş üzeri olmak
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    Ailede kolorektal kanser öyküsü
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    İnflamatuar bağırsak hastalığı
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    Polip öyküsü
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    Sigara ve alkol kullanımı
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    Sedanter yaşam tarzı
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    Yüksek yağlı, düşük lifli beslenme
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-orange-700">
                    Obezite
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Erken Belirtiler
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kolon kanserinin erken belirtileri şunlardır:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Bağırsak alışkanlıklarında değişiklik
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Dışkıda kan veya mukus
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Karın ağrısı ve kramplar
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Açıklanamayan kilo kaybı
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Yorgunluk ve halsizlik
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Demir eksikliği anemisi
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700 md:col-span-2">
                    Rektal kanama
                  </div>
                </div>
              </div>

              <h3>Tarama Önerileri</h3>
              <p>
                50 yaşından itibaren düzenli tarama önerilir. Aile öyküsü
                olanlar daha erken yaşta taramaya başlamalıdır. Tarama sıklığı
                risk faktörlerine göre belirlenir.
              </p>

              <h3>Korunma Yolları</h3>
              <p>Kolon kanserinden korunmak için:</p>
              <ul>
                <li>Düzenli egzersiz yapın</li>
                <li>Lifli gıdalar tüketin</li>
                <li>Kırmızı et tüketimini azaltın</li>
                <li>Sigara ve alkolü bırakın</li>
                <li>Sağlıklı kilo koruyun</li>
                <li>Düzenli tarama yaptırın</li>
                <li>Stres yönetimi</li>
              </ul>

              <h3>Sonuçların Yorumlanması</h3>
              <p>
                Test sonuçları mutlaka bir doktor tarafından
                değerlendirilmelidir. Yüksek değerler her zaman kanser anlamına
                gelmez, ancak ileri tetkik gerektirir.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-200">
              <Link
                to="/test-panelleri/torch"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-sm text-gray-500">Önceki Panel</div>
                  <div className="font-semibold">TORCH Paneli</div>
                </div>
              </Link>

              <Link
                to="/test-panelleri"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Tüm Paneller
              </Link>

              <Link
                to="/test-panelleri/anemi"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-right group"
              >
                <div>
                  <div className="text-sm text-gray-500">Sonraki Panel</div>
                  <div className="font-semibold">Anemi Paneli</div>
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
