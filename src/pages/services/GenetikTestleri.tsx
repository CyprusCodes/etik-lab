import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Shield, Heart } from "lucide-react";
import { ServiceContactForm } from "@/components/forms/ServiceContactForm";
import { getImagePath } from "@/utils/assets";

export default function GenetikTestleri() {
  return (
    <Layout>
      <PageHeader
        title="Hamilelik Öncesi ve Sonrası Genetik Testler"
        description="Sağlıklı Bir Başlangıç İçin Genetik Testlerimizi Keşfedin"
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
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  Sağlıklı Bir Başlangıç
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Etik Laboratuvarı, hamilelik sürecinizin sağlıklı ve güvenli
                  geçmesine yardımcı olmak için geniş bir hizmet yelpazesi
                  sunar. Hamilelik öncesi ve sonrası genetik testler, sağlıklı
                  bir başlangıç yapmanıza ve olası riskleri değerlendirmenize
                  yardımcı olur. Sağlıklı bir anne ve bebek için adım atmak
                  istiyorsanız, genetik testlerimizi keşfedin.
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
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Hamilelik öncesi genetik testler, anne ve baba adaylarının
                  taşıyıcı olabileceği genetik hastalıkları belirlemelerine
                  yardımcı olur. Bu testler, ailelerin sağlıklı bir bebek
                  dünyaya getirme konusundaki endişelerini azaltır. İşte sunulan
                  hizmetlerimizden bazıları:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Taşıyıcı Tarama Testleri:</strong> Anne ve baba
                      adaylarının genetik hastalıkları taşıyıp taşımadıklarını
                      belirlemek için kullanılır.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Genetik Danışmanlık:</strong> Test sonuçlarına
                      dayalı olarak ailelere uzman danışmanlık sağlanır.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Rahim İçi Testler:</strong> Bebeğin sağlığını ve
                      gelişimini izlemek için kullanılır.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Hamilelik Sonrası */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Hamilelik Sonrası Genetik Testler
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Bebek dünyaya geldikten sonra da genetik testler önemlidir.
                  Yenidoğan tarama testleri, bebeğin sağlığını değerlendirmek
                  için yapılır. Bu testler, erken teşhis ve tedavi için hayati
                  öneme sahiptir. Sunulan hizmetlerimiz şunları içerir:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Yenidoğan Tarama Testleri:</strong> Bebeklerin
                      doğumdan hemen sonra genetik hastalıkları taramak için
                      yapılan testlerdir.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Amniyosentez ve Kordosentez:</strong> Hamilelik
                      sırasında bebeğin genetik sağlığını değerlendirmek için
                      kullanılır.
                    </div>
                  </li>
                </ul>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Etik Laboratuvarı, sağlıklı bir hamilelik süreci ve sağlıklı
                  bir başlangıç için gereken genetik testleri sunar. Size ve
                  ailenize uygun olan testleri seçmek ve sonuçları anlamak
                  konusunda size yardımcı olmaktan mutluluk duyarız.
                </p>
              </div>

              {/* CTA Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Bize Ulaşın
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Daha fazla bilgi almak veya genetik testler hakkında
                  danışmanlık için Etik Laboratuvarı'na başvurun. Sağlıklı bir
                  geleceğe doğru ilk adımı atın. Sağlığınız bizim
                  önceliğimizdir.
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
