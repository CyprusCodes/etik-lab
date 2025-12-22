import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, Send } from "lucide-react";

// Dummy career positions - commented out for now
// const openPositions = [
//   { title: "Laborant", location: "İstanbul - Kadıköy", type: "Tam Zamanlı", department: "Laboratuvar" },
//   { title: "Biyokimya Uzmanı", location: "İstanbul - Şişli", type: "Tam Zamanlı", department: "Laboratuvar" },
//   { title: "Numune Alma Hemşiresi", location: "İstanbul - Tüm Şubeler", type: "Tam Zamanlı", department: "Sağlık" },
//   { title: "Müşteri Hizmetleri Temsilcisi", location: "İstanbul - Merkez", type: "Tam Zamanlı", department: "Operasyon" },
// ];

const openPositions = [];

export default function Career() {
  return (
    <Layout>
      <PageHeader
        title="Kariyer"
        description="Etik Laboratuvarı ailesine katılın ve sağlık sektöründe kariyer yapın."
        breadcrumbs={[{ label: "Kariyer" }]}
        badge="Bize Katılın"
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="bg-secondary rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="heading-2 text-foreground mb-4">
              Neden Etik Laboratuvarı?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Kariyer Gelişimi
                </h3>
                <p className="text-muted-foreground">
                  Sürekli eğitim ve gelişim fırsatları
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Rekabetçi Maaş
                </h3>
                <p className="text-muted-foreground">
                  Sektörün üzerinde maaş ve yan haklar
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Modern Çalışma Ortamı
                </h3>
                <p className="text-muted-foreground">
                  Son teknoloji ekipmanlarla çalışma imkanı
                </p>
              </div>
            </div>
          </div>

          <h2 className="heading-2 text-foreground mb-8">Açık Pozisyonlar</h2>
          {openPositions.length > 0 ? (
            <div className="space-y-4">
              {openPositions.map((position) => (
                <div
                  key={position.title}
                  className="bg-card rounded-2xl p-6 border border-border flex flex-col md:flex-row md:items-center justify-between gap-4 card-hover"
                >
                  <div>
                    <h3 className="heading-4 text-foreground mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {position.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" /> {position.department}
                      </span>
                    </div>
                  </div>
                  <Button>
                    <Send className="w-4 h-4" /> Başvur
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-card rounded-2xl p-8 border border-border text-center">
              <h3 className="heading-4 text-foreground mb-4">
                Şu Anda Açık Pozisyon Bulunmuyor
              </h3>
              <p className="text-muted-foreground mb-6">
                Henüz aktif bir iş ilanımız bulunmamaktadır.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
