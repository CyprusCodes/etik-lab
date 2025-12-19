import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Users, FileText, Globe, Clock } from "lucide-react";
import { ServiceContactForm } from "@/components/forms/ServiceContactForm";
import { getImagePath } from "@/utils/assets";

export default function AyaktanHasta() {
  return (
    <Layout>
      <PageHeader
        title="Ayaktan Hasta Hizmetleri"
        description="Laboratuvarımıza Gelerek Hızlı ve Güvenilir Test Hizmeti Alın"
        breadcrumbs={[
          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
          { label: "Ayaktan Hasta Hizmetleri" },
        ]}
      />

      {/* Main Content */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-blue max-w-none">
              <div className="mb-12">
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Mesai saatleri içerisinde laboratuvarımıza hastalarımız
                  gelerek testleriyle ilgili örnekleri verebilir ve sonuçlarını
                  mail, posta ve web sitemiz üzerinden bireysel test sonucu
                  ekranından alabilirler.
                </p>
              </div>

              {/* Karşılama Süreci */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Misafir Karşılama
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Birim laboratuvarımıza gelen misafirlerimizi hasta kabul
                  yetkililerimiz karşılayarak, test verme aşamasına kadar
                  sizlere eşlik ederler. Bu süreçte tüm sorularınız yanıtlanır
                  ve işlemleriniz hızlı bir şekilde gerçekleştirilir.
                </p>
              </div>

              {/* Numune Alma */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Profesyonel Numune Alma
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Numune alma aşamasında sizi bebek ve yetişkinlerde son derece
                  tecrübeli flebotomist ve laboratuvar teknikerlerimiz karşılar
                  ve sorunsuz bir kan alma deneyimi ile işlemlerinizi
                  tamamlayabilirsiniz.
                </p>
              </div>

              {/* Sonuç Alma Yöntemleri */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Sonuçlarınızı Nasıl Alabilirsiniz?
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Test sonuçlarınızı aşağıdaki yöntemlerle kolayca
                  alabilirsiniz:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>E-posta ile:</strong> Sonuçlarınız hazır olduğunda
                      e-posta adresinize gönderilir
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Posta ile:</strong> Geleneksel posta yolu ile
                      adresinize gönderim yapılır
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Web sitesi üzerinden:</strong> Bireysel test
                      sonucu ekranından 7/24 erişim imkanı
                    </div>
                  </li>
                </ul>
              </div>

              {/* Hizmet Saatleri */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Hizmet Saatlerimiz
                </h3>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <h4 className="text-lg font-semibold">Mesai Saatleri</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Pazartesi - Pazar: 07:00 - 23:00
                    <br />
                    Pazar: Kapalı
                  </p>
                </div>
              </div>

              {/* Avantajlar */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Ayaktan Hasta Hizmetlerinin Avantajları
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Hızlı Hizmet:</strong> Mesai saatleri içerisinde
                      hızlı test işlemleri
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Profesyonel Kadro:</strong> Tecrübeli flebotomist
                      ve laboratuvar teknisyenleri
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Çoklu Sonuç Alma:</strong> E-posta, posta ve web
                      sitesi seçenekleri
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Güvenli Ortam:</strong> Modern laboratuvar
                      standartları ve hijyen
                    </div>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <ServiceContactForm title="Ayaktan Hasta Hizmetleri İçin İletişime Geçin" />
    </Layout>
  );
}
