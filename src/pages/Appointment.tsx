import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, MapPin, Upload } from "lucide-react";

const services = [
  "Kan Alma (Şubede)",
  "Evde Numune Alma",
  "Check-Up Paketi",
  "Genetik Test Danışmanlığı",
  "Kurumsal Hizmet",
  "Diğer",
];

const branches = [
  "Kadıköy Şubesi",
  "Şişli Şubesi",
  "Ataşehir Şubesi",
  "Bakırköy Şubesi",
];

export default function Appointment() {
  return (
    <Layout>
      <PageHeader
        title="Randevu Al"
        description="Online randevu oluşturun veya evde numune alma hizmeti talep edin."
        breadcrumbs={[{ label: "Randevu" }]}
        badge="Kolay Randevu"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="grid md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Tarih Seçin</div>
                  <div className="text-muted-foreground text-sm">
                    Uygun günü belirleyin
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Saat Seçin</div>
                  <div className="text-muted-foreground text-sm">
                    07:00 - 23:00 arası
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Konum Seçin</div>
                  <div className="text-muted-foreground text-sm">
                    Şube veya evde hizmet
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ad Soyad *
                  </label>
                  <Input placeholder="Adınız Soyadınız" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefon *
                  </label>
                  <Input type="tel" placeholder="+90 5XX XXX XX XX" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  E-posta
                </label>
                <Input type="email" placeholder="ornek@email.com" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Hizmet Türü *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Hizmet seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Şube
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Şube seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      {branches.map((branch) => (
                        <SelectItem key={branch} value={branch}>
                          {branch}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tercih Edilen Tarih *
                  </label>
                  <Input type="date" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tercih Edilen Saat
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Saat seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="08:00">08:00</SelectItem>
                      <SelectItem value="09:00">09:00</SelectItem>
                      <SelectItem value="10:00">10:00</SelectItem>
                      <SelectItem value="11:00">11:00</SelectItem>
                      <SelectItem value="14:00">14:00</SelectItem>
                      <SelectItem value="15:00">15:00</SelectItem>
                      <SelectItem value="16:00">16:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Adres (Evde hizmet için)
                </label>
                <Textarea
                  placeholder="Evde numune alma hizmeti için adresinizi yazın..."
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Belge Yükleme
                </label>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">
                    Reçete veya istem belgelerinizi yükleyin
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    PDF, JPG, PNG (Maks. 10MB)
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Notlar
                </label>
                <Textarea
                  placeholder="Eklemek istediğiniz notlar..."
                  rows={3}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Randevu Oluştur
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
