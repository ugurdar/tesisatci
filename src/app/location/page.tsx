import { MapPin, Phone } from 'lucide-react';
import Map from '@/components/map';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata = {
    title: 'Konumumuz | Hüner Tesisat',
    description: 'Hüner Tesisat servis alanımızı bulun, adresinizin kapsama alanında olup olmadığını kontrol edin ve bizimle iletişime geçin.',
};

export default function LocationPage() {
    const position = { lat: 39.7570, lng: 30.5210 }; // Eskişehir

    return (
        <div className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Servis Alanı ve Konum</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Eskişehir ve çevresine gururla hizmet veriyoruz. Aracımızı kullanarak hizmet alanımızda olup olmadığınızı görün.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-headline font-semibold mb-4">İletişim</h2>
                            <div className="space-y-4 text-lg">
                                <p className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-primary mt-1" />
                                    <span>Kırmızıtoprak, Yenipazar Sk., 26020 Odunpazarı/Eskişehir</span>
                                </p>
                                <p className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-primary mt-1" />
                                    <a href="tel:05365883872" className="hover:text-primary">0536 588 38 72</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
                        <Suspense fallback={<Skeleton className="w-full h-full" />}>
                            <Map center={position} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}
