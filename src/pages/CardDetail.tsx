
import React from "react";
import Layout from "../components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { CheckCircle2, XCircle, ArrowRight, Star, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Sample detailed card data (would normally come from an API)
const cardsData = {
  "premium-rewards-platinum": {
    id: "premium-rewards-platinum",
    name: "Premium Rewards Platinum",
    bank: "Global Bank",
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    annualFee: "₹5,000",
    interestRate: "3.5% p.m.",
    rewards: "5% Cashback",
    rating: 4.8,
    featured: true,
    description: "The Premium Rewards Platinum card offers unmatched rewards and benefits for those who want the very best. Enjoy premium travel benefits, exclusive access to airport lounges worldwide, and elevated dining experiences.",
    keyBenefits: [
      "5% cashback on all dining and travel purchases",
      "3% cashback on grocery and entertainment",
      "1% cashback on all other purchases",
      "Complimentary airport lounge access worldwide",
      "Annual travel credit of ₹10,000",
      "Premium concierge service available 24/7",
      "No foreign transaction fees",
      "Premium travel insurance coverage"
    ],
    eligibility: {
      minIncome: "₹15,00,000 per annum",
      minAge: 21,
      maxAge: 65,
      creditScore: "750+ (Excellent)"
    },
    fees: {
      annual: "₹5,000 (waived for first year)",
      joiningFee: "₹2,000",
      lateFee: "₹800 or 3% of minimum due, whichever is higher",
      cashAdvanceFee: "2.5% of amount withdrawn (min ₹500)",
      foreignTransactionFee: "0%"
    },
    reviews: [
      {
        author: "Rajiv Mehta",
        rating: 5,
        comment: "Best premium card I've owned. The lounge access alone is worth the annual fee, and the cashback really adds up over time.",
        date: "March 15, 2023"
      },
      {
        author: "Priya Sharma",
        rating: 4,
        comment: "Great rewards and benefits. Customer service is excellent. The only downside is the high annual fee.",
        date: "January 22, 2023"
      }
    ],
    faqs: [
      {
        question: "How do I redeem my cashback rewards?",
        answer: "You can redeem your cashback as a statement credit, direct deposit to your bank account, or for travel bookings through our rewards portal. Redemptions can be made once you accumulate at least ₹500 in rewards."
      },
      {
        question: "Is there a limit to how much cashback I can earn?",
        answer: "There is no cap on the 1% base cashback. The 5% cashback on dining and travel and 3% on grocery and entertainment are capped at ₹5,000 per month combined."
      },
      {
        question: "How long does the application process take?",
        answer: "Most applications receive an instant decision. If additional review is needed, you'll receive a decision within 7-10 business days."
      }
    ]
  },
  "travel-elite": {
    id: "travel-elite",
    name: "Travel Elite Card",
    bank: "Axis Bank",
    image: "https://images.unsplash.com/photo-1559771252-0a58d844c9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    annualFee: "₹2,500",
    interestRate: "3.2% p.m.",
    rewards: "4x Travel Miles",
    rating: 4.6,
    description: "The Travel Elite Card is designed for frequent travelers who want to maximize their travel rewards. Earn miles on every purchase and enjoy premium travel benefits and protections.",
    keyBenefits: [
      "4x miles on flight and hotel bookings",
      "2x miles on dining and entertainment",
      "1x miles on all other purchases",
      "Complimentary domestic airport lounge access (8 visits per year)",
      "Travel insurance up to ₹50 lakhs",
      "1:1 mile transfer to partner airline programs",
      "Milestone bonus: 10,000 miles on spending ₹5 lakhs annually"
    ],
    eligibility: {
      minIncome: "₹8,00,000 per annum",
      minAge: 21,
      maxAge: 65,
      creditScore: "700+ (Good)"
    },
    fees: {
      annual: "₹2,500 (waived for first year with minimum spend)",
      joiningFee: "₹1,000",
      lateFee: "₹700 or 3% of minimum due, whichever is higher",
      cashAdvanceFee: "2.5% of amount withdrawn (min ₹500)",
      foreignTransactionFee: "2%"
    },
    reviews: [
      {
        author: "Vikram Singh",
        rating: 5,
        comment: "The mile earning rate is excellent, and transfer partners include all major airlines I use. Already booked a free flight after just 6 months of use.",
        date: "April 3, 2023"
      },
      {
        author: "Anju Patel",
        rating: 4,
        comment: "Great travel perks and good earning rate. Wish the foreign transaction fee was lower though.",
        date: "February 11, 2023"
      }
    ],
    faqs: [
      {
        question: "How do I redeem my miles?",
        answer: "You can redeem miles for flights, hotel stays, and travel experiences through our travel portal. You can also transfer miles to partner airline and hotel loyalty programs at a 1:1 ratio."
      },
      {
        question: "Do miles expire?",
        answer: "Miles are valid for 3 years from the date they are earned. As long as your account remains active with at least one transaction every 6 months, your miles won't expire."
      }
    ]
  }
};

