
import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import CreditCard from "../components/ui/CreditCard";
import CardFilters from "../components/ui/CardFilters";
import CardCategories from "../components/ui/CardCategories";
import CardComparison from "../components/ui/CardComparison";
import { ArrowRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";

// Sample credit card data
const allCards = [
  {
    id: "premium-rewards-platinum",
    name: "Premium Rewards Platinum",
    bank: "Global Bank",
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    annualFee: "₹5,000",
    interestRate: "3.5% p.m.",
    rewards: "5% Cashback",
    rating: 4.8,
    featured: true,
    category: "cashback",
    feeType: "high",
    rewardRate: "5%",
    processingFee: "₹999",
    creditScore: "750+"
  },
  {
    id: "travel-elite",
    name: "Travel Elite Card",
    bank: "Axis Bank",
    image: "https://images.unsplash.com/photo-1559771252-0a58d844c9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    annualFee: "₹2,500",
    interestRate: "3.2% p.m.",
    rewards: "4x Travel Miles",
    rating: 4.6,
    category: "travel",
    feeType: "medium",
    rewardRate: "4x Miles",
    processingFee: "₹750",
    creditScore: "700+"
  },
  {
    id: "platinum-lifestyle",
    name: "Platinum Lifestyle",
    bank: "HDFC Bank",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    annualFee: "₹2,000",
    interestRate: "3.4% p.m.",
    rewards: "Lifestyle Benefits",
    rating: 4.5,
    category: "lifestyle",
    feeType: "medium"
  },
  {
    id: "freedom-unlimited",
    name: "Freedom Unlimited",
    bank: "City Bank",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    annualFee: "₹0",
    interestRate: "3.8% p.m.",
    rewards: "1.5% Cashback",
    rating: 4.3,
    category: "cashback",
    feeType: "no-fee"
  },
  {
    id: "business-preferred",
    name: "Business Preferred",
    bank: "Global Bank",
    image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    annualFee: "₹3,000",
    interestRate: "3.3% p.m.",
    rewards: "3x on Business",
    rating: 4.7,
    category: "points",
    feeType: "medium"
  },
  {
    id: "miles-explorer",
    name: "Miles Explorer",
    bank: "ICICI Bank",
    image: "https://images.unsplash.com/photo-1564594985645-4427056e22e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    annualFee: "₹4,000",
    interestRate: "3.6% p.m.",
    rewards: "2x Air Miles",
    rating: 4.4,
    category: "miles",
    feeType: "high"
  },
  {
    id: "everyday-rewards",
    name: "Everyday Rewards",
    bank: "SBI Card",
    image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    annualFee: "₹500",
    interestRate: "3.5% p.m.",
    rewards: "2% on Groceries",
    rating: 4.2,
    category: "points",
    feeType: "low"
  },
  {
    id: "student-first",
    name: "Student First",
    bank: "Axis Bank",
    image: "https://images.unsplash.com/photo-1571867424488-4565932edb41?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    annualFee: "₹0",
    interestRate: "3.7% p.m.",
    rewards: "1% Cashback",
    rating: 4.0,
    category: "cashback",
    feeType: "no-fee"
  },
];

const CreditCards = () => {
  const [searchParams] = useSearchParams();
  const [filteredCards, setFilteredCards] = useState(allCards);
  const [loading, setLoading] = useState(false);
  const [initialFilters, setInitialFilters] = useState({
    bank: '',
    fee: '',
    rewards: '',
    search: '',
  });

  // Extract unique banks for filter
  const banks = [...new Set(allCards.map(card => card.bank))];

  // Set initial filters based on URL parameters
  useEffect(() => {
    const rewards = searchParams.get('rewards');
    const fee = searchParams.get('fee');
    const bank = searchParams.get('bank');
    const search = searchParams.get('search');

    const newFilters = {
      rewards: rewards || '',
      fee: fee || '',
      bank: bank || '',
      search: search || '',
    };

    setInitialFilters(newFilters);
    handleFilterChange(newFilters);
  }, [searchParams]);

  // Handle filter changes
  const handleFilterChange = (filters: any) => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let results = [...allCards];
      
      // Filter by bank
      if (filters.bank) {
        results = results.filter(card => card.bank === filters.bank);
      }
      
      // Filter by fee
      if (filters.fee) {
        results = results.filter(card => card.feeType === filters.fee);
      }
      
      // Filter by rewards
      if (filters.rewards) {
        results = results.filter(card => card.category === filters.rewards);
      }
      
      // Filter by search term
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        results = results.filter(
          card => 
            card.name.toLowerCase().includes(searchTerm) || 
            card.bank.toLowerCase().includes(searchTerm)
        );
      }
      
      setFilteredCards(results);
      setLoading(false);
    }, 500);
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">Compare Credit Cards</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Find the perfect credit card for your lifestyle, spending habits, and financial goals. Compare features, benefits, and rewards all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-10 bg-white border-b border-gray-dark/10">
        <div className="container-wide">
          <CardCategories />
        </div>
      </section>

      {/* Card Listing Section */}
      <section className="py-12 bg-gray">
        <div className="container-wide">
          {/* Comparison Feature */}
          <CardComparison allCards={allCards} />
          
          {/* Filters */}
          <CardFilters onFilterChange={handleFilterChange} banks={banks} initialFilters={initialFilters} />
          
          {/* Results */}
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-lg font-medium">
              {filteredCards.length} {filteredCards.length === 1 ? 'Card' : 'Cards'} Found
            </h2>
          </div>
          
          {/* Cards Grid */}
          {loading ? (
            <div className="py-20 text-center">
              <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-teal border-t-transparent"></div>
              <p className="mt-4 text-slate">Loading cards...</p>
            </div>
          ) : filteredCards.length === 0 ? (
            <div className="py-16 text-center">
              <h3 className="text-xl font-medium mb-2">No cards match your filters</h3>
              <p className="text-slate mb-6">Try adjusting your filter criteria to see more results</p>
              <button 
                onClick={() => handleFilterChange({})} 
                className="cta-outline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {filteredCards.map((card) => (
                <CreditCard key={card.id} {...card} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-navy text-white">
        <div className="container-tight text-center">
          <h2 className="title-lg mb-6">Need Help Choosing?</h2>
          <p className="text-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Our financial experts can help you find the perfect credit card for your specific needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="cta-primary">
              Talk to an Expert <ArrowRight className="ml-2 h-5 w-5 inline-block" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CreditCards;
