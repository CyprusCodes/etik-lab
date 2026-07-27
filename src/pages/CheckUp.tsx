import { Layout } from "@/components/layout/Layout";
import { CheckUpHero } from "@/components/checkup/CheckUpHero";
import { CheckUpPackages } from "@/components/checkup/CheckUpPackages";
import { CheckUpCTA } from "@/components/checkup/CheckUpCTA";
import { SEO } from "@/components/SEO";

export default function CheckUp() {
  return (
    <Layout>
      <SEO
        title="Sağlık Paketleri"
        description="Etik Laboratuvar tarafından sunulan sağlık ve check-up paketlerini inceleyin."
        path="/paketler"
      />
      <CheckUpHero />
      <CheckUpPackages />
      <CheckUpCTA />
    </Layout>
  );
}
