
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openFaqs, setOpenFaqs] = useState<string[]>([]);
  
  const toggleFaq = (id: string) => {
    if (openFaqs.includes(id)) {
      setOpenFaqs(openFaqs.filter(faqId => faqId !== id));
    } else {
      setOpenFaqs([...openFaqs, id]);
    }
  };
  
  const faqCategories = [
    { id: "general", name: "General" },
    { id: "credit-cards", name: "Credit Cards" },
    { id: "loans", name: "Loans" },
    { id: "bnpl", name: "Buy Now Pay Later" },
    { id: "account", name: "Account & Security" }
  ];
  
  const faqsByCategory = {
    general: [
      {
        id: "general-1",
        question: "How does PremiumFinance work?",
        answer: "PremiumFinance is a financial comparison platform that helps users find the right financial products for their needs. We partner with leading banks and financial institutions to bring you the best credit cards, loans, and other financial products. Our platform allows you to compare features, benefits, and rates to make informed decisions."
      },
      {
        id: "general-2",
        question: "Is it free to use PremiumFinance?",
        answer: "Yes, PremiumFinance is completely free for users. We earn commissions from financial institutions when users sign up for products through our platform, which allows us to provide our service at no cost to you."
      },
      {
        id: "general-3",
        question: "How do you protect my personal information?",
        answer: "We take data security very seriously. All personal information you provide is encrypted and stored securely. We have strict data protection protocols in place and never share your information with third parties without your consent. For more details, please review our Privacy Policy."
      },
      {
        id: "general-4",
        question: "Can I apply for multiple products?",
        answer: "Yes, you can apply for multiple financial products through our platform. However, we recommend being mindful of making too many applications in a short period as this can impact your credit score. Our advisors can help you determine which products are best suited for your needs."
      }
    ],
    "credit-cards": [
      {
        id: "cc-1",
        question: "How do I choose the right credit card?",
        answer: "Choosing the right credit card depends on your spending habits, lifestyle, and financial goals. If you travel frequently, a travel rewards card might be ideal. If you're looking to save on everyday purchases, a cashback card could be better. Our comparison tools and advisors can help you find the perfect match for your needs."
      },
      {
        id: "cc-2",
        question: "Will applying for a credit card affect my credit score?",
        answer: "When you apply for a credit card, the issuer performs a hard inquiry on your credit report, which can temporarily lower your credit score by a few points. However, this impact is usually minimal and short-term. Using a credit card responsibly over time can actually help improve your credit score."
      },
      {
        id: "cc-3",
        question: "How long does it take to get approved for a credit card?",
        answer: "The approval timeline varies by card issuer. Some cards offer instant approval decisions online, while others may take 7-10 business days to review your application. Once approved, you typically receive your card within 7-14 business days, though some premium cards may take longer due to their specialized production process."
      }
    ],
    loans: [
      {
        id: "loan-1",
        question: "What types of loans do you offer?",
        answer: "We offer comparisons for various loan types including personal loans, home loans, business loans, education loans, and vehicle loans. Each loan type has specific features, eligibility criteria, and terms that we help you navigate to find the best option."
      },
      {
        id: "loan-2",
        question: "What factors affect my loan interest rate?",
        answer: "Several factors influence your loan interest rate, including your credit score, income, loan amount, loan term, existing debt, employment history, and the type of loan you're applying for. Banks and lenders use these factors to assess risk and determine the rate they can offer you."
      },
      {
        id: "loan-3",
        question: "Can I repay my loan early?",
        answer: "Yes, most loans allow for early repayment. However, some lenders may charge a prepayment penalty or fee for settling the loan before the agreed term. We clearly indicate whether loans have prepayment penalties when you compare options on our platform."
      }
    ],
    bnpl: [
      {
        id: "bnpl-1",
        question: "How does Buy Now Pay Later work?",
        answer: "Buy Now Pay Later (BNPL) allows you to make purchases and pay for them later, typically in installments. When you choose BNPL at checkout, you'll usually make a small down payment and then pay the remaining amount in fixed installments over a period of weeks or months. Many BNPL services offer interest-free options if paid on time."
      },
      {
        id: "bnpl-2",
        question: "Does using BNPL affect my credit score?",
        answer: "This varies by BNPL provider. Some BNPL services don't report to credit bureaus for on-time payments but may report missed payments. Others report all activity. Before using a BNPL service, we recommend checking their credit reporting policies if this is a concern for you."
      },
      {
        id: "bnpl-3",
        question: "What happens if I miss a BNPL payment?",
        answer: "If you miss a BNPL payment, you may incur late fees, and the provider might block you from making additional purchases. Some providers may also report missed payments to credit bureaus, which could affect your credit score. It's important to set up reminders or automatic payments to avoid missing payment deadlines."
      }
    ],
    account: [
      {
        id: "account-1",
        question: "How do I create an account on PremiumFinance?",
        answer: "Creating an account is simple. Click on the 'Sign Up' button in the top right corner of our website, enter your email address and create a password. You'll need to verify your email address before your account is fully activated. Having an account allows you to save product comparisons, track applications, and receive personalized recommendations."
      },
      {
        id: "account-2",
        question: "How can I reset my password?",
        answer: "If you've forgotten your password, click on the 'Login' button, then select 'Forgot Password'. Enter the email address associated with your account, and we'll send you a password reset link. For security reasons, this link will expire after 24 hours."
      },
      {
        id: "account-3",
        question: "Can I delete my account?",
        answer: "Yes, you can delete your account at any time. Go to your account settings, scroll to the bottom, and click on 'Delete Account'. Please note that this action is permanent and will remove all your data from our system, including saved comparisons and application history."
      }
    ]
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Find answers to common questions about our financial products and services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray">
        <div className="container-tight">
          {/* Category tabs */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex space-x-4 min-w-max">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  className={`px-6 py-2 rounded-full shadow-soft text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-teal text-white"
                      : "bg-white text-slate hover:bg-teal hover:text-white"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* FAQs for selected category */}
          <div className="bg-white rounded-lg shadow-soft p-8">
            <h2 className="text-2xl font-semibold mb-6">{faqCategories.find(c => c.id === activeCategory)?.name} FAQs</h2>
            
            <div className="space-y-4">
              {faqsByCategory[activeCategory as keyof typeof faqsByCategory].map((faq) => (
                <div key={faq.id} className="border-b border-gray-200 pb-4">
                  <button
                    className="flex justify-between items-center w-full text-left font-medium py-2"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span className="text-lg">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openFaqs.includes(faq.id) ? "rotate-180" : ""}`} />
                  </button>
                  {openFaqs.includes(faq.id) && (
                    <div className="mt-2 text-slate">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Still have questions */}
          <div className="mt-12 bg-white rounded-lg shadow-soft p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Still Have Questions?</h3>
            <p className="text-slate mb-6 max-w-2xl mx-auto">
              Our customer support team is here to help. Feel free to reach out through any of our contact channels.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="cta-primary">
                Contact Us <ArrowRight className="ml-2 h-5 w-5 inline-block" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
