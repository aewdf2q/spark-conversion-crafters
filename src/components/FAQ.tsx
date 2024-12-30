import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CalendlyButton } from "./CalendlyButton";

export const FAQ = () => {
  const faqs = [
    {
      question: "Do I need advanced tech skills or coding knowledge?",
      answer: "No. The IG Flow Protocol handles the heavy lifting for you. We set it up, walk you through it, and provide ongoing support so you can focus on coaching, not troubleshooting."
    },
    {
      question: "Will my DMs sound robotic or impersonal?",
      answer: "Not at all. Our approach prioritizes conversational flows that match your brand voice. This ensures your prospects feel heard and engaged, rather than spammed."
    },
    {
      question: "How does this differ from basic auto-DMs?",
      answer: "Unlike simple auto-responders, the IG Flow Protocol uses conditional logic to qualify leads, ask relevant questions, and guide the conversation toward booking a call—providing real value, not just an auto-reply."
    },
    {
      question: "Is there a long-term commitment?",
      answer: "We offer flexible arrangements. If you don't see real client bookings by Day 30, you owe us nothing, so there's no risk in trying it out."
    },
    {
      question: "Will I lose control of my Instagram account?",
      answer: "No. You retain complete access and control over your account. Our protocol runs in the background to streamline your DMs, so you can jump in anytime."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-black hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-12">
          <CalendlyButton className="bg-gradient-to-r from-red-600 via-yellow-500 to-orange-500 hover:opacity-90 text-white px-8 py-6 text-lg rounded-md" />
        </div>
      </div>
    </section>
  );
};