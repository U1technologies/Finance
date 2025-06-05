
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy-light to-teal overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gold rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Find Your Perfect
                <span className="text-gold block">Financial Match</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-light max-w-lg">
                Compare the best credit cards, loans, and financial products tailored to your needs. Make smarter financial decisions with expert guidance.
              </p>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-teal" />
                <span>Bank-Level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-teal" />
                <span>10,000+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-teal" />
                <span>Expert Recommended</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/credit-cards" 
                className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Explore Credit Cards
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/loans" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy transition-all duration-300 flex items-center justify-center"
              >
                Check Loan Offers
              </Link>
            </div>
          </div>
          
          {/* Interactive Card Preview */}
          <div className="relative animate-scale-in">
            <div className="relative">
              {/* Floating Credit Cards */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 transform rotate-6 bg-gradient-to-r from-gold to-yellow-500 rounded-2xl shadow-2xl animate-pulse"></div>
                <div className="absolute inset-0 transform -rotate-3 bg-gradient-to-r from-teal to-blue-500 rounded-2xl shadow-2xl animate-pulse delay-500"></div>
                <div className="relative bg-gradient-to-r from-navy to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm opacity-80">Premium Card</p>
                        <h3 className="text-xl font-bold">Elite Rewards</h3>
                      </div>
                      <div className="w-12 h-8 bg-white/20 rounded"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-white/20 rounded w-3/4"></div>
                      <div className="h-2 bg-white/20 rounded w-1/2"></div>
                    </div>
                    <div className="pt-4">
                      <p className="text-2xl font-bold">5% Cashback</p>
                      <p className="text-sm opacity-80">on all purchases</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
