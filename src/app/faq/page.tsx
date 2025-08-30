import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = {
    title: 'FAQ | PlumbPro Connect',
    description: 'Find answers to frequently asked questions about our plumbing services, pricing, and emergency procedures.',
};

const faqItems = [
    {
        question: "What should I do in a plumbing emergency?",
        answer: "In a plumbing emergency like a burst pipe, the first thing you should do is shut off your main water supply to prevent further damage. Then, call us immediately at (123) 456-7890. We offer 24/7 emergency services."
    },
    {
        question: "How much do your services cost?",
        answer: "Our pricing varies depending on the service required. We believe in transparency, so we provide upfront, honest pricing before any work begins. For a detailed estimate, please contact us to schedule an inspection."
    },
    {
        question: "Are your plumbers licensed and insured?",
        answer: "Yes, absolutely. All of our technicians at PlumbPro Connect are fully licensed, insured, and highly trained professionals. You can have peace of mind knowing your property is in safe and capable hands."
    },
    {
        question: "How can I prevent my drains from clogging?",
        answer: "To prevent clogs, avoid putting grease, coffee grounds, and fibrous food waste down your kitchen sink. Use a drain strainer to catch hair in showers and tubs. We also recommend scheduling regular professional drain cleaning as a preventative measure."
    },
    {
        question: "What areas do you service?",
        answer: "We proudly serve the metropolitan areas of New York, Los Angeles, and Chicago. You can use the location checker on our Location page to confirm if your specific address is within our service range."
    },
];


export default function FaqPage() {
    return (
        <div className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Frequently Asked Questions</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Have questions? We have answers. Find information about our services and common plumbing concerns.
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
