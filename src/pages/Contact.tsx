import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+90 533 840 32 73",
    href: "tel:+905338403273",
  },
  {
    icon: Mail,
    label: "E-posta",
    value: "info@etiklab.net",
    href: "mailto:info@etiklab.net",
  },
  { icon: MapPin, label: "Adres", value: "Lefkosa, Kibris", href: "#" },
  {
    icon: Clock,
    label: "Çalışma Saatleri",
    value: "Pazartesi - Pazar: 07:00 - 23:00",
    href: "#",
  },
];

export default function Contact() {
  return (
    <Layout>
      <PageHeader
        title="İletişim"
        description="Sorularınız için bize ulaşın. Size yardımcı olmaktan memnuniyet duyarız."
        breadcrumbs={[{ label: "İletişim" }]}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2 text-foreground mb-6">Bize Ulaşın</h2>
              <p className="body-large mb-8">
                Sorularınız, önerileriniz veya randevu talepleriniz için
                aşağıdaki formu doldurabilir veya iletişim bilgilerimizi
                kullanabilirsiniz.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        {info.label}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <Button
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://wa.me/902123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp ile İletişime
                  Geçin
                </a>
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="heading-4 text-foreground mb-6">İletişim Formu</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Ad Soyad
                    </label>
                    <Input placeholder="Adınız Soyadınız" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefon
                    </label>
                    <Input type="tel" placeholder="+90 5XX XXX XX XX" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-posta
                  </label>
                  <Input type="email" placeholder="ornek@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Konu
                  </label>
                  <Input placeholder="Mesajınızın konusu" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mesajınız
                  </label>
                  <Textarea placeholder="Mesajınızı yazın..." rows={4} />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Gönder
                </Button>
              </form>
            </div>
          </div>

          <div className="mt-12 rounded-2xl overflow-hidden h-96 bg-secondary">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385398.5897809325!2d28.731984850818856!3d41.00498225498657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1702000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
