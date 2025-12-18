import React from "react";

const team = [
  {
    name: "Ulus Kasap",
    title: "Biyokimyager, Kurucu",
    img: "/medical-pictures/ulus-kasap.png",
    bio: "Sağlık sektöründe 10 yılı aşkın deneyim. Amacımız, insanların sağlığını korumak ve iyileştirmek için en yüksek kalitede laboratuvar hizmetleri sunmaktır.",
  },
  {
    name: "Dr. Teresa Valdez",
    title: "Clinical Laboratory Scientist",
    img: "/medical-pictures/teresa-valdez.png",
    bio: "Routine and stat testing, special biochemical tests, metabolic tests, drug-level monitoring.",
  },
  {
    name: "Linda Hoffman, PhD",
    title: "Laboratory Technician",
    img: "/medical-pictures/linda-hoffman.png",
    bio: "Bacteriological, mycological, and special parasitological analysis.",
  },
  {
    name: "Melissa Williamson, PhD",
    title: "Laboratory Manager",
    img: "/medical-pictures/melissa-williamson.png",
    bio: "Routine and stat testing, special biochemical tests, metabolic tests, drug-level monitoring.",
  },
];

export const AboutTeam = () => (
  <section className="container-wide mb-20">
    <h2 className="heading-2 text-foreground mb-8">Ekibimiz</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member) => (
        <div
          key={member.name}
          className="bg-card rounded-2xl p-6 border border-border flex flex-col items-center"
        >
          <img
            src={member.img}
            alt={member.name}
            className="h-24 w-24 object-cover rounded-full mb-4"
          />
          <h3 className="heading-4 mb-1">{member.name}</h3>
          <p className="text-sm text-muted mb-2">{member.title}</p>
          <p className="body-base text-center">{member.bio}</p>
        </div>
      ))}
    </div>
  </section>
);
