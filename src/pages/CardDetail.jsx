
import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { ArrowLeft, Star, Check, X, CreditCard, Shield, Gift } from "lucide-react";

const CardDetail = () => {
  const { id } = useParams();
  
  // Mock data - in a real app, this would come from an API
  const cardData = {
    1: {
      name: "Premium Rewards Card",
      issuer: "Chase",
      rating: 4.8,
      annualFee: "$95",
      apr: "16.99% - 23.99%",
      introApr: "0% for 12 months",
      rewards: "2x points on all purchases",
      signupBonus: "60,000 points after spending $4,000 in first 3 months",
      creditLimit: "$1,000 - $50,000",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      pros: [
        "High rewards rate on all purchases",
        "Excellent sign-up bonus",
        "No foreign transaction fees",
        "Comprehensive travel insurance",
        "24/7 customer service"
      ],
      cons: [
        "Annual fee after first year",
        "Higher APR for balance transfers",
        "Limited bonus categories"
      ],
      features: [
        "Purchase protection up to $500 per claim",
        "Extended warranty protection",
        "Price protection",
        "Travel accident insurance",
        "Baggage delay insurance",
        "Rental car coverage"
      ]
    }
  };

  const card = cardData[id] || cardData[1];

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-8 bg-gradient-primary text-white">
        <div className="container-tight">
          <Link to="/credit-cards" className="inline-flex items-center text-slate-light hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Credit Cards
          </Link>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <img src={card.image} alt={card.name} className="w-24 h-15 object-cover rounded-lg" />
            <div>
              <h1 className="title-lg mb-2">{card.name}</h1>
              <p className="text-xl text-slate-light mb-2">{card.issuer}</p>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-2 text-lg font-medium">{card.rating} rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 bg-white border-b">
        <div className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal mb-1">{card.annualFee}</div>
              <div className="text-sm text-slate">Annual Fee</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal mb-1">{card.apr}</div>
              <div className="text-sm text-slate">Purchase APR</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal mb-1">{card.rewards}</div>
              <div className="text-sm text-slate">Rewards Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal mb-1">{card.creditLimit}</div>
              <div className="text-sm text-slate">Credit Limit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Sign-up Bonus */}
              <div className="bg-white rounded-lg shadow-soft p-6">
                <div className="flex items-center mb-4">
                  <Gift className="h-6 w-6 text-teal mr-2" />
                  <h2 className="text-xl font-semibold">Sign-up Bonus</h2>
                </div>
                <p className="text-slate mb-4">{card.signupBonus}</p>
                <div className="bg-teal-light p-4 rounded-lg">
                  <p className="text-teal-dark font-medium">
                    Limited time offer - Apply today to secure this bonus!
                  </p>
                </div>
              </div>

              {/* Pros and Cons */}
              <div className="bg-white rounded-lg shadow-soft p-6">
                <h2 className="text-xl font-semibold mb-6">Pros & Cons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-green-600 mb-3 flex items-center">
                      <Check className="h-4 w-4 mr-2" />
                      Pros
                    </h3>
                    <ul className="space-y-2">
                      {card.pros.map((pro, index) => (
                        <li key={index} className="text-sm text-slate flex items-start">
                          <Check className="h-3 w-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-red-600 mb-3 flex items-center">
                      <X className="h-4 w-4 mr-2" />
                      Cons
                    </h3>
                    <ul className="space-y-2">
                      {card.cons.map((con, index) => (
                        <li key={index} className="text-sm text-slate flex items-start">
                          <X className="h-3 w-3 text-red-500 mr-2 mt-1 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-lg shadow-soft p-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-teal mr-2" />
                  <h2 className="text-xl font-semibold">Card Features & Benefits</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {card.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CreditCard className="h-4 w-4 text-teal mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm text-slate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Application */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-soft p-6 sticky top-8">
                <h3 className="text-xl font-semibold mb-4">Ready to Apply?</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate">Annual Fee:</span>
                    <span className="font-medium">{card.annualFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate">Intro APR:</span>
                    <span className="font-medium">{card.introApr}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate">Regular APR:</span>
                    <span className="font-medium">{card.apr}</span>
                  </div>
                </div>
                <Link to="/apply" className="cta-primary w-full text-center block mb-4">
                  Apply Now
                </Link>
                <p className="text-xs text-slate text-center">
                  You'll be redirected to the issuer's secure application page
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CardDetail;
