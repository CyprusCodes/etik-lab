import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Link, useParams } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  const { slug } = useParams();

  return (
    <Layout>
      <PageHeader
        title="Tiroid Hastalıkları Hakkında Bilmeniz Gerekenler"
        breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: "Tiroid Hastalıkları" }]}
      />
      
      <article className="section-padding">
        <div className="container-narrow">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 15 Aralık 2024</span>
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> Dr. Ayşe Yılmaz</span>
            <span className="px-3 py-1 bg-primary-light text-primary rounded-full text-xs font-medium">Tiroid</span>
          </div>

          <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=600&fit=crop" alt="Tiroid" className="w-full h-80 object-cover rounded-2xl mb-8" />

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground mb-6">
              Tiroid bezi, boynun ön kısmında bulunan ve vücudun metabolizmasını düzenleyen önemli bir bezdir. Bu yazıda tiroid hastalıkları, belirtileri ve tanı yöntemlerini ele alacağız.
            </p>
            
            <h2 className="heading-3 text-foreground mt-8 mb-4">Tiroid Nedir?</h2>
            <p className="body-base mb-4">
              Tiroid bezi, kelebek şeklinde bir bez olup, tiroid hormonları (T3 ve T4) üretir. Bu hormonlar vücudun enerji kullanımını, sıcaklık düzenlemesini ve metabolizmayı kontrol eder.
            </p>
            
            <h2 className="heading-3 text-foreground mt-8 mb-4">Tiroid Hastalıkları</h2>
            <p className="body-base mb-4">
              En yaygın tiroid hastalıkları şunlardır:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Hipotiroidizm:</strong> Tiroid bezinin yeterli hormon üretememesi</li>
              <li><strong className="text-foreground">Hipertiroidizm:</strong> Tiroid bezinin aşırı hormon üretmesi</li>
              <li><strong className="text-foreground">Hashimoto:</strong> Otoimmün tiroid iltihabı</li>
              <li><strong className="text-foreground">Graves:</strong> Otoimmün hipertiroidizm</li>
            </ul>

            <h2 className="heading-3 text-foreground mt-8 mb-4">Belirtiler</h2>
            <p className="body-base mb-4">
              Hipotiroidizm belirtileri: yorgunluk, kilo alımı, üşüme, kabızlık, depresyon. Hipertiroidizm belirtileri: huzursuzluk, kilo kaybı, terleme, çarpıntı, el titremesi.
            </p>

            <h2 className="heading-3 text-foreground mt-8 mb-4">Tanı</h2>
            <p className="body-base mb-4">
              Tiroid hastalıklarının tanısı, TSH, serbest T4 ve T3 testleri ile konulur. Gerektiğinde tiroid antikorları ve ultrasonografi de istenebilir.
            </p>
          </div>

          <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
            <Button variant="outline" asChild>
              <Link to="/blog"><ArrowLeft className="w-4 h-4" /> Tüm Yazılar</Link>
            </Button>
            <Button variant="outline">
              <Share2 className="w-4 h-4" /> Paylaş
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
}
