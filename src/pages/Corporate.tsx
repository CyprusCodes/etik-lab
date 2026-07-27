import { Layout } from "@/components/layout/Layout";
import { CorporateHero } from "@/components/about/CorporateHero";
import { CorporateTechnologies } from "@/components/about/CorporateTechnologies";
import { CorporateServices } from "@/components/about/CorporateServices";
import { CorporateCTA } from "@/components/about/CorporateCTA";
import { SEO } from "@/components/SEO";

const certifications = [
  { name: "ISO 15189", description: "Tıbbi Laboratuvar Akreditasyonu" },
  { name: "CAP", description: "College of American Pathologists" },
  { name: "JCI", description: "Joint Commission International" },
  { name: "TÜRKAK", description: "Türk Akreditasyon Kurumu" },
];

const stats = [
  { value: "10+", label: "Yıllık Deneyim" },
  { value: "500K+", label: "Mutlu Hasta" },
  { value: "1000+", label: "Test Çeşidi" },
  { value: "50+", label: "Uzman Kadro" },
];

export default function Corporate() {
  return (
    <Layout>
      <SEO
        title="Kurumsal"
        description="Etik Laboratuvar’ın kurumsal yapısı, hizmet anlayışı ve kalite yaklaşımı hakkında bilgi alın."
        path="/hakkimizda/kurumsal"
      />
      <CorporateHero />
      <CorporateTechnologies />
      <CorporateServices />
      <CorporateCTA />
    </Layout>
  );
}
