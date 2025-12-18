import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { CheckCircle, Shield } from "lucide-react";
import { getImagePath } from "@/utils/assets";
import { ServiceContactForm } from "@/components/forms/ServiceContactForm";

const symptoms = [
  "Ateş",
  "Öksürük",
  "Nefes darlığı",
  "Kas ağrıları",
  "Yorgunluk",
  "İştah kaybı",
  "Koku ve tat bozuklukları",
  "Ciddi baş ağrısı",
  "Göz ağrısı",
];

const preventionMethods = [
  "El temizliğine dikkat edilmesi (en az 20 saniye sabunla yıkama)",
  "Eller yıkanmadan ağız, burun ve gözlere temas edilmemesi",
  "Hasta insanlarla temastan kaçınılması",
  "Öksürme/hapşırma sırasında burun ve ağzın kapatılması",
  "Tıbbi maske kullanılması",
  "İyi pişmiş yiyeceklerin tercih edilmesi",
  "En az 1 metre sosyal mesafe korunması",
];

const availableTests = [
  { name: "PCR", description: "Virüsün varlığını tespit eder" },
  { name: "SARS-CoV-2 IgG", description: "Geçirilmiş enfeksiyonu gösterir" },
  { name: "SARS-CoV-2 IgM", description: "Akut enfeksiyonu gösterir" },
  { name: "Anti SARS-CoV-2 S", description: "Spike protein antikorları" },
  { name: "COVID-19 IGG/M", description: "Kombine antikor testi" },
];

const followUpTests = [
  { name: "Sedimentasyon", description: "İnflamasyonu gösterir" },
  { name: "Hemogram", description: "Kan hücre sayımı" },
  { name: "Ferritin", description: "Demir deposu ve inflamasyon" },
  { name: "D-Dimer", description: "Pıhtılaşma belirteci" },
  { name: "CRP", description: "C-reaktif protein (inflamasyon)" },
];

export default function CovidTestleri() {
  return (
    <Layout>
      <PageHeader
        title="Koronavirüs Hakkında"
        description="COVID-19 tanı, test ve tedavi hizmetleri hakkında kapsamlı bilgi"
        breadcrumbs={[
          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
          { label: "COVID Testleri" },
        ]}
      />

      {/* Main Content */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-blue max-w-none">
              <div className="mb-12">
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Koronavirüs hayvanlarda veya insanlarda bulgusuz, hafif soğuk
                  algınlığından ağır hastalığa (SARS) ve akut solunum yolu
                  yetmezliği sendromu kadar farklı belirtilere neden olabilen
                  geniş bir virüs ailesidir.
                </p>
              </div>
              {/* What is Coronavirus */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Koronavirüs Nedir?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  İnsanlarda, birkaç koronavirüsün soğuk algınlığından Orta Doğu
                  Solunum Sendromu (MERS) ve Şiddetli Akut Solunum Sendromu
                  (SARS) gibi daha şiddetli hastalıklara kadar solunum yolu
                  enfeksiyonlarına neden olduğu bilinmektedir. Yeni Koronavirüs
                  Hastalığına (COVID-19) SARS-CoV-2 virüsü neden olur.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Koronavirüsler ülkemizde de insanlarda dolaşımda olan
                  HCoV-229E, HCoV-OC43, HCoV-NL63 ve HKU1-CoV alt tipleri ile
                  çoğunlukla soğuk algınlığına sebep olan virüslerdir.
                </p>
              </div>

              {/* Symptoms */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Belirtiler
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Belirtisiz olgular olabileceği bildirilmekle birlikte,
                  bunların oranı bilinmemektedir. En çok karşılaşılan belirtiler
                  şunlardır:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {symptoms.map((symptom, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{symptom}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Daha şiddetli olgularda zatürre, ağır solunum yetmezliği,
                  böbrek yetmezliği ve ölüm gelişebilmektedir.
                </p>
              </div>

              {/* Transmission */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Bulaşma
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Hasta bireylerin öksürük aksırıkları ile ortama saçılan
                  damlacıkların solunması ile bulaşır. Hastaların solunum
                  parçacıkları ile kirlenmiş yüzeylere dokunulduktan sonra
                  ellerin yıkanmadan yüz, göz, burun veya ağıza götürülmesi ile
                  de virüs alınabileceğinden kirli ellerle göz, burun veya ağıza
                  temas etmek risklidir.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-6">
                  <p className="text-blue-900 font-medium">
                    Vakaların %80'i hastalığı hafif geçirmektedir. Vakaların
                    %20'si hastane koşullarında tedavi edilmektedir. Hastalık,
                    genellikle 60 yaş ve üzerindeki kişileri ve kronik ciddi
                    hastalıkları olan insanları daha fazla etkilemektedir.
                  </p>
                </div>
              </div>

              {/* Prevention */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Korunma Yöntemleri
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Akut solunum yolu enfeksiyonlarının genel bulaşma riskini
                  azaltmak için önerilen temel ilkeler:
                </p>
                <div className="space-y-4 mb-6">
                  {preventionMethods.map((method, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-green-50/50 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground leading-relaxed">
                        {method}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tests */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  COVID-19 Tanı Testleri
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Erken tanı tedavi için çok önemlidir. Şüpheli temas sonrası
                  5-7. günlerde test yapılması önerilmektedir.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Mevcut Testler
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {availableTests.map((test, index) => (
                    <div key={index} className="p-4 bg-blue-50/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">
                        {test.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {test.description}
                      </p>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Takip Testleri
                </h3>
                <p className="text-muted-foreground mb-4">
                  COVID-19 geçiren hastalarda durumu takip etmek için bakılan
                  testler:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {followUpTests.map((test, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">
                        {test.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {test.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Treatment */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Tedavi ve Aşılama
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  COVID-19 tedavisi için ilaç ve aşı çalışmaları devam ediyor.
                  Hastalığın farklı aşamalarında farklı ilaçlar kullanılıyor.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Hafif Hastalıklar
                    </h4>
                    <p className="text-blue-800">
                      İyileşme süresi yaklaşık 2 hafta
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">
                      Şiddetli Hastalıklar
                    </h4>
                    <p className="text-orange-800">İyileşme süresi 3-6 hafta</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h4 className="font-semibold text-yellow-900 mb-3">
                    Aşılama
                  </h4>
                  <p className="text-yellow-800 mb-4">
                    Türkiye'de BioNTech® (mRNA) aşısı ve Sinovac Coronavac
                    (İnaktive Virüs) aşısı rutin aşılama programında aktif
                    olarak kullanılmaktadır.
                  </p>
                  <p className="text-yellow-800 text-sm">
                    <strong>Önemli:</strong> Aşılar enfeksiyonu %100
                    önlemediğinden, aşılı kişiler de enfekte olabilir. Bu
                    nedenle maske, sosyal mesafe ve el hijyeni kuralları
                    önemlidir.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <ServiceContactForm
        title="COVID-19 Test Randevusu Al"
        buttonText="Test Randevusu Al"
      />
    </Layout>
  );
}
