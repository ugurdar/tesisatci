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
                Reliable Plumbing, Right When You Need It.
              </h1>
              <p className="text-lg text-foreground/80">
                PlumbPro Connect offers top-tier plumbing solutions for your home
                and business. Fast, efficient, and always professional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Schedule a Service <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="tel:123-456-7890">
                    <Phone className="mr-2" /> Emergency Call
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="https://picsum.photos/600/400"
                alt="Professional plumber at work"
                data-ai-hint="plumber working"
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
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of plumbing services to meet all your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
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
                      Learn More <ArrowRight className="ml-2" />
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
                Why Choose PlumbPro Connect?
              </h2>
              <p className="text-lg text-foreground/80">
                We are committed to providing the highest quality service and ensuring your complete satisfaction.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">24/7 Emergency Service</h4>
                    <p className="text-muted-foreground">Always available for your most urgent plumbing issues.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Licensed & Insured</h4>
                    <p className="text-muted-foreground">Our team consists of certified professionals you can trust.</p>
                  </div>
                </li>
                 <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Upfront Pricing</h4>
                    <p className="text-muted-foreground">No hidden fees. We provide clear, honest pricing before work begins.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="https://picsum.photos/600/450"
                alt="Satisfied customer shaking hands with a plumber"
                data-ai-hint="customer handshake"
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
            Ready for Professional Plumbing Solutions?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4 mb-8">
            Don't let plumbing problems disrupt your day. Contact us now for a free estimate and expert service.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Get Your Free Estimate Today
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
