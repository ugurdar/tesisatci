import { type LucideIcon, Wrench, Pipette, Construction, Droplets, Bath, Cog, ThermometerSnowflake, Heater, ShieldCheck } from 'lucide-react';

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
    longDescription: 'Mutfak, banyo ve tuvalet giderlerinizde oluşan inatçı tıkanıklıkları, son teknoloji kameralı ve robotik cihazlar kullanarak çevreye zarar vermeden, kırma dökme yapmadan açıyoruz. Sorunun kaynağını noktasal olarak tespit edip kalıcı ve hijyenik çözümler sunuyoruz.',
    icon: Wrench,
    image: 'https://picsum.photos/800/400?random=clog',
    aiHint: 'drain cleaning service',
  },
  {
    slug: 'su-kacak-tespiti',
    title: 'Su Kaçak Tespiti ve Onarımı',
    description: 'Termal kamera ve akustik dinleme cihazları ile noktasal, kırmadan kaçak tespiti.',
    longDescription: 'Evinizde veya iş yerinizde oluşan, faturalarınızı yükselten ve duvarlarınıza zarar veren gizli su kaçaklarını, termal kameralar ve akustik dinleme cihazları gibi üstün teknolojilerle noktasal olarak tespit ediyoruz. Gereksiz kırma dökme işlemlerine son vererek, sadece sorunlu bölgeye müdahale ediyor ve hızlıca onarıyoruz.',
    icon: Pipette,
    image: 'https://picsum.photos/800/400?random=leak',
    aiHint: 'thermal camera leak',
  },
  {
    slug: 'boru-tamiri-tesisat-yenileme',
    title: 'Boru Tamiri ve Tesisat Yenileme',
    description: 'Patlak boru tamiri, eskiyen tesisatın modern ve kaliteli malzemelerle yenilenmesi.',
    longDescription: 'Zamanla yıpranmış, paslanmış, kireçlenmiş veya patlamış su borularınızı garantili bir şekilde onarıyoruz. Gerekirse, tüm temiz veya pis su tesisat sisteminizi günümüz standartlarına uygun, uzun ömürlü ve sağlıklı malzemelerle komple yeniliyoruz.',
    icon: Construction,
    image: 'https://picsum.photos/800/400?random=pipe',
    aiHint: 'pipe repair plumbing',
  },
  {
    slug: 'musluk-batarya-degisimi',
    title: 'Musluk ve Batarya Değişimi',
    description: 'Banyo ve mutfağınız için her marka ve model musluk, batarya montajı ve tamiri.',
    longDescription: 'Su damlatan, arızalı veya eskimiş banyo ve mutfak bataryalarınızı, isteğiniz doğrultusunda estetik, fonksiyonel ve su tasarrufu sağlayan yeni modellerle değiştiriyoruz. Her marka ve modelde montaj ve tamir hizmeti sunuyoruz.',
    icon: Droplets,
    image: 'https://picsum.photos/800/400?random=faucet',
    aiHint: 'faucet installation kitchen',
  },
  {
    slug: 'sifon-klozet-tamiri',
    title: 'Sifon ve Klozet Tamiri',
    description: 'Klozet iç takım değişimi, su sızıntıları, sifon tamiri ve montaj hizmetleri.',
    longDescription: 'Klozetinizdeki su sızıntıları, dolum problemleri veya çalışmayan sifon gibi arızalar için profesyonel tamir ve parça değişimi hizmeti sunuyoruz. Asma ve normal klozetlerin iç takımlarını yenileyerek hem su israfını önlüyor hem de sorunsuz kullanım sağlıyoruz.',
    icon: Bath,
    image: 'https://picsum.photos/800/400?random=toilet',
    aiHint: 'toilet repair bathroom',
  },
    {
    slug: 'banyo-mutfak-yenileme',
    title: 'Banyo ve Mutfak Yenileme',
    description: 'Komple banyo ve mutfak tesisatı, vitrifiye montajı ve yenileme işleri.',
    longDescription: 'Banyonuzu veya mutfağınızı modern bir görünüme kavuşturmak için komple tesisat yenileme, fayans, vitrifiye (klozet, lavabo, duşakabin) montajı ve tüm tadilat işlerinizi anahtar teslim olarak gerçekleştiriyoruz. Hayalinizdeki mekanı yaratmak için buradayız.',
    icon: ShieldCheck,
    image: 'https://picsum.photos/800/400?random=bathroom',
    aiHint: 'modern bathroom renovation',
  },
  {
    slug: 'mekanik-tesisat',
    title: 'Mekanik Tesisat',
    description: 'Bina ve endüstriyel tesisler için ısıtma, soğutma ve havalandırma çözümleri.',
    longDescription: 'Isıtma, soğutma, havalandırma, yangın söndürme ve sıhhi tesisat gibi binanızın tüm mekanik sistemlerinin projelendirilmesi, kurulumu ve bakımını yapıyoruz. Mühendislik ilkelerine uygun, verimli ve güvenilir sistemler kuruyoruz.',
    icon: Cog,
    image: 'https://picsum.photos/800/400?random=mechanical',
    aiHint: 'hvac systems industrial',
  },
  {
    slug: 'isitma-sistemleri',
    title: 'Isıtma Sistemleri',
    description: 'Kalorifer tesisatı, yerden ısıtma sistemleri kurulum, onarım ve projelendirme.',
    longDescription: 'Konforlu ve verimli bir ısınma için kalorifer tesisatı, yerden ısıtma gibi modern ısıtma sistemlerinin kurulumunu, bakımını ve onarımını gerçekleştiriyoruz. Evinizin veya iş yerinizin yapısına en uygun ısıtma çözümünü projelendirip uyguluyoruz.',
    icon: ThermometerSnowflake,
    image: 'https://picsum.photos/800/400?random=heating',
    aiHint: 'underfloor heating system',
  },
  {
    slug: 'kombi-bakim-petek-temizligi',
    title: 'Kombi Bakım ve Petek Temizliği',
    description: 'Kombinizin verimliliğini artırmak ve yakıt tasarrufu için profesyonel bakım ve temizlik.',
    longDescription: 'Kombinizin periyodik bakımını yaparak hem ömrünü uzatıyor hem de daha verimli çalışmasını sağlıyoruz. Özel kimyasallar ve makinelerle peteklerinizi temizleyerek ısı transferini maksimuma çıkarıyor, daha az doğalgaz faturası ile daha iyi ısınmanızı garanti ediyoruz.',
    icon: Heater,
    image: 'https://picsum.photos/800/400?random=boiler',
    aiHint: 'boiler maintenance service',
  },
];
