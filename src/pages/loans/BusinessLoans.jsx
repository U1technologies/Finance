
import React from "react";
import Layout from "../../components/layout/Layout";
import { ArrowRight, Building, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessLoans = () => {
  const loanTypes = [
    {
      title: "Term Loans",
      description: "Traditional financing with fixed payments over a set period.",
      features: ["$10K - $5M loan amounts", "Fixed or variable rates", "1-10 year terms"],
      icon: Building
    },
    {
      title: "Lines of Credit",
      description: "Flexible financing that you can draw from as needed.",
      features: ["$10K - $1M credit lines", "Only pay interest on funds used", "Revolving credit"],
      icon: TrendingUp
    },
    {
      title: "Equipment Financing",
      description: "Loans specifically for purchasing business equipment.",
      features: ["100% financing available", "Equipment serves as collateral", "Competitive rates"],
      icon: Zap
    },
    {
      title: "SBA Loans",
      description: "Government-backed loans with favorable terms for small businesses.",
      features: ["Lower down payments", "Longer repayment terms", "Competitive interest rates"],
      icon: Users
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">Business Loans</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Fuel your business growth with flexible financing solutions. 
              From startups to established enterprises, find the right funding for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-16 bg-gray">
        <div className="container-wide">
          <h2 className="title-lg text-center mb-12">Business Financing Options</h2>
          
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

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container-tight">
          <h2 className="title-lg text-center mb-12">Common Business Loan Uses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-lg font-medium mb-2">Expansion</h3>
              <p className="text-slate text-sm">Open new locations, hire staff, or enter new markets with expansion financing.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-lg font-medium mb-2">Equipment</h3>
              <p className="text-slate text-sm">Purchase or upgrade equipment, machinery, or technology for your business.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-lg font-medium mb-2">Working Capital</h3>
              <p className="text-slate text-sm">Manage cash flow, cover operational expenses, or bridge seasonal gaps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="title-md mb-6">Qualification Requirements</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Time in Business</h3>
                    <p className="text-slate text-sm">Typically 2+ years of business operation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Annual Revenue</h3>
                    <p className="text-slate text-sm">Minimum $100K+ in annual revenue</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Credit Score</h3>
                    <p className="text-slate text-sm">Personal credit score of 650+ preferred</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Financial Documents</h3>
                    <p className="text-slate text-sm">Tax returns, bank statements, financial statements</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-soft p-8">
              <h3 className="text-xl font-semibold mb-4">Get Pre-qualified</h3>
              <p className="text-slate mb-6">
                Answer a few quick questions to see which business loan options you may qualify for.
              </p>
              <Link to="/apply" className="cta-primary w-full text-center block">
                Start Pre-qualification
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-tight text-center">
          <h2 className="title-lg mb-6">Ready to Grow Your Business?</h2>
          <p className="text-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Apply for business financing and get the capital you need to take your business to the next level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/apply" className="cta-primary">
              Apply Now <ArrowRight className="ml-2 h-5 w-5 inline-block" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessLoans;
