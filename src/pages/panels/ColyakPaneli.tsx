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

export default function ColyakPaneli() {
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
                  <span>36</span>
                </button>
                <button className="flex items-center gap-1 text-muted-foreground hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>11</span>
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <h2>Çölyak Paneli Nedir?</h2>
              <p>
                Çölyak paneli, çölyak hastalığının teşhisinde kullanılan
                serolojik testlerden oluşur. Bu testler, gluten intoleransını ve
                otoimmün reaksiyonları değerlendirmek için kullanılır.
              </p>

              <h3>Panelde Yer Alan Testler</h3>
              <ul>
                <li>
                  <strong>Anti-tTG (Anti-Transglutaminaz):</strong> Çölyak
                  hastalığının en spesifik göstergesi
                </li>
                <li>
                  <strong>Anti-DGP (Anti-Deamidated Gliadin Peptit):</strong>{" "}
                  Özellikle çocuklarda duyarlı test
                </li>
                <li>
                  <strong>Total IgA:</strong> IgA eksikliğini değerlendirmek
                  için
                </li>
                <li>
                  <strong>Anti-Endomysium:</strong> Konfirmasyon testi olarak
                  kullanılır
                </li>
              </ul>

              <h3>Çölyak Hastalığı Nedir?</h3>
              <p>
                Çölyak hastalığı, gluten içeren gıdaları sindiremeyen kişilerde
                gelişen otoimmün bir hastalıktır. Genetik yatkınlık gerektirir
                ve yaşam boyu sürer.
              </p>

              <h3>Belirtiler</h3>
              <p>Çölyak hastalığının belirtileri şunlardır:</p>
              <ul>
                <li>Kronik ishal</li>
                <li>Karın şişkinliği ve ağrısı</li>
                <li>Kilo kaybı</li>
                <li>Yorgunluk</li>
                <li>Demir eksikliği anemisi</li>
                <li>Kemik ağrıları</li>
                <li>Deri döküntüleri</li>
                <li>Çocuklarda büyüme geriliği</li>
              </ul>

              <h3>Risk Faktörleri</h3>
              <ul>
                <li>Aile öyküsü (birinci derece akrabalarda %10 risk)</li>
                <li>Tip 1 diyabet</li>
                <li>Tiroid hastalıkları</li>
                <li>Down sendromu</li>
                <li>İrritabl bağırsak sendromu</li>
              </ul>

              <h3>Test Öncesi Hazırlık</h3>
              <p>
                Testler gluten içeren diyetle yapılmalıdır. Glutensiz diyete
                geçmeden önce test yaptırmak önemlidir. Test öncesi en az 6
                hafta gluten tüketimi gerekir.
              </p>

              <h3>Tedavi</h3>
              <p>
                Çölyak hastalığının tek tedavisi yaşam boyu glutensiz diyet
                uygulamaktır. Gluten içeren buğday, arpa, çavdar tamamen
                eliminasyon edilmelidir.
              </p>

              <h3>Glutensiz Yaşam</h3>
              <ul>
                <li>Etiket okuma alışkanlığı edinin</li>
                <li>Çapraz kontaminasyondan kaçının</li>
                <li>Glutensiz ürün markalarını öğrenin</li>
                <li>Dışarıda yemek yerken dikkatli olun</li>
                <li>Ailenizi bilgilendirin</li>
              </ul>
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
                href="https://twitter.com/intent/tweet?url=window.location.href&text=Çölyak Paneli - Etik Lab"
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
                to="/test-panelleri/anemi"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <div>
                  <div className="text-sm">Önceki Panel</div>
                  <div className="font-semibold">Anemi Paneli</div>
                </div>
              </Link>

              <Link
                to="/test-panelleri"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Tüm Paneller
              </Link>

              <Link
                to="/test-panelleri/diyabet"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-right"
              >
                <div>
                  <div className="text-sm">Sonraki Panel</div>
                  <div className="font-semibold">Diyabet Paneli</div>
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
