import { services, type Service } from '@/lib/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Hizmet Bulunamadı',
    };
  }

  return {
    title: `${service.title} | Hüner Tesisat`,
    description: service.longDescription,
  };
}

const getService = (slug: string): Service | undefined => {
  return services.find((s) => s.slug === slug);
};

export default async function ServicePage({ params }: Props) {
  const service = getService(params.slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((s) => s.slug !== params.slug).slice(0, 3);

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
            <Button variant="ghost" asChild>
                <Link href="/services">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Tüm Hizmetlere Geri Dön
                </Link>
            </Button>
        </div>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                 <div className="bg-primary/10 p-3 rounded-full">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
                  {service.title}
                </h1>
              </div>
              <p className="text-xl text-muted-foreground">{service.description}</p>
            </div>
            <Image
              src={service.image}
              alt={`${service.title} hizmetini gösteren resim`}
              data-ai-hint={service.aiHint}
              width={800}
              height={400}
              className="rounded-lg shadow-lg w-full object-cover aspect-video"
            />
            <div className="prose prose-lg max-w-none text-foreground/90">
                <p>{service.longDescription}</p>
            </div>
          </div>
          <div className="space-y-8">
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="font-headline text-primary">Bu hizmete mi ihtiyacınız var?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.title} hizmeti için ücretsiz teklif almak üzere bugün bize ulaşın.</p>
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact">Teklif Al</Link>
                </Button>
              </CardContent>
            </Card>
             <Card>
              <CardHeader>
                <CardTitle className="font-headline">Diğer Hizmetler</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {otherServices.map(s => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center flex-shrink-0">
                           <s.icon className="w-5 h-5 text-secondary-foreground transition-colors group-hover:text-primary" />
                        </div>
                        <span className="font-medium transition-colors group-hover:text-primary">{s.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
