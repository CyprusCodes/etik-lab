import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const contactInfo = [
  {
    icon: Clock,
    label: "Çalışma Saatleri",
    value: "7/24",
    href: "#",
  },
  {
    icon: Phone,
    label: "Telefon No:",
    value: "+90 533 871 20 42",
    href: "tel:+905338712042",
  },
  {
    icon: MapPin,
    label: "Konum",
    value: "Dr. Remzi Gönenç Sk, Lefkoşa 99010",
    href: "#",
  },
  {
    icon: Mail,
    label: "Mail Adresimiz",
    value: "bilgi@etiklab.net",
    href: "mailto:bilgi@etiklab.net",
    secondary: "sonuc@etiklab.net",
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

              {/* Contact Info - Flat Design */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-lg">
                        {info.label}
                      </div>
                      <div className="text-foreground text-base">
                        {info.href !== "#" ? (
                          <a
                            href={info.href}
                            className="hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          info.value
                        )}
                      </div>
                      {info.secondary && (
                        <div className="text-foreground text-base mt-1">
                          <a
                            href={`mailto:${info.secondary}`}
                            className="hover:text-primary transition-colors"
                          >
                            {info.secondary}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://wa.me/905338712042"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="w-5 h-5" /> WhatsApp ile İletişime
                  Geçin
                </a>
              </Button>
            </div>

            <div>
              <h3 className="heading-4 text-foreground mb-6">İletişim Formu</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ad Soyad *
                  </label>
                  <Input placeholder="Adınız Soyadınız" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-posta *
                  </label>
                  <Input type="email" placeholder="ornek@email.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Konu *
                  </label>
                  <Input placeholder="Mesajınızın konusu" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mesajınız *
                  </label>
                  <Textarea
                    placeholder="Mesajınızı yazın..."
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Gönder
                </Button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16">
            <h3 className="heading-4 text-foreground mb-6 text-center">
              Konumumuz
            </h3>
            <div className="rounded-2xl overflow-hidden h-96 bg-secondary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.892!2d33.363!3d35.175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDEwJzMwLjAiTiAzM8KwMjEnNDcuMCJF!5e0!3m2!1sen!2s!4v1702000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Etik Lab Konumu - Dr. Remzi Gönenç Sk, Lefkoşa"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
