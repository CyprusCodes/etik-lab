import { Layout } from "@/components/layout/Layout";
import { TimelineHero } from "@/components/about/TimelineHero";
import { TimelineJourney } from "@/components/about/TimelineJourney";
import { TimelineAccreditations } from "@/components/about/TimelineAccreditations";
import { SEO } from "@/components/SEO";

export default function Timeline() {
  return (
    <Layout>
      <SEO
        title="Zaman Tüneli"
        description="Etik Laboratuvar’ın gelişim sürecini ve önemli kilometre taşlarını inceleyin."
        path="/hakkimizda/zaman-tuneli"
      />
      <TimelineHero />
      <TimelineJourney />
      <TimelineAccreditations />
    </Layout>
  );
}
