'use client';

import { Card, CardContent } from './ui/card';

type MapProps = {
    center: { lat: number; lng: number };
};

export default function Map({ center }: MapProps) {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    // API key olmasa bile haritayı göstermek için `q` parametresini kullanan bir URL oluştur.
    // Geliştirme sırasında "yalnızca geliştirme amaçlı" uyarısı görünecektir.
    const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey || ''}&q=${center.lat},${center.lng}`;

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
