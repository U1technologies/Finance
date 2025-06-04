
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Star, ArrowRight, CheckCircle2, Clock, Shield, Award, CreditCard, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CardDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  // Mock card data - in real app, this would be fetched based on ID
  const card = {
    id: "premium-rewards-platinum",
    name: "Premium Rewards Platinum",
    bank: "Global Bank",
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    annualFee: "₹5,000",
    interestRate: "3.5% p.m.",
    rewards: "5% Cashback",
    rating: 4.8,
    featured: true,
    description: "Experience premium banking with exclusive benefits, highest cashback rates, and unmatched rewards program designed for high-value customers.",
    keyFeatures: [
      "Up to 5% cashback on all purchases",
      "Airport lounge access worldwide",
      "Complimentary travel insurance",
      "24/7 concierge services",
      "Zero forex markup on international transactions"
    ],
    eligibility: {
      minAge: "21 years",
      maxAge: "65 years",
      minIncome: "₹10,00,000 per annum",
      creditScore: "750+",
      employment: "Salaried/Self-employed"
    },
    fees: {
      annual: "₹5,000",
      processing: "₹999",
      latePayment: "₹500",
      overlimit: "₹500",
      foreignTransaction: "0%"
    },
    benefits: [
      {
        title: "Cashback Rewards",
        description: "Earn up to 5% cashback on all purchases with no category restrictions",
        icon: <Percent className="h-6 w-6 text-teal" />
      },
      {
        title: "Travel Benefits",
        description: "Complimentary airport lounge access and travel insurance coverage",
        icon: <Shield className="h-6 w-6 text-teal" />
      },
      {
        title: "Concierge Service",
        description: "24/7 personalized concierge service for all your needs",
        icon: <Award className="h-6 w-6 text-teal" />
      }
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3">
              <img 
                src={card.image} 
                alt={card.name} 
                className="w-full max-w-sm mx-auto rounded-xl shadow-lg" 
              />
            </div>
            <div className="lg:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-slate-light">{card.bank}</span>
                <div className="flex items-center bg-white/10 px-2 py-1 rounded-md">
                  <Star className="h-4 w-4 text-gold fill-gold mr-1" />
                  <span className="text-sm">{card.rating}</span>
                </div>
              </div>
              <h1 className="title-xl mb-4">{card.name}</h1>
              <p className="text-lg text-slate-light mb-6 max-w-2xl">
                {card.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={`/apply/${card.id}`} className="cta-primary">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-navy mb-1">{card.annualFee}</div>
              <div className="text-sm text-slate">Annual Fee</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-navy mb-1">{card.interestRate}</div>
              <div className="text-sm text-slate">Interest Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-navy mb-1">{card.rewards}</div>
              <div className="text-sm text-slate">Rewards</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-navy mb-1">{card.eligibility.creditScore}</div>
              <div className="text-sm text-slate">Credit Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-12 bg-gray">
        <div className="container-tight">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="fees">Fees</TabsTrigger>
              <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-soft">
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {card.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-teal mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-soft">
                <h3 className="text-xl font-semibold mb-4">Card Description</h3>
                <p className="text-slate leading-relaxed">
                  The {card.name} is designed for discerning customers who demand the finest in financial services. 
                  With industry-leading rewards rates, comprehensive travel benefits, and unparalleled customer service, 
                  this card sets the standard for premium credit cards in India. Whether you're making everyday purchases 
                  or planning international travel, this card ensures you're rewarded at every step.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-6">
              {card.benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal/10 rounded-lg">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-slate">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="fees" className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-soft">
                <h3 className="text-xl font-semibold mb-4">Fee Structure</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Annual Fee</span>
                    <span>{card.fees.annual}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Processing Fee</span>
                    <span>{card.fees.processing}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Late Payment</span>
                    <span>{card.fees.latePayment}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Over Limit</span>
                    <span>{card.fees.overlimit}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Foreign Transaction</span>
                    <span>{card.fees.foreignTransaction}</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="eligibility" className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-soft">
                <h3 className="text-xl font-semibold mb-4">Eligibility Criteria</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Minimum Age</span>
                    <span>{card.eligibility.minAge}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Maximum Age</span>
                    <span>{card.eligibility.maxAge}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Minimum Income</span>
                    <span>{card.eligibility.minIncome}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Credit Score</span>
                    <span>{card.eligibility.creditScore}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Employment</span>
                    <span>{card.eligibility.employment}</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-tight text-center">
          <h2 className="title-lg mb-6">Ready to Apply?</h2>
          <p className="text-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have chosen the {card.name} for their financial needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={`/apply/${card.id}`} className="cta-primary">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/credit-cards" className="cta-outline border-white text-white hover:bg-white/10">
              Compare Other Cards
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CardDetail;
