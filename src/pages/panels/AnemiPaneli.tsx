import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Heart } from "lucide-react";
import { getImagePath } from "@/utils/assets";
import { useLikes } from "@/hooks/useLikes";

export default function AnemiPaneli() {
  const { likes, hasLiked, toggleLike } = useLikes("anemi-paneli");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-20">
          <img
            src={getImagePath("panell/ap.png")}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Anemi Paneli
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Demir eksikliği ve kansızlık tanısı için kapsamlı kan analizleri
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
                  Anemi Paneli Nedir?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Anemi paneli, kansızlık durumunu değerlendirmek ve nedenini
                  belirlemek için kullanılan kapsamlı bir laboratuvar test
                  grubudur. Bu panel, hemoglobin düzeylerini ve anemi
                  nedenlerini araştırır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Panelde Yer Alan Testler
                </h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <strong className="text-primary">Ferritin:</strong>{" "}
                    Vücuttaki demir depolarının göstergesi
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <strong className="text-primary">Serum Demir:</strong>{" "}
                    Kandaki demir düzeyini ölçer
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <strong className="text-primary">Vitamin B12:</strong> B12
                    eksikliği anemisini değerlendirir
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <strong className="text-primary">
                      Folat (Folik Asit):
                    </strong>{" "}
                    Megaloblastik anemi tanısında kullanılır
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <strong className="text-primary">
                      TIBC (Total Demir Bağlama Kapasitesi):
                    </strong>{" "}
                    Demir metabolizmasını değerlendirir
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <strong className="text-primary">
                      Transferrin Saturasyonu:
                    </strong>{" "}
                    Demirin taşınma durumunu gösterir
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Anemi Türleri
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Anemi paneli ile tespit edilebilen başlıca anemi türleri:
                </p>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <strong className="text-blue-700">
                      Demir Eksikliği Anemisi:
                    </strong>{" "}
                    En yaygın anemi türü
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <strong className="text-blue-700">
                      Megaloblastik Anemi:
                    </strong>{" "}
                    B12 veya folat eksikliği
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <strong className="text-blue-700">Hemolitik Anemi:</strong>{" "}
                    Alyuvar yıkımının artması
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <strong className="text-blue-700">
                      Kronik Hastalık Anemisi:
                    </strong>{" "}
                    Uzun süreli hastalıklarda görülür
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <strong className="text-blue-700">Aplastik Anemi:</strong>{" "}
                    Kemik iliği yetersizliği
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Anemi Belirtileri
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Aşağıdaki belirtiler anemi varlığını düşündürür:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Yorgunluk ve halsizlik
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Nefes darlığı
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Baş dönmesi
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Kalp çarpıntısı
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Saç dökülmesi
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Tırnak kırılganlığı
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Soğuk intoleransı
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg text-red-700">
                    Huzursuz bacak sendromu
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Risk Faktörleri
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Anemi riski aşağıdaki durumlarda artar:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-yellow-50 p-3 rounded-lg text-yellow-700">
                    Menstrual periyottaki kadınlar
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-yellow-700">
                    Hamilelik ve emzirme dönemi
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-yellow-700">
                    Yetersiz beslenme
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-yellow-700">
                    Gastrointestinal hastalıklar
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-yellow-700">
                    Kronik böbrek hastalığı
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-yellow-700">
                    Kanser tedavisi
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-yellow-700">
                    Düzenli kan bağışı
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg text-yellow-700">
                    Vegetaryen/vegan beslenme
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Beslenme Önerileri
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Anemi önlenmesi ve tedavisinde beslenme önemlidir:
                </p>
                <div className="space-y-3">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong className="text-green-700">
                      Demir Açısından Zengin Gıdalar:
                    </strong>{" "}
                    Kırmızı et, tavuk, balık, kurubaklagiller
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong className="text-green-700">Vitamin C:</strong> Demir
                    emilimini artırır (narenciye, domates)
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong className="text-green-700">B12 Kaynakları:</strong>{" "}
                    Et, süt ürünleri, yumurta
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong className="text-green-700">
                      Folat Kaynakları:
                    </strong>{" "}
                    Yeşil yapraklı sebzeler, kurubaklagiller
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Test Öncesi Hazırlık
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Anemi paneli için özel hazırlık gerekmez. Ancak sabah açlık
                  halinde kan alımı daha doğru sonuçlar verir. Demir
                  preparatları kullanıyorsanız doktorunuzu bilgilendirin.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-200">
              <Link
                to="/test-panelleri/kolon-kanseri"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-sm text-gray-500">Önceki Panel</div>
                  <div className="font-semibold">Kolon Kanseri Paneli</div>
                </div>
              </Link>

              <Link
                to="/test-panelleri"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Tüm Paneller
              </Link>

              <Link
                to="/test-panelleri/colyak"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-right group"
              >
                <div>
                  <div className="text-sm text-gray-500">Sonraki Panel</div>
                  <div className="font-semibold">Çölyak Paneli</div>
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
