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

export default function RomatolojiPaneli() {
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
                  <span>22</span>
                </button>
                <button className="flex items-center gap-1 text-muted-foreground hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>7</span>
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <h2>Romatoloji Paneli Nedir?</h2>
              <p>
                Romatoloji paneli, romatizmal ve otoimmün hastalıkların
                tanısında kullanılan özel laboratuvar testlerinden oluşur. Bu
                testler, eklem, kas ve bağ dokularını etkileyen hastalıkları
                değerlendirir.
              </p>

              <h3>Panelde Yer Alan Testler</h3>
              <ul>
                <li>
                  <strong>RF (Romatoid Faktör):</strong> Romatoid artrit
                  tanısında kullanılır
                </li>
                <li>
                  <strong>Anti-CCP (Siklik Sitrullinlenmiş Peptit):</strong>{" "}
                  Romatoid artrit için spesifik antikor
                </li>
                <li>
                  <strong>ANA (Antinuklear Antikor):</strong> Otoimmün
                  hastalıkların genel tarama testi
                </li>
                <li>
                  <strong>ESR (Eritrosit Sedimantasyon Hızı):</strong>{" "}
                  İnflamasyon göstergesi
                </li>
                <li>
                  <strong>CRP (C-Reaktif Protein):</strong> Aküt faz reaktanı
                </li>
              </ul>

              <h3>Romatizmal Hastalıklar</h3>
              <p>Panel ile tespit edilebilen belli başlı hastalıklar:</p>
              <ul>
                <li>
                  <strong>Romatoid Artrit:</strong> Eklemlerde kronik
                  inflamasyon
                </li>
                <li>
                  <strong>Sjögren Sendromu:</strong> Tükürük ve gözyaşı
                  bezlerini etkiler
                </li>
                <li>
                  <strong>Sistemik Lupus Eritematosus (SLE):</strong> Çoklu
                  organ tutulumu
                </li>
                <li>
                  <strong>Skleroderma:</strong> Deri ve iç organları etkiler
                </li>
                <li>
                  <strong>Ankylosing Spondylitis:</strong> Omurga tutulumu
                </li>
              </ul>

              <h3>Belirtiler</h3>
              <p>Romatizmal hastalıkların genel belirtileri:</p>
              <ul>
                <li>Eklem ağrısı ve şişlik</li>
                <li>Sabah tutukluk</li>
                <li>Yorgunluk ve halsizlik</li>
                <li>Ateş</li>
                <li>Deri döküntüleri</li>
                <li>Kaş ve göz kuruluğu</li>
                <li>Kas ağrıları</li>
                <li>Raynaud fenomeni</li>
              </ul>

              <h3>Risk Faktörleri</h3>
              <ul>
                <li>Genetik yatkınlık</li>
                <li>Cinsiyet (kadınlarda daha sık)</li>
                <li>Yaş (orta yaş)</li>
                <li>Sigara kullanımı</li>
                <li>Enfeksiyonlar</li>
                <li>Stres</li>
                <li>Çevresel faktörler</li>
              </ul>

              <h3>Test Sonuçlarının Değerlendirilmesi</h3>
              <p>
                Romatoloji testleri tek başına tanı koydurmaz. Klinik bulgularla
                birlikte değerlendirilmelidir. Pozitif sonuçlar her zaman
                hastalık anlamına gelmez, sağlıklı kişilerde de görülebilir.
              </p>

              <h3>Tedavi Yaklaşımları</h3>
              <ul>
                <li>Anti-inflamatuar ilaçlar (NSAİD)</li>
                <li>Hastalık modifiye edici ilaçlar (DMARD)</li>
                <li>Biyolojik ilaçlar</li>
                <li>Fizik tedavi</li>
                <li>Egzersiz programı</li>
                <li>Yaşam tarzı değişiklikleri</li>
              </ul>

              <h3>Yaşam Kalitesini Artırma</h3>
              <ul>
                <li>Düzenli egzersiz</li>
                <li>Sağlıklı beslenme</li>
                <li>Stres yönetimi</li>
                <li>Yeterli uyku</li>
                <li>Sigara bırakma</li>
                <li>Sosyal destek</li>
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
                href="https://twitter.com/intent/tweet?url=window.location.href&text=Romatoloji Paneli - Etik Lab"
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
                to="/test-panelleri/diyabet"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <div>
                  <div className="text-sm">Önceki Panel</div>
                  <div className="font-semibold">Diyabet Paneli</div>
                </div>
              </Link>

              <Link
                to="/test-panelleri"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Tüm Paneller
              </Link>

              <Link
                to="/test-panelleri/cinsel-hastaliklar"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-right"
              >
                <div>
                  <div className="text-sm">Sonraki Panel</div>
                  <div className="font-semibold">Cinsel Hastalıklar</div>
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
