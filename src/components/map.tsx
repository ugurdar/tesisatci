'use client';

import { APIProvider, Map as GoogleMap, Marker } from '@vis.gl/react-google-maps';
import { Card, CardContent } from './ui/card';

type MapProps = {
    center: { lat: number; lng: number };
};

export default function Map({ center }: MapProps) {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
        return (
            <div className="w-full h-full bg-muted flex items-center justify-center">
                <Card>
                    <CardContent className="pt-6">
                        <p className="text-center text-muted-foreground">
                            Google Maps API Key is missing. <br />
                            Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your environment variables.
                        </p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <APIProvider apiKey={apiKey}>
            <GoogleMap
                defaultCenter={center}
                defaultZoom={12}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                mapId="plumbpro_map"
            >
                <Marker position={center} />
            </GoogleMap>
        </APIProvider>
    );
}
