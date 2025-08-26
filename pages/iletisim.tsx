import Layout from '../components/Layout';

export default function Iletisim() {
  return (
    <Layout title="İletişim - Hüner Tesisat" description="Hüner Tesisat ile iletişime geçin">
      <h1>İletişim</h1>
      <p>Adres: Kırmızıtoprak, Yenipazar Sk., 26020 Odunpazarı/Eskişehir</p>
      <p>
        Telefon: <a href="tel:05365883872">0536 588 38 72</a>
      </p>
      <h2>Çalışma Saatleri</h2>
      <ul>
        <li>Pazartesi - Cumartesi: 08:30–23:00</li>
        <li>Pazar: 09:00–23:00</li>
        <li>Resmi tatillerde: 08:30–23:00</li>
      </ul>
      <h3>Önerilen Yeni Saatler</h3>
      <ul>
        <li>Pazartesi - Cumartesi: 08:00–22:00</li>
        <li>Pazar: 09:00–22:00</li>
      </ul>
      <div style={{ width: '100%', height: '450px' }}>
        <iframe
          src="https://www.google.com/maps?q=K%C4%B1rm%C4%B1z%C4%B1toprak,+Yenipazar+Sk.,+26020+Odunpazar%C4%B1/Eski%C5%9Fehir&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Layout>
  );
}
