import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AccreditationsSection } from "@/components/home/AccreditationsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestPanelsSection } from "@/components/home/TestPanelsSection";
import { CheckUpSection } from "@/components/home/CheckUpSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { BlogSection } from "@/components/home/BlogSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
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
