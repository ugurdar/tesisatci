import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = {
    title: 'Sıkça Sorulan Sorular | Hüner Tesisat',
    description: 'Sıhhi tesisat hizmetlerimiz, fiyatlandırma ve acil durum prosedürlerimiz hakkında sıkça sorulan soruların yanıtlarını bulun.',
};

const faqItems = [
    {
        question: "Bir sıhhi tesisat acil durumunda ne yapmalıyım?",
        answer: "Su borusu patlaması gibi bir acil durumda, daha fazla hasarı önlemek için ilk yapmanız gereken ana su vanasını kapatmaktır. Ardından, hemen 0536 588 38 72 numaralı telefondan bizi arayın. 7/24 acil servis hizmeti sunuyoruz."
    },
    {
        question: "Hizmetlerinizin maliyeti ne kadar?",
        answer: "Fiyatlandırmamız gereken hizmete göre değişmektedir. Şeffaflığa inanıyoruz, bu nedenle herhangi bir işe başlamadan önce net ve dürüst bir fiyatlandırma sunuyoruz. Ayrıntılı bir tahmin için lütfen bir inceleme planlamak üzere bizimle iletişime geçin."
    },
    {
        question: "Giderlerimin tıkanmasını nasıl önleyebilirim?",
        answer: "Tıkanmaları önlemek için mutfak lavabonuza yağ, kahve telvesi ve lifli yiyecek atıkları dökmekten kaçının. Duş ve küvetlerde saçı yakalamak için bir gider süzgeci kullanın. Ayrıca önleyici bir tedbir olarak düzenli profesyonel gider temizliği planlamanızı öneririz."
    },
    {
        question: "Hangi bölgelere hizmet veriyorsunuz?",
        answer: "Eskişehir merkez ve çevresindeki ilçelere gururla hizmet veriyoruz. Belirli adresinizin hizmet aralığımız içinde olup olmadığını doğrulamak için Konum sayfamızdaki konum denetleyicisini kullanabilirsiniz."
    },
];


export default function FaqPage() {
    return (
        <div className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Sıkça Sorulan Sorular</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Sorularınız mı var? Cevaplarımız var. Hizmetlerimiz ve yaygın sıhhi tesisat endişeleri hakkında bilgi bulun.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                             <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
