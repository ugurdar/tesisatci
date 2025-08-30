import { type LucideIcon, Wrench, Pipette, Construction, Droplets, Bath, Cog, ThermometerSnowflake, Heater, ShieldCheck, CircleCheckBig } from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  image: string;
  aiHint: string;
}

export const services: Service[] = [
  {
    slug: 'tikaniklik-acma',
    title: 'Tıkanıklık Açma',
    description: 'Modern robot cihazlarla mutfak, banyo ve tuvalet giderlerinizi kırmadan açıyoruz.',
    longDescription: 'Mutfak lavabosu, banyo gideri, tuvalet ve ana kanalizasyon hatlarınızda meydana gelen en inatçı tıkanıklıkları bile, son teknoloji ürünü kameralı ve robotik sistemlerimizle çevreye ve mülkünüze zarar vermeden, kırma dökme işlemi yapmaksızın açıyoruz. Gider içerisini görüntüleyen özel kameralarımız sayesinde, tıkanıklığın (yağ, kıl, kök veya yabancı cisimler gibi) tam yerini ve nedenini noktasal olarak tespit ediyoruz. Bu modern yaklaşım, gereksiz tadilat masraflarını ortadan kaldırır ve soruna hızlı, kalıcı ve hijyenik bir çözüm getirir. Tesisat sisteminizin yeniden sorunsuz çalışmasını sağlayarak günlük yaşam konforunuzu geri kazandırıyoruz.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1609946860422-5e9cefc924ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8dG9pbGV0fGVufDB8fHx8MTc1NjU4NTMyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'drain cleaning service',
  },
  {
    slug: 'su-kacak-tespiti',
    title: 'Su Kaçak Tespiti ve Onarımı',
    description: 'Termal kamera ve akustik dinleme cihazları ile noktasal, kırmadan kaçak tespiti.',
    longDescription: 'Evinizde veya iş yerinizde oluşan, faturalarınızı yükselten ve duvarlarınıza zarar veren gizli su kaçaklarını, termal kameralar ve akustik dinleme cihazları gibi üstün teknolojilerle noktasal olarak tespit ediyoruz. Gereksiz kırma dökme işlemlerine son vererek, sadece sorunlu bölgeye müdahale ediyor ve hızlıca onarıyoruz.',
    icon: Pipette,
    image: 'https://picsum.photos/800/400',
    aiHint: 'thermal camera water',
  },
  {
    slug: 'boru-tamiri-tesisat-yenileme',
    title: 'Boru Tamiri ve Tesisat Yenileme',
    description: 'Patlak boru tamiri, eskiyen tesisatın modern ve kaliteli malzemelerle yenilenmesi.',
    longDescription: 'Zamanla eskiyen, paslanan, kireçlenen veya beklenmedik bir anda patlayan su boruları, hem yaşam kalitenizi düşürür hem de mülkünüze ciddi zararlar verebilir. Düşük su basıncı, paslı su, sürekli tıkanmalar ve su sızıntıları gibi sorunlar, tesisatınızın yenilenme zamanının geldiğinin habercisidir. Hüner Tesisat olarak, eski demir veya kalitesiz plastik borulardan kaynaklanan tüm bu sorunlara son veriyoruz. Sadece patlak boru tamiri yapmakla kalmıyor, aynı zamanda tüm temiz ve pis su tesisat sisteminizi, günümüzün en modern, dayanıklı ve insan sağlığına uygun, uzun ömürlü polipropilen (PPRC) veya kompozit boru sistemleriyle komple yeniliyoruz. Bu yatırım, sadece mevcut sorunları çözmekle kalmaz, aynı zamanda evinizin değerini artırır, gelecekteki büyük tadilat masraflarından sizi kurtarır ve aileniz için daha sağlıklı bir yaşam ortamı sağlar. İşi uzmanına bırakın, tesisatınızı güvenle yenileyelim.',
    icon: Construction,
    image: 'https://images.unsplash.com/photo-1722411487131-23bb3ac91df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMXx8cGlwZXN8ZW58MHx8fHwxNzU2NTg1NTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'pipe repair plumbing',
  },
  {
    slug: 'musluk-batarya-degisimi',
    title: 'Musluk ve Batarya Değişimi',
    description: 'Banyo ve mutfağınız için her marka ve model musluk, batarya montajı ve tamiri.',
    longDescription: 'Evinizin veya iş yerinizin estetiğini ve fonksiyonelliğini doğrudan etkileyen bataryalar, zamanla eskiyebilir, su sızdırabilir veya arızalanabilir. Hüner Tesisat olarak, su damlatan, arızalı veya eskimiş banyo ve mutfak bataryalarınızı, sektörün önde gelen, kaliteli ve garantili markalarının ürünleriyle yeniliyoruz. Sadece estetik değil, aynı zamanda su tasarrufu sağlayan fonksiyonel ve modern modellerle, hem bütçenize hem de çevreye katkıda bulunmanızı sağlıyoruz. Uzman ekibimiz, montaj işlemini titizlikle gerçekleştirerek gelecekte oluşabilecek sızıntı ve arızaların önüne geçer. Her marka ve modelde profesyonel montaj ve tamir hizmeti sunarak mutfağınıza ve banyonuza değer katıyoruz.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1595514535116-d0401260e7cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxzaW5rfGVufDB8fHx8MTc1NjU4NTQxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'faucet installation',
  },
  {
    slug: 'sifon-klozet-tamiri',
    title: 'Sifon ve Klozet Tamiri',
    description: 'Klozet iç takım değişimi, su sızıntıları, sifon tamiri ve montaj hizmetleri.',
    longDescription: 'Klozetinizdeki su sızıntıları, dolum problemleri veya çalışmayan sifon gibi arızalar için profesyonel tamir ve parça değişimi hizmeti sunuyoruz. Asma ve normal klozetlerin iç takımlarını yenileyerek hem su israfını önlüyor hem de sorunsuz kullanım sağlıyoruz.',
    icon: Bath,
    image: 'https://picsum.photos/800/400',
    aiHint: 'toilet repair',
  },
    {
    slug: 'banyo-mutfak-yenileme',
    title: 'Banyo ve Mutfak Yenileme',
    description: 'Komple banyo ve mutfak tesisatı, vitrifiye montajı ve yenileme işleri.',
    longDescription: 'Banyonuzu veya mutfağınızı modern bir görünüme kavuşturmak için komple tesisat yenileme, fayans, vitrifiye (klozet, lavabo, duşakabin) montajı ve tüm tadilat işlerinizi anahtar teslim olarak gerçekleştiriyoruz. Hayalinizdeki mekanı yaratmak için buradayız.',
    icon: ShieldCheck,
    image: 'https://picsum.photos/800/400',
    aiHint: 'modern bathroom',
  },
  {
    slug: 'mekanik-tesisat',
    title: 'Mekanik Tesisat',
    description: 'Bina ve endüstriyel tesisler için ısıtma, soğutma ve havalandırma çözümleri.',
    longDescription: 'Isıtma, soğutma, havalandırma, yangın söndürme ve sıhhi tesisat gibi binanızın tüm mekanik sistemlerinin projelendirilmesi, kurulumu ve bakımını yapıyoruz. Mühendislik ilkelerine uygun, verimli ve güvenilir sistemler kuruyoruz.',
    icon: Cog,
    image: 'https://picsum.photos/800/400',
    aiHint: 'hvac systems',
  },
  {
    slug: 'isitma-sistemleri',
    title: 'Isıtma Sistemleri',
    description: 'Kalorifer tesisatı, yerden ısıtma sistemleri kurulum, onarım ve projelendirme.',
    longDescription: 'Konforlu ve verimli bir ısınma için kalorifer tesisatı, yerden ısıtma gibi modern ısıtma sistemlerinin kurulumunu, bakımını ve onarımını gerçekleştiriyoruz. Evinizin veya iş yerinizin yapısına en uygun ısıtma çözümünü projelendirip uyguluyoruz.',
    icon: ThermometerSnowflake,
    image: 'https://picsum.photos/800/400',
    aiHint: 'heating system',
  },
  {
    slug: 'kombi-bakim-petek-temizligi',
    title: 'Kombi Bakım ve Petek Temizliği',
    description: 'Kombinizin verimliliğini artırmak ve yakıt tasarrufu için profesyonel bakım ve temizlik.',
    longDescription: 'Kombinizin periyodik bakımını yaparak hem ömrünü uzatıyor hem de daha verimli çalışmasını sağlıyoruz. Özel kimyasallar ve makinelerle peteklerinizi temizleyerek ısı transferini maksimuma çıkarıyor, daha az doğalgaz faturası ile daha iyi ısınmanızı garanti ediyoruz.',
    icon: Heater,
    image: 'https://picsum.photos/800/400',
    aiHint: 'boiler maintenance',
  },
];
