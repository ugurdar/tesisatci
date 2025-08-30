'use server';

import { z } from 'zod';
import { generateFAQ } from '@/ai/flows/ai-powered-faq-builder';
import { checkServiceArea } from '@/ai/flows/location-finder';

// Contact Form
const ContactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function handleContactForm(prevState: any, formData: FormData) {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Error: Please check the form fields.',
      success: false,
    };
  }

  // Here you would typically send an email or save to a database.
  console.log('Contact form submitted:', validatedFields.data);

  return { message: 'Success! Your message has been sent.', errors: {}, success: true };
}


// Location Finder
export async function handleLocationCheck(address: string) {
  if (!address || address.trim().length < 5) {
    return { error: 'Please enter a valid address.' };
  }
  try {
    const result = await checkServiceArea({ address });
    return { data: result };
  } catch (e) {
    console.error(e);
    return { error: 'Could not check service area. Please try again later.' };
  }
}


// FAQ Builder
export async function handleFaqGeneration(serviceOfferings: string, regionalPlumbingCodes: string) {
  if (!serviceOfferings || !regionalPlumbingCodes) {
    return { error: 'Both fields are required to generate the FAQ.' };
  }

  try {
    const result = await generateFAQ({ serviceOfferings, regionalPlumbingCodes });
    return { data: result };
  } catch (e) {
    console.error(e);
    return { error: 'Could not generate FAQ. Please try again later.' };
  }
}
