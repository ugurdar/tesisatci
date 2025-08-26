import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Ana Sayfa</Link>
        <Link href="/hakkimizda">Hakkımızda</Link>
        <Link href="/hizmetler">Hizmetler</Link>
        <Link href="/iletisim">İletişim</Link>
      </nav>
    </header>
  );
}
