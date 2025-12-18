import { Layout } from "@/components/layout/Layout";
import { TimelineHero } from "@/components/about/TimelineHero";
import { TimelineJourney } from "@/components/about/TimelineJourney";
import { TimelineAccreditations } from "@/components/about/TimelineAccreditations";

export default function Timeline() {
  return (
    <Layout>
      <TimelineHero />
      <TimelineJourney />
      <TimelineAccreditations />
    </Layout>
  );
}
