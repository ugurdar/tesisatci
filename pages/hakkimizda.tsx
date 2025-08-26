import Layout from '../components/Layout';
import Image from 'next/image';

export default function Hakkimizda() {
  return (
    <Layout title="Hakkımızda - Hüner Tesisat" description="Hüner Tesisat hakkında bilgi">
      <section className="container">
        <h1>Hakkımızda</h1>
        <p>
          Hüner Tesisat, yılların deneyimi ile Eskişehir'de hizmet vermektedir. Müşteri
          memnuniyeti ve kaliteli işçilik önceliğimizdir. Profesyonel ekibimizle
          sıhhi tesisat, doğalgaz ve ısıtma sistemlerinde çözüm ortağınızız.
        </p>
        <Image src="/images/1.png" alt="Hüner Tesisat" width={800} height={500} />
      </section>
    </Layout>
  );
}
