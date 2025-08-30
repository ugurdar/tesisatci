import { type LucideIcon, Wrench, Droplets, ShieldCheck, Heater, Wind, Pipette, Bath, ThermometerSnowflake, Cog, Construction } from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    slug: 'tikaniklik-acma',
    title: 'Tıkanıklık Açma',
    description: 'Robot cihazlarla kırmadan tıkalı gider ve pimaş açma hizmeti.',
    longDescription: 'Mutfak, banyo ve tuvalet giderlerinizde oluşan tıkanıklıkları, modern robot cihazlar kullanarak kırmadan ve dökmeden açıyoruz. Kameralı sistemlerle sorunun kaynağını tespit edip kalıcı çözümler sunuyoruz.',
    icon: Wrench,
  },
  {
    slug: 'su-kacak-tespiti',
    title: 'Su Kaçak Tespiti ve Onarımı',
    description: 'Termal kamera ve akustik dinleme cihazları ile noktasal kaçak tespiti.',
    longDescription: 'Evinizde veya iş yerinizde oluşan gizli su kaçaklarını, son teknoloji termal kameralar ve akustik dinleme cihazları ile noktasal olarak tespit ediyoruz. Gereksiz kırma dökme yapmadan, sadece sorunlu bölgeye müdahale ederek hızlı ve etkili onarım sağlıyoruz.',
    icon: Pipette,
  },
  {
    slug: 'boru-tamiri-tesisat-yenileme',
    title: 'Boru Tamiri ve Tesisat Yenileme',
    description: 'Patlak boru tamiri, eskiyen tesisatın modern malzemelerle yenilenmesi.',
    longDescription: 'Zamanla yıpranmış, paslanmış veya patlamış su borularınızı onarıyor, gerekirse tüm tesisat sisteminizi günümüz standartlarına uygun, uzun ömürlü ve sağlıklı malzemelerle yeniliyoruz. Kaliteli işçilikle garantili çözümler sunuyoruz.',
    icon: Construction,
  },
  {
    slug: 'musluk-batarya-degisimi',
    title: 'Musluk ve Batarya Değişimi',
    description: 'Her marka ve model musluk, batarya montajı ve tamiri.',
    longDescription: 'Banyo ve mutfağınızdaki arızalı veya eski musluk ve bataryalarınızı, isteğiniz doğrultusunda yeni ve modern ürünlerle değiştiriyoruz. Su tasarrufu sağlayan, estetik ve fonksiyonel batarya montaj hizmetleri sunuyoruz.',
    icon: Droplets,
  },
  {
    slug: 'sifon-klozet-tamiri',
    title: 'Sifon ve Klozet Tamiri',
    description: 'Klozet iç takım değişimi, sifon tamiri ve montaj hizmetleri.',
    longDescription: 'Klozetinizdeki su sızıntıları, dolum sorunları veya sifon arızaları için profesyonel tamir ve değişim hizmeti veriyoruz. Gömme ve normal klozetlerin iç takımlarını yenileyerek hem su israfını önlüyor hem de sorunsuz bir kullanım sağlıyoruz.',
    icon: Bath,
  },
  {
    slug: 'mekanik-tesisat',
    title: 'Mekanik Tesisat',
    description: 'Bina ve endüstriyel tesisler için mekanik tesisat çözümleri.',
    longDescription: 'Isıtma, soğutma, havalandırma, yangın tesisatı ve sıhhi tesisat gibi binanızın tüm mekanik sistemlerinin projelendirilmesi, kurulumu ve bakımını yapıyoruz. Mühendislik ilkelerine uygun, verimli ve güvenilir sistemler kuruyoruz.',
    icon: Cog,
  },
  {
    slug: 'isitma-sistemleri',
    title: 'Isıtma Sistemleri',
    description: 'Kalorifer tesisatı, yerden ısıtma sistemleri kurulum ve onarımı.',
    longDescription: 'Konforlu ve verimli bir ısınma için kalorifer tesisatı, yerden ısıtma gibi modern ısıtma sistemlerinin kurulumunu ve bakımını gerçekleştiriyoruz. Evinizin veya iş yerinizin yapısına en uygun ısıtma çözümünü projelendirip uyguluyoruz.',
    icon: ThermometerSnowflake,
  },
  {
    slug: 'kombi-bakim-petek-temizligi',
    title: 'Kombi Bakım ve Petek Temizliği',
    description: 'Kombinizin verimliliğini artırmak ve yakıt tasarrufu için profesyonel bakım.',
    longDescription: 'Kombinizin periyodik bakımını yaparak daha verimli çalışmasını ve ömrünün uzamasını sağlıyoruz. Özel kimyasallar ve makinelerle peteklerinizi temizleyerek ısı transferini artırıyor, daha az doğalgaz faturası ile daha iyi ısınmanızı sağlıyoruz.',
    icon: Heater,
  },
  {
    slug: 'sihhi-tesisat',
    title: 'Sıhhi Tesisat',
    description: 'Temiz ve pis su tesisatı kurulumu, tamiri ve yenileme işlemleri.',
    longDescription: 'Binaların temiz su (kullanım suyu) ve pis su (atık su) tesisatlarının projelendirilmesi, uygulanması, onarımı ve yenilenmesi hizmetlerini kapsar. Sağlıklı ve sorunsuz bir altyapı için kaliteli malzeme ve uzman işçilik sunuyoruz.',
    icon: ShieldCheck,
  },
];
