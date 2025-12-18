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

export default function TorchPaneli() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-20">
          <img
            src={getImagePath("panell/torch.png")}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              TORCH Paneli
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Hamilelik öncesi ve sırasında önemli enfeksiyonların taranmasına
              yönelik kapsamlı test paneli
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
                  <span>31</span>
                </button>
                <button className="flex items-center gap-1 text-muted-foreground hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>12</span>
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <h2>TORCH Paneli Nedir?</h2>
              <p>
                TORCH paneli, hamilelik öncesi ve sırasında anne ve bebek
                sağlığı için risk oluşturan enfeksiyonların taranması amacıyla
                kullanılan bir test grubudur. TORCH kelimesi, test edilen
                mikroorganizmaların baş harflerinden oluşur.
              </p>

              <h3>TORCH Testlerinin Açılımı</h3>
              <ul>
                <li>
                  <strong>T - Toxoplasma:</strong> Toxoplasma gondii parazitinin
                  neden olduğu enfeksiyon
                </li>
                <li>
                  <strong>O - Others:</strong> Diğer enfeksiyonlar (Sifilis,
                  Parvovirüs B19, vb.)
                </li>
                <li>
                  <strong>R - Rubella:</strong> Kızamıkçık virüsü
                </li>
                <li>
                  <strong>C - Cytomegalovirus (CMV):</strong> Sitomegalovirüs
                </li>
                <li>
                  <strong>H - Herpes:</strong> Herpes Simplex Virüs 1 ve 2
                </li>
              </ul>

              <h3>Neden Önemlidir?</h3>
              <p>
                Bu enfeksiyonlar hamilelik sırasında bebeğe geçebilir ve ciddi
                sağlık sorunlarına yol açabilir:
              </p>
              <ul>
                <li>Doğum defektleri</li>
                <li>Zihinsel gelişim geriliği</li>
                <li>İşitme ve görme problemleri</li>
                <li>Organ hasarları</li>
                <li>Düşük doğum ağırlığı</li>
                <li>Prematüre doğum riski</li>
              </ul>

              <h3>Kimler Yaptırmalı?</h3>
              <p>TORCH paneli aşağıdaki durumlarda önerilir:</p>
              <ul>
                <li>Hamilelik planlaması yapan çiftler</li>
                <li>Hamilelik sürecindeki anneler</li>
                <li>Tekrarlayan düşük öyküsü olanlar</li>
                <li>Doğum defekti öyküsü bulunanlar</li>
                <li>İmmün sistemi zayıf olan kişiler</li>
              </ul>

              <h3>Test Sonuçlarının Değerlendirilmesi</h3>
              <p>
                Test sonuçları IgG ve IgM antikorları ile değerlendirilir. IgM
                pozitifliği akut enfeksiyonu, IgG pozitifliği ise geçirilmiş
                enfeksiyonu gösterir. Bazı durumlarda avidite testi ile
                enfeksiyonun zamanlaması belirlenir.
              </p>

              <h3>Korunma Yolları</h3>
              <p>Enfeksiyonlardan korunmak için:</p>
              <ul>
                <li>Kişisel hijyene dikkat edin</li>
                <li>Çiğ et tüketiminden kaçının</li>
                <li>El hijyenine özen gösterin</li>
                <li>Kedi kumu temizliğinde eldiven kullanın</li>
                <li>Güvenli cinsel ilişki</li>
                <li>Rubella aşısı yaptırın (hamilelik öncesi)</li>
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
                href="https://twitter.com/intent/tweet?url=window.location.href&text=TORCH Paneli - Etik Lab"
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
                to="/test-panelleri/tiroid"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <div>
                  <div className="text-sm">Önceki Panel</div>
                  <div className="font-semibold">Tiroid Paneli</div>
                </div>
              </Link>

              <Link
                to="/test-panelleri"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Tüm Paneller
              </Link>

              <Link
                to="/test-panelleri/kolon-kanseri"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-right"
              >
                <div>
                  <div className="text-sm">Sonraki Panel</div>
                  <div className="font-semibold">Kolon Kanseri Paneli</div>
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
