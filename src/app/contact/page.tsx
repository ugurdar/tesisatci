import { Phone, Clock, MapPin } from 'lucide-react';
import ContactForm from '@/components/contact-form';

export const metadata = {
    title: 'İletişim | Hüner Tesisat',
    description: 'Hüner Tesisat ile iletişime geçin. 7/24 acil servis için arayın, formumuzu kullanarak servis planlayın veya ücretsiz fiyat teklifi isteyin.',
};

export default function ContactPage() {
    return (
        <div className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Bize Ulaşın</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Tüm sıhhi tesisat ihtiyaçlarınızda size yardımcı olmak için buradayız. Acil durumlar için bizi arayın veya diğer talepleriniz için aşağıdaki formu doldurun.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="bg-card p-8 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-headline font-semibold mb-6">Bize Mesaj Gönderin</h2>
                        <ContactForm />
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-2xl font-headline font-semibold">İletişim Bilgileri</h2>
                        <div className="space-y-4 text-lg">
                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Telefon</h3>
                                    <a href="tel:05365883872" className="text-muted-foreground hover:text-primary">0536 588 38 72</a>
                                    <p className="text-sm text-muted-foreground">7/24 Acil Servis Hattı</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Adres</h3>
                                    <p className="text-muted-foreground">Kırmızıtoprak, Ercan Sk., 26020 Odunpazarı/Eskişehir</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Çalışma Saatleri</h3>
                                    <p className="text-muted-foreground">Pazartesi - Cuma: 08:30 - 23:00</p>
                                    <p className="text-muted-foreground">Cumartesi: 08:30 - 23:00</p>
                                    <p className="text-muted-foreground">Pazar: 09:00 - 23:00</p>
                                    <p className="font-medium text-primary-foreground/90 mt-1">Acil Servisler: 7/24</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
