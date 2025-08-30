import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/services';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary/5 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tight">
                Güvenilir Tesisat, Tam İhtiyacınız Olduğunda.
              </h1>
              <p className="text-lg text-foreground/80">
                Hüner Tesisat, eviniz ve iş yeriniz için birinci sınıf sıhhi tesisat çözümleri sunar. Hızlı, verimli ve her zaman profesyonel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Servis Talep Et <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="tel:05365883872">
                    <Phone className="mr-2" /> Acil Durum Çağrısı
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="https://picsum.photos/600/400"
                alt="Termal kamera ile su kaçağı tespiti yapan uzman"
                data-ai-hint="thermal camera leak detection"
                width={600}
                height={400}
                className="rounded-lg shadow-xl aspect-[3/2] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tüm ihtiyaçlarınızı karşılamak için kapsamlı bir sıhhi tesisat hizmetleri yelpazesi sunuyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <Card
                key={service.slug}
                className="flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground flex-grow">{service.description}</p>
                  <Button variant="link" asChild className="p-0 h-auto mt-4 self-start">
                    <Link href={`/services/${service.slug}`}>
                      Daha Fazla Bilgi <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
               <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                Neden Hüner Tesisat?
              </h2>
              <p className="text-lg text-foreground/80">
                En yüksek kalitede hizmet sunmayı ve tam memnuniyetinizi sağlamayı taahhüt ediyoruz.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">7/24 Acil Servis</h4>
                    <p className="text-muted-foreground">En acil sıhhi tesisat sorunlarınız için her zaman hizmetinizdeyiz.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Lisanslı ve Sigortalı</h4>
                    <p className="text-muted-foreground">Ekibimiz, güvenebileceğiniz sertifikalı profesyonellerden oluşmaktadır.</p>
                  </div>
                </li>
                 <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Şeffaf Fiyatlandırma</h4>
                    <p className="text-muted-foreground">Gizli ücret yok. İşe başlamadan önce net ve dürüst fiyatlandırma sağlıyoruz.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="https://picsum.photos/600/450"
                alt="Tesisatçı patlak boruyu tamir ediyor"
                data-ai-hint="plumber fixing pipe"
                width={600}
                height={450}
                className="rounded-lg shadow-xl aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

       <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
           <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Profesyonel Tesisat Çözümlerine Hazır Mısınız?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4 mb-8">
            Tesisat sorunlarının gününüzü mahvetmesine izin vermeyin. Ücretsiz fiyat teklifi ve uzman hizmet için şimdi bize ulaşın.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Bugün Ücretsiz Teklif Alın
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
