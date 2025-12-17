import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Target, Heart } from "lucide-react";

const values = [
  { icon: Award, title: "Kalite", description: "Uluslararası standartlarda hizmet kalitesi" },
  { icon: Users, title: "Güven", description: "25 yılı aşkın deneyim ve güvenilirlik" },
  { icon: Target, title: "Doğruluk", description: "%99.9 doğruluk oranı ile sonuçlar" },
  { icon: Heart, title: "Hasta Odaklılık", description: "Her zaman hastalarımızın yanında" },
];

export default function About() {
  return (
    <Layout>
      <PageHeader
        title="Hakkımızda"
        description="1998 yılından bu yana bilimin ışığında ileri teknoloji ile sağlık hizmetleri sunuyoruz."
        breadcrumbs={[{ label: "Hakkımızda" }]}
        badge="Kurumsal"
      />
      
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="heading-2 text-foreground mb-6">Misyonumuz</h2>
              <p className="body-large mb-4">
                Etik Laboratuvarı olarak, en son teknoloji ve uzman kadromuzla toplum sağlığına katkıda bulunmayı amaçlıyoruz.
              </p>
              <p className="body-base">
                Modern laboratuvar altyapımız, deneyimli sağlık profesyonellerimiz ve hasta odaklı yaklaşımımızla güvenilir tanı hizmetleri sunuyoruz. Sürekli gelişim ve yenilikçilik ilkelerimizle sektörde öncü olmaya devam ediyoruz.
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop"
                alt="Modern laboratuvar"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-2xl p-6 border border-border card-hover">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="heading-4 text-foreground mb-2">{value.title}</h3>
                <p className="body-base">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/hakkimizda/kurumsal" className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Kurumsal Bilgiler <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/hakkimizda/zaman-tuneli" className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Zaman Tüneli <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/kariyer" className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Kariyer Fırsatları <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
