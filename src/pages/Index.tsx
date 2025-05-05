
import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import CreditCard from "../components/ui/CreditCard";
import TestimonialCard from "../components/ui/TestimonialCard";
import { Link } from "react-router-dom";
import { CheckCircle2, TrendingUp, Shield, CreditCard as CardIcon, ArrowRight, ThumbsUp, Award, Clock } from "lucide-react";

const featuredCards = [
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
  },
];

const testimonials = [
  {
    name: "Rajiv Mehta",
    role: "Business Owner",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "PremiumFinance made it incredibly easy to find the perfect credit card for my business needs. The comparison tool saved me hours of research.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Marketing Professional",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "I was looking for a travel rewards card and found exactly what I needed here. The application process was smooth and I got approved quickly.",
    rating: 4,
  },
  {
    name: "Vikram Singh",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    quote: "The detailed card comparisons helped me understand the benefits and choose a card with the best rewards for my spending habits.",
    rating: 5,
  },
];

const Index = () => {
  return (
    <Layout transparentHeader={true}>
      {/* Hero Section */}
      <Hero
        title="Find Your Perfect Financial Match"
        subtitle="Compare the best credit cards, loans, and financial products tailored to your needs. Make smarter financial decisions with expert guidance."
        ctaText="Explore Credit Cards"
        ctaLink="/credit-cards"
        secondaryCtaText="Learn About Loans"
        secondaryCtaLink="/loans"
        backgroundImage="https://images.unsplash.com/photo-1565514020179-026b92b2d70b?ixlib=rb-1.2.1&auto=format&fit=crop&w=3000&q=80"
      />

      {/* Featured Cards Section */}
      <section className="section-spacing bg-gray">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="title-lg mb-4">Featured Credit Cards</h2>
            <p className="subtitle max-w-2xl mx-auto">
              Discover our top-rated credit cards with exclusive benefits, rewards, and special offers
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mb-10">
            {featuredCards.map((card) => (
              <CreditCard key={card.id} {...card} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/credit-cards" className="cta-primary inline-flex items-center">
              View All Credit Cards <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-spacing bg-white">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="title-lg mb-4">Why Choose PremiumFinance</h2>
            <p className="subtitle max-w-2xl mx-auto">
              We're on a mission to make financial products more accessible, transparent, and rewarding for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Benefit 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Curated Options</h3>
              <p className="text-slate">
                We carefully select and present only the best financial products from trusted banks and lenders.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Comparisons</h3>
              <p className="text-slate">
                Our advanced comparison tools make it easy to find products that match your specific needs.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Trusted</h3>
              <p className="text-slate">
                Your information is always protected with bank-level security and we never share your data.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                <ThumbsUp className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Reviews</h3>
              <p className="text-slate">
                Read genuine experiences from real customers to help make informed decisions.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Advice</h3>
              <p className="text-slate">
                Our financial experts provide personalized recommendations and insightful guides.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Approval</h3>
              <p className="text-slate">
                Quick application processes and faster approval times compared to traditional methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-spacing bg-gradient-primary text-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="title-lg mb-4">Explore Our Services</h2>
            <p className="text-slate-light max-w-2xl mx-auto">
              Find the right financial products for every stage of your life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Link to="/credit-cards" className="card-premium hover:translate-y-[-5px] transition-all duration-300 p-6 bg-white text-navy flex flex-col items-center text-center">
              <CardIcon className="h-12 w-12 text-teal mb-4" />
              <h3 className="text-xl font-semibold mb-2">Credit Cards</h3>
              <p className="text-slate mb-4">Find the perfect card for rewards, travel, or building credit.</p>
              <span className="text-teal font-medium mt-auto flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>

            {/* Card 2 */}
            <Link to="/loans" className="card-premium hover:translate-y-[-5px] transition-all duration-300 p-6 bg-white text-navy flex flex-col items-center text-center">
              <TrendingUp className="h-12 w-12 text-teal mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personal Loans</h3>
              <p className="text-slate mb-4">Get competitive interest rates for your personal needs.</p>
              <span className="text-teal font-medium mt-auto flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>

            {/* Card 3 */}
            <Link to="/bnpl" className="card-premium hover:translate-y-[-5px] transition-all duration-300 p-6 bg-white text-navy flex flex-col items-center text-center">
              <Clock className="h-12 w-12 text-teal mb-4" />
              <h3 className="text-xl font-semibold mb-2">Buy Now Pay Later</h3>
              <p className="text-slate mb-4">Shop now and pay in installments with flexible options.</p>
              <span className="text-teal font-medium mt-auto flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>

            {/* Card 4 */}
            <Link to="/business-loans" className="card-premium hover:translate-y-[-5px] transition-all duration-300 p-6 bg-white text-navy flex flex-col items-center text-center">
              <Award className="h-12 w-12 text-teal mb-4" />
              <h3 className="text-xl font-semibold mb-2">Business Loans</h3>
              <p className="text-slate mb-4">Grow your business with tailored financing solutions.</p>
              <span className="text-teal font-medium mt-auto flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing bg-gray">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="title-lg mb-4">What Our Customers Say</h2>
            <p className="subtitle max-w-2xl mx-auto">
              Join thousands of satisfied customers who have found their ideal financial products through PremiumFinance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-navy text-white">
        <div className="container-tight text-center">
          <h2 className="title-lg mb-6">Ready to Find Your Perfect Match?</h2>
          <p className="text-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Browse our wide selection of credit cards and financial products tailored to your unique needs and preferences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/credit-cards" className="cta-primary">
              Explore Credit Cards
            </Link>
            <Link to="/contact" className="cta-outline border-white text-white hover:bg-white/10">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
