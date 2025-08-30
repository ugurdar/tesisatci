import FaqBuilderForm from '@/components/faq-builder-form';

export const metadata = {
    title: 'AI FAQ Builder | PlumbPro Connect',
    description: 'Generate a draft FAQ for your plumbing business using AI.',
};

export default function FaqBuilderPage() {
    return (
        <div className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">AI-Powered FAQ Builder</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Leverage AI to create a draft of frequently asked questions. Simply provide details about your services and local regulations, and let our tool do the rest.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <FaqBuilderForm />
                </div>
            </div>
        </div>
    );
}
