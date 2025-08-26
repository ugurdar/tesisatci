export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>© {new Date().getFullYear()} Hüner Tesisat</p>
        <p>
          Kırmızıtoprak, Yenipazar Sk., 26020 Odunpazarı/Eskişehir | Tel:{' '}
          <a href="tel:05365883872">0536 588 38 72</a>
        </p>
      </div>
    </footer>
  );
}
