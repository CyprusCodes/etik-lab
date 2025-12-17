import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, CheckCircle2, Clock, Loader2, FileText } from "lucide-react";
import { useState } from "react";

const mockResult = {
  barcode: "ETK2024120001",
  patientName: "A*** Y***",
  sampleDate: "14 Aralık 2024, 09:30",
  tests: [
    { name: "Tam Kan Sayımı", status: "completed" },
    { name: "Glukoz", status: "completed" },
    { name: "HbA1c", status: "processing" },
    { name: "Lipid Profili", status: "pending" },
  ],
};

export default function TestTracking() {
  const [barcode, setBarcode] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (barcode) setShowResult(true);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle2 className="w-5 h-5 text-success" />;
      case "processing": return <Loader2 className="w-5 h-5 text-warning animate-spin" />;
      default: return <Clock className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Tamamlandı";
      case "processing": return "Çalışılıyor";
      default: return "Beklemede";
    }
  };

  return (
    <Layout>
      <PageHeader
        title="Test Takibi"
        description="Barkod veya hasta numaranızla testlerinizin durumunu takip edin."
        breadcrumbs={[{ label: "Test Takibi" }]}
      />
      
      <section className="section-padding">
        <div className="container-narrow">
          <div className="bg-card rounded-2xl p-8 border border-border mb-8">
            <form onSubmit={handleSearch} className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Barkod numarası veya hasta ID"
                  className="pl-10"
                  value={barcode}
                  onChange={(e) => setBarcode(e.target.value)}
                />
              </div>
              <Button type="submit">Sorgula</Button>
            </form>
          </div>

          {showResult && (
            <div className="bg-card rounded-2xl p-8 border border-border animate-fade-in">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
                <div>
                  <h3 className="heading-4 text-foreground">{mockResult.patientName}</h3>
                  <p className="text-muted-foreground text-sm">Barkod: {mockResult.barcode}</p>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground text-sm">Numune Tarihi</p>
                  <p className="font-medium text-foreground">{mockResult.sampleDate}</p>
                </div>
              </div>

              <h4 className="font-semibold text-foreground mb-4">Test Durumları</h4>
              <div className="space-y-3 mb-8">
                {mockResult.tests.map((test) => (
                  <div key={test.name} className="flex items-center justify-between p-4 bg-secondary rounded-xl">
                    <span className="font-medium text-foreground">{test.name}</span>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(test.status)}
                      <span className={`text-sm ${test.status === "completed" ? "text-success" : test.status === "processing" ? "text-warning" : "text-muted-foreground"}`}>
                        {getStatusText(test.status)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="outline" className="flex-1" asChild>
                  <a href="https://etiklabsonuc.com" target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4" /> Sonuçları Görüntüle
                  </a>
                </Button>
                <Button className="flex-1">Yeniden Sorgula</Button>
              </div>
            </div>
          )}

          {!showResult && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="heading-4 text-foreground mb-2">Test Durumu Sorgula</h3>
              <p className="text-muted-foreground">Barkod numaranızı girerek testlerinizin durumunu takip edebilirsiniz.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
