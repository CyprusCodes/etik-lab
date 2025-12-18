import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { AboutTeam } from "@/components/about/AboutTeam";

const Team = () => {
  return (
    <Layout>
      <PageHeader
        title="Ekibimiz"
        description="Uzman kadromuz ve laboratuvar bilimcilerimiz ile tanışın."
        breadcrumbs={[
          { label: "Hakkımızda", href: "/hakkimizda" },
          { label: "Ekibimiz" },
        ]}
        badge="Ekip"
      />
      <section className="section-padding">
        <AboutTeam />
      </section>
    </Layout>
  );
};

export default Team;
