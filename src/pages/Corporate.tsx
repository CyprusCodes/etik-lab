import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { CheckCircle2 } from "lucide-react";

const certifications = [
  { name: "ISO 15189", description: "Tıbbi Laboratuvar Akreditasyonu" },
  { name: "CAP", description: "College of American Pathologists" },
  { name: "JCI", description: "Joint Commission International" },
  { name: "TÜRKAK", description: "Türk Akreditasyon Kurumu" },
];

const stats = [
  { value: "10+", label: "Yıllık Deneyim" },
  { value: "500K+", label: "Mutlu Hasta" },
  { value: "1000+", label: "Test Çeşidi" },
  { value: "50+", label: "Uzman Kadro" },
];

export default function Corporate() {
  return (
    <Layout>
      <PageHeader
        title="Kurumsal"
        description="Etik Laboratuvarı'nın kurumsal yapısı, akreditasyonları ve kalite standartları."
        breadcrumbs={[
          { label: "Hakkımızda", href: "/hakkimizda" },
          { label: "Kurumsal" },
        ]}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-primary text-primary-foreground rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="heading-2 text-foreground mb-8 text-center">
              Akreditasyonlarımız
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-card rounded-2xl p-6 border border-border text-center card-hover"
                >
                  <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-4" />
                  <h3 className="heading-4 text-foreground mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <h2 className="heading-2 text-foreground mb-6">Vizyon & Misyon</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="heading-4 text-foreground mb-4">Vizyonumuz</h3>
                <p className="body-base">
                  Türkiye'nin en güvenilir ve yenilikçi laboratuvar zinciri
                  olarak, uluslararası standartlarda hizmet sunmak ve toplum
                  sağlığına katkıda bulunmak.
                </p>
              </div>
              <div>
                <h3 className="heading-4 text-foreground mb-4">Misyonumuz</h3>
                <p className="body-base">
                  En son teknoloji ve uzman kadromuzla, doğru ve hızlı tanı
                  hizmetleri sunarak hastaların sağlıklı yaşam yolculuğuna
                  destek olmak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
