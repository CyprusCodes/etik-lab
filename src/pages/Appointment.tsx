import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, MapPin, Upload, FileText, X } from "lucide-react";
import { useState } from "react";

function FileUploadArea() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      if (files.length + newFiles.length <= 5) {
        setFiles([...files, ...newFiles]);
      } else {
        alert("En fazla 5 dosya yükleyebilirsiniz.");
      }
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
        <input
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileSelect}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-muted-foreground text-sm">
            Yüklemek için tıklayın veya dosyaları bu alana sürükleyin.
          </p>
          <p className="text-muted-foreground text-xs mt-1">
            En fazla 5 dosya yükleyebilirsiniz.
          </p>
        </label>
      </div>
      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-secondary rounded-lg"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{file.name}</span>
                <span className="text-xs text-muted-foreground">
                  ({Math.round(file.size / 1024)} KB)
                </span>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeFile(index)}
                className="text-muted-foreground hover:text-destructive"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

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
              <h3 className="heading-4 text-foreground mb-4">Randevu Formu</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ad *
                  </label>
                  <Input placeholder="Ad" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Soyad *
                  </label>
                  <Input placeholder="Soyad" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Telefon *
                </label>
                <Input type="tel" placeholder="0501 234 56 78" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  E-posta *
                </label>
                <Input type="email" placeholder="ornek@email.com" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Yorum veya Mesaj
                </label>
                <Textarea
                  placeholder="Randevunuz hakkında eklemek istediğiniz notlar..."
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Dosya Yükleme
                </label>
                <FileUploadArea />
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
