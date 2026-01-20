import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

const mikroBiyolojiTests = [
  "Nature Lovers",
  "AF Genital Sistem (Vajinal Akıntı/Üretral Akıntı)",
  "Chlamidya trachomatis antijeni",
  "SPERMİOGRAM",
  "YARA KÜLTÜRÜ",
  "GAİTA MİKROSKOPİSİ",
  "GAİTA KÜLTÜRÜ",
  "ROTA-ADENO",
  "Entamoeba histolytica antijeni",
  "Entamoeba-Giardia-Cryptosporidium",
  "GAİTADA PARAZİT (3 GÜN)",
  "Helicobacter pylori antijeni (FEÇES)",
  "GAİTADA GİZLİ KAN",
  "KALPROTEKTİN",
  "MONOSPOT TEST",
];

const solunumTests = [
  "ÜST SOLUNUM YOLU ENFEKSİYONU",
  "BOĞAZ KÜLTÜRÜ",
  "Hızlı StrepA Testi",
  "Influenza A/B antijeni + Covid Antijen",
  "SARS-CoV-2 (COVİD-19) antijen",
  "RSV",
];

const serolojiTests = [
  "PROTEUS-TİFÜS (OXK-OX2-OX19)",
  "SALMONELLA GRUBEL WİDAL",
  "BRUCELLA (ABORTUS-MELİTENSİS)",
];

const disLabTests = [
  "BİRİNCİ TRİMESTER (İKİLİ) TARAMA",
  "İKİNCİ TRİMESTER (DÖRTLÜ) TARAMA",
  "YENİDOĞAN METABOLİK TARAMA",
  "Hemoglobin Elektroforezi",
  "Periferik Kanda Kromozom Analizi",
  "Glukoz 6-Fosfat Dehidrogenaz (G6PD)",
];

const panelTests = [
  "11 AYLIK PANELİ",
  "HAMİLELİK BAŞI PANELİ",
  "VERAGENE",
  "VERACİTY",
  "VERAGENE+SMA",
  "SMA",
];

export default function TestRequest() {
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [gender, setGender] = useState<string>("");

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxkBzH_ijiWMBAj9hJt-iJP_Y_fl3Tzyhp73GGAldEpEe2xFZKVSQe7Sly9UnZaMke3/exec";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.target as HTMLFormElement);

    formData.append("sheet", "test-istem-formu");

    formData.append("tests_selected", selectedTests.join(", "));

    formData.append("cinsiyetiniz", gender);

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
          (e.target as HTMLFormElement).reset();
          setSelectedTests([]);
          setGender("");
          // Reset status after 7 seconds
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

  const handleTestChange = (testName: string, checked: boolean) => {
    if (checked) {
      setSelectedTests([...selectedTests, testName]);
    } else {
      setSelectedTests(selectedTests.filter((test) => test !== testName));
    }
  };

  const TestSection = ({
    title,
    tests,
  }: {
    title: string;
    tests: string[];
  }) => (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {tests.map((test) => (
            <div key={test} className="flex items-center space-x-2">
              <Checkbox
                id={test}
                checked={selectedTests.includes(test)}
                onCheckedChange={(checked) =>
                  handleTestChange(test, checked as boolean)
                }
              />
              <label
                htmlFor={test}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {test}
              </label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <PageHeader
        title="Test İstem Formu"
        description="Laboratuvar test talebinizi oluşturun."
        breadcrumbs={[{ label: "Test İstem Formu" }]}
        badge="Test Talebi"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Success Message */}
            {formStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">
                      Test isteğiniz başarıyla gönderildi!
                    </h4>
                    <p className="text-green-700 text-sm">
                      Teşekkür ederiz. Test isteğinizi aldık ve en kısa sürede
                      işleme alacağız. Detaylar e-posta adresinize
                      gönderilecektir.
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
                      Test isteği gönderilemedi
                    </h4>
                    <p className="text-red-700 text-sm">
                      Test isteğiniz gönderilemedi. Lütfen daha sonra tekrar
                      deneyin veya +90 533 871 20 42 numaralı telefonu arayın.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Kişisel Bilgiler */}
            <Card>
              <CardHeader>
                <CardTitle>Kişisel Bilgileriniz</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Ad *
                    </label>
                    <Input name="ad" placeholder="Adınız" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Soyad *
                    </label>
                    <Input name="soyad" placeholder="Soyadınız" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Yaşınız *
                    </label>
                    <Input
                      name="yaşınız"
                      type="number"
                      placeholder="Yaş"
                      min="0"
                      max="120"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Cinsiyetiniz *
                    </label>
                    <Select value={gender} onValueChange={setGender} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Cinsiyet seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="erkek">Erkek</SelectItem>
                        <SelectItem value="kadın">Kadın</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Lab.Kayıt Tarihi *
                    </label>
                    <Input name="lab_kayıt_tarihi" type="date" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Test Kategorileri */}
            <TestSection title="Mikro Biyoloji" tests={mikroBiyolojiTests} />
            <TestSection title="Üst Solunum Yolu" tests={solunumTests} />
            <TestSection title="Seroloji" tests={serolojiTests} />
            <TestSection title="Dış Lab" tests={disLabTests} />
            <TestSection title="Paneller" tests={panelTests} />

            <div className="flex justify-end">
              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto"
                disabled={formStatus === "submitting"}
              >
                {formStatus === "submitting"
                  ? "Test İsteği Gönderiliyor..."
                  : "Test İsteği Gönder"}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
