import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertTriangle, CheckCircle2, Users } from "lucide-react";

const faqs = [
  { q: "SMA testi nedir?", a: "Spinal Müsküler Atrofi (SMA) genetik hastalığının taşıyıcılığını belirleyen bir kan testidir." },
  { q: "Kimler yaptırmalı?", a: "Çocuk sahibi olmayı planlayan tüm çiftlere önerilir, özellikle ailede SMA öyküsü varsa." },
  { q: "Ne zaman yaptırılmalı?", a: "Hamilelik planlamadan önce veya hamileliğin erken dönemlerinde yapılması önerilir." },
  { q: "Sonuçlar ne kadar sürede çıkar?", a: "Sonuçlar 7-10 iş günü içinde hazır olur." },
];

export default function SMATest() {
  return (
    <Layout>
      <PageHeader
        title="SMA Testi"
        description="Spinal Müsküler Atrofi taşıyıcılık testi ve genetik danışmanlık."
        breadcrumbs={[{ label: "Hizmetlerimiz", href: "/hizmetlerimiz" }, { label: "SMA Testi" }]}
      />
      
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="bg-warning-light rounded-2xl p-6 mb-6 flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Neden Önemli?</h3>
                  <p className="text-muted-foreground">Her 50 kişiden 1'i SMA taşıyıcısıdır. Her iki ebeveyn taşıyıcı ise çocuğun hasta olma riski %25'tir.</p>
                </div>
              </div>
              
              <h2 className="heading-2 text-foreground mb-4">SMA Taşıyıcılık Testi</h2>
              <p className="body-large mb-6">
                SMA, kasları etkileyen genetik bir hastalıktır. Taşıyıcılık testi ile risk değerlendirmesi yapılabilir ve gerekli önlemler alınabilir.
              </p>
              <Button size="lg" asChild>
                <Link to="/randevu">Test Randevusu Al</Link>
              </Button>
            </div>
            
            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="heading-4 text-foreground mb-6">Sık Sorulan Sorular</h3>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q}>
                    <h4 className="font-medium text-foreground mb-1">{faq.q}</h4>
                    <p className="text-muted-foreground text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
