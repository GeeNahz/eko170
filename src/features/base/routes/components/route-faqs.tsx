import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { ROUTE_FAQS } from "../constants";

export function RouteFaqs() {
  return (
    <div
      id="faqs"
      className="mx-3 mt-4 scroll-mt-[170px] overflow-hidden rounded-[22px] bg-brand-cream px-5 pt-11 pb-12 sm:mx-4 sm:bg-brand-yellow sm:px-10 sm:py-24"
    >
      <Reveal className="mx-auto max-w-[840px] rounded-2xl bg-white px-6 py-9 shadow-[0_24px_60px_rgba(15,58,68,0.18)] sm:px-14 sm:py-12">
        <h2 className="font-heading mb-1.5 text-4xl leading-[0.95] font-black text-brand-teal uppercase italic sm:text-5xl">
          Entries &amp; Substitutions
        </h2>
        <div className="mb-6 font-sans text-base text-gray-500">
          Frequently Asked Questions
        </div>

        <Accordion multiple>
          {ROUTE_FAQS.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-[15.5px] font-medium text-gray-900">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[14.5px] leading-relaxed text-gray-500">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  );
}
