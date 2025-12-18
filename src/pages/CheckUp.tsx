import { Layout } from "@/components/layout/Layout";
import { CheckUpHero } from "@/components/checkup/CheckUpHero";
import { CheckUpPackages } from "@/components/checkup/CheckUpPackages";
import { CheckUpCTA } from "@/components/checkup/CheckUpCTA";

export default function CheckUp() {
  return (
    <Layout>
      <CheckUpHero />
      <CheckUpPackages />
      <CheckUpCTA />
    </Layout>
  );
}
