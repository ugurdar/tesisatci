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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tight">
                Eskişehir'de Güvenilir ve Hızlı Tesisat Çözümleri
              </h1>
              <p className="text-lg text-foreground/80">
                Hüner Tesisat olarak, Eskişehir ve çevresinde 7/24 acil tesisat hizmetleri sunuyoruz. Su kaçağı tespiti, tıkanıklık açma, kombi bakımı ve tam tesisat yenileme gibi konularda uzman ekibimizle, eviniz ve iş yeriniz için kalıcı ve profesyonel çözümler üretiyoruz. Kaliteli işçilik ve şeffaf fiyatlandırma politikamızla yanınızdayız.
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
                src="https://images.unsplash.com/photo-1640682841767-cdfce3aea6e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNHx8cGx1bWJlcnxlbnwwfHx8fDE3NTY1ODUxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tesisatçı, modern aletlerle mutfak lavabosunu tamir ediyor"
                data-ai-hint="plumber kitchen"
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
              Kapsamlı Tesisat Hizmetlerimiz
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sıradan bir onarımdan karmaşık tesisat yenileme projelerine kadar, tüm ihtiyaçlarınızı karşılayacak geniş bir hizmet yelpazesi sunuyoruz.
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
                Neden Hüner Tesisat'ı Seçmelisiniz?
              </h2>
              <p className="text-lg text-foreground/80">
                Müşteri memnuniyetini önceliğimiz olarak görüyor, her işimizde en yüksek kalite standartlarını hedefliyoruz. Güvenilir, hızlı ve profesyonel hizmet anlayışımızla fark yaratıyoruz.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">7/24 Acil Servis</h4>
                    <p className="text-muted-foreground">Tesisat sorunları beklemez. Gecenin bir yarısı veya tatil günü fark etmeksizin, en acil anlarınızda bir telefon uzağınızdayız.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Uzman ve Deneyimli Ekip</h4>
                    <p className="text-muted-foreground">Ekibimiz, alanında eğitimli ve yılların tecrübesine sahip sertifikalı ustalardan oluşmaktadır. Mülkünüzün emin ellerde olduğundan emin olabilirsiniz.</p>
                  </div>
                </li>
                 <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Şeffaf ve Uygun Fiyatlandırma</h4>
                    <p className="text-muted-foreground">Sürpriz faturalara son. İşe başlamadan önce yapacağımız analizin ardından size net ve dürüst bir fiyat teklifi sunuyoruz.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="https://picsum.photos/600/450"
                alt="Gülümseyen bir tesisatçı, müşteriyle konuşuyor"
                data-ai-hint="plumber talking"
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
            Tesisat sorunlarının gününüzü mahvetmesine izin vermeyin. Kalıcı ve güvenilir çözümler için uzman ekibimizden ücretsiz fiyat teklifi alın.
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
