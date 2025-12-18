import { Layout } from "@/components/layout/Layout";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutTechnologies } from "@/components/about/AboutTechnologies";
import { AboutServices } from "@/components/about/AboutServices";
import { AboutNavigation } from "@/components/about/AboutNavigation";
import { AboutCTA } from "@/components/about/AboutCTA";

export default function About() {
  return (
    <Layout>
      <AboutHero />
      <AboutTechnologies />
      <AboutServices />
      <AboutNavigation />
      <AboutCTA />
    </Layout>
  );
}
