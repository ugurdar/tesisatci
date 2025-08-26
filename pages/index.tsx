import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout
      title="Hüner Tesisat - Eskişehir Tesisat Hizmetleri"
      description="Eskişehir'de sıhhi tesisat, su kaçağı tespiti ve onarım hizmetleri"
    >
      <section className="hero">
        <h1>Profesyonel Tesisat Çözümleri</h1>
        <p>Eskişehir ve çevresinde güvenilir, hızlı ve garantili hizmet.</p>
        <Link href="/iletisim" className="cta">
          Hemen Ara
        </Link>
      </section>
      <section className="container">
        <h2>Hizmetlerimiz</h2>
        <div className="services">
          <div className="service-card">
            <Image src="/images/2.png" alt="Su Kaçağı" width={400} height={250} />
            <h3>Su Kaçağı Tespiti</h3>
            <p>Gelişmiş cihazlarla kırmadan dökmeden kaçak tespiti.</p>
          </div>
          <div className="service-card">
            <Image src="/images/3.png" alt="Doğalgaz Tesisatı" width={400} height={250} />
            <h3>Doğalgaz Tesisatı</h3>
            <p>Projelendirme ve montaj dahil komple doğalgaz hizmeti.</p>
          </div>
          <div className="service-card">
            <Image src="/images/4.png" alt="Kalorifer Tesisatı" width={400} height={250} />
            <h3>Kalorifer Tesisatı</h3>
            <p>Verimli ısıtma sistemleri için uzman çözümler.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
