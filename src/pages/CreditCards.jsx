
import React from "react";
import Layout from "../components/layout/Layout";
import { ArrowRight, Star, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const CreditCards = () => {
  const creditCards = [
    {
      id: 1,
      name: "Premium Rewards Card",
      issuer: "Chase",
      rating: 4.8,
      annualFee: "$95",
      apr: "16.99% - 23.99%",
      rewards: "2x points on all purchases",
      signupBonus: "60,000 points",
      features: ["No foreign transaction fees", "Travel insurance", "Purchase protection"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      name: "Cash Back Unlimited",
      issuer: "Discover",
      rating: 4.6,
      annualFee: "$0",
      apr: "14.99% - 24.99%",
      rewards: "1.5% cash back on all purchases",
      signupBonus: "$200 cash back",
      features: ["0% intro APR for 15 months", "Free FICO credit score", "Freeze it feature"],
      image: "https://images.unsplash.com/photo-1559526324-593bc191b8c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      name: "Travel Elite Card",
      issuer: "American Express",
      rating: 4.9,
      annualFee: "$695",
      apr: "17.99% - 26.99%",
      rewards: "3x points on travel and dining",
      signupBonus: "100,000 points",
      features: ["Airport lounge access", "Concierge service", "Elite status benefits"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">Credit Cards</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Find the perfect credit card for your lifestyle. Compare rewards, 
              rates, and benefits from top issuers.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-wide">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-2 bg-teal text-white rounded-full hover:bg-teal-dark transition-colors">
              All Cards
            </button>
            <button className="px-6 py-2 bg-gray-100 text-slate rounded-full hover:bg-gray-200 transition-colors">
              Rewards Cards
            </button>
            <button className="px-6 py-2 bg-gray-100 text-slate rounded-full hover:bg-gray-200 transition-colors">
              Cash Back
            </button>
            <button className="px-6 py-2 bg-gray-100 text-slate rounded-full hover:bg-gray-200 transition-colors">
              Travel Cards
            </button>
            <button className="px-6 py-2 bg-gray-100 text-slate rounded-full hover:bg-gray-200 transition-colors">
              No Annual Fee
            </button>
          </div>
        </div>
      </section>

      {/* Credit Cards Grid */}
      <section className="py-16 bg-gray">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creditCards.map((card) => (
              <div key={card.id} className="bg-white rounded-lg shadow-soft overflow-hidden hover-scale">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <img src={card.image} alt={card.name} className="w-16 h-10 object-cover rounded" />
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">{card.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{card.name}</h3>
                  <p className="text-slate mb-4">{card.issuer}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="text-sm text-slate">Annual Fee:</span>
                      <span className="text-sm font-medium">{card.annualFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate">APR:</span>
                      <span className="text-sm font-medium">{card.apr}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate">Rewards:</span>
                      <span className="text-sm font-medium">{card.rewards}</span>
                    </div>
                  </div>
                  
                  <div className="bg-teal-light p-3 rounded-lg mb-4">
                    <p className="text-sm font-medium text-teal-dark">
                      Sign-up Bonus: {card.signupBonus}
                    </p>
                  </div>
                  
                  <ul className="space-y-1 mb-6">
                    {card.features.map((feature, index) => (
                      <li key={index} className="text-sm text-slate flex items-center">
                        <CreditCard className="h-3 w-3 text-teal mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col gap-2">
                    <Link to={`/credit-cards/${card.id}`} className="cta-primary text-center">
                      View Details <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                    </Link>
                    <Link to="/apply" className="cta-outline text-center">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-tight text-center">
          <h2 className="title-lg mb-6">Need Help Choosing?</h2>
          <p className="text-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Our credit card experts can help you find the perfect card for your spending habits and financial goals.
          </p>
          <Link to="/apply" className="cta-primary">
            Get Personalized Recommendations <ArrowRight className="ml-2 h-5 w-5 inline-block" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CreditCards;
