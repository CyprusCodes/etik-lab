import React from "react";

export const AboutMission = () => (
  <section className="section-padding">
    <div className="container-wide grid lg:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <h2 className="heading-2 text-foreground mb-6">Misyonumuz</h2>
        <p className="body-large mb-4">
          Etik Laboratuvarı olarak, en son teknoloji ve uzman kadromuzla toplum
          sağlığına katkıda bulunmayı amaçlıyoruz.
        </p>
        <p className="body-base">
          Modern laboratuvar altyapımız, deneyimli sağlık profesyonellerimiz ve
          hasta odaklı yaklaşımımızla güvenilir tanı hizmetleri sunuyoruz.
          Sürekli gelişim ve yenilikçilik ilkelerimizle sektörde öncü olmaya
          devam ediyoruz.
        </p>
      </div>
      <div className="bg-secondary rounded-2xl p-8">
        <img
          src="/medical-pictures/mission.jpg"
          alt="Modern laboratuvar"
          className="w-full h-64 object-cover rounded-xl"
        />
      </div>
    </div>
  </section>
);
