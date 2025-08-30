import { MapPin, Phone, Mail } from 'lucide-react';
import LocationFinder from '@/components/location-finder';
import Map from '@/components/map';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata = {
    title: 'Our Location | PlumbPro Connect',
    description: 'Find our service area, check if your address is covered, and get in touch with PlumbPro Connect.',
};

export default function LocationPage() {
    const position = { lat: 40.7128, lng: -74.0060 }; // New York City

    return (
        <div className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Service Area & Location</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We proudly serve New York, Los Angeles, and Chicago. Use our tool to see if you're in our service area.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-headline font-semibold mb-4">Check Your Address</h2>
                            <LocationFinder />
                        </div>
                        <div>
                            <h2 className="text-2xl font-headline font-semibold mb-4">Our Office</h2>
                            <div className="space-y-4 text-lg">
                                <p className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    <span>123 Plumbing Ave, New York, NY 10001</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-primary" />
                                    <a href="tel:123-456-7890" className="hover:text-primary">(123) 456-7890</a>
                                </p>
                                <p className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-primary" />
                                    <a href="mailto:contact@plumbpro.connect" className="hover:text-primary">contact@plumbpro.connect</a>
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
