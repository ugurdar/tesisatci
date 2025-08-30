'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Loader2, Wand2 } from 'lucide-react';
import React from 'react';

import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { handleFaqGeneration } from '@/lib/actions';
import { XCircle } from 'lucide-react';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} size="lg" className="w-full">
            {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
            Generate FAQ
        </Button>
    );
}

export default function FaqBuilderForm() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (formData: FormData) => {
        const serviceOfferings = formData.get('serviceOfferings') as string;
        const regionalPlumbingCodes = formData.get('regionalPlumbingCodes') as string;

        setResult(null);
        setError(null);

        const response = await handleFaqGeneration(serviceOfferings, regionalPlumbingCodes);
        if (response.error) {
            setError(response.error);
        } else if (response.data) {
            setResult(response.data.faqDraft);
        }
    };
    
    // Using a ref to hold a sample value to avoid re-creating it on every render
    const sampleOfferings = React.useRef(`Emergency Plumbing (24/7), Drain Cleaning & Unclogging, Water Heater Repair & Installation (Tank & Tankless), Leak Detection & Repair, Faucet & Toilet Repair/Installation, Garbage Disposal Services, Gas Line Repair & Installation, Sewer Line Inspection & Repair`).current;
    const sampleCodes = React.useRef(`All work complies with the International Plumbing Code (IPC) as adopted by New York City. Key local amendments include: mandatory use of lead-free materials, specific backflow prevention requirements for commercial properties, and adherence to noise regulations for after-hours emergency work. All gas work requires a licensed Master Plumber and proper permitting.`).current;


    return (
        <Card>
            <CardContent className="pt-6">
                <form action={handleSubmit} className="space-y-6">
                    <div>
                        <Label htmlFor="serviceOfferings" className="text-lg font-semibold">Service Offerings</Label>
                        <p className="text-sm text-muted-foreground mb-2">Describe the plumbing services your business provides. Be as detailed as possible.</p>
                        <Textarea
                            id="serviceOfferings"
                            name="serviceOfferings"
                            placeholder="e.g., 24/7 Emergency Repairs, Drain Cleaning, Water Heater Installation..."
                            rows={5}
                            defaultValue={sampleOfferings}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="regionalPlumbingCodes" className="text-lg font-semibold">Regional Plumbing Codes</Label>
                         <p className="text-sm text-muted-foreground mb-2">Provide information about relevant local plumbing codes and regulations.</p>
                        <Textarea
                            id="regionalPlumbingCodes"
                            name="regionalPlumbingCodes"
                            placeholder="e.g., Adherence to IPC 2018, specific city ordinances on water pressure..."
                            rows={5}
                            defaultValue={sampleCodes}
                            required
                        />
                    </div>
                    <SubmitButton />
                </form>

                {error && (
                    <Alert variant="destructive" className="mt-6">
                        <XCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {result && (
                    <Card className="mt-6 bg-secondary">
                        <CardHeader>
                            <CardTitle>Generated FAQ Draft</CardTitle>
                            <CardDescription>
                                Here is the AI-generated draft. Please review and edit it before publishing.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="prose prose-sm max-w-none whitespace-pre-wrap text-foreground">
                                {result}
                            </div>
                        </CardContent>
                    </Card>
                )}
            </CardContent>
        </Card>
    );
}
