import { Layout } from "@/components/layout/Layout";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutTechnologies } from "@/components/about/AboutTechnologies";
import { AboutServices } from "@/components/about/AboutServices";
import { AboutNavigation } from "@/components/about/AboutNavigation";
import { AboutCTA } from "@/components/about/AboutCTA";
import { SEO } from "@/components/SEO";

export default function About() {
  return (
    <Layout>
      <SEO
        title="Hakkımızda"
        description="Etik Laboratuvar’ın kurumsal yapısı, hizmet anlayışı ve laboratuvar yaklaşımı hakkında bilgi alın."
        path="/hakkimizda"
      />
      <AboutHero />
      <AboutTechnologies />
      <AboutServices />
      <AboutNavigation />
      <AboutCTA />
    </Layout>
  );
}
