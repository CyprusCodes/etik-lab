import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Heart } from "lucide-react";
import { getImagePath } from "@/utils/assets";
import { useLikes } from "@/hooks/useLikes";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

export default function CinselHastaliklarPaneli() {
  const { likes, hasLiked, toggleLike } = useLikes(
    "cinsel-hastaliklar-paneli",
  );

  return (
    <Layout>
      <SEO
        title="Cinsel Yolla Bulaşan Hastalıklar Testleri"
        description="Cinsel yolla bulaşan hastalıkların değerlendirilmesinde kullanılan laboratuvar testleri hakkında bilgi alın."
        path="/test-panelleri/cinsel-hastaliklar"
      />
      <BreadcrumbSchema
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Test Panelleri", path: "/test-panelleri" },
          {
            name: "Cinsel Hastalıklar Paneli",
            path: "/test-panelleri/cinsel-hastaliklar",
          },
        ]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-20">
          <img
            src={getImagePath("panell/ch.png")}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="container-wide relative z-10">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1 className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl">
              Cinsel Hastalıklar Paneli
            </h1>

            <p className="text-lg leading-relaxed text-white/90 md:text-xl">
              HIV, HPV, Herpes ve diğer cinsel yolla bulaşan hastalıkların tanı
              ve tarama testleri
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl">
            {/* Article Meta */}
            <div className="mb-12 flex flex-wrap items-center gap-6 border-b border-gray-200 pb-6">
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="h-4 w-4" />
                <span>18 Aralık 2024</span>
              </div>

              <div className="ml-auto flex items-center gap-4">
                <button
                  type="button"
                  onClick={toggleLike}
                  aria-label={
                    hasLiked
                      ? "Beğeniyi kaldır"
                      : "Cinsel Hastalıklar Paneli sayfasını beğen"
                  }
                  className={`flex items-center gap-2 rounded-lg px-3 py-1 transition-colors ${
                    hasLiked
                      ? "bg-red-50 text-red-500"
                      : "text-gray-700 hover:text-red-500"
                  }`}
                >
                  <Heart
                    className={`h-4 w-4 ${hasLiked ? "fill-current" : ""}`}
                  />
                  <span>{likes}</span>
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Cinsel Hastalıklar Paneli Nedir?
                </h2>

                <p className="leading-relaxed text-gray-700">
                  Cinsel hastalıklar paneli, cinsel yolla bulaşan
                  enfeksiyonların (CYBE) tespit edilmesine yönelik kapsamlı bir
                  test grubudur. Bu testler, erken tanı ve tedavi için kritik
                  öneme sahiptir.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Panelde Yer Alan Testler
                </h3>

                <div className="space-y-3">
                  <div className="rounded-lg bg-cyan-50 p-4">
                    <strong className="text-cyan-800">
                      HIV (Human Immunodeficiency Virus):
                    </strong>{" "}
                    AIDS&apos;e neden olan virüs
                  </div>

                  <div className="rounded-lg bg-cyan-50 p-4">
                    <strong className="text-cyan-800">
                      HPV (Human Papillomavirus):
                    </strong>{" "}
                    Serviks kanseri riski
                  </div>

                  <div className="rounded-lg bg-cyan-50 p-4">
                    <strong className="text-cyan-800">
                      Herpes Simplex Virüs 1 ve 2:
                    </strong>{" "}
                    Genital ve oral herpes
                  </div>

                  <div className="rounded-lg bg-cyan-50 p-4">
                    <strong className="text-cyan-800">Klamidya:</strong> En sık
                    görülen bakteriyel CYBE
                  </div>

                  <div className="rounded-lg bg-cyan-50 p-4">
                    <strong className="text-cyan-800">Gonore:</strong> Bel
                    soğukluğu hastalığı
                  </div>

                  <div className="rounded-lg bg-cyan-50 p-4">
                    <strong className="text-cyan-800">Sifiliz:</strong>{" "}
                    Treponema pallidum bakterisi
                  </div>

                  <div className="rounded-lg bg-cyan-50 p-4">
                    <strong className="text-cyan-800">Hepatit B ve C:</strong>{" "}
                    Karaciğer enfeksiyonları
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Risk Faktörleri
                </h3>

                <p className="mb-4 leading-relaxed text-gray-700">
                  CYBE riski aşağıdaki durumlarla artar:
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg bg-yellow-50 p-3 text-yellow-800">
                    Çoklu cinsel partner
                  </div>

                  <div className="rounded-lg bg-yellow-50 p-3 text-yellow-800">
                    Korunmasız cinsel ilişki
                  </div>

                  <div className="rounded-lg bg-yellow-50 p-3 text-yellow-800">
                    Genç yaş grubu (15–24)
                  </div>

                  <div className="rounded-lg bg-yellow-50 p-3 text-yellow-800">
                    Önceden CYBE geçirme
                  </div>

                  <div className="rounded-lg bg-yellow-50 p-3 text-yellow-800">
                    Madde kullanımı
                  </div>

                  <div className="rounded-lg bg-yellow-50 p-3 text-yellow-800">
                    CYBE riski bulunan partner
                  </div>

                  <div className="rounded-lg bg-yellow-50 p-3 text-yellow-800 md:col-span-2">
                    Bağışıklık sisteminin zayıf olması
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Belirtiler
                </h3>

                <p className="mb-4 leading-relaxed text-gray-700">
                  CYBE&apos;lerin genel belirtileri:
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg bg-red-50 p-3 text-red-700">
                    Genital bölgede akıntı
                  </div>

                  <div className="rounded-lg bg-red-50 p-3 text-red-700">
                    Yanma veya ağrı
                  </div>

                  <div className="rounded-lg bg-red-50 p-3 text-red-700">
                    Kabarcıklar veya yaralar
                  </div>

                  <div className="rounded-lg bg-red-50 p-3 text-red-700">
                    İdrara çıkma sırasında ağrı
                  </div>

                  <div className="rounded-lg bg-red-50 p-3 text-red-700">
                    Kasık lenf bezlerinde şişlik
                  </div>

                  <div className="rounded-lg bg-red-50 p-3 text-red-700">
                    Ateş ve yorgunluk
                  </div>

                  <div className="rounded-lg bg-red-50 p-3 text-red-700">
                    Deri döküntüsü
                  </div>

                  <div className="rounded-lg bg-red-50 p-3 text-red-700">
                    Ağız veya boğaz yarası
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-blue-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-blue-700">
                  Önemli Not: Asemptomatik Seyir
                </h3>

                <p className="leading-relaxed text-gray-700">
                  Çoğu CYBE başlangıçta hiçbir belirti vermez. Bu nedenle
                  düzenli tarama testleri çok önemlidir. Özellikle klamidya ve
                  gonore çoğunlukla sessiz seyirli hastalıklardır.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Komplikasyonlar
                </h3>

                <p className="mb-4 leading-relaxed text-gray-700">
                  Tedavi edilmeyen CYBE&apos;ler ciddi komplikasyonlara yol
                  açabilir:
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg bg-orange-50 p-3 text-orange-800">
                    Kısırlık
                  </div>

                  <div className="rounded-lg bg-orange-50 p-3 text-orange-800">
                    Pelvik inflamatuar hastalık (PID)
                  </div>

                  <div className="rounded-lg bg-orange-50 p-3 text-orange-800">
                    Ektopik gebelik
                  </div>

                  <div className="rounded-lg bg-orange-50 p-3 text-orange-800">
                    Kronik karın ağrısı
                  </div>

                  <div className="rounded-lg bg-orange-50 p-3 text-orange-800">
                    Serviks kanseri (HPV)
                  </div>

                  <div className="rounded-lg bg-orange-50 p-3 text-orange-800">
                    Nörolojik komplikasyonlar
                  </div>

                  <div className="rounded-lg bg-orange-50 p-3 text-orange-800 md:col-span-2">
                    Anne-bebek bulaşı
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-green-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-green-700">
                  Korunma Yöntemleri
                </h3>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg bg-white p-3 text-gray-700">
                    Kondom kullanımı (lateks veya poliüretan)
                  </div>

                  <div className="rounded-lg bg-white p-3 text-gray-700">
                    Tek eşlilik
                  </div>

                  <div className="rounded-lg bg-white p-3 text-gray-700">
                    Düzenli tarama testleri
                  </div>

                  <div className="rounded-lg bg-white p-3 text-gray-700">
                    HPV aşısı
                  </div>

                  <div className="rounded-lg bg-white p-3 text-gray-700">
                    Hepatit B aşısı
                  </div>

                  <div className="rounded-lg bg-white p-3 text-gray-700">
                    Partner testleri
                  </div>

                  <div className="rounded-lg bg-white p-3 text-gray-700 md:col-span-2">
                    Cinsel eğitim
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Test Zamanlaması
                </h3>

                <p className="mb-4 leading-relaxed text-gray-700">
                  CYBE testleri aşağıdaki durumlarda yapılabilir:
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg bg-purple-50 p-3 text-purple-800">
                    Yıllık rutin tarama
                  </div>

                  <div className="rounded-lg bg-purple-50 p-3 text-purple-800">
                    Yeni partner öncesi
                  </div>

                  <div className="rounded-lg bg-purple-50 p-3 text-purple-800">
                    Şüpheli temas sonrası
                  </div>

                  <div className="rounded-lg bg-purple-50 p-3 text-purple-800">
                    Belirti varlığında
                  </div>

                  <div className="rounded-lg bg-purple-50 p-3 text-purple-800">
                    Hamilelik planlarken
                  </div>

                  <div className="rounded-lg bg-purple-50 p-3 text-purple-800">
                    Partner tanı aldığında
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-primary/10 p-6">
                <h3 className="mb-4 text-xl font-semibold text-teal-800">
                  Mahremiyetiniz Korunur
                </h3>

                <p className="leading-relaxed text-gray-700">
                  Tüm CYBE testleri tamamen gizlidir. Sonuçlar sadece sizinle
                  paylaşılır ve tıbbi mahremiyet ilkeleri çerçevesinde korunur.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-16 flex items-center justify-between border-t border-gray-200 pt-8">
              <Link
                to="/test-panelleri/romatoloji"
                className="group flex items-center gap-3 text-gray-700 transition-colors hover:text-teal-800"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />

                <div>
                  <div className="text-sm text-gray-700">Önceki Panel</div>
                  <div className="font-semibold">Romatoloji Paneli</div>
                </div>
              </Link>

              <Link
                to="/test-panelleri"
                className="rounded-lg bg-primary px-8 py-3 font-medium text-white transition-colors hover:bg-primary/90"
              >
                Tüm Paneller
              </Link>

              <Link
                to="/test-panelleri/tiroid"
                className="group flex items-center gap-3 text-right text-gray-700 transition-colors hover:text-teal-800"
              >
                <div>
                  <div className="text-sm text-gray-700">Sonraki Panel</div>
                  <div className="font-semibold">Tiroid Paneli</div>
                </div>

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
