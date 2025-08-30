'use client';

import { Card, CardContent } from './ui/card';

type MapProps = {
    center: { lat: number; lng: number };
};

export default function Map({ center }: MapProps) {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const mapSrc = apiKey
        ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${center.lat},${center.lng}`
        : `https://www.google.com/maps/embed/v1/place?q=${center.lat},${center.lng}`;


    if (!apiKey) {
        return (
            <div className="w-full h-full bg-muted flex items-center justify-center">
                <Card>
                    <CardContent className="pt-6">
                        <p className="text-center text-muted-foreground">
                            Google Maps API Anahtarı eksik. <br />
                            Lütfen ortam değişkenlerinize NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ekleyin.
                        </p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={mapSrc}
        ></iframe>
    );
}
