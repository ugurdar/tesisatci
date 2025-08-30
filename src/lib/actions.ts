'use server';

import { z } from 'zod';
import { generateFAQ } from '@/ai/flows/ai-powered-faq-builder';
import { checkServiceArea } from '@/ai/flows/location-finder';

// Contact Form
const ContactSchema = z.object({
  name: z.string().min(2, { message: 'İsim en az 2 karakter olmalıdır.' }),
  phone: z.string().min(10, { message: 'Lütfen geçerli bir telefon numarası girin.' }),
  message: z.string().min(10, { message: 'Mesaj en az 10 karakter olmalıdır.' }),
});

export async function handleContactForm(prevState: any, formData: FormData) {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get('name'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Hata: Lütfen form alanlarını kontrol edin.',
      success: false,
    };
  }

  // Burada tipik olarak bir e-posta gönderir veya veritabanına kaydedersiniz.
  console.log('İletişim formu gönderildi:', validatedFields.data);

  return { message: 'Başarılı! Mesajınız gönderildi.', errors: {}, success: true };
}


// Location Finder
export async function handleLocationCheck(address: string) {
  if (!address || address.trim().length < 5) {
    return { error: 'Lütfen geçerli bir adres girin.' };
  }
  try {
    const result = await checkServiceArea({ address });
    return { data: result };
  } catch (e) {
    console.error(e);
    return { error: 'Servis alanı kontrol edilemedi. Lütfen daha sonra tekrar deneyin.' };
  }
}


// FAQ Builder
export async function handleFaqGeneration(serviceOfferings: string, regionalPlumbingCodes: string) {
  if (!serviceOfferings || !regionalPlumbingCodes) {
    return { error: 'SSS oluşturmak için her iki alan da gereklidir.' };
  }

  try {
    const result = await generateFAQ({ serviceOfferings, regionalPlumbingCodes });
    return { data: result };
  } catch (e) {
    console.error(e);
    return { error: 'SSS oluşturulamadı. Lütfen daha sonra tekrar deneyin.' };
  }
}
