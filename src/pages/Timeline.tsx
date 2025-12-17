import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";

const timelineEvents = [
  { year: "1998", title: "Kuruluş", description: "Etik Laboratuvarı İstanbul'da kuruldu." },
  { year: "2003", title: "ISO 9001", description: "İlk kalite yönetim sistemi sertifikası alındı." },
  { year: "2008", title: "Genişleme", description: "İkinci şubemiz hizmete açıldı." },
  { year: "2012", title: "ISO 15189", description: "Tıbbi laboratuvar akreditasyonu alındı." },
  { year: "2015", title: "Evde Hizmet", description: "Evde numune alma hizmeti başlatıldı." },
  { year: "2018", title: "Genetik Merkez", description: "Genetik testler merkezi kuruldu." },
  { year: "2020", title: "COVID-19", description: "Pandemi sürecinde kesintisiz hizmet." },
  { year: "2023", title: "Dijitalleşme", description: "Online sonuç sistemi yenilendi." },
];

export default function Timeline() {
  return (
    <Layout>
      <PageHeader
        title="Zaman Tüneli"
        description="1998'den bugüne Etik Laboratuvarı'nın gelişim hikayesi."
        breadcrumbs={[{ label: "Hakkımızda", href: "/hakkimizda" }, { label: "Zaman Tüneli" }]}
      />
      
      <section className="section-padding">
        <div className="container-narrow">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
            
            {timelineEvents.map((event, index) => (
              <div key={event.year} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'} pl-12 md:pl-0`}>
                  <div className="bg-card rounded-2xl p-6 border border-border card-hover">
                    <span className="text-primary font-bold text-2xl">{event.year}</span>
                    <h3 className="heading-4 text-foreground mt-2 mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background" />
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
