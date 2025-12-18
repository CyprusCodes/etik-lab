import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Home, Shield, CheckCircle } from "lucide-react";
import { ServiceContactForm } from "@/components/forms/ServiceContactForm";
import { getImagePath } from "@/utils/assets";

export default function EvdeKanAlma() {
  return (
    <Layout>
      <PageHeader
        title="Evde Kan Alma Hizmeti"
        description="Evinizin Konforunda Güvenilir Test Hizmeti"
        breadcrumbs={[
          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
          { label: "Evde Kan Alma Hizmeti" },
        ]}
      />
      {/* Main Content */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-blue max-w-none">
              <div className="mb-12">
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Evde kan alma hizmeti özellikle metropollerde büyük ihtiyaç
                  haline gelmiş bir hizmettir. Trafik keşmekeşinin yaşandığı
                  İstanbul gibi büyük şehirlerde hem zaman kazanmak hem de stres
                  yaşamamak için arayın evinize, iş yerinize gelelim.
                </p>
              </div>

              {/* Kimler İçin */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Home className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Evde Kan Alma Hizmeti Kimler İçin?
                  </h3>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>Evden çıkmanıza mani bir sağlık sorununuz varsa</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      Test yaptırmak için ilgili kuruluşa gitmek mesainize geç
                      kalmanıza sebebiyet verecekse
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      Yatağa bağımlı bir yakınınızın test yaptırma ihtiyacı
                      varsa
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      Bebeğinizi bırakıp çıkamıyor ya da onunla birlikte sağlık
                      kuruluşuna gitmek istemiyorsanız
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      İstanbul'un trafiğinde vakit kaybetmek istemiyorsanız
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>Hava muhalefeti size zorluk çıkarıyorsa</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      Aç karnına yapılması gereken testleriniz var ve kahvaltı
                      yapmadan evden çıkmak istemiyorsanız
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      Evinizin nezih ortamında örneklerinizin alınmasını
                      istiyorsanız
                    </div>
                  </li>
                </ul>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  <strong>Bir telefon kadar size yakınız!</strong>
                </p>
              </div>

              {/* Hizmet Süreci */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Hizmet Sürecimiz
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Evde kan alma işlemi için tecrübeli sağlık personellerini
                  kullanılacak steril malzemelerle adresinize gönderiyoruz.
                  Tahlilleriniz için gerekli örneklerin alımı tamamlandıktan
                  sonra herhangi bir karışıklığa izin vermemek için alınan
                  örnekleri barkodlayıp soğutuculu taşıma çantaları ile ilgili
                  laboratuvara götürüyoruz.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  İstanbul'un güvenilir laboratuvarlarında sonuçlandırılan
                  tahlilleriniz size vaat edilen zamanda hazır olduğunda
                  isterseniz e-mail, WhatsApp gibi mobil imkanlarla, isterseniz
                  hızlı kargo ile adresinize, talep ederseniz de ev veya iş
                  yerinize elden bırakıyoruz.{" "}
                  <strong>
                    Ve bu hizmetler için ekstra bir ücret talep etmiyoruz.
                  </strong>
                </p>
                <p className="text-lg font-semibold text-primary mb-8">
                  Size doğru sonuçları en kısa sürede ulaştırmak birinci
                  önceliğimizdir.
                </p>
              </div>

              {/* Nasıl Çalışır */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Nasıl Çalışır?
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Tahlil İsteği Gönderimi
                      </h4>
                      <p className="text-muted-foreground">
                        Yaptırmak istediğiniz tahlilleriniz varsa laboratuvar
                        istek kağıdının fotoğrafını çekerek mail veya WhatsApp
                        iletişim hattıyla bize gönderiyorsunuz.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        İnceleme ve Bilgilendirme
                      </h4>
                      <p className="text-muted-foreground">
                        Tarafımızdan inceleme tamamlandıktan sonra sizi arayıp
                        testlerin aç karnına olup olmayacağı veya belirli bir
                        saatte alınması gibi önemli bilgilerle birlikte test
                        ücretlerini sizinle paylaşıyoruz.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Personel Gönderimi</h4>
                      <p className="text-muted-foreground">
                        Size önerilen fiyatlandırmayı kabul ettiğiniz takdirde
                        bize ileteceğiniz lokasyona yetkili kan alma personelini
                        gerekli ekipmanla birlikte gönderiyoruz.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Numune Alma ve Taşıma
                      </h4>
                      <p className="text-muted-foreground">
                        Tecrübeli kan alma personeline örneklerinizi aldırarak
                        adresinize en yakın güvenilir ve hızlı sonuç veren
                        laboratuvara kan taşıma çantalarıyla ulaştırmasını
                        sağlıyoruz.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Sonuç Teslimatı</h4>
                      <p className="text-muted-foreground">
                        Gizlilik içerisinde sonuçlandırılan testlerinizi sizden
                        aldığımız mail adresine gönderdiğimiz gibi talep
                        ettiğiniz takdirde adresinize postalıyoruz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mb-12">
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Evde kan alma hizmetiyle ilgili detaylı bilgi almak için
                  bizimle iletişime geçebilirsiniz.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <ServiceContactForm
        title="Evde Kan Alma Hizmeti İçin Randevu Alın"
        buttonText="Evde Kan Alma Randevusu Al"
      />
    </Layout>
  );
}
