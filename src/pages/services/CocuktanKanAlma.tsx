import { Layout } from "@/components/layout/Layout";
import { ServiceContactForm } from "@/components/forms/ServiceContactForm";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/ui/page-header";
import {
  CheckCircle,
  HeartHandshake,
  MessageCircleHeart,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const differences = [
  "Çocukların damar yapıları ve damar çapları yetişkinlerden farklı olabilir.",
  "Küçük çocuklarda işlem sırasında hareket etmek kan alma işlemini zorlaştırabilir.",
  "Çocuğun yaşına uygun iletişim kurulması önemlidir.",
  "İşlemin mümkün olduğunca kısa ve kontrollü şekilde gerçekleştirilmesi hedeflenir.",
  "Ebeveynin işlem öncesi ve sırasında çocuğa destek olması önemlidir.",
];

const fearReducingTips = [
  "İşlem hakkında yaşına uygun ve sakin bir şekilde bilgi verilmesi",
  "“Hiç acımayacak” gibi kesin ifadeler yerine dürüst ve sakin bir dil kullanılması",
  "Sevdiği bir oyuncak veya dikkatini dağıtacak bir eşyanın yanında bulunması",
  "Ebeveynin sakin kalması",
];

const highlights = [
  { icon: Stethoscope, label: "Deneyimli sağlık personeli" },
  { icon: MessageCircleHeart, label: "Çocuklara uygun yaklaşım" },
  { icon: ShieldCheck, label: "Güvenilir laboratuvar süreçleri" },
  { icon: HeartHandshake, label: "Çocuk ve ebeveyn odaklı hizmet" },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 mb-8">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CocuktanKanAlma() {
  return (
    <Layout>
      <SEO
        title="Çocuktan Kan Alma Hizmeti"
        description="Etik Laboratuvar'ın çocuklara uygun yaklaşım ve deneyimli sağlık personeliyle sunduğu güvenli, özenli kan alma hizmeti hakkında bilgi alın."
        path="/hizmetlerimiz/cocuktan-kan-alma"
      />
      <BreadcrumbSchema
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hizmetler", path: "/hizmetlerimiz" },
          {
            name: "Çocuktan Kan Alma Hizmeti",
            path: "/hizmetlerimiz/cocuktan-kan-alma",
          },
        ]}
      />
      <PageHeader
        title="Çocuktan Kan Alma Hizmeti"
        description="Çocuklarda güvenli, özenli ve deneyimli kan alma hizmeti"
        breadcrumbs={[
          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
          { label: "Çocuktan Kan Alma Hizmeti" },
        ]}
      />

      <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <article className="prose prose-lg prose-blue max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-700 mb-12">
              Çocuklarda kan alma işlemi, yetişkinlere kıyasla daha fazla özen,
              sabır ve uygun teknik gerektirir. Etik Laboratuvar olarak
              çocukların yaşına ve ihtiyaçlarına uygun şekilde, deneyimli sağlık
              personelimiz tarafından kan alma hizmeti sunuyoruz.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Çocuklarda kan alma neden farklıdır?
              </h2>
              <BulletList items={differences} />
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                İşlem öncesinde nelere dikkat edilmeli?
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                Testin açlık gerektirip gerektirmediği, test türüne göre
                değişebilir. Bu nedenle işlem öncesinde doktorunuzun veya
                laboratuvarınızın verdiği hazırlık talimatlarına uyulması gerekir.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Çocuğun korkusunu azaltmak için
              </h2>
              <BulletList items={fearReducingTips} />
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Çocuklarda kan alma konusunda neden Etik Laboratuvar?
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                Çocuklardan kan alma işlemlerinde yalnızca teknik uygulama değil,
                çocuğun kendini güvende hissetmesi de önemlidir. Etik
                Laboratuvar’da çocuk hastaların yaşına ve durumuna uygun iletişim
                kurularak, işlem sürecinin mümkün olduğunca sakin ve konforlu
                geçirilmesine özen gösterilmektedir.
              </p>

              <div className="not-prose grid sm:grid-cols-2 gap-4">
                {highlights.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 bg-card border border-border/30 rounded-xl p-5 shadow-sm"
                  >
                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-semibold text-foreground">{label}</div>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>
      </section>

      <ServiceContactForm
        title="Çocuktan Kan Alma Hizmeti İçin Randevu Alın"
        buttonText="Randevu Al"
      />
    </Layout>
  );
}
