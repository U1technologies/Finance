
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      category: "Credit Cards",
      faqs: [
        {
          question: "How do I choose the right credit card?",
          answer: "Consider your spending habits, credit score, and financial goals. Look at rewards programs, annual fees, interest rates, and benefits that match your lifestyle. Our comparison tool can help you find the best options."
        },
        {
          question: "What credit score do I need for approval?",
          answer: "Credit score requirements vary by card. Generally, you'll need a score of 600+ for basic cards, 670+ for good rewards cards, and 740+ for premium cards. Check your score for free before applying."
        },
        {
          question: "How can I improve my chances of approval?",
          answer: "Maintain a good credit score, keep credit utilization low, ensure stable income, and avoid applying for multiple cards at once. Consider starting with cards designed for your credit profile."
        }
      ]
    },
    {
      category: "Loans",
      faqs: [
        {
          question: "What's the difference between secured and unsecured loans?",
          answer: "Secured loans require collateral (like a car or home) and typically offer lower interest rates. Unsecured loans don't require collateral but may have higher rates and stricter credit requirements."
        },
        {
          question: "How long does the loan approval process take?",
          answer: "Personal loans can be approved within minutes to a few days. Home loans typically take 30-45 days. Business loans may take 1-4 weeks depending on the type and amount."
        },
        {
          question: "Can I pay off my loan early?",
          answer: "Most loans allow early repayment, but some may charge prepayment penalties. Check your loan terms before applying. Paying early can save you money on interest charges."
        }
      ]
    },
    {
      category: "Credit Score",
      faqs: [
        {
          question: "How often should I check my credit score?",
          answer: "You should check your credit score at least once a month. Regular monitoring helps you track improvements and catch any errors or fraudulent activity quickly."
        },
        {
          question: "Why did my credit score go down?",
          answer: "Common reasons include late payments, increased credit utilization, new credit inquiries, closed accounts, or errors on your credit report. Review your credit report to identify the cause."
        },
        {
          question: "How long does it take to improve my credit score?",
          answer: "Small improvements can be seen in 1-2 months, while significant changes typically take 3-6 months or longer. Consistent positive financial behavior is key to lasting improvement."
        }
      ]
    },
    {
      category: "General",
      faqs: [
        {
          question: "Is your service really free?",
          answer: "Yes, our comparison service is completely free for consumers. We earn commissions from financial institutions when you're approved for products through our platform, but this doesn't affect your rates or terms."
        },
        {
          question: "How do you protect my personal information?",
          answer: "We use bank-level encryption and security measures to protect your data. We never sell your personal information and only share it with institutions you choose to apply with."
        },
        {
          question: "What if I'm not approved for a product?",
          answer: "Don't worry! We'll help you understand why and suggest alternative products or steps to improve your approval chances. You can also work on building your credit and apply again later."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFAQ(openFAQ === key ? null : key);
  };

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Find answers to common questions about our financial products and services. 
              Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-tight">
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gray">
        <div className="container-tight">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-center">{category.category}</h2>
                
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const isOpen = openFAQ === `${categoryIndex}-${faqIndex}`;
                    return (
                      <div key={faqIndex} className="bg-white rounded-lg shadow-soft overflow-hidden">
                        <button
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                          onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        >
                          <span className="font-medium text-lg">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-teal flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <div className="pt-2 border-t border-gray-100">
                              <p className="text-slate leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            
            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate text-lg">No FAQs found matching your search.</p>
                <button 
                  onClick={() => setSearchTerm("")}
                  className="mt-4 text-teal hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container-tight text-center">
          <h2 className="title-lg mb-6">Still Have Questions?</h2>
          <p className="text-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Our customer support team is here to help you with any questions not covered in our FAQ.
          </p>
          <button className="cta-primary">
            Contact Support
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
