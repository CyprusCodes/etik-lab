import React from "react";

const timeline = [
  { year: 2012, event: "Kuruluşun ilk adımları atıldı." },
  {
    year: 2013,
    event: "Kıbrıs’ta tıbbi tahlil hizmetleri sunulmaya başlandı.",
  },
  {
    year: 2021,
    event:
      "KBUDEK Eksternal Kalite Kontrol Programına katılım ve yeni testler.",
  },
  {
    year: 2022,
    event:
      "Gıda Alerji Paneli, Solunum Alerji Paneli, Calprotectin, NT-PRO BNP testleri eklendi.",
  },
];

export const AboutTimeline = () => (
  <section className="container-wide mb-20">
    <h2 className="heading-2 text-foreground mb-8">Zaman Tüneli</h2>
    <ol className="relative border-l border-primary">
      {timeline.map((item, idx) => (
        <li key={item.year} className="mb-10 ml-6">
          <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-8 ring-background">
            <span className="text-white font-bold">{item.year}</span>
          </span>
          <div className="pl-4">
            <h3 className="heading-4 mb-1">{item.year}</h3>
            <p className="body-base">{item.event}</p>
          </div>
        </li>
      ))}
    </ol>
  </section>
);
