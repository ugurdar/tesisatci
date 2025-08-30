'use client';

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { handleContactForm } from '@/lib/actions';

const ContactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} className="w-full">
            {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
            Send Message
        </Button>
    );
}

const initialState = {
    message: '',
    errors: {},
    success: false,
};

export default function ContactForm() {
    const [state, formAction] = useFormState(handleContactForm, initialState);
    const { toast } = useToast();
    const { register, formState: { errors }, reset } = useForm<ContactFormValues>({
        resolver: zodResolver(ContactSchema),
    });

    useEffect(() => {
        if (state.message) {
            if (state.success) {
                toast({
                    title: "Message Sent!",
                    description: "Thank you for contacting us. We'll get back to you shortly.",
                });
                reset();
            } else if (state.errors) {
                // The main error message is handled below, but you could toast specific errors if needed
            }
        }
    }, [state, toast, reset]);
    
    const allErrors = { ...errors, ...state.errors };

    return (
        <form action={formAction} className="space-y-4">
            <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...register('name')} placeholder="John Doe" />
                {allErrors.name && <p className="text-sm text-destructive mt-1">{allErrors.name.message || allErrors.name[0]}</p>}
            </div>
            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register('email')} placeholder="john@example.com" />
                {allErrors.email && <p className="text-sm text-destructive mt-1">{allErrors.email.message || allErrors.email[0]}</p>}
            </div>
            <div>
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input id="phone" {...register('phone')} placeholder="(123) 456-7890" />
                 {allErrors.phone && <p className="text-sm text-destructive mt-1">{allErrors.phone.message || allErrors.phone[0]}</p>}
            </div>
            <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" {...register('message')} placeholder="How can we help you today?" rows={4} />
                 {allErrors.message && <p className="text-sm text-destructive mt-1">{allErrors.message.message || allErrors.message[0]}</p>}
            </div>
            <SubmitButton />
        </form>
    );
}
