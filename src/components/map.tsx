'use client';

type MapProps = {
    center: { lat: number; lng: number };
};

export default function Map({ center }: MapProps) {
    // OpenStreetMap embed URL'si oluştur.
    const viewBox = 0.005; // Haritanın ne kadar yakınlaştırılacağını belirler.
    const left = center.lng - viewBox;
    const bottom = center.lat - viewBox;
    const right = center.lng + viewBox;
    const top = center.lat + viewBox;

    const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik&marker=${center.lat}%2C${center.lng}`;

    return (
        <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={mapSrc}
            title="Konum Haritası"
        ></iframe>
    );
}
