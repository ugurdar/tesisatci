import Link from 'next/link';
import { services } from '@/lib/services';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Our Services | PlumbPro Connect',
  description: 'Explore the wide range of professional plumbing services offered by PlumbPro Connect, from emergency repairs to fixture installations.',
};

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Our Plumbing Services</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide a full spectrum of expert plumbing services to ensure your home or business runs smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.slug} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                <Button variant="secondary" asChild className="mt-auto self-start">
                  <Link href={`/services/${service.slug}`}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
