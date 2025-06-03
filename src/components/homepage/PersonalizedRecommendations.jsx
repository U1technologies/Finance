
import React, { useState } from 'react';
import { Target, Sparkles, ArrowRight, CreditCard, TrendingUp, Home, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const PersonalizedRecommendations = () => {
  const [selectedGoal, setSelectedGoal] = useState('rewards');
  
  const goals = [
    { id: 'rewards', name: 'Maximize Rewards', icon: Sparkles, color: 'bg-purple-500' },
    { id: 'travel', name: 'Travel Benefits', icon: Car, color: 'bg-blue-500' },
    { id: 'business', name: 'Business Growth', icon: TrendingUp, color: 'bg-green-500' },
    { id: 'home', name: 'Buy a Home', icon: Home, color: 'bg-orange-500' }
  ];
  
  const recommendations = {
    rewards: [
      {
        type: 'Credit Card',
        name: 'Premium Rewards Platinum',
        benefit: '5% Cashback on all purchases',
        why: 'Perfect for maximizing everyday spending rewards',
        link: '/credit-cards/premium-rewards-platinum'
      },
      {
        type: 'Credit Card',
        name: 'Cashback Unlimited',
        benefit: '1.5% unlimited cashback',
        why: 'No category restrictions, earn on everything',
        link: '/credit-cards/cashback-unlimited'
      }
    ],
    travel: [
      {
        type: 'Credit Card',
        name: 'Travel Elite Card',
        benefit: '4x Travel Miles + Lounge Access',
        why: 'Best for frequent travelers and vacation planning',
        link: '/credit-cards/travel-elite'
      },
      {
        type: 'Personal Loan',
        name: 'Travel Loan',
        benefit: 'Low interest rates for vacations',
        why: 'Fund your dream vacation with affordable EMIs',
        link: '/loans/travel'
      }
    ],
    business: [
      {
        type: 'Business Loan',
        name: 'Business Growth Loan',
        benefit: 'Up to ₹50L at competitive rates',
        why: 'Scale your business with flexible repayment options',
        link: '/loans/business'
      },
      {
        type: 'Credit Card',
        name: 'Business Preferred',
        benefit: '3x rewards on business expenses',
        why: 'Manage cash flow and earn rewards on business spending',
        link: '/credit-cards/business-preferred'
      }
    ],
    home: [
      {
        type: 'Home Loan',
        name: 'Home Loan Pro',
        benefit: 'Starting from 8.5% interest rate',
        why: 'Make your dream home affordable with lowest rates',
        link: '/loans/home'
      },
      {
        type: 'Personal Loan',
        name: 'Home Renovation Loan',
        benefit: 'Quick approval for home improvements',
        why: 'Upgrade your home without touching savings',
        link: '/loans/home-renovation'
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-br from-navy to-navy-light text-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <Target className="h-16 w-16 text-gold mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Personalized for You</h2>
          <p className="text-lg text-slate-light max-w-2xl mx-auto">
            Tell us your financial goal and get personalized product recommendations
          </p>
        </div>

        {/* Goal Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {goals.map((goal) => {
            const Icon = goal.icon;
            return (
              <button
                key={goal.id}
                onClick={() => setSelectedGoal(goal.id)}
                className={`p-6 rounded-xl transition-all duration-300 ${
                  selectedGoal === goal.id
                    ? 'bg-white text-navy shadow-xl transform scale-105'
                    : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg ${goal.color} flex items-center justify-center mx-auto mb-3`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm">{goal.name}</h3>
              </button>
            );
          })}
        </div>

        {/* Recommendations */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Recommended for {goals.find(g => g.id === selectedGoal)?.name}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendations[selectedGoal]?.map((rec, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-navy">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-teal/10 text-teal text-xs font-medium rounded-full mb-2">
                        {rec.type}
                      </span>
                      <h4 className="font-bold text-lg">{rec.name}</h4>
                    </div>
                    <CreditCard className="h-8 w-8 text-teal" />
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-teal">{rec.benefit}</p>
                      <p className="text-sm text-slate mt-1">{rec.why}</p>
                    </div>
                    
                    <Link
                      to={rec.link}
                      className="inline-flex items-center text-teal hover:text-teal-dark font-medium transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/credit-score/personalizer"
            className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors inline-flex items-center"
          >
            Get Detailed Recommendations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedRecommendations;
