import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import { getImagePath } from "@/utils/assets";

interface ServiceContactFormProps {
  title: string;
  buttonText?: string;
}

export function ServiceContactForm({
  title,
  buttonText = "Bilgi Talebi Gönder",
}: ServiceContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxoYjOpHdeRbN2MNuakwBUTfmB7QYDlKIiu4lcv7feIqJ5GILoPWLNzzirK-oZOUZIF/exec";

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.target);
    const params = new URLSearchParams();

    formData.forEach((value, key) => {
      params.append(key, value.toString());
    });

    fetch(`${SCRIPT_URL}?${params.toString()}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result === "success") {
          setSubmitStatus("success");
          e.target.reset();
        } else {
          setSubmitStatus("error");
        }
      })
      .catch(() => {
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }
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

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">
                        Mesajınız Gönderildi!
                      </h4>
                      <p className="text-green-700 text-sm">
                        Teşekkürler! Mesajınız başarıyla iletildi. En kısa
                        sürede size geri dönüş yapacağız.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-1">
                        Bir Hata Oluştu
                      </h4>
                      <p className="text-red-700 text-sm">
                        Mesajınız gönderilemedi. Lütfen tekrar deneyiniz veya
                        telefon numaramızdan bize ulaşınız.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ad Soyad <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="ad_soyad"
                    type="text"
                    placeholder="Adınız Soyadınız"
                    className="bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-posta <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="e_posta"
                    type="email"
                    placeholder="ornek@email.com"
                    className="bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Konu <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="konu"
                    type="text"
                    placeholder="Mesajınızın konusu"
                    className="bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mesajınız <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    name="mesaj"
                    placeholder="Mesajınızı yazın..."
                    rows={4}
                    className="bg-white"
                    required
                  />
                </div>

                {/* KVKK Checkbox */}
                <div className="flex items-start space-x-3">
                  <Checkbox id="kvkk" name="kvkk" className="mt-1" required />
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

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Gönderiliyor..." : buttonText}
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
                      <span>info@kibrispasteurlab.com</span>
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
