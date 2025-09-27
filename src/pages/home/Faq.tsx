import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqProps {
  heading: string;
  description: string;
  items?: FaqItem[];
  supportHeading?: string;
  supportDescription?: string;
  supportButtonText?: string;
  supportButtonUrl?: string;
}

const faqItems = [
  {
    id: "faq-1",
    question: "How do I track my parcel?",
    answer:
      "You can track your parcel by entering the tracking ID on our tracking page. You'll see real-time updates including pickup, transit, and delivery status.",
  },
  {
    id: "faq-2",
    question: "What types of items can I send?",
    answer:
      "We support documents, books, electronics, and small packages. Please avoid sending fragile or restricted items without prior approval.",
  },
  {
    id: "faq-3",
    question: "How long does delivery take?",
    answer:
      "Delivery time depends on the destination. Local deliveries usually take 1–2 days, while inter-division parcels may take 2–4 business days.",
  },
  {
    id: "faq-4",
    question: "Can I cancel or modify a parcel after booking?",
    answer:
      "Yes, you can cancel or update parcel details before it's picked up. Once dispatched, changes may not be possible.",
  },
  {
    id: "faq-5",
    question: "What payment methods are supported?",
    answer:
      "We accept online payments via SSLCommerz, as well as cash on delivery (COD) for eligible parcels.",
  },
  {
    id: "faq-6",
    question: "What happens if my parcel is delayed or lost?",
    answer:
      "We take delivery seriously. If your parcel is delayed or lost, our support team will investigate and assist you with resolution or compensation.",
  },
];




const faq: FaqProps = {
     heading : "Frequently asked questions",
  description :"Find answers to common questions about our products. Can't find what you're looking for? Contact our support team.",
    items: faqItems,
}

const Faq = () => {
  return (
    <section className="py-32">
      <div className="container space-y-16 mx-auto">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            {faq.heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{faq.description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {faq.items?.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq ;
