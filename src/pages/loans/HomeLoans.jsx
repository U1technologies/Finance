
import React from "react";
import Layout from "../../components/layout/Layout";
import { ArrowRight, Home, Calculator, FileText, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";

const HomeLoans = () => {
  const loanTypes = [
    {
      title: "Conventional Loans",
      description: "Traditional mortgages with competitive rates and flexible terms.",
      features: ["Down payment as low as 3%", "Fixed or adjustable rates", "No mortgage insurance with 20% down"],
      icon: Home
    },
    {
      title: "FHA Loans",
      description: "Government-backed loans with lower down payment requirements.",
      features: ["Down payment as low as 3.5%", "Lower credit score requirements", "Assumable mortgages"],
      icon: Calculator
    },
    {
      title: "VA Loans",
      description: "Exclusive benefits for military service members and veterans.",
      features: ["No down payment required", "No private mortgage insurance", "Competitive interest rates"],
      icon: FileText
    },
    {
      title: "USDA Loans",
      description: "Rural development loans for eligible properties in qualifying areas.",
      features: ["No down payment required", "Below-market interest rates", "Rural and suburban areas"],
      icon: TrendingDown
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">Home Loans</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Find the perfect mortgage for your dream home. Compare rates, terms, 
              and programs designed to help you become a homeowner.
            </p>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-16 bg-gray">
        <div className="container-wide">
          <h2 className="title-lg text-center mb-12">Home Loan Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loanTypes.map((loan, index) => {
              const IconComponent = loan.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-soft p-8 hover-scale">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-teal-light rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-teal" />
                    </div>
                    <h3 className="text-xl font-semibold">{loan.title}</h3>
                  </div>
                  <p className="text-slate mb-6">{loan.description}</p>
                  <ul className="space-y-2">
                    {loan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-slate flex items-center">
                        <ArrowRight className="h-3 w-3 text-teal mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container-tight">
          <h2 className="title-lg text-center mb-12">Home Loan Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal">1</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Pre-qualification</h3>
              <p className="text-slate text-sm">Get an estimate of how much you can borrow based on your financial situation.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal">2</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Shop for Homes</h3>
              <p className="text-slate text-sm">Find your perfect home within your budget and get pre-approved for financing.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal">3</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Apply & Process</h3>
              <p className="text-slate text-sm">Submit your application with all required documentation for review.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal">4</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Close & Move</h3>
              <p className="text-slate text-sm">Complete the closing process and get the keys to your new home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="py-16 bg-teal text-white">
        <div className="container-tight text-center">
          <h2 className="title-lg mb-6">Calculate Your Monthly Payment</h2>
          <p className="text-teal-light text-lg mb-8 max-w-2xl mx-auto">
            Use our mortgage calculator to estimate your monthly payments and see how different 
            loan terms affect your budget.
          </p>
          <Link to="/apply" className="bg-white text-teal px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
            Use Calculator <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-tight text-center">
          <h2 className="title-lg mb-6">Ready to Buy Your Home?</h2>
          <p className="text-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Get pre-approved for a home loan and start your homebuying journey with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/apply" className="cta-primary">
              Get Pre-approved <ArrowRight className="ml-2 h-5 w-5 inline-block" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomeLoans;
