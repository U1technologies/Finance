
import React from "react";
import Layout from "../components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Loans = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">Loans</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Discover flexible financing solutions tailored to your unique needs. 
              Compare rates, terms, and find the perfect loan for your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Loan Categories */}
      <section className="py-16 bg-gray">
        <div className="container-wide">
          <h2 className="title-lg text-center mb-12">Explore Loan Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Personal Loans */}
            <div className="bg-white rounded-lg shadow-soft p-8 hover-scale">
              <h3 className="text-xl font-semibold mb-4">Personal Loans</h3>
              <p className="text-slate mb-6">
                Flexible financing for your personal needs. Get competitive rates and 
                tailored repayment plans.
              </p>
              <Link to="/loans/personal" className="text-teal font-medium flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            {/* Home Loans */}
            <div className="bg-white rounded-lg shadow-soft p-8 hover-scale">
              <h3 className="text-xl font-semibold mb-4">Home Loans</h3>
              <p className="text-slate mb-6">
                Find the perfect mortgage solution with competitive interest rates 
                and flexible terms.
              </p>
              <Link to="/loans/home" className="text-teal font-medium flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            {/* Business Loans */}
            <div className="bg-white rounded-lg shadow-soft p-8 hover-scale">
              <h3 className="text-xl font-semibold mb-4">Business Loans</h3>
              <p className="text-slate mb-6">
                Fuel your business growth with tailored financing solutions for 
                enterprises of all sizes.
              </p>
              <Link to="/loans/business" className="text-teal font-medium flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-tight text-center">
          <h2 className="title-lg mb-6">Ready to Get Started?</h2>
          <p className="text-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Our financial experts can help you find the perfect loan for your specific needs and goals.
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

export default Loans;
