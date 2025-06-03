
import React, { useState } from 'react';
import { ArrowRight, Star, Zap, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmartComparison = () => {
  const [selectedCategory, setSelectedCategory] = useState('credit-cards');
  
  const comparisonData = {
    'credit-cards': [
      {
        id: 1,
        name: 'Premium Rewards Platinum',
        bank: 'Global Bank',
        rating: 4.8,
        annualFee: '₹5,000',
        rewards: '5% Cashback',
        highlight: 'Best for Rewards',
        features: ['Airport Lounge Access', 'Welcome Bonus ₹5,000', 'Fuel Surcharge Waiver']
      },
      {
        id: 2,
        name: 'Travel Elite Card',
        bank: 'Axis Bank',
        rating: 4.6,
        annualFee: '₹2,500',
        rewards: '4x Travel Miles',
        highlight: 'Best for Travel',
        features: ['Free Travel Insurance', '2x Miles on International', 'Priority Check-in']
      },
      {
        id: 3,
        name: 'Everyday Cashback',
        bank: 'HDFC Bank',
        rating: 4.5,
        annualFee: '₹0',
        rewards: '2% Cashback',
        highlight: 'No Annual Fee',
        features: ['No Annual Fee', 'EMI Conversion', 'Online Shopping Rewards']
      }
    ],
    'loans': [
      {
        id: 1,
        name: 'Instant Personal Loan',
        bank: 'ICICI Bank',
        rating: 4.7,
        annualFee: '10.99% onwards',
        rewards: 'Quick Approval',
        highlight: 'Lowest Interest',
        features: ['Same Day Disbursal', 'No Collateral', 'Flexible Tenure']
      },
      {
        id: 2,
        name: 'Business Growth Loan',
        bank: 'Axis Bank',
        rating: 4.5,
        annualFee: '12.5% onwards',
        rewards: 'Up to ₹50L',
        highlight: 'High Amount',
        features: ['Minimal Documentation', 'Quick Processing', 'Flexible Repayment']
      }
    ]
  };

  const categories = [
    { id: 'credit-cards', name: 'Credit Cards', icon: Zap },
    { id: 'loans', name: 'Personal Loans', icon: TrendingUp },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Product Comparison</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Compare top financial products side by side and find the perfect match for your needs
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg flex">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-md font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-teal text-white shadow-md'
                      : 'text-slate hover:text-teal'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-navy to-navy-light text-white">
                <tr>
                  <th className="text-left p-6 font-semibold">Product</th>
                  <th className="text-center p-6 font-semibold">Rating</th>
                  <th className="text-center p-6 font-semibold">
                    {selectedCategory === 'credit-cards' ? 'Annual Fee' : 'Interest Rate'}
                  </th>
                  <th className="text-center p-6 font-semibold">Key Benefit</th>
                  <th className="text-center p-6 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData[selectedCategory]?.map((product, index) => (
                  <tr key={product.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-6">
                      <div>
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <p className="text-slate text-sm">{product.bank}</p>
                        <span className="inline-block mt-2 px-3 py-1 bg-teal/10 text-teal text-xs font-medium rounded-full">
                          {product.highlight}
                        </span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center">
                        <Star className="h-4 w-4 text-gold fill-gold mr-1" />
                        <span className="font-semibold">{product.rating}</span>
                      </div>
                    </td>
                    <td className="p-6 text-center font-semibold text-teal">
                      {product.annualFee}
                    </td>
                    <td className="p-6 text-center font-semibold">
                      {product.rewards}
                    </td>
                    <td className="p-6 text-center">
                      <Link
                        to={selectedCategory === 'credit-cards' ? `/credit-cards/${product.id}` : `/loans/${product.id}`}
                        className="bg-teal text-white px-4 py-2 rounded-lg hover:bg-teal-dark transition-colors inline-flex items-center"
                      >
                        View Details
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            to={selectedCategory === 'credit-cards' ? '/credit-cards' : '/loans'}
            className="cta-primary inline-flex items-center"
          >
            View All {categories.find(c => c.id === selectedCategory)?.name}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SmartComparison;