const CardDetail = () => {
  const { id } = useParams<{ id: string }>();
  const card = id ? cardsData[id as keyof typeof cardsData] : null;

  if (!card) {
    return (
      <Layout>
        <div className="container-tight py-32 text-center">
          <h1 className="title-lg mb-4">Card Not Found</h1>
          <p className="text-slate mb-8">Sorry, the credit card you're looking for doesn't exist or has been removed.</p>
          <Link to="/credit-cards" className="cta-primary">
            View All Credit Cards
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Card Image */}
            <div className="w-full md:w-1/3 max-w-md">
              <img 
                src={card.image} 
                alt={card.name} 
                className="w-full h-auto rounded-lg shadow-lg" 
              />
            </div>
            
            {/* Card Basic Info */}
            <div className="w-full md:w-2/3">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-slate-light">{card.bank}</p>
                  <h1 className="title-lg">{card.name}</h1>
                </div>
                <div className="flex items-center bg-white/10 px-3 py-1.5 rounded-md">
                  <Star className="h-5 w-5 text-gold fill-gold mr-1.5" />
                  <span className="text-lg font-medium">{card.rating}</span>
                </div>
              </div>
              
              <p className="text-lg mb-6">{card.description}</p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 bg-white/5 p-4 rounded-lg">
                <div>
                  <p className="text-slate-light">Annual Fee</p>
                  <p className="text-xl font-medium">{card.annualFee}</p>
                </div>
                <div>
                  <p className="text-slate-light">Interest Rate</p>
                  <p className="text-xl font-medium">{card.interestRate}</p>
                </div>
                <div>
                  <p className="text-slate-light">Rewards</p>
                  <p className="text-xl font-medium">{card.rewards}</p>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={`/apply/${card.id}`} className="cta-primary sm:flex-1 text-center">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5 inline-block" />
                </Link>
                <a href="#compare" className="cta-outline sm:flex-1 text-center border-white text-white hover:bg-white/10">
                  Compare Cards
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content (2/3 width) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Key Benefits */}
              <div className="card-premium p-8">
                <h2 className="title-md mb-6">Key Benefits & Features</h2>
                <div className="space-y-4">
                  {card.keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-teal mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-lg">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fees & Charges */}
              <div className="card-premium p-8">
                <h2 className="title-md mb-6">Fees & Charges</h2>
                <div className="space-y-4 divide-y">
                  <div className="grid grid-cols-1 md:grid-cols-2 py-3">
                    <p className="text-slate font-medium">Annual Fee:</p>
                    <p>{card.fees.annual}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 py-3">
                    <p className="text-slate font-medium">Joining Fee:</p>
                    <p>{card.fees.joiningFee}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 py-3">
                    <p className="text-slate font-medium">Late Payment Fee:</p>
                    <p>{card.fees.lateFee}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 py-3">
                    <p className="text-slate font-medium">Cash Advance Fee:</p>
                    <p>{card.fees.cashAdvanceFee}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 py-3">
                    <p className="text-slate font-medium">Foreign Transaction Fee:</p>
                    <p>{card.fees.foreignTransactionFee}</p>
                  </div>
                </div>
              </div>

              {/* Customer Reviews */}
              <div className="card-premium p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="title-md">Customer Reviews</h2>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-gold fill-gold mr-1.5" />
                    <span className="text-lg font-medium">{card.rating} / 5</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {card.reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="font-medium text-lg">{review.author}</p>
                          <p className="text-slate text-sm">{review.date}</p>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < review.rating ? 'text-gold fill-gold' : 'text-slate-200'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p>{review.comment}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <a href="#" className="text-teal font-medium hover:text-teal-dark transition-colors">
                    View All Reviews
                  </a>
                </div>
              </div>

              {/* FAQs */}
              <div className="card-premium p-8">
                <h2 className="title-md mb-6">Frequently Asked Questions</h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {card.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="border border-gray-100 rounded-lg overflow-hidden">
                      <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50">
                        <span className="text-left font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-3 pt-0 text-slate">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                <div className="mt-6 p-4 bg-teal/5 rounded-lg flex items-start">
                  <HelpCircle className="h-5 w-5 text-teal mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Have more questions? <a href="/contact" className="text-teal font-medium">Contact our support team</a> for personalized assistance.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar (1/3 width) */}
            <div className="space-y-6">
              {/* Eligibility Box */}
              <div className="card-premium p-6">
                <h3 className="text-xl font-semibold mb-4">Eligibility Criteria</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate">Minimum Income:</span>
                    <span className="font-medium">{card.eligibility.minIncome}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate">Age Requirement:</span>
                    <span className="font-medium">{card.eligibility.minAge} - {card.eligibility.maxAge} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate">Credit Score:</span>
                    <span className="font-medium">{card.eligibility.creditScore}</span>
                  </div>
                </div>
                
                <hr className="my-5 border-gray-100" />
                
                <div className="text-center">
                  <Link 
                    to={`/apply/${card.id}`} 
                    className="cta-primary w-full block"
                  >
                    Apply Now
                  </Link>
                  <p className="text-sm text-slate mt-3">
                    Quick online application. Get a decision in minutes.
                  </p>
                </div>
              </div>
              
              {/* Why Choose This Card */}
              <div className="card-premium p-6">
                <h3 className="text-xl font-semibold mb-4">Why Choose This Card</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal mr-3 flex-shrink-0 mt-0.5" />
                    <p>Premium rewards on everyday spending</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal mr-3 flex-shrink-0 mt-0.5" />
                    <p>Exclusive travel and lifestyle perks</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal mr-3 flex-shrink-0 mt-0.5" />
                    <p>Premium customer service and support</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal mr-3 flex-shrink-0 mt-0.5" />
                    <p>Enhanced purchase and travel protections</p>
                  </div>
                </div>
              </div>
              
              {/* Similar Cards */}
              <div className="card-premium p-6">
                <h3 className="text-xl font-semibold mb-4">Similar Cards</h3>
                
                {Object.values(cardsData)
                  .filter(c => c.id !== card.id)
                  .slice(0, 2)
                  .map((similarCard) => (
                    <div key={similarCard.id} className="mb-5 pb-5 border-b border-gray-100 last:mb-0 last:pb-0 last:border-0">
                      <div className="flex items-center mb-3">
                        <img 
                          src={similarCard.image}
                          alt={similarCard.name}
                          className="w-16 h-auto rounded-md mr-3"
                        />
                        <div>
                          <p className="font-medium">{similarCard.name}</p>
                          <p className="text-sm text-slate">{similarCard.bank}</p>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-slate">Annual Fee:</span>
                        <span>{similarCard.annualFee}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate">Rewards:</span>
                        <span>{similarCard.rewards}</span>
                      </div>
                      <Link 
                        to={`/credit-cards/${similarCard.id}`} 
                        className="text-teal font-medium text-sm mt-3 inline-block hover:text-teal-dark transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  ))
                }
              </div>
              
              {/* Need Help Box */}
              <div className="bg-navy text-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Need Help Deciding?</h3>
                <p className="text-slate-light mb-4">
                  Our financial experts can help you find the perfect credit card for your needs.
                </p>
                <Link to="/contact" className="bg-white text-navy font-medium py-2 px-4 rounded-md w-full block text-center hover:bg-gray-100 transition-colors">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-secondary text-white">
        <div className="container-tight text-center">
          <h2 className="title-lg mb-6">Ready to Apply?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get the {card.name} today and start enjoying premium benefits and rewards.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={`/apply/${card.id}`} className="cta-secondary">
              Apply Now <ArrowRight className="ml-2 h-5 w-5 inline-block" />
            </Link>
            <Link to="/credit-cards" className="cta-outline border-white text-white hover:bg-white/10">
              View All Cards
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CardDetail;
