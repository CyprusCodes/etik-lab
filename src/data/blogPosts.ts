import { getImagePath } from "@/utils/assets";

export type BlogSection = {
  heading: string;
  body?: string;
  bullets?: string[];
  blocks?: BlogContentBlock[];
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

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][]; caption?: string };

export type BlogPostItem = {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  lead: string;
  sections: BlogSection[];
  relatedPosts?: {
    title: string;
    description: string;
    href: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  faqTitle?: string;
  document?: {
    title: string;
    file: string;
    description: string;
  };
};

export const blogPosts: BlogPostItem[] = [

  {
    slug: "cinsel-yolla-bulasan-hastaliklar",
    title: "Cinsel Yolla Bulaşan Hastalıklar (CYBH) Hakkında Bilinmesi Gerekenler ve Tanı Yöntemleri",
    excerpt: "Cinsel yolla bulaşan hastalıklar (CYBH), dünya genelinde genital sistem ve üreme sağlığı üzerinde ciddi etkileri olan enfeksiyonlardır.",
    image: "/blog/cinsel_hastalik.jpg",
    date: "23 Eylül 2026",
    author: "Etiklab",
    category: "Enfeksiyon",
    lead: "Cinsel yolla bulaşan hastalıklar (CYBH), dünya genelinde genital sistem ve üreme sağlığı üzerinde ciddi etkileri olan enfeksiyonlardır.\n\nBu hastalıkların kontrol altına alınması, hem bireysel olarak hem de toplum sağlığı açısından büyük önem taşır. Ancak, kişisel korunma yöntemleri hakkındaki bilgi eksikliği ve yanlış inanışlar, enfeksiyonların yayılmasına ve sosyal sorunlara yol açabilir. Bu nedenle, erken teşhis ve tedavi için laboratuvar testlerinin kullanılması hayati öneme sahiptir.",
    sections: [
      {
        heading: "Cinsel Yolla Bulaşan Hastalıklar Nedir?",
        body: "Cinsel yolla bulaşan hastalıklar, çoğunlukla korunmasız cinsel temasla bulaşan enfeksiyonlardır. Kadınların anatomik yapılarının farklılığından ötürü CYBH etkenleri ile enfekte olma riskleri daha fazladır. Cinsel temasla bulaşan enfeksiyon etkenleri, nadiren de olsa kan nakli, ameliyat, diş tedavileri gibi cerrahi girişimler sırasında bulaşabilir ya da gebelikte anneden bebeğe geçebilir.\n\nDünya Sağlık Örgütü’nün 2023 yılında yaptığı bilgi güncellemesine göre, yeryüzünde hergün 1 milyondan fazla kişi cinsel yolla bulaşan hastalığa yakalanmaktadır ve bu kişilerin çoğunda herhangi bir belirti görülmemektedir. CYBH’lar her zaman belirti vermeyebilir. Tamamen sağlıklı görünen ve bir enfeksiyonu olduğunu bile bilmeyen kişilerden cinsel yolla bulaşan hastalık kapmak mümkün olabilir. AIDS etkeni HIV virüs enfeksiyonunda kişi uzun yıllar hiç şikayeti olmadan yaşar ve bu esnada cinsel yolla etkeni bulaştırabilir. Keza cinsel yolla bulaşabilen Hepatit B ve Hepatit C virüsünü taşıyanların büyük bölümünde herhangi bir yakınma gözlenmez. Bu durum hastalığın fark edilmeden yayılmasına yol açmaktadır. Tahminen her yıl 374 milyon yeni infeksiyon oluşmaktadır.",
      },
      {
        heading: "Cinsel Yolla Bulaşan Yaygın Görülen Enfeksiyon Etkenleri Ve Sebep Olduğu Belirtiler",
        blocks: [
          { type: "subheading", text: "Chlamydia trachomatis" },
          { type: "paragraph", text: "Cinsel yolla bulaşan bu enfeksiyon, tedavi edilmezse özellikle kadınlarda kısırlık gibi ciddi sonuçlar yaratabilir. Aynı zamanda doğum sırasında anneden bebeğe geçebilir. Hem erkeklerde hem de kadınlarda görülebilen bu enfeksiyon, çoğu zaman kadınlarda belirti vermeden ilerler ve bu da enfeksiyonun fark edilmeden partnerlere bulaşmasına yol açabilir." },
          { type: "subheading", text: "Neisseria gonorrhoeae" },
          { type: "paragraph", text: "Halk arasında bel soğukluğu olarak bilinen gonore, erkeklerde ve kadınlarda kötü kokulu beyaz akıntıya ve idrar yaparken ağrıya sebep olur. Enfekte kadınların büyük bir kısmında herhangi yakınmaya yol açmaz. Belirti göstermese bile enfekte bireylerin ve partnerlerinin tedavi edilmesi gerekir." },
          { type: "subheading", text: "Mycoplasma genitalium/hominis" },
          { type: "paragraph", text: "Laboratuvar ortamında “Multipleks PCR” yöntemi dışında tespit edilmesi oldukça zor olan bu bakteri, genital bölgede ciddi inflamatuvar durumlara yol açabilir." },
          { type: "subheading", text: "Ureaplasma urealyticum/parvum" },
          { type: "paragraph", text: "Kadın ve erkeklerde normal genital flora içinde bulunabilir. Ancak bazı türleri, üretrit, kısırlık, erken doğum ve ölü doğum gibi ciddi durumlara neden olabilir." },
          { type: "subheading", text: "Trichomonas vaginalis" },
          { type: "paragraph", text: "Kadınlarda vajinal, erkeklerde ise üretral enfeksiyonlara neden olur ve cinsel yolla bulaşır." },
          { type: "subheading", text: "Gardnerella vaginalis" },
          { type: "paragraph", text: "Vajinitin yaygın nedenlerinden biri olan bu bakteri, kirli beyaz renkli, kötü kokulu akıntıya, kaşıntıya, yanmaya ve cinsel ilişki sırasında ağrıya yol açar." },
          { type: "subheading", text: "Herpes Simplex Virüs Tip 1" },
          { type: "paragraph", text: "Genellikle ağızda uçuk ve yaralara neden olurken, nadiren de olsa genital bölgede de enfeksiyona yol açabilir. Enfeksiyon sonucu oluşan veziküller veya içeriğindeki sıvılar, öpüşme, cinsel temas ve dokunma gibi yollarla başkalarına bulaşabilir." },
          { type: "subheading", text: "Herpes Simplex Virüs Tip 2" },
          { type: "paragraph", text: "Genital bölgede oluşan ağrılı yaraların en yaygın sebebidir. Bu virüs, cinsel temas sonrasında 2-20 gün arasında belirtilerini gösterir ve cinsel ilişki sırasında ağrıya neden olabilir." },
          { type: "subheading", text: "Treponema pallidum" },
          { type: "paragraph", text: "Sifiliz (frengi) hastalığına yol açan bu bakteri, cinsel temasla bulaşabildiği gibi kan transfüzyonu ile de geçebilir. Ayrıca, hamilelik veya doğum sırasında anneden bebeğe bulaşma riski taşır." },
          { type: "subheading", text: "Candida albicans" },
          { type: "paragraph", text: "Kadınlarda sık görülen bu vajinal mantar enfeksiyonu, yanma, kaşıntı, yoğun beyaz akıntı, sık idrara çıkma ve cinsel ilişki sırasında ağrı gibi belirtilerle ortaya çıkar." },
          { type: "paragraph", text: "Ayrıca HPV (Human Papilloma Virüs), HBV( Hepatit B), HCV (Hepatit C) ve HIV(İnsan Bağışıklık Yetmezliği Virüsü) kansere zemin hazırlayan CYBH etkenleridir. HPV kadınlarda serviks kanseri, HBV ve HCV karaciğer kanseri HIV enfeksiyonu ise kaposi sarkomu ve beyin lenfoması nedeni olabilir." },
        ],
      },
      {
        heading: "Cinsel Yolla Bulaşan Hastalıkların Önlenmesi",
        body: "Cinsel yolla bulaşan hastalıklardan korunmak mümkündür. Tek eşliliğe yönelmek, doğru kullanıldığında kondom kullanmak HIV dahil olmak üzere birçok CYBH’ye karşı etkili koruma sağlar.\n\nHepatit B ve HPV için güvenli ve etkili aşılar mevcuttur. Bu aşılar, özellikle genç bireylerde bu enfeksiyonların yayılmasını önlemede önemli bir rol oynar.\n\nÖzellikle gençler ve risk gruplarında bilgilendirme ve farkındalık eğitimleri yapmak, cinsel yolla bulaşan hastalıkların yayılmasını önlemede kritik bir öneme sahiptir.\n\nKorunma yöntemlerine rağmen, cinsel yolla bulaşan bir enfeksiyona maruz kalma riski her zaman mevcuttur. Erken teşhis ve hızlı tedavi büyük önem taşır. Erken teşhis, tedavi sürecini daha etkili hale getirmekle kalmaz, hastalığın yayılmasını önlemeye de yarar. Bu noktada, enfeksiyon etkeninin çeşitli laboratuvar testleri ile tespit edilmesi kritik bir rol oynar.",
      },
      {
        heading: "Genital Panel Testi ve Erken Teşhis",
        body: "Cinsel yolla bulaşan enfeksiyon etkenlerinin en sık karşılaşılanlarını içeren ve bu mikroorganizmaların tek bir hasta örneğinde tespit edilmesine yarayan Genital Panel testinde PCR yöntemi kullanılır. Bu sayede, enfeksiyonun kaynağı hızlı bir şekilde belirlenir ve uygun tedaviye başlanabilir.",
      },
      {
        heading: "Genital Panel Testi Nasıl Yapılır?",
        body: "Erkeklerde, sabah ilk idrar veya son iki saatte idrar çıkmadan alınmış idrar örneği veya üretral sürüntü, kadınlarda servikal sürüntü örneği gereklidir.\n\nÖrnek alımı sırasında dikkat edilmesi gereken en önemli nokta, sürüntü örneklerinin özel transport besiyerine konularak laboratuvara ulaştırılmasıdır. Özel transport besiyeri şubelerimizden temin edilebilir.\n\nDoğru ve hızlı bir tanı, enfeksiyonun tedavisine en kısa sürede başlanmasını sağlar ve hastalığın yayılmasını önler.",
      },
    ],
  },

  {
    slug: "oral-seks-yoluyla-hastalik-bulasir-mi",
    title: "Oral Seks Yoluyla Hastalık Bulaşır mı? Riskler ve Yapılabilecek Testler",
    excerpt: "Oral seks, cinsel yaşamın yaygın bir parçasıdır. Ancak oral seks sırasında da bazı cinsel yolla bulaşan enfeksiyonlar (CYBE) kişiden kişiye geçebilir.",
    image: "/blog/oral_hastalik.jpg",
    date: "23 Eylül 2026",
    author: "Etiklab",
    category: "Enfeksiyon",
    lead: "Oral seks, cinsel yaşamın yaygın bir parçasıdır. Ancak oral seks sırasında da bazı cinsel yolla bulaşan enfeksiyonlar (CYBE) kişiden kişiye geçebilir. Üstelik bu enfeksiyonların birçoğu herhangi bir belirtiye neden olmadan taşınabilir.\n\nBu nedenle yalnızca belirti bulunmasına göre değerlendirme yapmak her zaman yeterli değildir. Riskli bir temas yaşandıysa uygun zamanda test yaptırmak, kişinin kendi sağlığı ve partnerlerinin sağlığı açısından önem taşır.",
    sections: [
      {
        heading: "Oral seks ile hangi enfeksiyonlar bulaşabilir?",
        body: "Oral seks sırasında enfeksiyon bulaşma ihtimali enfeksiyonun türüne, temasın şekline ve kişilerin mevcut enfeksiyon durumuna göre değişebilir.",
        blocks: [
          { type: "subheading", text: "HPV" },
          { type: "paragraph", text: "Human Papillomavirus (HPV), oral seks yoluyla ağız ve boğaz bölgesine bulaşabilen enfeksiyonlardan biridir. HPV enfeksiyonlarının önemli bir kısmı herhangi bir belirti göstermeden seyredebilir.\n\nBazı HPV tipleri genital siğillere neden olurken, yüksek riskli bazı tipler uzun vadede çeşitli kanserlerle ilişkili olabilir." },
          { type: "subheading", text: "Herpes (HSV)" },
          { type: "paragraph", text: "Herpes simpleks virüsü, özellikle aktif uçuk veya lezyon bulunan bölgelerle temas sonucunda bulaşabilir. Ağız bölgesindeki herpes enfeksiyonu ile genital bölgedeki herpes enfeksiyonu arasında temas yoluyla geçiş mümkün olabilir.\n\nLezyon bulunmaması bulaşma riskinin tamamen ortadan kalktığı anlamına gelmez." },
          { type: "subheading", text: "Bel soğukluğu (Gonore)" },
          { type: "paragraph", text: "Gonore yalnızca genital bölgeyi etkileyen bir enfeksiyon değildir. Oral seks sonrasında boğaz bölgesinde gonore gelişebilir.\n\nBoğaz gonoresi çoğu zaman belirgin bir şikâyete neden olmayabilir. Bu nedenle kişinin herhangi bir belirti yaşamaması enfeksiyon olmadığı anlamına gelmez." },
          { type: "subheading", text: "Klamidya" },
          { type: "paragraph", text: "Klamidya da oral temas yoluyla boğaz bölgesine bulaşabilir. Boğaz enfeksiyonları genital enfeksiyonlara göre daha az belirti verebilir." },
          { type: "subheading", text: "Frengi (Sifiliz)" },
          { type: "paragraph", text: "Frengi, enfeksiyon bulunan yara veya lezyonla doğrudan temas sonucunda oral seks sırasında bulaşabilir. Ağız, dudak veya genital bölgede bulunan yaralar bulaş açısından önemlidir." },
          { type: "subheading", text: "HIV" },
          { type: "paragraph", text: "Oral seks yoluyla HIV bulaşma riski, anal veya vajinal cinsel ilişkiye kıyasla çok daha düşüktür; ancak risk tamamen sıfır olarak kabul edilmez. Özellikle ağız içinde kanama, yara veya ülser bulunması ve meninin ağız içine gelmesi gibi durumlar değerlendirmede önem taşıyabilir.\n\nHIV açısından endişe oluşturan bir temas yaşandıysa, yalnızca belirtilere bakmak yerine uygun zamanda test yaptırmak en doğru yaklaşımdır." },
        ],
      },
      {
        heading: "Belirti yoksa test yaptırmaya gerek yok mu?",
        body: "Hayır.\n\nCinsel yolla bulaşan enfeksiyonların önemli bir bölümü belirtisiz seyredebilir. Kişi kendisini tamamen sağlıklı hissederken enfeksiyonu taşıyor ve farkında olmadan partnerine bulaştırıyor olabilir.\n\nBu nedenle özellikle;",
        blocks: [
          { type: "bullets", items: [
            "Korunmasız cinsel temas yaşandıysa,",
            "Yeni veya birden fazla partner varsa,",
            "Partnerde cinsel yolla bulaşan bir enfeksiyon tespit edildiyse,",
            "Ağız veya genital bölgede açıklanamayan yara, kabarcık veya lezyon oluştuysa,",
            "Boğazda tekrarlayan veya açıklanamayan bazı şikâyetler varsa,",
          ] },
          { type: "paragraph", text: "doktor değerlendirmesi ve uygun laboratuvar testleri düşünülebilir." },
        ],
      },
      {
        heading: "Oral seks sonrasında hangi testler yapılabilir?",
        body: "Hangi testin yapılacağı, yaşanan temasın türüne ve üzerinden geçen süreye göre değişir.\n\nEnfeksiyona göre kan testleri, PCR/NAAT testleri veya uygun bölgeden alınan sürüntü örnekleri kullanılabilir.\n\nÖzellikle oral temas söz konusu olduğunda önemli noktalardan biri, testin yalnızca genital bölgeden alınmasının her zaman yeterli olmayabileceğidir. Örneğin boğaz bölgesinde gonore veya klamidya şüphesi varsa, doktor gerekli görürse boğaz sürüntüsü gibi bölgeye özgü örnekler değerlendirmeye alınabilir.\n\nHangi testin ne zaman yapılması gerektiği ise enfeksiyona ve temasın üzerinden geçen süreye göre değişir.",
      },
      {
        heading: "Test için doğru zamanı beklemek neden önemli?",
        body: "Bir enfeksiyon bulaştıktan hemen sonra yapılan her test enfeksiyonu yakalayamayabilir. Bunun nedeni, testlerin enfeksiyonu gösterebilir hale gelmesi için belirli bir süre gerekebilmesidir.\n\nBu süre kullanılan teste ve araştırılan enfeksiyona göre değişir.\n\nBu nedenle riskli bir temas sonrasında test yaptırmayı düşünüyorsanız, temas tarihini sağlık profesyoneline belirtmeniz önemlidir. Böylece uygun test ve uygun zamanlama belirlenebilir.",
      },
      {
        heading: "Kendinizi korumak için neler yapabilirsiniz?",
        body: "Oral seks sırasında bulaş riskini azaltmak için bariyer yöntemlerinden yararlanılabilir.\n\nPrezervatif veya oral temas için kullanılan dental dam gibi bariyer yöntemleri riski azaltmaya yardımcı olabilir. Ayrıca HPV ve hepatit B gibi aşıyla önlenebilen enfeksiyonlara karşı aşı durumunun değerlendirilmesi de korunmada önemli bir adımdır.\n\nBunun yanında düzenli cinsel sağlık kontrolleri, özellikle yeni partnerlerin bulunduğu durumlarda, enfeksiyonların erken tespit edilmesine yardımcı olabilir.",
      },
      {
        heading: "Unutmayın",
        body: "Oral seks “risksiz cinsel temas” olarak değerlendirilmemelidir. Bazı cinsel yolla bulaşan enfeksiyonlar oral temasla bulaşabilir ve herhangi bir belirti göstermeden ilerleyebilir.\n\nŞüpheli bir temas yaşadıysanız paniğe kapılmak yerine, temasın türünü ve tarihini sağlık profesyoneliyle paylaşarak size uygun testleri ve doğru test zamanını belirlemek en güvenilir yaklaşımdır.",
      },
    ],
  },

  {
    slug: "koagulasyon-testi",
    title: "Koagulasyon Testi Nedir?",
    excerpt: "Koagulasyon testi, kanın pıhtılaşma sürecini ve pıhtılaşma faktörlerinin düzgün çalışıp çalışmadığını değerlendiren laboratuvar incelemesidir.",
    image: "/blog/koagulasyon.jpg",
    date: "23 Eylül 2026",
    author: "Etiklab",
    category: "Kan Hastalıkları",
    lead: "Koagulasyon testi, kanın pıhtılaşma sürecini ve pıhtılaşma faktörlerinin düzgün çalışıp çalışmadığını değerlendiren laboratuvar incelemesidir.\n\nBu test sayesinde, kanın ne kadar hızlı veya yavaş pıhtılaştığı, kanama veya pıhtılaşma bozukluklarının olup olmadığı belirlenir. Kanama zamanını ölçen protrombin zamanı (PT), aktif parsiyel tromboplastin zamanı (aPTT) ve trombinojen seviyesi gibi parametreler kullanılır. Bu testler, kanama eğilimini veya pıhtı oluşma riskini anlamak ve uygun tedavi planı yapmak için çok önemlidir.",
    sections: [
      {
        heading: "Koagulasyon Testi Hangi Durumlarda Yaptırılır?",
        body: "Koagulasyon testi, kanın pıhtılaşma mekanizmasını ve pıhtılaşma faktörlerinin düzgün çalışıp çalışmadığını değerlendirmek amacıyla yapılır. Aşağıdaki durumlarda bu testi yaptırmanız önerilir:",
        blocks: [
          { type: "bullets", items: [
            "Yüksek tansiyon, diyabet veya kronik böbrek hastalığı öyküsü varsa,",
            "Sürekli burun kanaması, diş eti kanamaları, kolay morarma veya sık hematom oluşumu görüldüğünde,",
            "Ameliyat öncesi veya sonrası, pıhtılaşma durumu kontrol edilmek istendiğinde,",
            "Kanser tedavisi görenler, karaciğer hastalıkları veya antikoagülan kullanan kişilerde düzenli takip için,",
            "Derin venöz tromboz veya pulmoner emboli gibi pıhtı atma riski yüksek hastalıkların tanısı ve tedavi etkinliğinin izlenmesinde.",
          ] },
          { type: "paragraph", text: "Bu testler, erken teşhis ve uygun tedavi ile ciddi komplikasyonların önüne geçmenize yardımcı olur. Sağlıklı ve güvenli bir yaşam sürdürebilmek için, düzenli kontrollerinizi ihmal etmeyin ve doktorunuza danışmayı unutmayın. İnvitro Laboratuvar olarak, mobil kan hizmetimiz ile size bir telefon kadar yakınız." },
        ],
      },
      {
        heading: "Koagulasyon Testi Parametreleri ve Değerlendirme Kriterleri",
        body: "Koagulasyon testi, kanın pıhtılaşma mekanizmasını ve pıhtılaşma faktörlerinin düzgün çalışıp çalışmadığını değerlendirmek amacıyla yapılan temel laboratuvar incelemesidir. Bu test sayesinde, kanın ne kadar hızlı veya yavaş pıhtılaştığı, kanama eğilimi veya pıhtı oluşma riski hakkında detaylı bilgi elde edilir. Protrombin zamanı (PT), aktif parsiyel tromboplastin zamanı (aPTT), trombin zamanı (TT) ve fibrinojen seviyeleri gibi parametreler kullanılarak, kanın pıhtılaşma süreçleri detaylı şekilde analiz edilir. Bu değerlendirmeler, özellikle kanama bozuklukları, pıhtılaşma hastalıkları ve cerrahi öncesi risk değerlendirmelerinde büyük önem taşır. Aşağıda, bu parametrelerin detaylı değerlendirme kriterleri ve normal aralıkları yer almaktadır.",
        blocks: [
          { type: "subheading", text: "Protrombin Zamanı (PT)" },
          { type: "paragraph", text: "PT, kanın pıhtılaşma sürecinin ne kadar hızlı gerçekleştiğini ölçer.. PT süresi uzarsa, kan pıhtılaşmasının yavaşladığını veya pıhtılaşma faktörlerinin eksik veya bozuk olduğunu gösterir. Bu durum, kanama riskini artırabilir ve antikoagülan tedavi takiplerinde kullanılır. Kısaca, pıhtılaşma mekanizmasının etkinliği bu testle değerlendirilir." },
          { type: "subheading", text: "Aktif Parsiyel Tromboplastin Zamanı (aPTT)" },
          { type: "paragraph", text: "aPTT, iç pıhtılaşma yolunu ve pıhtılaşma faktörlerinin fonksiyonunu gösterir.. Uzama durumunda, kanama eğilimi artar; kısalma ise, pıhtılaşma riskinin yükseldiğine işaret edebilir. Bu test, özellikle kanama hastalıklarının ve antikoagülan tedavilerin takibinde önemli rol oynar." },
          { type: "subheading", text: "Tromboplastin Zamanı (TT)" },
          { type: "paragraph", text: "TT, safra yolları hastalıkları veya karaciğer fonksiyonlarıyla ilişkili pıhtılaşma faktörlerinin değerlendirilmesinde kullanılır. Uzama, pıhtılaşma bozukluğunu veya faktör eksikliğini gösterebilir." },
          { type: "subheading", text: "Fibrinojen Seviyesi" },
          { type: "paragraph", text: "Fibrinojen, pıhtılaşmada rol alan bir proteindir. . Düşük fibrinojen seviyeleri, ciddi kanamalara veya karaciğer hastalıklarına işaret edebilirken, yüksek seviyeler inflamasyon veya enfeksiyonlara bağlı olabilir." },
          { type: "subheading", text: "International Normalized Ratio (INR)" },
          { type: "paragraph", text: "INR, kanın pıhtılaşma süresini standart bir ölçekte değerlendirmek için kullanılan bir testtir. Özellikle antikoagülan tedavi gören hastalarda, pıhtılaşma durumunu izlemek amacıyla önemlidir.  INR seviyesi yükseldiğinde, kanın pıhtılaşma yeteneği azalır ve bu da kanama riskini artırabilir. Düşük INR seviyeleri ise pıhtılaşmanın hızlandığını gösterir. Bu nedenle, INR testi, antikoagülan tedavi sürecinin etkinliğini izlemek ve gerektiğinde doz ayarlamaları yapmak için kritik bir araçtır." },
        ],
      },
      {
        heading: "Ek Koagulasyon Parametreleri ve Testleri",
        body: "Genellikle temel koagulasyon testleri (PT, aPTT, TT, fibrinojen) hastalıkların tanısı ve takipleri için yeterlidir. Ancak, şüpheli durumlar veya karmaşık pıhtılaşma bozukluklarında aşadağıki ek testler de kullanılabilir. Bu testler, özellikle pıhtılaşma bozukluklarının, damar tıkanıklıklarının veya otoimmün hastalıkların daha detaylı değerlendirilmesini sağlar. Doktorunuz, şüpheli durumlarda bu ek tetkikleri isteyerek, daha doğru tanı ve uygun tedavi planı oluşturabilir.",
        blocks: [
          { type: "bullets", items: [
            "D-dimer: Kan pıhtılarının çözülme seviyesini gösterir. Yüksek seviyeler, derin venöz tromboz, pulmoner emboli veya koagülasyon bozukluklarını gösterebilir.",
            "Protein C ve Protein S: Kan pıhtılaşmasını düzenleyen doğal antikoagülan proteinlerdir. Eksiklikleri, pıhtılaşma riskini artırabilir.",
            "Antithrombin III (AT-III): Pıhtılaşma faktörlerini baskılayan bir protein. Düşük seviyeleri, pıhtılaşma riskini artırabilir.",
            "Lupus Antikoagülan (LA): Otomatik hastalıklar ve pıhtılaşma bozukluklarını değerlendirmek için kullanılır. Yüksek seviyeleri, pıhtı atma riskini artırabilir.",
          ] },
          { type: "paragraph", text: "Bu parametrelerin normal, yüksek veya düşük seviyeleri, kanama veya pıhtılaşma sorunlarının tanısında ve tedavi planlamasında kritik rol oynar. Yüksek veya düşük çıkan sonuçlar, altta yatan hastalıkların belirtisi olabilir ve detaylı değerlendirme ile doğru tedaviye başlanmalıdır. Ayrıca, kan pıhtılaşma bozukluklarının takibi ve yaşam kalitesini artırmak adına düzenli takip ve uzman hekime danışmak büyük önem taşır. Sağlıklı yaşam ve düzenli kontrollerle, pıhtılaşma ile ilgili sorunların önüne geçebilirsiniz." },
        ],
      },
    ],
  },

  {
    slug: "kanser-marker-testi",
    title: "Kanser Marker Testi",
    excerpt: "Kanser marker testi nedir? Vücutta kanserin varlığını belirlemeye veya hastalığın seyrini takip etmeye yardımcı olan biyokimyasal göstergeleri ölçen bir testtir.",
    image: "/blog/kanser_marker_test.jpg",
    date: "23 Eylül 2026",
    author: "Etiklab",
    category: "Genel Sağlık",
    lead: "Kanser marker testi nedir? Vücutta kanserin varlığını belirlemeye veya hastalığın seyrini takip etmeye yardımcı olan biyokimyasal göstergeleri ölçen bir testtir. Kanser hücreleri tarafından üretilen veya vücudun kanserle mücadele ederken salgıladığı proteinler ve diğer maddeler; kan, idrar veya doku örnekleri üzerinde analiz edilerek değerlendirilir. Bu testler kanserin erken teşhisinde, tedaviye yanıtın izlenmesinde ve hastalığın tekrarlama riskinin belirlenmesinde önemli bir rol oynar.\n\nKanser marker testi nedir? Belirli kanser türleri için spesifik olabilir veya daha genel taramalar için kullanılabilir. Örneğin, PSA (Prostat Spesifik Antijen) prostat kanseri için yaygın olarak kullanılırken CA-125 yumurtalık kanseri, CEA (Karsinoembriyonik Antijen) ise kolorektal ve bazı diğer kanser türleri için bir belirteçtir. Bu testler, doktorların hastalığın ilerlemesini izleyerek uygun tedavi planlarını oluşturmasına yardımcı olur. Ancak marker seviyelerinin yüksek olması her zaman kanser anlamına gelmediği gibi, düşük seviyeler de kanserin olmadığı anlamına gelmez. Bu nedenle, uzman hekimler test sonuçlarını dikkatle değerlendirerek hastanın genel sağlık durumu ve diğer teşhis yöntemleriyle birlikte yorumlar.",
    sections: [
      {
        heading: "Kanser Marker Testi Nasıl Yapılır?",
        body: "Kanser marker testi, vücutta kanserin varlığını veya seyrini belirlemek için kullanılan önemli bir tanı yöntemidir. Bu testler, kanserli hücreler tarafından üretilen veya vücutta kanserle savaş sırasında artan belirli maddeleri tespit etmeye yönelik geliştirilmiştir. Erken teşhis, tedavi sürecinin başarısını artırabileceğinden düzenli sağlık kontrollerinin bir parçası olarak uygulanması büyük önem taşır.\n\nÖncelikle, tümör belirteçleri adı verilen biyokimyasal göstergeler incelenerek kanserin varlığı araştırılır. Bu belirteçler, tümör hücreleri tarafından üretilen proteinler veya metabolik yan ürünler olabilir. Çoğu kanser marker testi, hastanın kanında veya idrarında bulunan bu belirteçlerin seviyesini ölçerek sonuç verir.\n\nKanser marker testi kan tahlilinde ölçülen spesifik değerler üzerinden değerlendirilir. Bir sağlık uzmanı, hastadan kan örneği alarak laboratuvara gönderir ve burada özel analizler yapılır. Bazı durumlarda, idrar veya doku örnekleri de incelenebilir. Ancak tek başına bir kan testi kesin teşhis koymak için yeterli olmayabilir, doktorlar genellikle ek testlerle durumu destekler.\n\nBazı spesifik tümör markerları, belirli kanser türleriyle ilişkilidir. Örneğin, PSA testi prostat kanseri için yaygın olarak kullanılırken CA-125 yumurtalık kanseri taramasında önemlidir. CEA gibi belirteçler ise mide, kolon ve pankreas kanserleri gibi farklı türlerde yükselebilir.",
      },
      {
        heading: "Kanser Marker Testi Kimler için Uygundur?",
        body: "Kanser marker testi; kanserin erken teşhisi, tedavi sürecinin izlenmesi ve hastalığın tekrarlama riskinin değerlendirilmesi için kullanılan önemli bir yöntemdir. Ancak bu test herkes için rutin olarak önerilmez. Genellikle belirli risk gruplarına dahil olan bireyler için uygulanır. Kanser riskini belirlemek ve olası hastalıklara karşı önlem almak isteyen kişiler, doktor önerisiyle bu testleri yaptırabilir.\n\nÖzellikle aşağıdaki gruplarda yer alan kişiler için kanser marker testleri daha fazla önerilmektedir:",
        blocks: [
          { type: "bullets", items: [
            "Ailede Kanser Geçmişi Olanlar: Ailesinde belirli kanser türleri bulunan kişiler, genetik yatkınlık nedeniyle daha yüksek risk taşıyabilir. Özellikle meme, prostat, kolon ve yumurtalık kanserleri gibi kalıtsal eğilim gösteren türler için düzenli taramalar önerilir.",
            "Sigara ve Alkol Kullanımı Yüksek Olanlar: Sigara ve aşırı alkol tüketimi; akciğer, ağız, gırtlak, karaciğer ve pankreas kanseri riskini artırabilir. Bu gruptaki bireyler için marker testleri erken uyarı sağlayabilir.",
            "Belirtileri Olan Bireyler: Açıklanamayan kilo kaybı, uzun süreli yorgunluk, kronik ağrılar veya anormal kitlelerin varlığı gibi belirtiler gösteren kişilerde, tanıya yardımcı olmak için marker testleri uygulanabilir.",
            "Daha Önce Kanser Tedavisi Görmüş Olanlar: Kanseri atlatan bireyler, hastalığın tekrarlama riskini takip etmek amacıyla belirli periyotlarla marker testlerine tabi tutulabilir.",
            "Bazı Meslek Grupları: Kimyasal maddelere, radyasyona veya zararlı çevresel faktörlere maruz kalan kişiler, kanser gelişme riski taşıyabilir ve düzenli kontrollerden geçmeleri önerilir.",
          ] },
          { type: "paragraph", text: "Bu testler, doktorun belirlediği diğer tıbbi tetkiklerle birlikte değerlendirilmeli ve tek başına kesin bir teşhis aracı olarak görülmemelidir. Kanserin erken teşhisi ve önlenmesi için düzenli sağlık kontrolleri ve yaşam tarzı değişiklikleri büyük önem taşımaktadır." },
        ],
      },
      {
        heading: "Kanser Markerları Nelerdir?",
        body: "Kanser markerları, vücutta kanserin varlığını belirlemeye, hastalığın seyrini izlemeye ve tedaviye yanıtı değerlendirmeye yardımcı olan biyolojik maddelerdir. Bu maddeler, kanserli hücreler tarafından üretilen proteinler, enzimler, hormonlar veya metabolitler olabilir.\n\nBazı yaygın kanser markerları arasında PSA (Prostat Spesifik Antijen) prostat kanseri için, CA-125 yumurtalık kanseri için, CEA (Karsinoembriyonik Antijen) kolon ve mide kanseri için, AFP (Alfa-Fetoprotein) karaciğer kanseri için ve HER2 meme kanseri için kullanılan belirteçler yer alır. Ancak bu markerlar tek başına kesin teşhis koymak için yeterli değildir; biyopsi, görüntüleme yöntemleri ve diğer laboratuvar testleri ile desteklenmesi gerekir.",
      },
      {
        heading: "Vücutta Kanser Olduğu Nasıl Anlaşılır?",
        body: "Kanserin varlığını anlamak için çeşitli belirtiler ve tıbbi testler değerlendirilir. Kanserin erken evrede belirtileri fark edilmeyebilir ancak ilerleyen süreçte açıklanamayan kilo kaybı, kronik yorgunluk, uzun süre iyileşmeyen yaralar, kanlı dışkı veya idrar, anormal kitlelerin hissedilmesi, sürekli ağrı ve cilt değişiklikleri gibi semptomlar ortaya çıkabilir.\n\nBu belirtiler kanserin türüne ve bulunduğu organa göre değişkenlik gösterir. Kesin tanı için kan testleri, biyopsi, manyetik rezonans görüntüleme (MR), bilgisayarlı tomografi (BT) ve PET taramaları gibi yöntemler kullanılır. Kanser marker testleri de teşhis sürecinde destekleyici bir rol oynar ancak yanlış pozitif veya yanlış negatif sonuçlar verebileceği için mutlaka doktor tarafından kapsamlı bir şekilde değerlendirilmelidir.",
      },
    ],
  },

  {
    slug: "veragene-nipt-testi",
    title: "VERAgene: Yeni Nesil Non İnvaziv Prenetal Test (NIPT)",
    excerpt: "VERAgene, anöploidi, mikrodelesyonlar ve tek gen hastalıkları için aynı anda tarama yapabilen ilk kapsamlı non-invaziv prenatal testtir.",
    image: "/blog/veragene.jpg",
    date: "23 Eylül 2026",
    author: "Etiklab",
    category: "Hamilelik",
    lead: "VERAgene, anöploidi, mikrodelesyonlar ve tek gen hastalıkları için aynı anda tarama yapabilen ilk kapsamlı non-invaziv prenatal testtir. VERAgene tarafından taranan hastalıklar genellikle yaşam kalitesi üzerinde önemli bir etkiye sahip ciddi hastalıklardır.Anöploidi ve mikrodelesyonların tespitini monojenik bozuklukların taranması ile birleştiren VERAgene, potansiyel ebeveynlere kapsamlı bir çözüm sunar.",
    sections: [
      {
        heading: "NON-INVAZIV PRENATAL TESTİ (NIPT) NEDİR?",
        body: "Hamile bir kadın tarafından fetusun genetik durumunu doğumdan önce kontrol etmek için yapılan bir testtir.",
      },
      {
        heading: "GENETİK BOZUKLUKLAR NELERDİR?",
        body: "Genetik bozukluklar, gebe kalma sırasında genomda meydana gelen istenmeyen değişikliklerden kaynaklanır. Test ile üç tip genetik bozukluk tespit edilir:",
        bullets: [
          "Anöploidi'ler; bir kromozomun ekstra bir kopyasına (trizomi) sahip olduğu veya bir kopyasının (monozomi) olmadığı durumlarda meydana gelen genetik bozukluklardır.",
          "Mikrodelesyonlar; bir kromozomun belirli bir bölgesinde küçük bir eksilme sonucu oluşan genetik bozukluklardır.",
          "Tek gen hastalıkları, bir gendeki mutasyonların neden olduğu genetik bozukluklardır.",
        ],
      },
      {
        heading: "VERAgene NASIL ÇALIŞIR?",
        body: "Gebelik esnasında, serbest fetal DNA plasentadan annenin kanına geçip annenin DNA'sı ile birlikte dolaşır. Bu serbest DNA, annenin kanından izole edilir ve babanın DNA örneğiyle birlikte potansiyel genetik bozuklukları tespit edebilmek adına tescilli yeni nesil teknolojiyi ve biyoinformatiği kullanarak analiz edilir. Sonuçlar klinisyene gönderilir ve klinisyen sonuçları ebeveynlere iletip gerekli danışmanlığı sağlar.",
      },
      {
        heading: "VERAgene TARAFINDAN NELER YAPILABİLİR?",
        body: "VERAgene, 13, 18, 21 kromozomları, X ve Y kromozom anöplodilerini, DiGeorge sendromu, 1p36 delesyon sendromu, Smith-Magenis sendromu ve Wolf-Hirschhorn sendromu ve 50 monogenik hastalığın trizomilerini tespit edebilir. VERAgene, 50 monogenik hastalığın taranması için 50 gende yaklaşık 500 mutasyon hedeflemektedir. Anöploidi ve mikrodelesyonların tespitini monojenik bozuklukların taranması ile birleştiren VERAgene, tek bir test kullanarak gebeliğin kapsamlı bir resmini sunar.",
      },
      {
        heading: "OTOZOMAL ANÖPLOİDİLER",
        bullets: [
          "Down Sendromu (Trizomi 21)",
          "Edwards Sendromu (Trizomi 18)",
          "Patau Sendromu (Trizomi 13)",
        ],
      },
      {
        heading: "CİNSİYET KROMOZOM ANÖPLOİDİLER",
        bullets: [
          "Turner Sendromu (Monozomi X)",
          "Triple X Sendromu (Trizomi X)",
          "Klinefelter Sendromu (XXY)",
          "Jacobs Sendromu (XYY)",
          "XXYY Sendromu",
        ],
      },
      {
        heading: "MİKRODELESYONLAR",
        bullets: [
          "DiGeorge Sendromu (22q11.2)",
          "1p36 deletion Sendromu(1p36)",
          "Smith-Magenis Sendromu (17p11.2)",
          "Wolf-Hirschhorn Sendromu (4p16.3)",
        ],
      },
      {
        heading: "MONOGENİK BOZUKLUKLAR",
        bullets: ["Taranan monogenik koşulların tam listesi"],
      },
      {
        heading: "VERAgene TESTİ İÇİN YAŞ SINIRI VAR MI?",
        body: "Hayır. VERAgene testini her yaştaki hamile kadınlar yaptırılabilir, çünkü yaşa bağlı olmayan genetik riskleri araştırır.",
      },
      {
        heading: "VERAgene TESTİNİ NE ZAMAN YAPTIRABİLİRİM?",
        body: "VERAgene testi, gebeliğin en erken 10. haftasında yapılabilir.",
      },
      {
        heading: "NEDEN HAMİLE BİR KADIN VERAgene TESTİ’ni YAPTIRMALI?",
        body: "Anöploidilerin aksine, mikrodelesyonlar ve tek gen hastalıklarının riski yaşa bağlı değildir, biyokimyasal veya ultrason bulguları erken teşhis için yardımcı olabilir. Fetusun VERAgene tarafından taranan genetik hastalıklardan birinden etkilenmesinin kümülatif riski, 100'de 1'den fazladır ve bazı durumların daha yaygın olduğu etnik topluluklarda bu daha da yüksek olabilir. VERAgene’den elde edilen doğru tarama bilgileri ışığında, ebeveynlerin olası tedaviler ve klinik yaklaşım hakkında karar vermesini sağlar.",
      },
      {
        heading: "VERAgene TESTİNİ NASIL YAPTIRABİLİRİM.",
        bullets: [
          "EN ERKEN GEBELİĞİN 10. HAFTASI",
          "VERAgene TESTİNİ DOKTORUNUZA DANIŞIN",
          "VERAgene İÇİN ANNE ADAYINDAN KAN ÖRNEĞİ VE BABADAN YANAK İÇİ SÜRÜNTÜ ÖRNEĞİ ALINIR.",
          "ÖRNEKLER PARTNER LABORATUVARIMIZDA ANALİZ EDİLECEK.",
          "TEST SONUÇLARI 10 İŞ GÜNÜNDE DOKTORUNUZA GÖNDERİLİR.",
        ],
      },
    ],
    faqs: [
      {
        question: "NIPT Nedir?",
        answer: "NIPT hamile bir kadın tarafından fetusun genetik durumunu doğumdan önce kontrol etmek için yapılan bir tarama testidir. NIPT, bu genetik koşulları belirlemek için annenin kanındaki serbest DNA'yı analiz eder. NIPT önemlidir, çünkü bebeği doğumdan önce genetik bozukluklar için test etmenin güvenli ve doğru bir yolunu sağlar, bunlardan en yaygın olanı Down sendromudur. Bu yeni nesil testin uygulanmasından önce, Down sendromu için test seçenekleri ya düşük doğrulukta (yaklaşık% 80-95) biyokimyasal test ile birleştirilmiş ultrason ya da invaziv yöntemler kullanan yüksek doğrulukta prenatal tanı gibi tarama yöntemleri ya da [ör. düşük olma riski% 0.5 olan amniyosentez veya koryonik villik örneklemesidir. (CVS)].",
      },
      {
        question: "Genetik Bozukluklar Nelerdir?",
        answer: "İnsan genomu yirmi üç çift kromozomdan oluşur.Genetik bozukluklar, gebe kalma sırasında genomda meydana gelen istenmeyen değişikliklerden kaynaklanır. Test ile üç tip genetik bozukluk tespit edilir:\n\n· Anöploidi'ler; bir kromozomun ekstra bir kopyasına (trizomi) sahip olduğu veya bir kopyasının (monozomi) olmadığı durumlarda meydana gelen genetik bozukluklardır.\n\n· Mikrodelesyonlar; bir kromozomun belirli bir bölgesinde küçük bir eksilme sonucu oluşan genetik bozukluklardır.\n\n· Tek gen hastalıkları, bir gendeki mutasyonların neden olduğu genetik bozukluklardır.",
      },
      {
        question: "VERAgene NIPT nedir?",
        answer: "VERAgene, aneuploidi, mikrodelesyonlar ve tek gen hastalıkları için aynı anda tarama yapabilen ilk kapsamlı non-invaziv prenatal testtir. VERAgene tarafından taranan hastalıklar genellikle yaşam kalitesi üzerinde önemli bir etkiye sahip ciddi hastalıklardır. Bu genetik hastalıklar doğuştan anomaliler, gelişim bozukluğu, işitme kaybı, körlük, metabolik bozukluklar vb. belirtiler gösterir.",
      },
      {
        question: "VERAgene Tarafından Neler Yapılabilir?",
        answer: "VERAgene, Down sendromu, Edwards sendromu, Patau sendromu, cinsiyet kromozom anöploidileri, DiGeorge sendromu, 1p36 delesyon sendromu, Smith-Magenis sendromu ve Wolf-Hirschhorn sendromu, Smith-Magenis sendromu ve Wolf-Hirschhorn sendromu gibi mikrodelesyonlar ve Beta talasemi, kistik fibroz, Tay-Sachs hastalığı, Canavan hastalığı, orak hücreli anemi, Ailesel Akdeniz ateşi, fenilketonüri, vb. gibi 50 monogenik bozukluk, aneuploidi ve mikrodelesyonları, monogenik hastalıkların taranmasıyla birleştirerek tek bir test kullanarak gebeliğin kapsamlı resmini sunar.",
      },
      {
        question: "Down Sendromu, Edwards Sendromu, Patau Sendromu Nedir?",
        answer: "Down sendromu, Edwards sendromu ve Patau sendromu, kromozomal trisomilerin neden olduğu genetik bozukluklardır. Down sendromuna, 21 numaralı kromozomun ekstra bir kopyası neden olurken, Edwards sendromu ve Patau sendromuna, sırasıyla 18 numaralı kromozom ve 13 numaralı kromozomun bir kopyası neden olur. Down sendromu, zihinsel bozukluk ve doğuştan anormallikler ile karakterizedir. Down sendromu yaklaşık 700 gebelikte 1'inde görülür, ancak 35 yaş üstü kadınlarda gebeliklerde daha sık görülür. Edwards sendromu ve Patau sendromu, sırasıyla 3000'de 1 ve 10000 gebelikte 1'de daha az görülür. Edwards ve Patau sendromları şiddetli doğuştan anormallikler ile karakterizedir ve yaşamın ilk yıllarında nadiren hayatta kalırlar.",
      },
      {
        question: "Seks kromozomu anöploidileri nelerdir?",
        answer: "Cinsiyet kromozomu anöploidileri, bir cinsiyet kromozomunun varlığının veya yokluğunun neden olduğu genetik hastalıklardır. 23 kromozom çifti bir bireyin cinsiyetini belirler. Kadınlar iki X kromozomuna sahiptir ve erkeklerde bir X ve bir Y kromozomu vardır. Dört ana cinsiyet kromozom anöploidi vardır:\n\n· Turner sendromu, tek bir X kromozomunun varlığı ile karakterize edilir.\n\n· Triple X sendromu, üç X kromozomunun varlığı ile karakterize edilir.\n\n· Klinefelter sendromu iki X kromozomu ve bir Y kromozomunun varlığı ile karakterize edilir.\n\n· Jacob sendromu, bir X kromozomu ve iki Y kromozomunun varlığı ile karakterize edilir.",
      },
      {
        question: "Mikrodelesyonlar Nelerdir?",
        answer: "Mikrodelesyonlar, bir kromozomun bir bölümünün kaybından kaynaklanan genetik koşullardır. Mikrodelesyonlar, doğuştan anormallikler ve zihinsel bozulma ile karakterizedir. Semptomların ciddiyeti, mikrodelesyonun boyutuna ve yerine göre değişir. En sık görülen mikrodelesyon sendromu, yaklaşık 1000 gebelikte yaklaşık bir kez meydana gelen DiGeorge sendromudur. Konjenital kalp hastalığı gibi majör yapısal anomalileri olan gebelerde DiGeorge sendromunun prevalansı 100'de 1'e yükselir.",
      },
      {
        question: "Monogenik Bozukluklar Nelerdir?",
        answer: "Monogenik bozukluklar, tek bir gendeki mutasyonlardan kaynaklanır. Bu bozukluklar, mutasyonun sadece bir kromozomda var olduğu zaman ortaya çıkan otozomal dominant olabilir veya mutasyonun her iki kromozomda bulunması gereken otozomal resesif olabilir. VERAgene, 50 otozomal resesif monogenik bozukluğu tespit etmek için 500 mutasyonu analiz eder.",
      },
      {
        question: "Neden Hamile Bir Kadın VERAgene Testi’ni Yaptırmalı?",
        answer: "Anöploidilerin aksine, mikrodelesyonlar ve tek gen hastalıklarının riski yaşa bağlı değildir, biyokimyasal veya ultrason bulguları erken teşhis için yardımcı olabilir. Fetusun VERAgene tarafından taranan genetik hastalıklardan birinden etkilenmesinin kümülatif riski 196'de 1'dir ve bazı durumların daha yaygın olduğu etnik topluluklarda bu daha da yüksek olabilir. VERAgene’den elde edilen doğru tarama bilgileri ışığında, ebeveynlerin olası tedaviler ve klinik yaklaşım hakkında karar vermesini sağlar.",
      },
    ],
    faqTitle: "Sıkça Sorulan Sorular",
  },

  {
    slug: "kan-tahlili",
    title: "Kan Tahlili",
    excerpt:
      "Kan tahlili, genel sağlık durumunun değerlendirilmesi, çeşitli hastalıkların araştırılması ve takip süreçlerinin desteklenmesi amacıyla yapılan laboratuvar incelemelerinin genel adıdır.",
    image: "/blog/kan.webp",
    date: "21 Ağustos 2026",
    author: "Etiklab",
    category: "Genel Sağlık",
    lead:
      "Kan tahlili, kişinin genel sağlık durumunun değerlendirilmesi, çeşitli hastalıkların araştırılması ve doktor tarafından gerekli görülen durumlarda takip süreçlerinin desteklenmesi amacıyla yapılan laboratuvar incelemelerinin genel adıdır.",
    sections: [
      {
        heading: "Kan tahlili hakkında",
        body:
          "Kan örneği üzerinden hemogram, biyokimya, hormon, vitamin-mineral, enfeksiyon, alerji ve çeşitli özel testler gerçekleştirilebilir. Yapılacak testler kişinin şikâyetleri, sağlık geçmişi ve doktorun değerlendirmesine göre belirlenir.\n\nKan tahlili sonuçları tek başına değerlendirilmemeli; sonuçlar laboratuvarın referans aralıkları ve kişinin klinik durumu ile birlikte doktor tarafından yorumlanmalıdır.",
      },
      {
        heading: "Hangi kan tahlilleri yapılabilir?",
        bullets: [
          "Hemogram / Tam Kan Sayımı",
          "Biyokimya Testleri",
          "Hormon Testleri",
          "Vitamin ve Mineral Testleri",
          "Alerji Testleri",
          "Enfeksiyon Testleri",
          "Tümör Belirteçleri",
          "Check-up Testleri",
          "Diğer özel laboratuvar testleri",
        ],
      },
    ],
    faqs: [
      {
        question: "Kan tahlili nedir?",
        answer:
          "Kan örneği üzerinden çeşitli sağlık göstergelerinin laboratuvar ortamında değerlendirilmesidir.",
      },
      {
        question: "Kan tahlili için aç olmak gerekir mi?",
        answer:
          "Her kan testi açlık gerektirmez. Yapılacak testlere göre hazırlık koşulları değişebilir.",
      },
      {
        question: "Kan tahlili sonuçları ne zaman çıkar?",
        answer:
          "Testin türüne ve laboratuvarın çalışma sürecine göre değişiklik gösterir.",
      },
      {
        question: "Kan tahlili hangi hastalıkları gösterir?",
        answer:
          "Kan testleri birçok sağlık durumunun değerlendirilmesine yardımcı olabilir ancak tek başına kesin tanı koydurmaz.",
      },
      {
        question: "Kan tahlili yaptırmadan önce ne yapılmalı?",
        answer:
          "İstenen testlere göre açlık veya başka hazırlık koşulları gerekebilir. Test öncesinde laboratuvarın verdiği bilgilere uyulmalıdır.",
      },
    ],
  },

  {
    slug: "bagirsak-hastaliklari",
    title: "Bağırsak Hastalıkları",
    excerpt:
      "Bağırsak hastalıkları, karın ağrısı, şişkinlik, ishal, kabızlık ve dışkılama alışkanlıklarındaki değişikliklerle görülebilen sağlık sorunlarını kapsar.",
    image: "/blog/bagirsaksagligi.webp",
    date: "21 Ağustos 2026",
    author: "Etiklab",
    category: "Sindirim Sistemi",
    lead:
      "Bağırsak hastalıkları; sindirim sisteminin farklı bölümlerini etkileyebilen, çeşitli nedenlere bağlı olarak ortaya çıkabilen sağlık sorunlarını kapsar.",
    sections: [
      {
        heading: "Görülebilen belirtiler",
        body:
          "Karın ağrısı, şişkinlik, ishal, kabızlık ve dışkılama alışkanlıklarında değişiklik gibi belirtiler görülebilir.",
        bullets: [
          "Karın ağrısı",
          "Şişkinlik",
          "İshal",
          "Kabızlık",
          "Dışkılama alışkanlıklarında değişiklik",
        ],
      },
      {
        heading: "Bağırsak sağlığının değerlendirilmesi",
        body:
          "Bağırsak sağlığının değerlendirilmesinde hastanın şikâyetlerine göre farklı laboratuvar testlerinden yararlanılabilir.\n\nKalprotektin, Üre Nefes Testi ve SIBO testi gibi incelemeler, doktorun değerlendirmesine yardımcı olabilir.",
      },
      {
        heading: "Ne zaman değerlendirme yapılmalı?",
        body:
          "Belirtilerin uzun sürmesi veya tekrarlaması durumunda uygun testlerin belirlenmesi için doktor değerlendirmesi önerilir.",
      },
    ],
    relatedPosts: [
      {
        title: "SIBO Testi",
        description:
          "SIBO testi, ince bağırsakta aşırı bakteri üremesinin değerlendirilmesine yardımcı olan nefes testidir.",
        href: "/blog/sibo-testi",
      },
      {
        title: "Üre Nefes Testi",
        description:
          "H. pylori değerlendirmesinde kullanılan C-13 üre nefes testinin ne olduğu, nasıl uygulandığı ve test süreci hakkında bilgi alın.",
        href: "/blog/ure-nefes-testi",
      },
      {
        title: "Kalprotektin Testi",
        description:
          "Kalprotektin testi, bağırsaklarda inflamasyonun değerlendirilmesine yardımcı olan bir dışkı testidir.",
        href: "/blog/kalprotektin-testi",
      },
    ],
  },

  {
    slug: "sperm-testi",
    title: "Sperm Testi (Spermiogram)",
    subtitle:
      "Sperm sayısı, hareketliliği ve yapısal özelliklerinin değerlendirilmesi",
    excerpt:
      "Sperm sayısı, hareketliliği ve yapısal özelliklerinin değerlendirilmesi",
    image: "/blog/spermtesti.webp",
    date: "21 Ağustos 2026",
    author: "Etiklab",
    category: "Genel Sağlık",
    lead:
      "Sperm sayısı, hareketliliği ve yapısal özelliklerinin değerlendirilmesi",
    sections: [
      {
        heading: "Sperm testi nedir?",
        body:
          "Sperm testi veya spermiogram, erkek üreme sağlığının değerlendirilmesine yardımcı olan temel laboratuvar testlerinden biridir.\n\nSemen örneği üzerinden sperm yoğunluğu, hareketliliği ve morfolojisi gibi çeşitli parametreler değerlendirilir.",
      },
      {
        heading: "Sperm testi neden yapılır?",
        body:
          "Spermiogram, erkeklerde üreme kapasitesinin değerlendirilmesi, gebelik oluşmaması durumunda araştırma yapılması veya uygulanan tedavilerin takibi amacıyla doktor tarafından istenebilir.",
        bullets: [
          "Gebelik oluşmamasının nedenlerinin araştırılması",
          "Sperm sayısı ve hareketliliğinin değerlendirilmesi",
          "Erkek üreme sağlığının değerlendirilmesi",
          "Varikosel gibi bazı durumların değerlendirilmesinde destekleyici inceleme",
          "Üreme tedavileri öncesinde değerlendirme",
          "Tedavi sonrası takip",
        ],
      },
      {
        heading: "Sperm testi nasıl yapılır?",
        body:
          "Spermiogram için semen örneği, laboratuvar tarafından belirtilen koşullara uygun şekilde alınır.\n\nNumune, analiz için laboratuvarda değerlendirilir ve sperm hücrelerinin sayı, hareketlilik ve morfoloji gibi özellikleri incelenir.",
      },
      {
        heading: "Sperm testi öncesinde nelere dikkat edilmeli?",
        body:
          "Sperm testi öncesinde 3 gün cinsel perhiz uygulanması gerekir.\n\nTest öncesinde laboratuvarımızın belirttiği hazırlık koşullarına uyulması önemlidir.",
        bullets: [
          "Numunenin tamamının kaba alınması",
          "Numunenin dış etkenlerle temas etmemesi",
          "Örnek kabının uygun olması",
          "Örneğin belirtilen sürede laboratuvara ulaştırılması",
        ],
      },
      {
        heading: "Sperm testi aç karnına mı yapılır?",
        body:
          "Hayır.\n\nSpermiogram için açlık gerekmez.",
        note:
          "Test öncesinde esas olarak laboratuvarın belirttiği cinsel perhiz ve numune verme koşullarına uyulması önemlidir.",
      },
    ],
  },

  {
    slug: "kalprotektin-testi",
    title: "Kalprotektin Testi",
    subtitle:
      "Bağırsaklarda inflamasyonun değerlendirilmesine yardımcı olan dışkı testi",
    excerpt:
      "Kalprotektin testi, bağırsaklarda inflamasyonun değerlendirilmesine yardımcı olan bir dışkı testidir.",
    image: "/blog/kalprotektin.webp",
    date: "21 Ağustos 2026",
    author: "Etiklab",
    category: "Sindirim Sistemi",
    lead:
      "Bağırsaklarda inflamasyonun değerlendirilmesine yardımcı olan dışkı testi",
    sections: [
      {
        heading: "Kalprotektin testi nedir?",
        body:
          "Kalprotektin testi, dışkı örneğinde kalprotektin düzeyinin ölçülmesi amacıyla yapılan bir laboratuvar testidir.\n\nKalprotektin, bağırsaklarda meydana gelen inflamasyon hakkında bilgi sağlayabilen bir belirteçtir.\n\nTest, özellikle bağırsaklarda inflamasyonun değerlendirilmesine ve doktorun gerekli gördüğü durumlarda ileri incelemelerin planlanmasına yardımcı olabilir.",
      },
      {
        heading: "Kalprotektin testi neden yapılır?",
        body:
          "Fekal kalprotektin testi, bağırsaklarda inflamasyon bulunup bulunmadığının değerlendirilmesine yardımcı olmak amacıyla istenebilir.",
        bullets: [
          "Süregelen veya tekrarlayan ishal",
          "Karın ağrısı",
          "Dışkılama alışkanlıklarında değişiklik",
          "Dışkıda kan veya mukus gibi şikâyetlerin değerlendirilmesi",
          "İnflamatuvar bağırsak hastalıklarının değerlendirilmesine yardımcı olmak",
          "Tanı konmuş inflamatuvar bağırsak hastalıklarında takip",
        ],
      },
      {
        heading: "Kalprotektin testi nasıl yapılır?",
        body:
          "Kalprotektin testi için dışkı örneği alınır.\n\nNumunenin uygun bir örnek kabına alınması ve laboratuvar tarafından belirtilen koşullarda teslim edilmesi gerekir.\n\nTestin doğru şekilde gerçekleştirilebilmesi için numune toplama ve saklama konusunda laboratuvarın verdiği talimatlara uyulmalıdır.",
      },
      {
        heading: "Kalprotektin testi aç karnına mı yapılır?",
        body:
          "Hayır.\n\nKalprotektin testi dışkı örneği üzerinden gerçekleştirildiği için klasik anlamda açlık gerektiren bir kan testi değildir.\n\nAncak bazı ilaçların veya diğer faktörlerin test sonucunu etkileyebilmesi mümkün olduğundan, test öncesinde laboratuvarınızın ve doktorunuzun önerilerine uyulmalıdır.",
      },
      {
        heading: "Kalprotektin yüksekliği ne anlama gelir?",
        body:
          "Kalprotektin düzeyinin yüksek bulunması, bağırsaklarda inflamasyon olabileceğini düşündürebilir.\n\nAncak tek başına kesin bir hastalık tanısı anlamına gelmez.",
        note:
          "Sonuç; kişinin şikâyetleri, diğer laboratuvar bulguları ve gerektiğinde görüntüleme veya endoskopik incelemeler ile birlikte doktor tarafından değerlendirilmelidir.",
      },
    ],
  },

  {
    slug: "d-vitamini-testi",
    title: "D Vitamini Testi",
    excerpt:
      "D vitamini testi, kandaki D vitamini düzeyinin değerlendirilmesi amacıyla yapılan bir laboratuvar testidir.",
    image: "/blog/dvitamini.webp",
    date: "21 Ağustos 2026",
    author: "Etiklab",
    category: "Genel Sağlık",
    lead:
      "D vitamini testi, kandaki D vitamini düzeyinin değerlendirilmesi amacıyla yapılan bir laboratuvar testidir.",
    sections: [
      {
        heading: "D vitamini testi nedir?",
        body:
          "D vitamini testi, kandaki D vitamini düzeyinin değerlendirilmesi amacıyla yapılan bir laboratuvar testidir. D vitamini, kemik ve kas sağlığı başta olmak üzere vücudun birçok önemli işlevinde rol oynayan bir vitamindir. D vitamini düzeyinin değerlendirilmesi, doktorunuzun gerekli gördüğü durumlarda kan testi ile yapılabilir.",
      },
      {
        heading: "D vitamini testi neden yapılır?",
        body:
          "D vitamini düzeyinin değerlendirilmesi; kişinin klinik durumu, beslenme alışkanlıkları, güneş maruziyeti ve doktorun değerlendirmesine göre gerekli görülebilir.",
        bullets: [
          "D vitamini eksikliğinden şüphelenilmesi",
          "Kemik sağlığının değerlendirilmesi",
          "Kas ve kemik şikâyetlerinin araştırılması",
          "D vitamini tedavisinin takibi",
          "Risk faktörlerinin bulunması",
        ],
      },
      {
        heading: "D vitamini testi nasıl yapılır?",
        body:
          "D vitamini testi, alınan kan örneği üzerinden gerçekleştirilir. Alınan kan örneği laboratuvarda analiz edilerek kandaki 25(OH)D düzeyi belirlenir.",
      },
      {
        heading: "D vitamini testi aç karnına mı yapılır?",
        body:
          "D vitamini testi tek başına yapılacaksa genellikle açlık gerektirmez. Ancak aynı anda farklı kan testleri yapılacaksa, diğer testlerin gerektirdiği hazırlık koşulları dikkate alınmalıdır. Test öncesinde laboratuvarınızdan bilgi almanız önerilir.",
      },
      {
        heading: "D vitamini eksikliği ne anlama gelir?",
        body:
          "D vitamini düzeyinin düşük bulunması, kişinin klinik durumu ve diğer laboratuvar bulguları ile birlikte değerlendirilmelidir. Düşük bir sonuç elde edilmesi durumunda D vitamini desteği veya tedavisi gerekip gerekmediğine doktor karar vermelidir.",
      },
    ],
  },

  {
    slug: "topuk-testi",
    title: "Topuk Testi (Yenidoğan Tarama Testi)",
    subtitle:
      "Yenidoğanlarda bazı önemli hastalıkların erken dönemde taranmasına yardımcı olan test",
    excerpt:
      "Yenidoğanlarda bazı önemli hastalıkların erken dönemde taranmasına yardımcı olan test",
    image: "/blog/topuktesti.webp",
    date: "21 Ağustos 2026",
    author: "Etiklab",
    category: "Genel Sağlık",
    lead:
      "Topuk testi, yenidoğan döneminde uygulanan önemli tarama testlerinden biridir. Bebeğin topuğundan alınan birkaç damla kan örneği ile belirli hastalıklar açısından tarama yapılmasına yardımcı olur. Erken dönemde gerçekleştirilen bu taramalar, bazı hastalıkların henüz belirti ortaya çıkmadan fark edilmesine ve gerekli durumlarda ileri değerlendirme yapılmasına olanak sağlayabilir.",
    sections: [
      {
        heading: "Topuk testi neden yapılır?",
        body:
          "Yenidoğan dönemindeki bazı kalıtsal, metabolik veya diğer sağlık sorunları başlangıçta herhangi bir belirti göstermeyebilir. Topuk testi, bu hastalıkların erken dönemde taranmasına yardımcı olarak gerekli durumlarda ileri tetkik ve değerlendirme yapılmasını sağlayabilir.",
      },
      {
        heading: "Topuk testi ne zaman yapılır?",
        body:
          "Yenidoğan tarama programlarında testin uygun zamanda yapılması önemlidir.",
      },
      {
        heading: "Topuk testi aç karnına mı yapılır?",
        body:
          "Hayır, klasik anlamda açlık gerektiren bir kan testi değildir.",
      },
    ],
  },

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
    title: "İnsülin Direnci Nedir?",
    excerpt: "En yalın hâliyle insülin direnci, vücuttaki hücrelerin insülin hormonuna verdiği yanıtın azalması olarak tanımlanabilir.",
    image: getImagePath("blog/insulin-direnci.png"),
    date: "23 Eylül 2026",
    author: "Etiklab",
    category: "Diyabet",
    lead: "En yalın hâliyle insülin direnci, vücuttaki hücrelerin insülin hormonuna verdiği yanıtın azalması olarak tanımlanabilir. Normal koşullarda insülin, kandaki glukozun hücrelerin içine girmesini sağlayarak enerji üretimine katkıda bulunur. Ancak insülin direnci geliştiğinde, insülin kanda yeterli hatta bazen yüksek düzeylerde bulunmasına rağmen, hücreler bu sinyali eskisi kadar etkili algılamaz. Bunun sonucunda glukozun hücre içine geçişi zorlaşabilir ve kan şekeri dengesi etkilenebilir.\n\nİnsülin direnci tek başına bir hastalık olarak değil, daha çok metabolik dengenin zorlanmaya başladığını işaret eden öncü bir tablo olarak değerlendirilir.",
    sections: [
      {
        heading: "Hücre – İnsülin – Glukoz İlişkisi Nasıl İşler?",
        body: "Bu süreci günlük hayattan bir benzetmeyle açıklamak mümkündür. İnsülin, glukozu hücreye taşıyan bir anahtar gibidir; hücre yüzeyindeki reseptörler ise bu anahtarın uyduğu kilitler olarak düşünülebilir. Yemek sonrası kan şekeri yükseldiğinde pankreas insülin salgılar, insülin reseptöre bağlanır ve hücrenin kapıları açılır. Böylece glukoz hücre içine girer ve enerji olarak kullanılır.\n\nİnsülin direncinde ise bu kilit–anahtar uyumu zayıflamıştır. İnsülin reseptöre ulaşsa bile, hücre kapıları aynı etkinlikte açılmayabilir.\n\nBu noktada önemli bir ayrıntı daha vardır: Glukozun hücreye kabul edilip edilmeyeceğine son kararı hücre verir. Eğer hücre içi enerji depoları doluysa, hücresel korunma mekanizması devreye girer ve hücre, kendini aşırı yükten korumak adına glukoz alımını sınırlar. Bu mekanizma başlangıçta hücreyi koruyan bir refleks olsa da, uzun vadede metabolik dengenin bozulmasına zemin hazırlayabilir.",
      },
      {
        heading: "İnsülin Direnci Kimlerde ve Hangi Dönemlerde Görülebilir?",
        body: "İnsülin direnci her zaman genetik bir miras değildir; çoğu zaman yaşam tarzımızın bir sonucudur. Genetik yatkınlığımız olsa bile, bu süreci asıl tetikleyen faktörler günlük alışkanlıklarımızdır.",
        blocks: [
          { type: "subheading", text: "Hastalık Habercisi Olan (Patolojik) İnsülin Direnci: Metabolizmanın alarm verdiği ve “gelecekteki hastalıkların habercisi” olan bu durum, genellikle şu faktörlerle gelişir:" },
          { type: "bullets", items: [
            "Aşırı Kilo: Özellikle bel ve karın çevresindeki yağlanma.",
            "Hareketsizlik: Düzenli egzersiz yapmamak.",
            "Yanlış Beslenme: Şekerli, hamur işi ağırlıklı ve yüksek kalorili beslenme düzeni.",
          ] },
          { type: "paragraph", text: "İnsülin direnci tablosu gelişmesi geçici bir durumdan ziyade, vücudun kalıcı bir sorun yaşamaya başladığını gösterir. İnsülin direncine önlem alınmazsa prediyabet ve sonrasında tip 2 diyabet, kalp hastalıkları ve kolesterol sorunlarına, metabolik sendroma kapı aralar. Bu nedenle sağlığınız için erken bir uyarı işareti olarak görülmelidir." },
          { type: "subheading", text: "Geçici ve Doğal (Fizyolojik) İnsülin Direnci: Her insülin yüksekliği hastalık değildir. Vücudumuz bazı özel dönemlerde, değişen hormonlara uyum sağlamak için insüline karşı geçici bir direnç geliştirebilir:" },
          { type: "bullets", items: [
            "Ergenlik Dönemi: Büyüme ve cinsiyet hormonlarının etkisiyle.",
            "Gebelik Dönemi: Bebeğin gelişimi ve plasental hormonlar nedeniyle.",
          ] },
          { type: "paragraph", text: "Bu durumlar vücudun “doğal adaptasyon” sürecidir. Genellikle altta yatan başka bir sağlık sorunu yoksa, bu dönemler bittiğinde insülin direnci de kendiliğinden düzelir.\n\nÖnemli olan; yaşadığınız insülin direncinin yaşam tarzı kaynaklı bir “hastalık başlangıcı” mı, yoksa vücudunuzun geçici bir “uyum süreci” mi olduğunu ayırt etmektir. Bu sebeple beraberinde ak laboratuvar testleri ve klinik durumunuz değerlendirilir." },
        ],
      },
      {
        heading: "İnsülin Direnci Erken Fark Edilirse Geri Dönüş Mümkün mü?",
        body: "Literatürde, özellikle erken evrede saptanan insülin direncinde insülin duyarlılığının yeniden artabildiği gösterilmiştir. Bu nedenle insülin direnci, erken dönemde fark edildiğinde izlenebilen ve yönetilebilen bir metabolik durum olarak değerlendirilir. Burada amaç, süreci erken aşamada tanıyabilmek ve metabolik dengeyi destekleyebilmektir.",
      },
      {
        heading: "İnsülin Direnci Değerlendirmesinde Kullanılan Kan Testleri Hangileridir?",
        body: "İnsülin direncinin değerlendirilmesinde tek bir test genellikle yeterli değildir. Bu nedenle bazı kan testleri birlikte ele alınarak daha bütüncül bir tablo oluşturulmaya çalışılır:",
        blocks: [
          { type: "subheading", text: "Açlık Kan Şekeri (AKŞ)" },
          { type: "paragraph", text: "Açlık kan şekeri, genellikle 8–10 saatlik açlık sonrası kandaki glukoz düzeyini gösterir. Anlık durumu yansıtır ve insülin direncinin erken evrelerinde normal sınırlarda bulunabilir. Referans aralıkları laboratuvara göre değişiklik gösterebilir.\n\nNumune: Damardan alınan kan (serum / plazma)\n\nAçlık: 8–10 saat gerekir" },
          { type: "bullets", items: [
            "Normal referans aralığı: 70 – 99 mg/dL",
            "100 – 125 mg/dL: Prediyabet (gizli şeker) açısından düşündürücü olabilir",
            "≥ 126 mg/dL: Diyabet açısından değerlendirme gerektirir",
          ] },
          { type: "paragraph", text: "AKŞ, kan şekerinin o anki durumunu gösterir. İnsülin direncinin erken dönemlerinde normal çıkabilir." },
          { type: "subheading", text: "Açlık İnsülini" },
          { type: "paragraph", text: "Açlıkta pankreasın ne kadar insülin salgıladığını gösterir. Kan şekeri normal olmasına rağmen insülin düzeyinin yüksek bulunması, hücrelerin insüline yanıtının azalmış olabileceğini,  insülin direnci gelişmiş olabileceğini düşündürebilir. Değerlerin yorumu mutlaka klinik bağlam içinde yapılmalıdır.\n\nNumune: Damardan alınan kan (serum)\n\nAçlık: 8–10 saat gerekir" },
          { type: "bullets", items: ["Sık kullanılan referans aralığı: 2 – 25 µIU/mL"] },
          { type: "paragraph", text: "(Laboratuvarda kullanılan kit ve metoda göre değişkenlik gösterebilir, test raporunuzda referans aralığı mevcuttur .)\n\nÖnemli not: Fonksiyonel tıp bakış açısında 10µIU/mL  nin üzerindeki değerler insülin direncinin başlangıcı gibi kabul edilir.\n\nKan şekeri normal olmasına rağmen insülin yüksekse, bu durum insülin direncini düşündürebilir." },
          { type: "subheading", text: "HOMA-IR" },
          { type: "paragraph", text: "HOMA-IR, açlık kan şekeri ve açlık insülini kullanılarak hesaplanan bir indekstir.  mg/dL cinsinden açlık kan şekeri ile mU/L cinsinden açlık insülin değerinin çarpılıp 405’e bölünmesiyle hesaplanır. İnsülin direncini sayısal olarak ifade etmeye yardımcı olur. Kabul edilen eşik değerler laboratuvara ve kullanılan yönteme göre değişebilir.\n\nNumune: AKŞ + Açlık İnsülini (hesaplama ile bulunur)\n\nAçlık: 8–10 saat gerekir\n\nGenel kabul gören aralıklar:" },
          { type: "bullets", items: [
            "< 2,0: İnsülin duyarlılığı normal olabilir",
            " 2,0 – 2,5: Sınırda",
            "> 2,5: İnsülin direnci açısından düşündürücü olabilir",
          ] },
          { type: "paragraph", text: "HOMA-IR için kesin bir evrensel sınır yoktur. Yorum, kişinin yaşı, kilosu ve klinik durumu ile birlikte yapılır." },
          { type: "subheading", text: "HbA1c (Glikozillenmiş Hemoglobin)" },
          { type: "paragraph", text: "HbA1c, son 2–3 aylık ortalama kan şekeri düzeyleri hakkında bilgi verir. Açlık gerektirmez ve daha çok uzun dönem glukoz dengesini yansıtır. Erken insülin direncinde normal bulunabilir.\n\nNumune: Venöz tam kan\n\nAçlık: Gerekmez\n\nGenel referans aralıkları:" },
          { type: "bullets", items: [
            "< %5,7: Normal",
            "%5,7 – %6,4: Prediyabet açısından değerlendirilebilir",
            "≥ %6,5: Diyabet açısından değerlendirme gerektirir",
          ] },
          { type: "paragraph", text: "HbA1c, insülin direncinin erken dönemlerinde normal olabilir.\n\nÖnemli Not: İnsülin direnci tek bir testle değil, testlerin birlikte değerlendirilmesiyle anlaşılır." },
        ],
      },
      {
        heading: "Testler Neden Birlikte Değerlendirilir?",
        body: "İnsilün direnci tablosunun erken evrelerinde kan şekeri normal sınırlarda izlenirken, insülin düzeyleri ve HOMA-IR artmış olabilir. Bu nedenle testlerin birlikte ele alınması, metabolik dengenin daha kapsamlı değerlendirilmesine katkı sağlar.",
        blocks: [
          {
            type: "table",
            headers: ["Açlık Kan Şekeri", "Açlık İnsülini", "HOMA-IR", "Genel Yorum*"],
            rows: [
              ["Normal", "Normal", "Normal", "Metabolik denge korunuyor olabilir"],
              ["Normal", "Yüksek", "Yüksek", "Erken insülin direnci düşündürebilir"],
              ["Sınırda yüksek", "Yüksek", "Yüksek", "Metabolik denge zorlanıyor olabilir"],
            ],
            caption: "*Bu tablo tanı koymak amacıyla değil, testlerin birlikte nasıl anlam kazandığını göstermek için hazırlanmıştır.",
          },
        ],
      },
      {
        heading: "Özet",
        body: "İnsülin direnci birdenbire ortaya çıkmaz; vücudun şekeri kullanma becerisinin yavaş yavaş ve genellikle fark ettirmeden bozulduğu bir süreçtir.\n\nİnsülin direncinin erken döneminde pankreas, hücrelerin azalan duyarlılığını telafi etmek için daha fazla insülin salgılar. Bu “ekstra çaba” sayesinde kan şekeri uzun süre normal sınırlarda tutulabilir ve kişi kendini tamamen sağlıklı hissedebilir. Ancak zamanla bu telafi mekanizması zorlanmaya başlar. Önce kanda insülin düzeyleri yükselir, ardından kan şekeri kontrolü bozulmaya başlar. Önlem alınmadığı takdirde süreç; glukoz İntoleransı ve Prediyabet (Gizli Şeker), tip 2 diyabet ve sıklıkla bel çevresi yağlanması ile tansiyon yüksekliği ve kan yağlarında bozulmanın eşlik ettiği metabolik sendrom tablosuna doğru ilerleyebilir.\n\nİnsülin direnci değerlendirmesinde sadece açlık kan şekerine bakmak yeterli olmayabilir. Açlık insülini ve HOMA-IR değeri, henüz şeker metabolizması belirgin şekilde bozulmadan önceki bu erken uyarı sinyallerini yakalamaya yardımcı olur.",
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
