import React from "react";

const accreditations = [
  {
    year: 2021,
    name: "KBUDEK Eksternal Kalite Kontrol Programı",
    img: "/accreditations/kbudek-2021.png",
    cert: "/certificates/2021_Katılım Sertifikası.pdf",
  },
  {
    year: 2022,
    name: "KBUDEK Eksternal Kalite Kontrol Programı",
    img: "/accreditations/kbudek-2022.png",
    cert: "/certificates/2022_Katılım Sertifikası.pdf",
  },
  {
    year: 2023,
    name: "KBUDEK Eksternal Kalite Kontrol Programı",
    img: "/accreditations/kbudek-2023.png",
    cert: "/certificates/2023_Katılım Sertifikası.pdf",
  },
  {
    year: 2024,
    name: "KBUDEK Eksternal Kalite Kontrol Programı",
    img: "/accreditations/kbudek-2024.png",
    cert: "/certificates/2024_Katılım Sertifikası.pdf",
  },
];

export const AboutAccreditations = () => (
  <section className="container-wide mb-20">
    <h2 className="heading-2 text-foreground mb-8">
      Akreditasyonlar & Sertifikalar
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {accreditations.map((item) => (
        <div
          key={item.year}
          className="bg-card rounded-2xl p-6 border border-border flex flex-col items-center"
        >
          <img src={item.img} alt={item.name} className="h-20 mb-4" />
          <h3 className="heading-4 mb-2">{item.year}</h3>
          <p className="body-base mb-2 text-center">{item.name}</p>
          <a
            href={item.cert}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline text-sm"
          >
            PDF Sertifika
          </a>
        </div>
      ))}
    </div>
  </section>
);
