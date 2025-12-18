import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  User,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getImagePath } from "@/utils/assets";

export default function AnemiPaneli() {
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
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>18 Aralık 2024</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="w-4 h-4" />
                <span>Dr. Uzman Kadro</span>
              </div>
              <div className="flex items-center gap-4 ml-auto">
                <button className="flex items-center gap-1 text-muted-foreground hover:text-red-500 transition-colors">
                  <Heart className="w-4 h-4" />
                  <span>42</span>
                </button>
                <button className="flex items-center gap-1 text-muted-foreground hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>15</span>
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <h2>Anemi Paneli Nedir?</h2>
              <p>
                Anemi paneli, kansızlık durumunu değerlendirmek ve nedenini
                belirlemek için kullanılan kapsamlı bir laboratuvar test
                grubudur. Bu panel, hemoglobin düzeylerini ve anemi nedenlerini
                araştırır.
              </p>

              <h3>Panelde Yer Alan Testler</h3>
              <ul>
                <li>
                  <strong>Ferritin:</strong> Vücuttaki demir depolarının
                  göstergesi
                </li>
                <li>
                  <strong>Serum Demir:</strong> Kandaki demir düzeyini ölçer
                </li>
                <li>
                  <strong>Vitamin B12:</strong> B12 eksikliği anemisini
                  değerlendirir
                </li>
                <li>
                  <strong>Folat (Folik Asit):</strong> Megaloblastik anemi
                  tanısında kullanılır
                </li>
                <li>
                  <strong>TIBC (Total Demir Bağlama Kapasitesi):</strong> Demir
                  metabolizmasını değerlendirir
                </li>
                <li>
                  <strong>Transferrin Saturasyonu:</strong> Demirin taşınma
                  durumunu gösterir
                </li>
              </ul>

              <h3>Anemi Türleri</h3>
              <p>Anemi paneli ile tespit edilebilen başlıca anemi türleri:</p>
              <ul>
                <li>
                  <strong>Demir Eksikliği Anemisi:</strong> En yaygın anemi türü
                </li>
                <li>
                  <strong>Megaloblastik Anemi:</strong> B12 veya folat eksikliği
                </li>
                <li>
                  <strong>Hemolitik Anemi:</strong> Alyuvar yıkımının artması
                </li>
                <li>
                  <strong>Kronik Hastalık Anemisi:</strong> Uzun süreli
                  hastalıklarda görülür
                </li>
                <li>
                  <strong>Aplastik Anemi:</strong> Kemik iliği yetersizliği
                </li>
              </ul>

              <h3>Anemi Belirtileri</h3>
              <p>Aşağıdaki belirtiler anemi varlığını düşündürür:</p>
              <ul>
                <li>Yorgunluk ve halsizlik</li>
                <li>Nefes darlığı</li>
                <li>Baş dönmesi</li>
                <li>Kalp çarpıntısı</li>
                <li>Saç dökülmesi</li>
                <li>Tırnak kırılganlığı</li>
                <li>Soğuk intoleransı</li>
                <li>Huzursuz bacak sendromu</li>
              </ul>

              <h3>Risk Faktörleri</h3>
              <p>Anemi riski aşağıdaki durumlarda artar:</p>
              <ul>
                <li>Menstrual periyottaki kadınlar</li>
                <li>Hamilelik ve emzirme dönemi</li>
                <li>Yetersiz beslenme</li>
                <li>Gastrointestinal hastalıklar</li>
                <li>Kronik böbrek hastalığı</li>
                <li>Kanser tedavisi</li>
                <li>Düzenli kan bağışı</li>
                <li>Vegetaryen/vegan beslenme</li>
              </ul>

              <h3>Beslenme Önerileri</h3>
              <p>Anemi önlenmesi ve tedavisinde beslenme önemlidir:</p>
              <ul>
                <li>
                  <strong>Demir Açısından Zengin Gıdalar:</strong> Kırmızı et,
                  tavuk, balık, kurubaklagiller
                </li>
                <li>
                  <strong>Vitamin C:</strong> Demir emilimini artırır
                  (narenciye, domates)
                </li>
                <li>
                  <strong>B12 Kaynakları:</strong> Et, süt ürünleri, yumurta
                </li>
                <li>
                  <strong>Folat Kaynakları:</strong> Yeşil yapraklı sebzeler,
                  kurubaklagiller
                </li>
              </ul>

              <h3>Test Öncesi Hazırlık</h3>
              <p>
                Anemi paneli için özel hazırlık gerekmez. Ancak sabah açlık
                halinde kan alımı daha doğru sonuçlar verir. Demir preparatları
                kullanıyorsanız doktorunuzu bilgilendirin.
              </p>
            </div>

            {/* Social Media Share */}
            <div className="flex items-center gap-4 mt-12 pt-8 border-t border-gray-200">
              <span className="text-muted-foreground font-medium">Paylaş:</span>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=window.location.href"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Facebook
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=window.location.href&text=Anemi Paneli - Etik Lab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=window.location.href"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
              <Link
                to="/test-panelleri/kolon-kanseri"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <div>
                  <div className="text-sm">Önceki Panel</div>
                  <div className="font-semibold">Kolon Kanseri Paneli</div>
                </div>
              </Link>

              <Link
                to="/test-panelleri"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Tüm Paneller
              </Link>

              <Link
                to="/test-panelleri/colyak"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-right"
              >
                <div>
                  <div className="text-sm">Sonraki Panel</div>
                  <div className="font-semibold">Çölyak Paneli</div>
                </div>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
