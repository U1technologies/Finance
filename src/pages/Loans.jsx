
import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import { Link } from "react-router-dom";
import { Calculator, Clock, Shield, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

const Loans = () => {
  const loanTypes = [
    {
      title: "Personal Loans",
      description: "Quick approval personal loans for your immediate financial needs",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      path: "/loans/personal",
      features: ["No collateral required", "Quick approval", "Flexible tenure"],
      interestRate: "10.5% onwards",
      amount: "₹50K - ₹40L"
    },
    {
      title: "Home Loans",
      description: "Affordable home loans to help you buy your dream house",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      path: "/loans/home",
      features: ["Low interest rates", "Long tenure", "Tax benefits"],
      interestRate: "8.5% onwards",
      amount: "₹5L - ₹5Cr"
    },
    {
      title: "Business Loans",
      description: "Fuel your business growth with our tailored business loans",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      path: "/loans/business",
      features: ["Working capital", "Equipment finance", "Business expansion"],
      interestRate: "12% onwards",
      amount: "₹1L - ₹50L"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-teal" />,
      title: "Quick Approval",
      description: "Get loan approval in as little as 24 hours with minimal documentation"
    },
    {
      icon: <Shield className="h-8 w-8 text-teal" />,
      title: "Secure Process",
      description: "Bank-level security ensures your personal information is always protected"
    },
    {
      icon: <Calculator className="h-8 w-8 text-teal" />,
      title: "EMI Calculator",
      description: "Plan your finances with our easy-to-use EMI calculator tools"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-teal" />,
      title: "Competitive Rates",
      description: "Get the best interest rates in the market with transparent terms"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Get the Perfect Loan for Your Needs"
        subtitle="Compare interest rates, EMIs, and loan features from top banks and financial institutions. Quick approval with minimal documentation."
        ctaText="Explore Personal Loans"
        ctaLink="/loans/personal"
        secondaryCtaText="Calculate EMI"
        secondaryCtaLink="/loans/calculator"
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=3000&q=80"
      />

      {/* Loan Types Section */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="title-lg mb-4">Choose Your Loan Type</h2>
            <p className="subtitle max-w-2xl mx-auto">
              Whether you need funds for personal use, buying a home, or growing your business, we have the right loan for you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {loanTypes.map((loan, index) => (
              <div key={index} className="card-premium overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={loan.image} 
                    alt={loan.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{loan.title}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-slate mb-4">{loan.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-slate">Interest Rate</span>
                      <div className="font-semibold text-navy">{loan.interestRate}</div>
                    </div>
                    <div>
                      <span className="text-slate">Loan Amount</span>
                      <div className="font-semibold text-navy">{loan.amount}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {loan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle2 className="h-4 w-4 text-teal mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={loan.path} className="cta-primary w-full text-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-spacing bg-gray">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="title-lg mb-4">Why Choose Our Loans</h2>
            <p className="subtitle max-w-2xl mx-auto">
              Experience hassle-free lending with competitive rates and customer-centric approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-soft text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-teal/10 rounded-lg">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-slate text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-spacing bg-white">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="title-lg mb-4">Simple Application Process</h2>
            <p className="subtitle max-w-2xl mx-auto">
              Get your loan approved in just 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Apply Online</h3>
              <p className="text-slate">Fill out our simple online application form with basic details</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Document Verification</h3>
              <p className="text-slate">Upload required documents for quick verification process</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Get Approved</h3>
              <p className="text-slate">Receive loan approval and funds directly in your account</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-tight text-center">
          <h2 className="title-lg mb-6">Ready to Apply for a Loan?</h2>
          <p className="text-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Start your loan application today and get the funds you need quickly and easily.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/loans/personal" className="cta-primary">
              Apply for Personal Loan
            </Link>
            <Link to="/contact" className="cta-outline border-white text-white hover:bg-white/10">
              Talk to Expert
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Loans;
