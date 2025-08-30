import Link from 'next/link';
import { Wrench, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-primary text-xl">
              <Wrench className="h-6 w-6 text-accent" />
              <span className="font-headline">Hüner Tesisat</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Tüm sıhhi tesisat ihtiyaçlarınız için güvenilir ortağınız.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Hızlı Linkler</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Hizmetler</Link></li>
              <li><Link href="/location" className="text-muted-foreground hover:text-primary">Servis Alanı</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary">SSS</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Bize Ulaşın</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Yönetici</h3>
             <ul className="space-y-2 text-sm">
              <li><Link href="/faq-builder" className="text-muted-foreground hover:text-primary">SSS Oluşturucu</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-foreground">İletişim Bilgileri</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-primary" />
                <span className="text-muted-foreground">Kırmızıtoprak, Yenipazar Sk., Odunpazarı/Eskişehir</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 text-primary" />
                <a href="tel:05365883872" className="text-muted-foreground hover:text-primary">0536 588 38 72</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 text-primary" />
                <a href="mailto:contact@plumbpro.connect" className="text-muted-foreground hover:text-primary">contact@plumbpro.connect</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Hüner Tesisat. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
