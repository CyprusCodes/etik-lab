import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { getImagePath } from "@/utils/assets";

interface ServiceContactFormProps {
  title: string;
  buttonText?: string;
}

export function ServiceContactForm({
  title,
  buttonText = "Bilgi Talebi Gönder",
}: ServiceContactFormProps) {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={getImagePath("medical-pictures/image (3).png")}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                {title}
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Adınız <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="Adınız"
                      className="bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Soyadınız <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="Soyadınız"
                      className="bg-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-posta <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    İletişim Numaranız <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    placeholder="İletişim numaranız"
                    className="bg-white"
                    required
                  />
                </div>

                {/* KVKK Checkbox */}
                <div className="flex items-start space-x-3">
                  <Checkbox id="kvkk" className="mt-1" required />
                  <label
                    htmlFor="kvkk"
                    className="text-sm text-muted-foreground leading-relaxed"
                  >
                    6698 sayılı Kişisel Verilerin Korunması Kanunu hakkında
                    bilgilendirmeyi okudum; randevu hatırlatma ve hizmet sunumu
                    için iletişim bilgilerimin kullanılmasına izin veriyorum.{" "}
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  {buttonText}
                </Button>
              </form>

              {/* Contact Info */}
              {/* <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+90 533 871 20 42</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>bilgi@etiklab.net</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>Dr. Remzi Gönenç Sk, Lefkoşa 99010</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>Pzt - Cmt: 07:00 - 23:00</span>
                    </div>
                  </div>
                </div>
              </div> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
