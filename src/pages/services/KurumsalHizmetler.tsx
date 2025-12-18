import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Building, Users, Globe, Key } from "lucide-react";
import { ServiceContactForm } from "@/components/forms/ServiceContactForm";
import { getImagePath } from "@/utils/assets";

export default function KurumsalHizmetler() {
  return (
    <Layout>
      <PageHeader
        title="Kurumsal Hizmetler"
        description="Türkiye'nin Her Yerinden Kurumsal Firmalar İçin Profesyonel Hizmet"
        breadcrumbs={[
          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
          { label: "Kurumsal Hizmetler" },
        ]}
      />
      {/* Main Content */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-blue max-w-none">
              <div className="mb-12">
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Birim Laboratuvarı, Türkiye'nin her yerinden birçok kurumsal
                  firmaya hizmet vermektedir. Kurumsal firmaların iş yeri
                  hekimleri tarafından talep edilen periyodik tetkiklerini,
                  numuneleri yerinde alarak, uygun transfer koşullarında merkez
                  laboratuvarımızda çalışmaktadır.
                </p>
              </div>

              {/* Hizmet Alanları */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Building className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Hizmet Alanlarımız
                  </h3>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Periyodik Tetkikler:</strong> İş yeri hekimleri
                      tarafından talep edilen rutin sağlık kontrolleri
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Yerinde Numune Alma:</strong> Firmalarınızda
                      numunelerin alınması ve laboratuvara transferi
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Güvenli Taşıma:</strong> Uygun transfer
                      koşullarında merkez laboratuvarımıza ulaştırma
                    </div>
                  </li>
                </ul>
              </div>

              {/* OSGB Hizmetleri */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    İş Güvenliği Hizmetleri (OSGB)
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Birim Laboratuvarı, ayrıca iş güvenliği hizmeti veren
                  OSGB'lerin hizmet verdiği kurumların periyodik taramaları için
                  alınan kan ve idrar numuneleri ve portör taramaları için
                  kurumsal anlaşmalar yaparak tetkiklerini çalışmaktadır.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Periyodik Taramalar:</strong> İş sağlığı ve
                      güvenliği kapsamındaki testler
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Kan ve İdrar Numuneleri:</strong> OSGB talepleri
                      doğrultusunda test analizi
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Portör Taramaları:</strong> İş sağlığı
                      gereksinimleri için tarama testleri
                    </div>
                  </li>
                </ul>
              </div>

              {/* Online Sonuçlar */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Online Sonuç Sistemi
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Sonuçlar online olarak web sitemizden bireysel ve kurumsal
                  sonuç sayfalarından kolayca alınabilmektedir. Bu sistem
                  sayesinde:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>7/24 Erişim:</strong> Her zaman sonuçlara erişim
                      imkanı
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Güvenli Sistem:</strong> Kullanıcı adı ve şifre
                      ile korumalı erişim
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Toplu Sonuçlar:</strong> Kurumsal sonuçları tek
                      yerden görüntüleme
                    </div>
                  </li>
                </ul>
              </div>

              {/* Kurumsal Şifre */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Key className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Kurumsal Şifrenizi Aldınız mı?
                  </h3>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Bizimle çalışmak isteyen kurumlar, laboratuvarımızla
                    irtibata geçerek alacakları kullanıcı adı ve şifreyle test
                    istemi başvurusu yapabilirler.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Sonuç raporlarına kullanıcı adı ve şifreleriyle
                    ulaşabileceklerdir.
                  </p>
                </div>
              </div>

              {/* Avantajlar */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Kurumsal Hizmetlerimizin Avantajları
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Türkiye Geneli Hizmet:</strong> Türkiye'nin her
                      yerinden kurumsal firmalara hizmet
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Yerinde Hizmet:</strong> Numunelerin kurumda
                      alınması ve transferi
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Online Sonuç Sistemi:</strong> Web tabanlı kolay
                      erişim
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>OSGB Anlaşmaları:</strong> İş güvenliği hizmet
                      sağlayıcıları ile işbirliği
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Güvenli Transfer:</strong> Uygun koşullarda numune
                      taşınması
                    </div>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <ServiceContactForm
        title="Kurumsal Hizmetler İçin İletişime Geçin"
        buttonText="Kurumsal Teklif Talebi Gönder"
      />
    </Layout>
  );
}
