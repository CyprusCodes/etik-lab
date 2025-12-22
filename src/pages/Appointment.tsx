import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Clock,
  MapPin,
  Upload,
  FileText,
  X,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

function FileUploadArea({
  onUploadComplete,
}: {
  onUploadComplete: (url: string) => void;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      if (files.length + newFiles.length <= 5) {
        setFiles([...files, ...newFiles]);

        setIsUploading(true);
        try {
          await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate upload delay
          const mockS3Url = `https://etik-lab-uploads.s3.amazonaws.com/appointments/${Date.now()}-${
            newFiles[0].name
          }`;
          onUploadComplete(mockS3Url);
        } catch (error) {
          console.error("Upload failed:", error);
        } finally {
          setIsUploading(false);
        }
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
          disabled={isUploading}
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <Upload
            className={`w-8 h-8 mx-auto mb-2 ${
              isUploading
                ? "text-primary animate-pulse"
                : "text-muted-foreground"
            }`}
          />
          <p className="text-muted-foreground text-sm">
            {isUploading
              ? "Dosyalar yükleniyor..."
              : "Yüklemek için tıklayın veya dosyaları bu alana sürükleyin."}
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
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string>("");

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxoYjOpHdeRbN2MNuakwBUTfmB7QYDlKIiu4lcv7feIqJ5GILoPWLNzzirK-oZOUZIF/exec";

  function handleSubmit(e) {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.target);

    // IMPORTANT: route to the correct sheet
    formData.append("sheet", "randevu-formu");

    const params = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      params.append(key, value as string);
    }

    fetch(`${SCRIPT_URL}?${params.toString()}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result === "success") {
          setFormStatus("success");
          e.target.reset();
          setUploadedFileUrl("");
          // Reset status after 7 seconds for appointment (longer than contact)
          setTimeout(() => setFormStatus("idle"), 7000);
        } else {
          setFormStatus("error");
          setTimeout(() => setFormStatus("idle"), 5000);
        }
      })
      .catch(() => {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      });
  }

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

            <form className="space-y-6" onSubmit={handleSubmit}>
              <h3 className="heading-4 text-foreground mb-4">Randevu Formu</h3>

              {/* Success Message */}
              {formStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">
                        Randevu talebiniz başarıyla alındı!
                      </h4>
                      <p className="text-green-700 text-sm">
                        Teşekkür ederiz. Randevu talebinizi inceleyip en kısa
                        sürede size geri dönüş yapacağız. Randevu detayları
                        e-posta adresinize gönderilecektir.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {formStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-1">
                        Randevu oluşturulamadı
                      </h4>
                      <p className="text-red-700 text-sm">
                        Randevu talebiniz gönderilemedi. Lütfen daha sonra
                        tekrar deneyin veya +90 533 871 20 42 numaralı telefonu
                        arayarak randevu alın.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ad *
                  </label>
                  <Input name="ad" placeholder="Ad" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Soyad *
                  </label>
                  <Input name="soyad" placeholder="Soyad" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Telefon *
                </label>
                <Input
                  name="telefon"
                  type="tel"
                  placeholder="0501 234 56 78"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  E-posta *
                </label>
                <Input
                  name="e_posta"
                  type="email"
                  placeholder="ornek@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Yorum veya Mesaj
                </label>
                <Textarea
                  name="yorum_veya_mesaj"
                  placeholder="Randevunuz hakkında eklemek istediğiniz notlar..."
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Dosya Yükleme
                </label>

                {/* This will store a URL, not the file itself */}
                <input
                  type="hidden"
                  name="dosya_yukleme"
                  value={uploadedFileUrl || ""}
                />

                <FileUploadArea onUploadComplete={setUploadedFileUrl} />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={formStatus === "submitting"}
              >
                {formStatus === "submitting"
                  ? "Randevu Oluşturuluyor..."
                  : "Randevu Oluştur"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
