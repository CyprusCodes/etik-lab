import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import {
  Shield,
  Heart,
  Dna,
  TestTube2,
  CheckCircle2,
} from "lucide-react";
import { ServiceContactForm } from "@/components/forms/ServiceContactForm";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

export default function GenetikTestleri() {
  return (
    <Layout>
      <SEO
        title="Genetik Testler"
        description="Etik Laboratuvar tarafından sunulan hamilelik öncesi, hamilelik dönemi ve doğum sonrası genetik testler hakkında bilgi alın."
        path="/hizmetlerimiz/genetik-testler"
      />

      <BreadcrumbSchema
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hizmetler", path: "/hizmetlerimiz" },
          {
            name: "Hamilelik Dönemi, Öncesi ve Sonrası Genetik Testler",
            path: "/hizmetlerimiz/genetik-testler",
          },
        ]}
      />

      <PageHeader
        title="Hamilelik Dönemi, Öncesi ve Sonrası Genetik Testler"
        description="Sağlıklı bir başlangıç için genetik testlerimizi keşfedin."
        breadcrumbs={[
          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
          { label: "Genetik Testler" },
        ]}
      />

      {/* Main Content */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-blue max-w-none">
              {/* Giriş */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  Sağlıklı Bir Başlangıç
                </h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                  Etik Laboratuvarı, hamilelik öncesi dönemden bebeğin
                  doğumuna kadar uzanan süreçte genetik risklerin
                  değerlendirilmesine yardımcı olan farklı test seçenekleri
                  sunar. Bu testler, anne ve baba adaylarının taşıyıcılık
                  durumlarının araştırılması, gebelik döneminde bebeğin
                  kromozomal ve genetik açıdan değerlendirilmesi ve doğum
                  sonrasında bazı hastalıkların erken dönemde taranması
                  amacıyla uygulanabilir.
                </p>
              </div>

              {/* Hamilelik Öncesi */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-6 h-6 text-primary" />

                  <h3 className="text-2xl font-bold text-foreground">
                    Hamilelik Öncesi Genetik Testler
                  </h3>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Hamilelik öncesi genetik testler, anne ve baba adaylarının
                  taşıyıcısı olabileceği kalıtsal hastalıkların
                  değerlendirilmesine yardımcı olur. Aile öyküsü, önceki
                  gebelikler ve klinik değerlendirmeler doğrultusunda uygun
                  testler planlanabilir.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 shrink-0" />

                    <div>
                      <strong>Taşıyıcı Tarama Testleri:</strong> Anne ve baba
                      adaylarının belirli kalıtsal hastalıklar açısından
                      taşıyıcılık durumunun değerlendirilmesine yardımcı olur.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 shrink-0" />

                    <div>
                      <strong>Genetik Danışmanlık:</strong> Aile öyküsü ve test
                      sonuçları doğrultusunda kişiye özel bilgilendirme ve
                      yönlendirme sağlanmasına destek olur.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 shrink-0" />

                    <div>
                      <strong>Gebelik Planlamasına Yönelik İncelemeler:</strong>{" "}
                      Ailede bilinen genetik hastalık, taşıyıcılık veya önceki
                      gebeliklerde risk öyküsü bulunan çiftlerde uygun
                      incelemeler planlanabilir.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Hamilelik Dönemi */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Dna className="w-6 h-6 text-primary" />

                  <h3 className="text-2xl font-bold text-foreground">
                    Hamilelik Dönemi Genetik Testleri
                  </h3>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                  Hamilelik döneminde uygulanan genetik tarama ve tanı
                  yöntemleri, bebeğin bazı kromozomal ve genetik durumlar
                  açısından değerlendirilmesine yardımcı olur. Uygulanacak
                  test, gebelik haftası, klinik bulgular, aile öyküsü ve uzman
                  değerlendirmesine göre belirlenir.
                </p>

                {/* VERAgene */}
                <div className="rounded-2xl border border-primary/15 bg-white p-6 md:p-8 shadow-sm mb-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Dna className="w-6 h-6 text-primary" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-teal-800 uppercase tracking-wide mb-1">
                        Prenatal Genetik Tarama
                      </p>

                      <h4 className="text-2xl font-bold text-foreground mb-3">
                        VERAgene Nedir?
                      </h4>

                      <p className="text-lg leading-relaxed text-gray-700">
                        VERAgene; anöploidileri, mikrodelesyonları ve tek gen
                        hastalıklarını aynı tarama kapsamında
                        değerlendirebilen, invaziv olmayan prenatal bir
                        testtir. Kromozomal durumların taranmasını monogenik
                        hastalıkların değerlendirilmesiyle birleştirerek anne
                        ve baba adaylarına kapsamlı bir tarama seçeneği sunar.
                      </p>
                    </div>
                  </div>

                  {/* Nasıl Çalışır */}
                  <div className="border-t border-gray-100 pt-7 mt-7">
                    <div className="flex items-center gap-3 mb-5">
                      <TestTube2 className="w-5 h-5 text-primary" />

                      <h5 className="text-xl font-bold text-foreground">
                        VERAgene Nasıl Çalışır?
                      </h5>
                    </div>

                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                      Test için anne adayından kan örneği, biyolojik babadan ise
                      yanak sürüntüsü örneği alınır. Anne kanında anneye ve
                      fetüse ait hücre dışı DNA parçaları bulunur. Bu DNA
                      parçaları, babadan alınan DNA örneğiyle birlikte yeni
                      nesil dizileme teknolojisi kullanılarak analiz edilir.
                      Elde edilen veriler, gelişmiş biyoinformatik yöntemlerle
                      değerlendirilir ve sonuçlar klinik uzmana iletilir.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        "Anne adayından kan örneği alınır.",
                        "Biyolojik babadan yanak sürüntüsü alınır.",
                        "DNA örnekleri yeni nesil dizileme ile analiz edilir.",
                        "Sonuçlar klinik değerlendirme için uzman hekime iletilir.",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-xl bg-blue-50/70 border border-blue-100 p-4"
                        >
                          <CheckCircle2 className="w-5 h-5 text-teal-700 mt-0.5 shrink-0" />

                          <span className="text-gray-700 leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Özellikler */}
                  <div className="border-t border-gray-100 pt-7 mt-7">
                    <h5 className="text-xl font-bold text-foreground mb-5">
                      VERAgene’nin Öne Çıkan Özellikleri
                    </h5>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="rounded-xl border border-gray-100 bg-gray-50/70 p-5">
                        <strong className="block text-teal-800 mb-2">
                          Hedefli Genomik Analiz
                        </strong>

                        <p className="text-gray-700 leading-relaxed">
                          Seçilen genomik bölgelerde bulunan hücre dışı DNA
                          parçalarının yakalanması, sayılması ve analiz
                          edilmesi hedeflenir.
                        </p>
                      </div>

                      <div className="rounded-xl border border-gray-100 bg-gray-50/70 p-5">
                        <strong className="block text-teal-800 mb-2">
                          Yüksek Okuma Derinliği
                        </strong>

                        <p className="text-gray-700 leading-relaxed">
                          Yakalanan DNA parçaları, istatistiksel doğruluk ve
                          hassasiyeti desteklemek amacıyla çok sayıda okunur.
                        </p>
                      </div>

                      <div className="rounded-xl border border-gray-100 bg-gray-50/70 p-5">
                        <strong className="block text-teal-800 mb-2">
                          Fetal Fraksiyon Hesaplaması
                        </strong>

                        <p className="text-gray-700 leading-relaxed">
                          Biyoinformatik analiz ile anne kanında bulunan fetüse
                          ait DNA oranı değerlendirilir.
                        </p>
                      </div>

                      <div className="rounded-xl border border-gray-100 bg-gray-50/70 p-5">
                        <strong className="block text-teal-800 mb-2">
                          Çoklu Analiz İşlem Hatları
                        </strong>

                        <p className="text-gray-700 leading-relaxed">
                          Anöploidi, mikrodelesyon ve diğer tarama sonuçları
                          özel biyoinformatik işlem hatları kullanılarak analiz
                          edilir.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Taranan Durumlar */}
                  <div className="border-t border-gray-100 pt-7 mt-7">
                    <h5 className="text-xl font-bold text-foreground mb-5">
                      VERAgene Hangi Durumları Tarar?
                    </h5>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="rounded-xl border border-primary/10 bg-primary/5 p-5">
                        <h6 className="font-bold text-foreground mb-3">
                          Otozomal Anöploidiler
                        </h6>

                        <ul className="space-y-2 text-gray-700">
                          <li>Down sendromu — Trizomi 21</li>
                          <li>Edwards sendromu — Trizomi 18</li>
                          <li>Patau sendromu — Trizomi 13</li>
                        </ul>
                      </div>

                      <div className="rounded-xl border border-primary/10 bg-primary/5 p-5">
                        <h6 className="font-bold text-foreground mb-3">
                          Cinsiyet Kromozomu Anöploidileri
                        </h6>

                        <ul className="space-y-2 text-gray-700">
                          <li>Turner sendromu — Monozomi X</li>
                          <li>Üçlü X sendromu — Trizomi X</li>
                          <li>Klinefelter sendromu — XXY</li>
                          <li>Jacobs sendromu — XYY</li>
                          <li>XXYY sendromu</li>
                        </ul>
                      </div>

                      <div className="rounded-xl border border-primary/10 bg-primary/5 p-5">
                        <h6 className="font-bold text-foreground mb-3">
                          Mikrodelesyonlar
                        </h6>

                        <ul className="space-y-2 text-gray-700">
                          <li>DiGeorge sendromu — 22q11.2</li>
                          <li>1p36 delesyon sendromu</li>
                          <li>Smith-Magenis sendromu — 17p11.2</li>
                          <li>Wolf-Hirschhorn sendromu — 4p16.3</li>
                        </ul>
                      </div>

                      <div className="rounded-xl border border-primary/10 bg-primary/5 p-5">
                        <h6 className="font-bold text-foreground mb-3">
                          Tek Gen Hastalıkları
                        </h6>

                        <p className="text-gray-700 leading-relaxed">
                          VERAgene, otozomal resesif ve X’e bağlı 100 monogenik
                          hastalığın taranması amacıyla 2.000’den fazla genetik
                          varyantı analiz eder.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bilgilendirme */}
                  <div className="mt-7 rounded-xl border border-amber-200 bg-amber-50 p-5">
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-amber-800">
                        Önemli bilgilendirme:
                      </strong>{" "}
                      VERAgene bir prenatal tarama testidir. Tarama sonucu tek
                      başına kesin tanı anlamına gelmez. Sonuçların uzman hekim
                      ve gerektiğinde genetik danışman tarafından
                      değerlendirilmesi önerilir.
                    </p>
                  </div>
                </div>

                {/* Diğer Hamilelik Dönemi Testleri */}
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-5">
                    Diğer Hamilelik Dönemi Genetik İncelemeleri
                  </h4>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 shrink-0" />

                      <div>
                        <strong>Amniyosentez:</strong> Doktor değerlendirmesi
                        doğrultusunda bebeğin kromozomal veya genetik durumunu
                        incelemek amacıyla uygulanabilen invaziv bir prenatal
                        tanı yöntemidir.
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 shrink-0" />

                      <div>
                        <strong>Kordosentez:</strong> Gerekli görülen durumlarda
                        göbek kordonundan alınan örnek üzerinden uygulanan
                        prenatal değerlendirme yöntemidir.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Hamilelik Sonrası */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-primary" />

                  <h3 className="text-2xl font-bold text-foreground">
                    Hamilelik Sonrası Genetik Testler
                  </h3>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Bebek dünyaya geldikten sonra uygulanan yenidoğan tarama
                  testleri, bazı kalıtsal ve metabolik hastalıkların erken
                  dönemde değerlendirilmesine yardımcı olur. Erken tanı,
                  gerekli takip ve tedavi sürecinin zamanında
                  planlanabilmesi açısından önemlidir.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 shrink-0" />

                    <div>
                      <strong>Yenidoğan Tarama Testleri:</strong> Bebeklerin
                      doğumdan sonraki erken dönemde bazı genetik, metabolik ve
                      kalıtsal hastalıklar açısından değerlendirilmesine
                      yardımcı olan testlerdir.
                    </div>
                  </li>
                </ul>

                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                  Etik Laboratuvarı, hamilelik öncesinden doğum sonrasına kadar
                  uzanan süreçte uygun genetik testlerin belirlenmesi ve test
                  sonuçlarının değerlendirilmesi konusunda destek sağlar.
                  Hangi testin uygun olduğuna uzman hekim değerlendirmesiyle
                  karar verilmesi önerilir.
                </p>
              </div>

              {/* CTA */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Bize Ulaşın
                </h3>

                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                  VERAgene ve diğer genetik testler hakkında detaylı bilgi
                  almak, örnek verme sürecini öğrenmek veya danışmanlık talep
                  etmek için Etik Laboratuvarı ile iletişime geçebilirsiniz.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <ServiceContactForm title="Genetik Testler Hakkında Bilgi Alın" />
    </Layout>
  );
}