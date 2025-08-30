import Link from 'next/link';
import { Wrench, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"

const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/services', label: 'Hizmetler' },
  { href: '/location', label: 'Konum' },
  { href: '/faq', label: 'SSS' },
  { href: '/contact', label: 'İletişim' },
];

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-primary text-xl">
          <Wrench className="h-6 w-6 text-accent" />
          <span className="font-headline">Hüner Tesisat</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
           <Button asChild className="hidden sm:inline-flex">
            <Link href="/contact">Teklif Al</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Navigasyon menüsünü aç</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" className="flex items-center gap-2 font-bold text-primary">
                    <Wrench className="h-5 w-5 text-accent" />
                    <span>Hüner Tesisat</span>
                  </Link>
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Menüyü kapat</span>
                     </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto">
                  <SheetClose asChild>
                    <Button asChild className="w-full">
                      <Link href="/contact">Teklif Al</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
