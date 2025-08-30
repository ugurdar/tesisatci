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
  name: z.string().min(2, { message: 'İsim en az 2 karakter olmalıdır.' }),
  phone: z.string().min(10, { message: 'Lütfen geçerli bir telefon numarası girin.' }),
  message: z.string().min(10, { message: 'Mesaj en az 10 karakter olmalıdır.' }),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} className="w-full">
            {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
            Mesaj Gönder
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
                    title: "Mesaj Gönderildi!",
                    description: "Bizimle iletişime geçtiğiniz için teşekkür ederiz. Kısa süre içinde size geri döneceğiz.",
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
                <Label htmlFor="name">İsim</Label>
                <Input id="name" {...register('name')} placeholder="Adınız Soyadınız" />
                {allErrors.name && <p className="text-sm text-destructive mt-1">{allErrors.name.message || allErrors.name[0]}</p>}
            </div>
            <div>
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" {...register('phone')} placeholder="05XX XXX XX XX" />
                 {allErrors.phone && <p className="text-sm text-destructive mt-1">{allErrors.phone.message || allErrors.phone[0]}</p>}
            </div>
            <div>
                <Label htmlFor="message">Mesaj</Label>
                <Textarea id="message" {...register('message')} placeholder="Bugün size nasıl yardımcı olabiliriz?" rows={4} />
                 {allErrors.message && <p className="text-sm text-destructive mt-1">{allErrors.message.message || allErrors.message[0]}</p>}
            </div>
            <SubmitButton />
        </form>
    );
}
