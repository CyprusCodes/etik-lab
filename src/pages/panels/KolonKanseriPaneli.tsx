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

export default function KolonKanseriPaneli() {
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
                  <span>19</span>
                </button>
                <button className="flex items-center gap-1 text-muted-foreground hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>6</span>
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <h2>Kolon Kanseri Paneli Nedir?</h2>
              <p>
                Kolon kanseri paneli, büyük bağırsak (kolon) ve rektum
                kanserlerinin erken teşhisinde kullanılan özel bir test
                kombinasyonudur. Bu panel, kanser belirteçleri ve diğer tanı
                yardımcı testleri içerir.
              </p>

              <h3>Panelde Yer Alan Testler</h3>
              <ul>
                <li>
                  <strong>CEA (Karsinoembriyonik Antijen):</strong> Kolorektal
                  kanserlerde yükselen tümör belirteci
                </li>
                <li>
                  <strong>CA 19-9:</strong> Gastrointestinal kanserlerde
                  kullanılan tümör markırı
                </li>
                <li>
                  <strong>Gaitada Gizli Kan (FOBT):</strong> Dışkıda mikroskobik
                  kan varlığını tespit eder
                </li>
                <li>
                  <strong>Genetik Belirteçler:</strong> Kalıtsal kanser riskini
                  değerlendiren testler
                </li>
              </ul>

              <h3>Risk Faktörleri</h3>
              <p>
                Aşağıdaki durumlarla karşılaşanlarda kolon kanseri riski
                artmıştır:
              </p>
              <ul>
                <li>50 yaş üzeri olmak</li>
                <li>Ailede kolorektal kanser öyküsü</li>
                <li>İnflamatuar bağırsak hastalığı (Crohn, ülseratif kolit)</li>
                <li>Polip öyküsü</li>
                <li>Sigara ve alkol kullanımı</li>
                <li>Sedanter yaşam tarzı</li>
                <li>Yüksek yağlı, düşük lifli beslenme</li>
                <li>Obezite</li>
              </ul>

              <h3>Erken Belirtiler</h3>
              <p>Kolon kanserinin erken belirtileri şunlardır:</p>
              <ul>
                <li>Bağırsak alışkanlıklarında değişiklik</li>
                <li>Dışkıda kan veya mukus</li>
                <li>Karın ağrısı ve kramplar</li>
                <li>Açıklanamayan kilo kaybı</li>
                <li>Yorgunluk ve halsizlik</li>
                <li>Demir eksikliği anemisi</li>
                <li>Rektal kanama</li>
              </ul>

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
                href="https://twitter.com/intent/tweet?url=window.location.href&text=Kolon Kanseri Paneli - Etik Lab"
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
                to="/test-panelleri/torch"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <div>
                  <div className="text-sm">Önceki Panel</div>
                  <div className="font-semibold">TORCH Paneli</div>
                </div>
              </Link>

              <Link
                to="/test-panelleri"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Tüm Paneller
              </Link>

              <Link
                to="/test-panelleri/anemi"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-right"
              >
                <div>
                  <div className="text-sm">Sonraki Panel</div>
                  <div className="font-semibold">Anemi Paneli</div>
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
