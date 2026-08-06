import { getImagePath } from "@/utils/assets";

export type BlogSection = {
  heading: string;
  body?: string;
  bullets?: string[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  tableRows?: {
    label: string;
    value: string;
  }[];
  note?: string;
};

export type BlogPostItem = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  lead: string;
  sections: BlogSection[];
  document?: {
    title: string;
    file: string;
    description: string;
  };
};

export const blogPosts: BlogPostItem[] = [

  {
  slug: "sibo-testi",
  title: "SIBO Testi Nedir? Hangi Şikayetlerde Yapılır?",
  excerpt:
    "SIBO testi, ince bağırsakta aşırı bakteri üremesinin değerlendirilmesine yardımcı olan nefes testidir.",
  image: "/blog/sibotesti.webp",
  date: "1 Temmuz 2026",
  author: "Etiklab",
  category: "Sindirim Sistemi",
  lead:
    "SIBO, ince bağırsakta normalden fazla bakteri bulunması durumudur. Gaz, şişkinlik, ishal, kabızlık ve sindirim sorunları gibi şikayetlere yol açabilir.",
  sections: [
    {
      heading: "SIBO Nedir?",
      body:
        "Normalde kalın bağırsakta bol miktarda bakteri bulunurken, ince bağırsakta bakteri sayısı çok daha azdır. Bazı durumlarda bakteriler ince bağırsağa aşırı şekilde yayılabilir. Bu durum SIBO olarak adlandırılır ve sindirim sistemi şikayetlerine neden olabilir.",
    },
    {
      heading: "SIBO Testi Nasıl Yapılır?",
      body:
        "SIBO testinde en yaygın yöntem nefes testidir. Hastaya genellikle laktuloz veya glukoz içeren bir sıvı içirilir. Ardından belirli aralıklarla nefes örnekleri alınır ve bu örneklerde hidrojen ile metan gazı düzeyleri değerlendirilir.",
      bullets: [
        "Laktuloz veya glukoz içeren sıvı içirilir.",
        "15-20 dakikalık aralıklarla nefes örnekleri alınır.",
        "Hidrojen ve metan gazı düzeyleri ölçülür.",
        "Yüksek gaz düzeyleri bakteriyel fermantasyonu gösterebilir.",
      ],
    },
    {
      heading: "Kimler SIBO Testi Yaptırmalı?",
      bullets: [
        "Sürekli veya tekrarlayan şişkinlik yaşayanlar",
        "Gaz, geğirme ve hazımsızlık şikayeti olanlar",
        "İshal, kabızlık veya değişken dışkılama yaşayanlar",
        "İrritabl Bağırsak Sendromu tanısı olanlar",
        "Sebepsiz kilo kaybı yaşayanlar",
        "Demir, B12 veya D vitamini eksikliği olanlar",
        "Akne rosacea, eklem ağrısı veya kronik yorgunluk yaşayanlar",
        "Çölyak, diyabet, tiroid hastalığı veya otoimmün hastalığı olanlar",
      ],
    },
    {
      heading: "SIBO Testi Ne Zaman Düşünülmeli?",
      body:
        "Sindirim sorunları kronikleşmişse, klasik yöntemlerle net tanı konulamamışsa veya besin emilim bozukluğu şüphesi varsa SIBO testi yönlendirici olabilir.",
    },
    {
      heading: "SIBO Nefes Testi Öncesi Hazırlık",
      bullets: [
        "Antibiyotikler testten en az 2 hafta önce bırakılmalıdır.",
        "Probiyotikler testten en az 1 hafta önce kesilmelidir.",
        "Laksatifler testten 3-5 gün önce kesilmelidir.",
        "İlaçlar kesilmeden önce mutlaka doktora danışılmalıdır.",
        "Testten önce 12 saat açlık gerekebilir.",
        "Test günü sigara içilmemeli, sakız çiğnenmemeli ve egzersiz yapılmamalıdır.",
      ],
    },
    {
      heading: "Testten Bir Gün Önce Beslenme",
      body:
        "Testten 24 saat önce düşük fermantasyonlu gıdalar tüketilmelidir. Bu diyet bağırsak gazını azaltmak için uygulanır.",
      bullets: [
        "Tavuk, balık, yumurta ve beyaz pirinç tercih edilebilir.",
        "Su ve şekersiz çay tüketilebilir.",
        "Meyve, sebze, süt ürünleri, baklagiller ve tam tahıllardan kaçınılmalıdır.",
        "Şeker, bal, tatlandırıcı, kahve, meyve suyu, gazlı içecek ve alkol tüketilmemelidir.",
      ],
    },
    {
      heading: "Test Süreci",
      body:
        "Test sırasında hastaya glukoz veya laktüloz içeren bir solüsyon verilir. Ardından belirli aralıklarla nefes örnekleri alınır. Test genellikle 90-120 dakika sürer.",
      note:
        "Doğru sonuç için test öncesi hazırlık kurallarına uyulması önemlidir.",
    },

  ],
  document: {
    title: "SIBO Hasta Onam ve Bilgilendirme Formu",
    file: "/forms/sibo-hasta-onam-ve-bilgilendirme-formu.pdf",
    description:
      "SIBO testi öncesi dikkat edilmesi gerekenler, örnek verme süreci, hazırlık bilgileri ve hasta bilgilendirme formuna buradan ulaşabilirsiniz.",
  },
},
{
  slug: "gastropanel-testi",
  title: "Gastropanel Testi Nedir? Ne Zaman Yapılmalıdır?",
  excerpt:
    "Gastropanel testi, mide fonksiyonlarını değerlendiren ve H. pylori enfeksiyonunu saptamaya yardımcı olan kan testidir.",
  image: "/blog/gastropaneltesti.webp",
  date: "1 Temmuz 2026",
  author: "Etiklab",
  category: "Sindirim Sistemi",
  lead:
    "Gastropanel testi, mide fonksiyonlarını değerlendiren, non-invaziv yani kan yoluyla yapılan bir testtir. Mide sağlığının değerlendirilmesinde ve Helicobacter pylori enfeksiyonunun araştırılmasında yardımcı olabilir.",
  sections: [
    {
      heading: "Gastropanel Nedir?",
      body:
        "Gastropanel, mide mukozasının durumunu, mide asit dengesini ve Helicobacter pylori enfeksiyonu riskini değerlendirmeye yardımcı olan bir kan testidir. Endoskopiye alternatif veya ön değerlendirme yöntemi olarak kullanılabilir.",
    },
    {
      heading: "Gastropanel Testinde Hangi Parametrelere Bakılır?",
      tableRows: [
        {
          label: "Pepsinojen I",
          value:
            "Mide korpusundaki hücrelerin sağlığını ve mide fonksiyonunu değerlendirir. Düşük olması atrofik gastrit açısından anlamlı olabilir.",
        },
        {
          label: "Pepsinojen II",
          value:
            "Midenin tamamında meydana gelen değişiklikler hakkında bilgi verebilir.",
        },
        {
          label: "PGI / PGII Oranı",
          value:
            "Atrofik gastrit riskinin değerlendirilmesinde kullanılır. Düşük oran gastrit riskini artırabilir.",
        },
        {
          label: "Gastrin-17",
          value:
            "Mide asit üretimini değerlendirir. Düşük veya yüksek değerler mide astarı ve asit üretimi hakkında bilgi verebilir.",
        },
        {
          label: "H. pylori IgG",
          value:
            "Helicobacter pylori bakterisinin varlığını değerlendirmeye yardımcı olur. Bu bakteri gastrit, ülser ve mide kanseriyle ilişkilidir.",
        },
      ],
    },
    {
      heading: "Gastropanel Testi Ne Zaman Yapılmalıdır?",
      bullets: [
        "Sürekli veya sık tekrarlayan mide ağrısı varsa",
        "Şişkinlik, hazımsızlık veya mide yanması varsa",
        "Bulantı, iştahsızlık veya erken doyma hissi yaşanıyorsa",
        "Yemek sonrası rahatsızlık hissi oluşuyorsa",
        "H. pylori enfeksiyonu şüphesi varsa",
        "Gastrit veya ülser öyküsü varsa",
        "Ailede mide kanseri öyküsü bulunuyorsa",
        "Endoskopi yapılamayan veya non-invaziv yöntem tercih edilen durumlarda",
      ],
    },
    {
      heading: "Gastropanel Neden Yapılır?",
      bullets: [
        "Helicobacter pylori enfeksiyonunun taranması",
        "Atrofik gastrit riskinin değerlendirilmesi",
        "Mide kanseri riskinin değerlendirilmesi",
        "Şişkinlik, hazımsızlık ve mide ağrısı gibi şikayetlerin araştırılması",
        "Endoskopi öncesi ön tarama yapılması",
        "Tedavi sonrası takip yapılması",
      ],
    },
    {
      heading: "Kimler Yaptırmalı?",
      bullets: [
        "Sürekli mide rahatsızlığı yaşayanlar",
        "40 yaş üstü bireyler",
        "H. pylori geçmişi olanlar",
        "Ailesinde mide kanseri öyküsü bulunanlar",
        "Endoskopi yaptırmak istemeyen ancak mide sağlığını kontrol ettirmek isteyenler",
      ],
    },
    {
      heading: "Avantajları Nelerdir?",
      bullets: [
        "Kan testiyle yapılır.",
        "Non-invazivdir.",
        "Endoskopiye alternatif veya ön değerlendirme olabilir.",
        "Mide hastalıklarının erken değerlendirilmesine yardımcı olur.",
        "Genellikle hızlı sonuç verir.",
      ],
      note:
        "Gastropanel testi, mide şikayetleri olan veya H. pylori riski taşıyan kişilerde değerli bir değerlendirme aracıdır.",
    },
  ],
},
{
  slug: "ure-nefes-testi",
  title: "H. pylori C-13 Üre Nefes Testi Nedir?",
  excerpt:
    "H. pylori değerlendirmesinde kullanılan C-13 üre nefes testinin ne olduğu, nasıl uygulandığı ve test süreci hakkında bilgi alın.",
  image: "/blog/urenefestesti.webp",
  date: "1 Temmuz 2026",
  author: "Etiklab",
  category: "Sindirim Sistemi",
  lead:
    "C-13 üre nefes testi, mideye yerleşebilen Helicobacter pylori bakterisinin tespitinde kullanılan güvenilir ve non-invaziv bir yöntemdir.",
  sections: [
    {
      heading: "C-13 Üre Nefes Testi Nedir?",
      body:
        "C-13 üre nefes testi, herhangi bir girişimsel işlem gerektirmeden, yalnızca nefes örneği ile yapılan bir testtir. Özellikle Helicobacter pylori bakterisinin varlığını değerlendirmek için kullanılır.",
    },
    {
      heading: "Helicobacter pylori Neden Önemlidir?",
      body:
        "Helicobacter pylori; gastrit, ülser ve uzun vadede mide kanseri ile ilişkilendirilen önemli bir bakteridir. Bu nedenle erken ve doğru şekilde tespit edilmesi önemlidir.",
    },
    {
      heading: "Test Nasıl Yapılır?",
      bullets: [
        "Öncelikle hastadan ilk nefes örneği alınır.",
        "Daha sonra özel bir üre çözeltisi içirilir.",
        "Belirli bir süre beklenir.",
        "Ardından ikinci nefes örneği alınır.",
        "Midede H. pylori varsa üreyi parçalayarak karbondioksit üretir ve bu nefeste ölçülür.",
      ],
    },
    {
      heading: "Avantajları Nelerdir?",
      bullets: [
        "Non-invazivdir.",
        "Hasta konforu yüksektir.",
        "Hızlı sonuç verir.",
        "Yüksek doğruluk oranına sahiptir.",
        "Yetişkinlerde ve çocuklarda güvenle uygulanabilir.",
      ],
    },
    {
      heading: "Test Öncesi Dikkat Edilmesi Gerekenler",
      bullets: [
        "Antibiyotikler testten en az 2 hafta önce bırakılmalıdır.",
        "Bazı mide ilaçlarının kullanılmaması gerekebilir.",
        "Test öncesi aç olunmalıdır.",
        "Test günü sigara içilmemelidir.",
        "İlaç kesimi mutlaka doktor önerisiyle yapılmalıdır.",
      ],
    },
    {
      heading: "Kimler İçin Önemlidir?",
      body:
        "Mide ağrısı, mide yanması, şişkinlik ve hazımsızlık şikayetleri olan kişilerde C-13 üre nefes testi önemli bir tanı yöntemi olabilir.",
    },
  ],
},
{
  slug: "idrar-yolu-enfeksiyonu",
  title: "İdrar Yolu Enfeksiyonu Nedir? Belirtileri Nelerdir?",
  excerpt:
    "İdrar yolu enfeksiyonu, idrar yollarında bakteri kaynaklı gelişebilen yaygın bir enfeksiyondur.",
  image: "/blog/idraryoluenfeksiyonu.webp",
  date: "1 Temmuz 2026",
  author: "Etiklab",
  category: "Enfeksiyon",
  lead:
    "İdrar yolu enfeksiyonu, üriner sistemi etkileyen ve erken tanı ile yönetilebilen yaygın bir enfeksiyon durumudur.",
  sections: [
    {
      heading: "İdrar Yolu Enfeksiyonu Nedir?",
      body:
        "Böbrekler ile oluşan idrarın vücut dışına atılmasını sağlayan sistem üriner sistem olarak adlandırılır. Üriner sistem böbrekler, üreterler, mesane ve üretradan oluşur. İdrar yolu enfeksiyonu, dışkı bakterilerinin idrar yoluna karışması ve yukarı üriner sisteme ilerleyip burada çoğalması sonucu meydana gelebilir. Normal idrar bakteri, mantar veya virüs içermez; steril kabul edilir.",
    },
{
  heading: "İdrar Yolu Enfeksiyonlarında Risk Faktörleri Nelerdir?",
  body:
    "İdrar yolu enfeksiyonlarına kadınlarda erkeklere göre 25 kat fazla rastlanır. Bunun en önemli nedeni kadınlarda idrar yolunun erkeklerinkine göre çok daha kısa olmasıdır. Tuvalet sonrası temizliğin arkadan öne doğru yapılması da anüs çevresindeki mikroorganizmaların vajinaya taşınmasına neden olabilir.\n\nCinsel ilişki esnasında meydana gelen küçük travmalar, doğum kontrolünde kullanılan bazı bariyer yöntemler, gebelik esnasında ve menopozda meydana gelen hormonal değişimler, şeker hastalığı, böbrek taşı, normal doğum, cerrahi girişimler, idrarın böbreğe geri kaçması, doğuştan işlevsel veya yapısal bozukluklar, kabızlık ve sünnetsiz olma enfeksiyona zemin hazırlayan sebepler olabilir. Özellikle gebelikte tedavi edilmeyen idrar yolu enfeksiyonları erken doğuma yol açabilir. Bu nedenle kontrollerde gebenin herhangi bir yakınması olmasa dahi idrar analizi yapılmalıdır.\n\nÇocuklarda ilk beş yıl içinde böbrekte enfeksiyon olması kalıcı ve ilerleyen zedelenmelere neden olabilir. Bu nedenle erkek çocuklar ilk, kız çocuklar ikinci kez idrar yolu enfeksiyonu olduğunda idrar yollarında anomali araştırması yapılmalıdır.",
},
    {
      heading: "İdrar Yolu Enfeksiyonu Belirtileri Nelerdir?",
      bullets: [
        "İdrar yaparken ağrı ve yanma",
        "Sık idrara çıkma",
        "İdrara sıkışma hissi",
        "Alt karın bölgesinde ağrı",
        "Ateş ve titreme",
        "Bulantı ve kusma",
        "Halsizlik",
      ],
    },
   {
  heading: "Laboratuvar Tanısı",
  body:
    "İdrar yolu enfeksiyonunun değerlendirilmesinde en sık kullanılan test tam idrar tahlilidir. Hızlı sonuç verir ve ilk değerlendirmede yardımcı olur. Sık tekrarlayan veya 24-48 saat içinde iyileşme sağlanamayan enfeksiyonlarda idrar kültürü kullanılabilir.",
 image:{
   src:"/blog/labtanisi.png",
   alt:"Üriner Sistem",
   caption:"Üriner sistem; böbrekler, üreterler, mesane ve üretradan oluşur."
},

bullets: [
  "Tam İdrar Tahlili: En sık kullanılan ve hızlı sonuç veren testtir.",

  "İdrar Kültürü: Enfeksiyona neden olan bakteri türünü ve uygun antibiyotiği belirlemeye yardımcı olur.",

  "Komplike enfeksiyonlarda kan testleri ve radyolojik tetkikler gerekebilir.",

  "Tam idrar tahlili ve/veya idrar kültürü çoğu hastada tanı koymak için yeterlidir."
],
},
    {
      heading: "İdrar Kültürü İçin Örnek Verirken Nelere Dikkat Edilmeli?",
      bullets: [
        "İdrar yapılan bölge sabunlu su ile önden arkaya doğru yıkanmalı ve durulanmalıdır.",
        "İlk gelen idrar atıldıktan sonra bir miktar idrar kaba alınmalıdır.",
        "Bu örnek orta akım idrar örneği olarak adlandırılır.",
        "Bir önceki idrardan en az 3-4 saat sonra örnek verilmesi önemlidir.",
        "Fazla su içmeden örnek verilmelidir.",
        "Örnek vakit kaybetmeden laboratuvara ulaştırılmalıdır.",
      ],
    },
    {
      heading: "İdrar Yolu Enfeksiyonunu Önlemek İçin Neler Yapılabilir?",
      bullets: [
        "Bol su ve sıvı tüketmek",
        "İdrarı tutmamak",
        "Daha sık idrar yapmak",
        "Kadınlarda tuvalet temizliğini önden arkaya doğru yapmak",
        "Cinsel ilişki sonrası idrar yapmak",
        "Güvenli cinsel ilişki için prezervatif kullanmak",
        "Deodorant içeren hijyen ürünlerinden kaçınmak",
        "Genital bölgenin nemli kalmamasına dikkat etmek",
        "Pamuklu iç çamaşırı tercih etmek",
        "Düzenli doktor kontrollerini ihmal etmemek",
      ],
    },
    {
      heading: "Tedavide Amaç Nedir?",
      body:
        "Tedavide amaç enfeksiyonu uzaklaştırmak, anatomik ve işlevsel bozuklukları belirlemek, tekrarları önlemek ve böbrek işlevlerini korumaktır. Verilen tedavinin önerilen sürede uygulanması tekrarlayan enfeksiyonları ve direnç gelişimini önlemede önemlidir.",
      note:
        "Özellikle gebelikte tedavi edilmeyen idrar yolu enfeksiyonları erken doğuma yol açabilir. Bu nedenle doktor kontrolleri önemlidir.",
    },
  ],
},
  {
    slug: "laboratuvar-testlerinin-onemi",
    title: "Laboratuvar Testlerinin Önemi ve Kullanım Alanları",
    excerpt:
      "Laboratuvar testleri, hastalıkların erken teşhisinde ve tedavi sürecinin doğru yönetilmesinde kritik rol oynar.",
    image: getImagePath("blog/labovatuvar-Kopya.png"),
    date: "4 Eylül 2023",
    author: "Etiklab",
    category: "Genel Sağlık",
    lead:
      "Laboratuvar testleri, hastalıkların erken teşhisinde, tedavi sürecinin doğru yönetilmesinde ve genel sağlık durumunun değerlendirilmesinde kritik rol oynar.",
   sections: [
  {
    heading: "Laboratuvar Testleri Neden Önemlidir?",
    body:
      "Laboratuvar testleri, vücutta oluşabilecek değişiklikleri erken dönemde tespit etmeye yardımcı olur. Kan, idrar ve diğer örnekler üzerinden yapılan analizler sayesinde birçok hastalık belirti vermeden önce değerlendirilebilir.",
  },
  {
    heading: "Hangi Alanlarda Kullanılır?",
    bullets: [
      "Genel sağlık kontrollerinde",
      "Enfeksiyon hastalıklarının değerlendirilmesinde",
      "Hormon bozukluklarının araştırılmasında",
      "Vitamin ve mineral eksikliklerinin belirlenmesinde",
      "Kronik hastalıkların takibinde",
      "Tedavi sürecinin izlenmesinde",
    ],
  },
  {
    heading: "Erken Tanıdaki Rolü",
    body:
      "Erken tanı, tedavi başarısını artıran en önemli faktörlerden biridir. Düzenli laboratuvar kontrolleri, risklerin zamanında fark edilmesine destek olur.",
    note:
      "Düzenli test takibi, sağlığın korunması ve olası risklerin erken fark edilmesi açısından önemlidir.",
  },
],
  },
  {
    slug: "kolon-kanseri",
    title: "Kolon Kanseri Nedir? Kolon Kanseri Testi Nasıl Yapılır?",
    excerpt:
      "Kolon kanseri belirtileri, risk faktörleri ve erken tanı için uygulanan test yöntemleri hakkında detaylı bilgi.",
    image: getImagePath("blog/kolon-kanseri.png"),
    date: "4 Eylül 2023",
    author: "Etiklab",
    category: "Sindirim Sistemi",
    lead:
      "Kolon kanseri, kalın bağırsakta gelişen ve erken tanı ile tedavi başarısı artan önemli bir kanser türüdür.",
    sections: [
  {
    heading: "Kolon Kanseri Nedir?",
    body:
      "Kolon kanseri, kalın bağırsak hücrelerinde kontrolsüz çoğalma ile ortaya çıkan önemli bir kanser türüdür. Erken dönemde belirti vermeyebilir, bu nedenle düzenli tarama ve laboratuvar değerlendirmeleri önem taşır.",
  },
  {
    heading: "Belirtileri Nelerdir?",
    bullets: [
      "Dışkılama alışkanlığında değişiklik",
      "Dışkıda kan görülmesi",
      "Karın ağrısı veya kramp",
      "Açıklanamayan kilo kaybı",
      "Halsizlik ve yorgunluk",
      "Uzun süren kabızlık veya ishal",
    ],
  },
  {
    heading: "Tanı ve Takipte Kullanılabilecek Testler",
    tableRows: [
      {
        label: "Dışkıda Gizli Kan",
        value:
          "Kolon kanseri taramasında kullanılan temel testlerden biridir.",
      },
      {
        label: "CEA",
        value:
          "Bazı kanser türlerinin takibinde kullanılan tümör belirtecidir.",
      },
      {
        label: "CA 19-9",
        value:
          "Sindirim sistemi kaynaklı bazı hastalıkların değerlendirilmesinde yardımcı olabilir.",
      },
      {
        label: "CA 72-4",
        value:
          "Mide ve gastrointestinal sistem kaynaklı bazı kanser türlerinin değerlendirilmesinde destekleyici olabilir.",
      },
    ],
  },
  {
    heading: "Neden Önemlidir?",
    body:
      "Kolon kanseri erken dönemde tespit edildiğinde tedavi başarısı artabilir. Bu nedenle risk grubunda olan kişilerin düzenli kontrol ve tarama testlerini ihmal etmemesi önemlidir.",
  },
],
  },
  {
    slug: "insulin-direnci",
    title: "İnsülin Direnci Nedir? İnsülin Direnci Testinin Önemi Nelerdir?",
    excerpt:
      "İnsülin direnci nedir, nasıl teşhis edilir ve diyabet riskini azaltmak için neden önemlidir?",
    image: getImagePath("blog/insulin-direnci.png"),
    date: "7 Eylül 2023",
    author: "Etiklab",
    category: "Diyabet",
    lead:
      "İnsülin direnci, vücudun insülin hormonuna yeterli yanıt verememesiyle ortaya çıkan metabolik bir durumdur.",
   sections: [
  {
    heading: "İnsülin Direnci Nedir?",
    body:
      "İnsülin direnci, vücuttaki hücrelerin insülin hormonuna yeterli yanıt verememesiyle ortaya çıkan metabolik bir durumdur. Bu durumda pankreas daha fazla insülin üretmeye çalışır ve zamanla kan şekeri dengesinde bozulmalar gelişebilir.",
  },
  {
    heading: "Hangi Belirtiler Görülebilir?",
    bullets: [
      "Yemeklerden sonra uyku hali",
      "Tatlı isteğinde artış",
      "Bel çevresinde yağlanma",
      "Kilo vermekte zorlanma",
      "Sık acıkma",
      "Yorgunluk ve halsizlik",
    ],
  },
  {
    heading: "Değerlendirmede Kullanılan Testler",
    tableRows: [
      {
        label: "Açlık Kan Şekeri",
        value: "Kan şekeri düzeyinin değerlendirilmesinde kullanılır.",
      },
      {
        label: "İnsülin",
        value: "Açlık insülin düzeyi insülin direnci açısından bilgi verebilir.",
      },
      {
        label: "HbA1c",
        value: "Son 2-3 aylık ortalama kan şekeri düzeyini gösterir.",
      },
      {
        label: "HOMA-IR",
        value: "İnsülin direncinin değerlendirilmesinde kullanılan hesaplama indeksidir.",
      },
    ],
  },
  {
    heading: "Neden Önemlidir?",
    note:
      "İnsülin direncinin erken fark edilmesi, diyabet ve metabolik hastalık risklerinin azaltılması açısından önemlidir.",
  },
],
  },
  {
    slug: "colyak-hastaligi",
    title: "Çölyak Hastalığı Nedir? Çölyak Hastalığı Belirtileri Nelerdir?",
    excerpt:
      "Çölyak hastalığı, glüten hassasiyetiyle ortaya çıkan otoimmün bir hastalıktır. Belirtileri ve tanı süreci.",
    image: getImagePath("blog/colyak.png"),
    date: "7 Eylül 2023",
    author: "Etiklab",
    category: "Sindirim Sistemi",
    lead:
      "Çölyak hastalığı, glüten tüketimiyle tetiklenen ve bağırsakları etkileyen otoimmün bir hastalıktır.",
    sections: [
  {
    heading: "Çölyak Hastalığı Nedir?",
    body:
      "Çölyak hastalığı, glüten tüketimiyle tetiklenen ve ince bağırsakları etkileyen otoimmün bir hastalıktır. Bağırsak yüzeyinde hasara yol açarak besin emilimini bozabilir.",
  },
  {
    heading: "Belirtileri Nelerdir?",
    bullets: [
      "Karın ağrısı ve şişkinlik",
      "İshal veya kabızlık",
      "Kilo kaybı",
      "Demir eksikliği ve anemi",
      "Yorgunluk",
      "Çocuklarda büyüme geriliği",
    ],
  },
  {
    heading: "Tanıda Kullanılan Testler",
    tableRows: [
      {
        label: "Anti-tTG",
        value:
          "Çölyak hastalığının değerlendirilmesinde sık kullanılan antikor testidir.",
      },
      {
        label: "Anti-DGP",
        value:
          "Glüten ilişkili bağışıklık yanıtını değerlendirmeye yardımcı olur.",
      },
      {
        label: "Total IgA",
        value:
          "Testlerin doğru yorumlanabilmesi için IgA düzeyini değerlendirmede kullanılır.",
      },
    ],
  },
  {
    heading: "Kimler Test Yaptırmalı?",
    bullets: [
      "Kronik sindirim şikayeti olanlar",
      "Nedeni açıklanamayan anemi yaşayanlar",
      "Ailesinde çölyak hastalığı olanlar",
      "Glüten tüketimi sonrası şikayetleri artanlar",
    ],
  },
],
  },
  {
    slug: "anemi",
    title: "Anemi Nedir? Anemi Belirtileri Nelerdir?",
    excerpt:
      "Anemi, kandaki hemoglobin seviyesinin düşmesiyle ortaya çıkar. Nedenleri ve belirtileri hakkında bilinçli rehber.",
    image: getImagePath("blog/anemi.png"),
    date: "7 Eylül 2023",
    author: "Etiklab",
    category: "Kan Hastalıkları",
    lead:
      "Anemi, kandaki hemoglobin seviyesinin düşmesiyle ortaya çıkan ve vücudun oksijen taşıma kapasitesini etkileyen bir durumdur.",
    sections: [
  {
    heading: "Anemi Nedir?",
    body:
      "Anemi, kandaki hemoglobin düzeyinin düşmesiyle ortaya çıkan ve vücudun oksijen taşıma kapasitesini etkileyen bir durumdur. Farklı nedenlere bağlı gelişebilir.",
  },
  {
    heading: "Anemi Belirtileri Nelerdir?",
    bullets: [
      "Yorgunluk ve halsizlik",
      "Baş dönmesi",
      "Nefes darlığı",
      "Kalp çarpıntısı",
      "Saç dökülmesi",
      "Soluk cilt görünümü",
    ],
  },
  {
    heading: "Anemi Değerlendirmesinde Kullanılan Testler",
    tableRows: [
      {
        label: "Hemogram",
        value: "Kan hücrelerinin genel durumunu değerlendirmek için kullanılır.",
      },
      {
        label: "Ferritin",
        value: "Vücuttaki demir depolarını gösterir.",
      },
      {
        label: "Serum Demir",
        value: "Kandaki demir düzeyini değerlendirir.",
      },
      {
        label: "Vitamin B12",
        value: "B12 eksikliğine bağlı anemi açısından bilgi verir.",
      },
      {
        label: "Folat",
        value: "Folat eksikliğine bağlı anemi değerlendirmesinde kullanılır.",
      },
    ],
  },
  {
    heading: "Neden Önemlidir?",
    note:
      "Aneminin nedeni doğru belirlenirse tedavi süreci daha doğru planlanabilir.",
  },
],
  },
  {
    slug: "check-up",
    title: "Check Up Nedir? Check Up Yapılmasının Önemli Nedenleri Nelerdir?",
    excerpt:
      "Düzenli check-up yaptırmak, hastalıkları erken dönemde tespit ederek sağlıklı yaşamı destekler.",
    image: getImagePath("blog/checkup.png"),
    date: "4 Eylül 2023",
    author: "Etiklab",
    category: "Genel Sağlık",
    lead:
      "Check-up, genel sağlık durumunu değerlendirmek ve hastalıkları erken dönemde fark etmek amacıyla yapılan kapsamlı sağlık taramasıdır.",
    sections: [
  {
    heading: "Check Up Nedir?",
    body:
      "Check-up, kişinin genel sağlık durumunu değerlendirmek ve olası hastalıkları erken dönemde fark etmek amacıyla yapılan kapsamlı sağlık taramasıdır.",
  },
  {
    heading: "Neden Yapılır?",
    bullets: [
      "Belirti vermeyen hastalıkları erken fark etmek",
      "Genel sağlık durumunu değerlendirmek",
      "Risk faktörlerini belirlemek",
      "Kronik hastalıkların takibini yapmak",
      "Sağlıklı yaşam planlamasına destek olmak",
    ],
  },
  {
    heading: "Check Up İçeriğinde Neler Olabilir?",
    tableRows: [
      {
        label: "Kan Testleri",
        value:
          "Kan sayımı, kan şekeri, karaciğer ve böbrek fonksiyonları gibi temel analizleri içerebilir.",
      },
      {
        label: "Vitamin ve Mineral Testleri",
        value:
          "Vitamin D, B12, demir ve benzeri değerler değerlendirilebilir.",
      },
      {
        label: "Hormon Testleri",
        value:
          "Tiroid ve metabolizma ile ilişkili hormonlar kontrol edilebilir.",
      },
      {
        label: "Risk Değerlendirmesi",
        value:
          "Yaş, aile öyküsü ve yaşam tarzına göre ek testler planlanabilir.",
      },
    ],
  },
  {
    heading: "Kimler Yaptırmalı?",
    note:
      "Düzenli sağlık takibi yaptırmak isteyen herkes check-up yaptırabilir. Özellikle aile öyküsü veya kronik hastalık riski olan kişiler için önemlidir.",
  },
],
  },
  {
    slug: "diyabet",
    title:
      "Diyabet (Şeker Hastalığı) Nedir? Diyabet Testi Yaptırmanın Önemi Nelerdir?",
    excerpt:
      "Diyabet nedir, kimler risk altındadır ve diyabet testleri neden hayati öneme sahiptir?",
    image: getImagePath("blog/diyabet-Kopya.png"),
    date: "4 Eylül 2023",
    author: "Etiklab",
    category: "Diyabet",
    lead:
      "Diyabet, kan şekerinin uzun süre yüksek seyretmesiyle ortaya çıkan kronik bir metabolizma hastalığıdır.",
   sections: [
  {
    heading: "Diyabet Nedir?",
    body:
      "Diyabet, kan şekeri düzeyinin uzun süre yüksek seyretmesiyle ortaya çıkan kronik bir metabolizma hastalığıdır. İnsülin hormonunun yetersizliği veya etkisizliği sonucu gelişebilir.",
  },
  {
    heading: "Diyabet Belirtileri Nelerdir?",
    bullets: [
      "Sık idrara çıkma",
      "Aşırı susama",
      "Ağız kuruluğu",
      "Yorgunluk",
      "Bulanık görme",
      "Açıklanamayan kilo değişiklikleri",
    ],
  },
  {
    heading: "Diyabet Testleri",
    tableRows: [
      {
        label: "Açlık Kan Şekeri",
        value: "Açlık durumundaki kan şekeri düzeyini ölçer.",
      },
      {
        label: "HbA1c",
        value: "Son 2-3 aylık ortalama kan şekeri düzeyini gösterir.",
      },
      {
        label: "İnsülin",
        value: "İnsülin üretimi ve metabolik durum hakkında bilgi verir.",
      },
      {
        label: "HOMA-IR",
        value: "İnsülin direncinin değerlendirilmesinde kullanılır.",
      },
    ],
  },
  {
    heading: "Neden Erken Tanı Önemlidir?",
    note:
      "Diyabetin erken tanısı; kalp, böbrek, göz ve sinir sistemi komplikasyonlarının önlenmesine yardımcı olabilir.",
  },
],
  },
  {
    slug: "beta-hcg",
    title:
      "Beta HCG Nedir? Neden Ölçülür ve Nasıl Değerlendirilir?",
    excerpt:
      "Beta HCG hormonunun ne olduğu, gebelikte neden ölçüldüğü ve sonuçların nasıl değerlendirildiği hakkında temel bilgiler.",
    image: getImagePath("blog/ca0d22eb-85c7-482a-a132-8d8700540c0f.png"),
    date: "4 Eylül 2023",
    author: "Etiklab",
    category: "Hamilelik",
    lead:
      "Beta HCG, gebelikte yükselen ve gebeliğin erken dönemde değerlendirilmesinde kullanılan önemli bir hormondur.",
    sections: [
  {
    heading: "Beta HCG Nedir?",
    body:
      "Beta HCG, gebelik oluştuğunda plasenta tarafından salgılanan bir hormondur. Kan testinde ölçülerek gebeliğin erken dönemde değerlendirilmesine yardımcı olur.",
  },
  {
    heading: "Neden Ölçülür?",
    bullets: [
      "Gebelik tanısını desteklemek için",
      "Gebeliğin erken dönem takibinde",
      "Gebelik haftasına göre değerlendirme yapmak için",
      "Bazı özel klinik durumların takibinde",
    ],
  },
  {
    heading: "Beta HCG Nasıl Değerlendirilir?",
    body:
      "Beta HCG değerleri gebelik haftasına göre değişiklik gösterebilir. Tek bir sonuç yerine değerlerin zaman içindeki değişimi de önemli olabilir.",
  },
  {
    heading: "Dikkat Edilmesi Gerekenler",
    note:
      "Beta HCG sonuçları mutlaka doktor değerlendirmesiyle yorumlanmalıdır.",
  },
],
  },
  {
    slug: "tiroid-hastaliklari",
    title: "Tiroid Hastalıkları ve Tiroid Testlerinin Önemi",
    excerpt:
      "Tiroid bezinin vücut üzerindeki etkileri, tiroid hastalıkları ve tanıda kullanılan testler.",
    image: getImagePath("blog/troid.png"),
    date: "4 Eylül 2023",
    author: "Etiklab",
    category: "Tiroid",
    lead:
      "Tiroid bezinin vücut üzerindeki etkileri, tiroid hastalıkları ve tanıda kullanılan testler hakkında bilinmesi gerekenler.",
   sections: [
  {
    heading: "Tiroid Nedir?",
    body:
      "Tiroid bezi, boynun ön kısmında bulunan ve metabolizmayı düzenleyen hormonlar üreten önemli bir bezdir. T3 ve T4 hormonları vücudun enerji kullanımı, sıcaklık dengesi ve metabolik hızında rol oynar.",
  },
  {
    heading: "Tiroid Hastalıkları Nelerdir?",
    bullets: [
      "Hipotiroidi",
      "Hipertiroidi",
      "Hashimoto tiroiditi",
      "Graves hastalığı",
      "Tiroid nodülleri",
      "Otoimmün tiroid hastalıkları",
    ],
  },
  {
    heading: "Tanıda Kullanılan Testler",
    tableRows: [
      {
        label: "TSH",
        value: "Tiroid bezinin çalışma düzenini değerlendirmede temel testtir.",
      },
      {
        label: "Serbest T4",
        value: "Tiroid hormon düzeyini değerlendirmeye yardımcı olur.",
      },
      {
        label: "Serbest T3",
        value: "Aktif tiroid hormonu hakkında bilgi verir.",
      },
      {
        label: "Anti-TPO",
        value: "Otoimmün tiroid hastalıklarının değerlendirilmesinde kullanılır.",
      },
      {
        label: "TRAb",
        value: "Graves hastalığı ve hipertiroidi nedenlerinin değerlendirilmesine yardımcı olur.",
      },
    ],
  },
  {
    heading: "Hangi Belirtilerde Tiroid Testi İstenebilir?",
    bullets: [
      "Yorgunluk",
      "Kilo alma veya kilo kaybı",
      "Saç dökülmesi",
      "Çarpıntı",
      "Üşüme veya terleme",
      "Uyku ve ruh hali değişiklikleri",
    ],
  },
],
  },
  {
    slug: "hpv",
    title: "HPV Belirtileri Nelerdir? HPV’den Nasıl Korunuruz?",
    excerpt:
      "HPV nedir, belirtileri nelerdir ve HPV enfeksiyonundan korunma yolları hakkında bilmeniz gerekenler.",
    image: getImagePath(
      "blog/human-papillomavirus-hpv-sexually-transmitted-infection_59529-1018.jpg"
    ),
    date: "4 Eylül 2023",
    author: "Etiklab",
    category: "Enfeksiyon",
    lead:
      "HPV, cinsel yolla bulaşabilen yaygın bir virüstür ve bazı türleri uzun vadede sağlık riski oluşturabilir.",
    sections: [
  {
    heading: "HPV Nedir?",
    body:
      "HPV, Human Papilloma Virus olarak bilinen ve farklı türleri bulunan yaygın bir virüstür. Bazı türleri siğillere, bazı türleri ise hücresel değişikliklere yol açabilir.",
  },
  {
    heading: "HPV Belirtileri Nelerdir?",
    bullets: [
      "Çoğu zaman belirti vermeyebilir",
      "Genital siğiller görülebilir",
      "Tarama testlerinde hücresel değişiklikler fark edilebilir",
      "Bazı yüksek riskli tipler uzun vadede sağlık riski oluşturabilir",
    ],
  },
  {
    heading: "HPV’den Korunma Yolları",
    bullets: [
      "HPV aşısı",
      "Düzenli tarama testleri",
      "Korunmalı cinsel ilişki",
      "Doktor kontrollerinin ihmal edilmemesi",
    ],
  },
  {
    heading: "Neden Önemlidir?",
    note:
      "HPV çoğu zaman sessiz ilerleyebilir. Düzenli tarama ve erken değerlendirme, olası risklerin fark edilmesi açısından önemlidir.",
  },
],
  },
];
