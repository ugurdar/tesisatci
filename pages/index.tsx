import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout
      title="Hüner Tesisat - Eskişehir Tesisat Hizmetleri"
      description="Eskişehir'de sıhhi tesisat, su kaçağı tespiti ve onarım hizmetleri"
    >
      <section>
        <h1>Hüner Tesisat</h1>
        <p>Eskişehir ve çevresinde güvenilir ve hızlı tesisat hizmetleri sunuyoruz.</p>
        <Image src="/images/1.png" alt="Tesisat görseli" width={600} height={400} />
      </section>
    </Layout>
  );
}
