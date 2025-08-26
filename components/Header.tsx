import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="nav container">
        <div className="logo">
          <Link href="/">Hüner Tesisat</Link>
        </div>
        <div className="nav-links">
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/hizmetler">Hizmetler</Link>
          <Link href="/iletisim">İletişim</Link>
        </div>

      </nav>
    </header>
  );
}
