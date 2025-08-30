'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Loader2, Search } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { handleLocationCheck } from '@/lib/actions';
import { CheckCircle, XCircle } from 'lucide-react';

type ResultState = {
    isWithinServiceArea?: boolean;
    supportedRegions?: string[];
} | null;

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending}>
            {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Search className="mr-2 h-4 w-4" />}
            Kontrol Et
        </Button>
    );
}

export default function LocationFinder() {
    const [result, setResult] = useState<ResultState>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (formData: FormData) => {
        const address = formData.get('address') as string;
        setResult(null);
        setError(null);

        const response = await handleLocationCheck(address);
        if (response.error) {
            setError(response.error);
        } else if (response.data) {
            setResult(response.data);
        }
    };

    return (
        <Card>
            <CardContent className="pt-6">
                <form action={handleSubmit} className="space-y-4">
                    <div className="flex gap-2">
                        <Input
                            name="address"
                            placeholder="Tam adresinizi girin"
                            required
                            className="flex-grow"
                        />
                        <SubmitButton />
                    </div>
                </form>

                {error && (
                    <Alert variant="destructive" className="mt-4">
                        <XCircle className="h-4 w-4" />
                        <AlertTitle>Hata</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {result && (
                    <Alert variant={result.isWithinServiceArea ? 'default' : 'destructive'} className="mt-4 bg-opacity-20">
                         {result.isWithinServiceArea ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                        <AlertTitle>
                            {result.isWithinServiceArea ? "Harika Haber!" : "Servis Mevcut Değil"}
                        </AlertTitle>
                        <AlertDescription>
                            {result.isWithinServiceArea
                                ? "Adresiniz servis alanımız içinde. Size yardımcı olmayı dört gözle bekliyoruz!"
                                : "Maalesef, adresiniz mevcut servis alanımızın dışında."}
                            <p className="text-xs mt-2">Desteklenen bölgeler: {result.supportedRegions?.join(', ')}.</p>
                        </AlertDescription>
                    </Alert>
                )}
            </CardContent>
        </Card>
    );
}
