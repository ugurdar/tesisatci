import { Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/contact-form';

export const metadata = {
    title: 'Contact Us | PlumbPro Connect',
    description: 'Get in touch with PlumbPro Connect. Schedule a service, ask a question, or request a free estimate using our contact form.',
};

export default function ContactPage() {
    return (
        <div className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Get in Touch</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We're here to help with all your plumbing needs. Fill out the form below or contact us directly.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="bg-card p-8 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-headline font-semibold mb-6">Send us a Message</h2>
                        <ContactForm />
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-2xl font-headline font-semibold">Contact Information</h2>
                        <div className="space-y-4 text-lg">
                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <a href="tel:123-456-7890" className="text-muted-foreground hover:text-primary">(123) 456-7890</a>
                                    <p className="text-sm text-muted-foreground">24/7 Emergency Line</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <a href="mailto:contact@plumbpro.connect" className="text-muted-foreground hover:text-primary">contact@plumbpro.connect</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Business Hours</h3>
                                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                                    <p className="text-muted-foreground">Emergency Services: 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
