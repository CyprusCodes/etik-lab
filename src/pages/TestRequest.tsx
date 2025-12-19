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
          <form className="space-y-8">
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
                    <Input placeholder="Adınız" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Soyad *
                    </label>
                    <Input placeholder="Soyadınız" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Yaşınız *
                    </label>
                    <Input
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
                    <Select required>
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
                    <Input type="date" required />
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
              <Button type="submit" size="lg" className="w-full md:w-auto">
                Test İsteği Gönder
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
