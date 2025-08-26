import Layout from '../components/Layout';

export default function Hizmetler() {
  return (
    <Layout title="Hizmetler - Hüner Tesisat" description="Sunduğumuz tesisat hizmetleri">
      <section className="container">
        <h1>Hizmetlerimiz</h1>
        <ul className="service-list">
          <li>
            <h2>Su Kaçağı Tespiti ve Onarımı</h2>
            <p>
              Termal kameralar ve dinleme cihazları ile kırmadan su kaçağı tespiti ve
              onarım hizmeti sunuyoruz.
            </p>
          </li>
          <li>
            <h2>Doğalgaz Tesisatı</h2>
            <p>Projeden montaja tüm doğalgaz tesisatı ihtiyaçlarınız için çözüm.</p>
          </li>
          <li>
            <h2>Kalorifer Tesisatı</h2>
            <p>Verimli ısıtma sistemleri için kaliteli malzeme ve işçilik.</p>
          </li>
          <li>
            <h2>Kombi Bakımı ve Onarımı</h2>
            <p>Kombi arızalarına hızlı müdahale ve periyodik bakım hizmeti.</p>
          </li>
          <li>
            <h2>24/7 Acil Tesisat Hizmeti</h2>
            <p>Acil durumlarda günün her saati yanınızdayız.</p>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
