import Layout from '../components/Layout';
import Image from 'next/image';

export default function Hizmetler() {
  return (
    <Layout title="Hizmetler - Hüner Tesisat" description="Sunduğumuz tesisat hizmetleri">
      <Image src="/images/2.png" alt="Hizmetler" width={600} height={400} style={{maxWidth:"100%",height:"auto"}} />
      <h1>Hizmetlerimiz</h1>
      <ul>
        <li>Su kaçağı tespiti ve onarımı</li>
        <li>Doğalgaz tesisatı</li>
        <li>Kalorifer tesisatı</li>
        <li>Kombi bakımı ve onarımı</li>
        <li>24/7 acil tesisat hizmeti</li>
      </ul>
    </Layout>
  );
}
