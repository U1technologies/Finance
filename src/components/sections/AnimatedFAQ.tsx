
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimatedFAQ = () => {
  const faqs = [
    {
      question: "How do I choose the right credit card?",
      answer: "Consider your spending habits, lifestyle needs, and financial goals. Look at annual fees, rewards programs, interest rates, and additional benefits. Our comparison tool can help match you with the perfect card based on your preferences."
    },
    {
      question: "What credit score do I need to qualify?",
      answer: "Credit score requirements vary by card. Premium cards typically require scores of 700+, while others may accept scores of 650+. We offer options for various credit profiles including cards for those building credit."
    },
    {
      question: "How long does application approval take?",
      answer: "Many applications receive instant decisions. Some may require additional verification, taking 7-10 business days. After approval, you'll typically receive your card within 7-10 business days."
    },
    {
      question: "Are there any hidden fees I should know about?",
      answer: "We believe in transparency. All fees are clearly disclosed in our comparisons, including annual fees, foreign transaction fees, balance transfer fees, and late payment charges."
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal via-gold to-teal"></div>
      
      <div className="container-tight">
        <div className="max-w-3xl mx-auto">
          <h2 className="title-md text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-slate mb-10">
            Get quick answers to common questions about our financial products
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray/50 transition-colors data-[state=open]:bg-gray/50 hover:no-underline">
                  <span className="text-left font-medium text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-slate">
                  <div className="animate-fade-in">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-10 text-center">
            <Link to="/faqs" className="inline-flex items-center text-teal font-medium hover:underline">
              View all FAQs <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedFAQ;
