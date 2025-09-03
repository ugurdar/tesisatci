'use server';

import { z } from 'zod';

// This is a static export, so server-side AI flows will not work.
// We are keeping the file to avoid breaking imports, but the functions will not be called.

// import { generateFAQ } from '@/ai/flows/ai-powered-faq-builder';
// import { checkServiceArea } from '@/ai/flows/location-finder';

async function generateFAQ(input: any): Promise<any> {
    console.warn('AI features are disabled in static export mode.');
    return { faqDraft: 'AI features are disabled in this version of the site.' };
}

async function checkServiceArea(input: any): Promise<any> {
    console.warn('AI features are disabled in static export mode.');
    return { isWithinServiceArea: false, supportedRegions: ['AI feature disabled'] };
}


// Contact Form
const ContactSchema = z.object({
  name: z.string().min(2, { message: 'İsim en az 2 karakter olmalıdır.' }),
  phone: z.string().min(10, { message: 'Lütfen geçerli bir telefon numarası girin.' }),
  message: z.string().min(10, { message: 'Mesaj en az 10 karakter olmalıdır.' }),
});

export async function handleContactForm(prevState: any, formData: FormData) {
  // Static export does not support server actions. This will not run on GitHub Pages.
  console.warn('Contact form submission is disabled in static export mode.');
  return { 
      message: 'Bu özellik şu anda aktif değil.', 
      errors: { form: ['Bu form statik sitede çalışmaz.'] }, 
      success: false 
    };
}


// Location Finder
export async function handleLocationCheck(address: string) {
  // Static export does not support server actions.
  console.warn('Location check is disabled in static export mode.');
  return { error: 'Bu özellik şu anda aktif değil.' };
}


// FAQ Builder
export async function handleFaqGeneration(serviceOfferings: string, regionalPlumbingCodes: string) {
    // Static export does not support server actions.
    console.warn('FAQ generation is disabled in static export mode.');
    return { error: 'Bu özellik şu anda aktif değil.' };
}
