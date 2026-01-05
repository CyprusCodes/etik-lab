import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Heart } from "lucide-react";
import { getImagePath } from "@/utils/assets";
import { useLikes } from "@/hooks/useLikes";

export default function CinselHastaliklarPaneli() {
  const { likes, hasLiked, toggleLike } = useLikes("cinsel-hastaliklar-paneli");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-20">
          <img
            src={getImagePath("panell/ch.png")}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Cinsel Hastalıklar Paneli
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              HIV, HPV, Herpes ve diğer cinsel yolla bulaşan hastalıkların tanı
              ve tarama testleri
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
            <div className="prose prose-lg max-w-none">
              <h2>Cinsel Hastalıklar Paneli Nedir?</h2>
              <p>
                Cinsel hastalıklar paneli, cinsel yolla bulaşan enfeksiyonların
                (CYBE) tespit edilmesine yönelik kapsamlı bir test grubudur. Bu
                testler, erken tanı ve tedavi için kritik öneme sahiptir.
              </p>

              <h3>Panelde Yer Alan Testler</h3>
              <ul>
                <li>
                  <strong>HIV (Human Immunodeficiency Virus):</strong> AIDS'e
                  neden olan virüs
                </li>
                <li>
                  <strong>HPV (Human Papillomavirus):</strong> Serviks kanseri
                  riski
                </li>
                <li>
                  <strong>Herpes Simplex Virüs 1 ve 2:</strong> Genital ve oral
                  herpes
                </li>
                <li>
                  <strong>Klamidya:</strong> En sık görülen bakteriyel CYBE
                </li>
                <li>
                  <strong>Gonore:</strong> Bel soğukluğu hastalığı
                </li>
                <li>
                  <strong>Sifiliz:</strong> Treponema pallidum bakterisi
                </li>
                <li>
                  <strong>Hepatit B ve C:</strong> Karaciğer enfeksiyonları
                </li>
              </ul>

              <h3>Risk Faktörleri</h3>
              <p>CYBE riski aşağıdaki durumlarla artar:</p>
              <ul>
                <li>Çoklu cinsel partner</li>
                <li>Korunasız cinsel ilişki</li>
                <li>Genelde yaş (15-24)</li>
                <li>Önceden CYBE geçirme</li>
                <li>Madde kullanımı</li>
                <li>Buluşturmalı cinsel partner</li>
                <li>Bağışıklık sistemi zayıflığı</li>
              </ul>

              <h3>Belirtiler</h3>
              <p>CYBE'lerin genel belirtileri:</p>
              <ul>
                <li>Genital bölgemde akıntı</li>
                <li>Yažaş veya ağrı</li>
                <li>Kabarciklar veya yaralar</li>
                <li>İdrara çıkarma sırasında ağrı</li>
                <li>Kasik lenf bezlerinde şişlik</li>
                <li>Ateş ve yorgunluk</li>
                <li>Deri döküntüsü</li>
                <li>Ağzız veya boğaz yarası</li>
              </ul>

              <h3>Önemli Not: Asemptomatik Seyir</h3>
              <p>
                Çoğu CYBE başlangıçta hiçbir belirti vermez. Bu nedenle düzenli
                tarama testleri çok önemlidir. Özellikle klamidya ve gonore
                çoğunlukla sessiz seyirli hastalıklardır.
              </p>

              <h3>Komplikasyonlar</h3>
              <p>
                Tedavi edilmeyen CYBE'ler ciddi komplikasyonlara yol açabilir:
              </p>
              <ul>
                <li>Kısırlık</li>
                <li>Pelvik inflamatuar hastalık (PID)</li>
                <li>Ektopik gebelik</li>
                <li>Kronik karın ağrısı</li>
                <li>Serviks kanseri (HPV)</li>
                <li>Nörolojik komplikasyonlar</li>
                <li>Anne-bebek bulaşı</li>
              </ul>

              <h3>Korunma Yöntemleri</h3>
              <ul>
                <li>Kondom kullanımı (lateks veya poliuretan)</li>
                <li>Tek eşlilik</li>
                <li>Düzenli tarama testleri</li>
                <li>HPV aşısı</li>
                <li>Hepatit B aşısı</li>
                <li>Partner testleri</li>
                <li>Cinsel eğitim</li>
              </ul>

              <h3>Test Zamanlamasi</h3>
              <p>CYBE testleri ne zaman yapılmalı:</p>
              <ul>
                <li>Yıllık rutin tarama</li>
                <li>Yeni partner öncesi</li>
                <li>şüpheli temas sonrası</li>
                <li>Belirti varlığında</li>
                <li>Hamilelik planlarken</li>
                <li>Partner tanısı aldığında</li>
              </ul>

              <h3>Mahremiyetiniz Korunur</h3>
              <p>
                Tüm CYBE testleri tamamen gizlidir. Sonuçlar sadece sizinle
                paylaşılır ve tıbbi mahremiyet ilkeleri çerçevesinde korunur.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-200">
              <Link
                to="/test-panelleri/romatoloji"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-sm text-gray-500">Önceki Panel</div>
                  <div className="font-semibold">Romatoloji Paneli</div>
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
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-right group"
              >
                <div>
                  <div className="text-sm text-gray-500">Sonraki Panel</div>
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
