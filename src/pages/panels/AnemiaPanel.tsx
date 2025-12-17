import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Droplet, CheckCircle2 } from "lucide-react";

const tests = ["Hemogram (Tam Kan Sayımı)", "Ferritin", "Serum Demiri", "Demir Bağlama Kapasitesi", "Vitamin B12", "Folik Asit", "Retikülosit Sayısı", "Periferik Yayma"];

const symptoms = ["Yorgunluk ve halsizlik", "Soluk cilt", "Nefes darlığı", "Baş dönmesi", "Soğuk eller ve ayaklar", "Kırılgan tırnaklar"];

export default function AnemiaPanel() {
  return (
    <Layout>
      <PageHeader
        title="Anemi Paneli"
        description="Demir eksikliği ve kansızlık testleri ile kapsamlı kan analizi."
        breadcrumbs={[{ label: "Test Panelleri", href: "/test-panelleri" }, { label: "Anemi Paneli" }]}
      />
      
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="heading-2 text-foreground mb-6">Panel İçeriği</h2>
              <div className="grid grid-cols-2 gap-3">
                {tests.map((test) => (
                  <div key={test} className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border">
                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-sm text-foreground">{test}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-secondary rounded-2xl p-8">
              <Droplet className="w-12 h-12 text-primary mb-4" />
              <h3 className="heading-4 text-foreground mb-4">Anemi Belirtileri</h3>
              <ul className="space-y-3">
                {symptoms.map((symptom) => (
                  <li key={symptom} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
            <h2 className="heading-3 mb-4">Anemi Paneli</h2>
            <p className="text-primary-foreground/80 mb-2">Paket Fiyatı</p>
            <div className="text-4xl font-bold mb-6">₺450</div>
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
              <Link to="/randevu">Randevu Al</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
