import { Layout } from "@/components/layout/Layout";
import { CorporateHero } from "@/components/about/CorporateHero";
import { CorporateTechnologies } from "@/components/about/CorporateTechnologies";
import { CorporateServices } from "@/components/about/CorporateServices";
import { CorporateCTA } from "@/components/about/CorporateCTA";

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
      <CorporateHero />
      <CorporateTechnologies />
      <CorporateServices />
      <CorporateCTA />
    </Layout>
  );
}
