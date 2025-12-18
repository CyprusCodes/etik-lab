import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Shield, Heart, Users } from "lucide-react";
import { ServiceContactForm } from "@/components/forms/ServiceContactForm";
import { getImagePath } from "@/utils/assets";

export default function SmaTesti() {
  return (
    <Layout>
      <PageHeader
        title="SMA Testi"
        description="Sağlığınızı Koruma ve Aile Planlaması"
        breadcrumbs={[
          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
          { label: "SMA Testi" },
        ]}
      />

      {/* Main Content */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-blue max-w-none">
              <div className="mb-12">
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Hoş geldiniz, Etik Laboratuvarı olarak sizin ve ailenizin
                  sağlığını önemsiyoruz. SMA (Spinal Musküler Atrofi) testi,
                  genetik bir hastalık olan SMA'yı belirlemek ve riski
                  değerlendirmek için önemli bir adımdır. Bu test, ailelerin
                  sağlık planlaması yapmalarına ve doğru tedaviye erişimlerini
                  kolaylaştırmalarına yardımcı olabilir.
                </p>
              </div>

              {/* SMA Nedir */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    SMA (Spinal Musküler Atrofi) Testi Nedir?
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  SMA, kasların zayıflamasına ve hareket yeteneğinin kaybına yol
                  açabilen genetik bir bozukluktur. SMA testi, kişinin genetik
                  profilini inceleyerek, hastalığın varlığını veya
                  taşıyıcılığını belirler. Bu test, erken teşhis ve tedavi için
                  kritik bir adımdır.
                </p>
              </div>

              {/* Etik Lab'da SMA */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Etik Laboratuvarı'nda SMA Testi
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Etik Laboratuvarı olarak, SMA testini etik değerlere uygun bir
                  şekilde yapma taahhüdünde bulunuyoruz. Test sonuçlarının
                  doğruluğunu ve güvenilirliğini sağlamak için sıkı kalite
                  kontrol süreçleri uyguluyoruz. Ayrıca, test sonuçlarını
                  kişisel mahremiyetinizi koruyarak işliyoruz.
                </p>
              </div>

              {/* Aile Planlaması */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    SMA Testi ile Aile Planlaması
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  SMA testi, aile planlamasında da önemli bir rol oynar.
                  Ebeveynler, SMA taşıyıcılığı riskini anladıklarında, çocuk
                  sahibi olmadan önce daha bilinçli kararlar alabilirler. Bu,
                  SMA hastalığının nesilden nesile geçişini azaltmaya yardımcı
                  olabilir.
                </p>
              </div>

              {/* Neden Etik Lab */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Neden Etik Laboratuvarı?
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Güvenilir sonuçlar:</strong> Modern teknoloji ve
                      titiz kalite kontrol süreçleri
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Kişisel mahremiyetin korunması:</strong>{" "}
                      Verilerinizin gizliliği bizim önceliğimizdir
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong>Uzman laboratuvar personeli:</strong> Deneyimli ve
                      sertifikalı uzmanlarımız
                    </div>
                  </li>
                </ul>
              </div>

              {/* CTA Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  SMA Testi İçin Bize Ulaşın
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  SMA testi hakkında daha fazla bilgi almak veya randevu almak
                  için bize ulaşmaktan çekinmeyin. Sağlığınızı ve aile
                  planlamasını ciddiye alıyoruz ve sizin için buradayız.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Etik Laboratuvarı olarak, sağlığınızı ve ailenizin sağlığını
                  korumak için etik, güvenilir ve saygılı bir hizmet sunmaktan
                  gurur duyuyoruz. Sizi sağlıklı bir geleceğe taşımaktan
                  mutluluk duyarız.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <ServiceContactForm
        title="SMA Testi İçin Randevu Alın"
        buttonText="Randevu Talebi Gönder"
      />
    </Layout>
  );
}
