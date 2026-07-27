import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AccreditationsSection } from "@/components/home/AccreditationsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestPanelsSection } from "@/components/home/TestPanelsSection";
import { CheckUpSection } from "@/components/home/CheckUpSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { BlogSection } from "@/components/home/BlogSection";
import { CTASection } from "@/components/home/CTASection";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Güvenilir Laboratuvar Hizmetleri"
        description="Etik Laboratuvar’ın test, sağlık paketi ve laboratuvar hizmetlerini inceleyin."
        path="/"
      />
      <HeroSection />
      <ServicesSection />
      <TestPanelsSection />
      <CheckUpSection />
      <WhyUsSection />
      <BlogSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
