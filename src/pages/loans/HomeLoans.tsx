
import React from "react";
import Layout from "../../components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomeLoans = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">Home Loans</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Find the perfect mortgage solution to help you buy your dream home or refinance your existing property.
            </p>
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="py-16 bg-white">
        <div className="container-tight">
          <h2 className="text-3xl font-bold mb-10 text-center">Home Loan Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray rounded-lg p-6 hover-scale">
              <h3 className="text-xl font-semibold mb-3">Fixed Rate Mortgage</h3>
              <p className="text-slate mb-4">
                Secure a consistent interest rate and monthly payment for the life of your loan. Perfect for those who value stability.
              </p>
              <ul className="text-slate space-y-2 mb-6">
                <li>• Predictable monthly payments</li>
                <li>• Protection from interest rate increases</li>
                <li>• Terms of 10, 15, 20, or 30 years</li>
              </ul>
              <Link to="/apply" className="text-teal font-medium flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gray rounded-lg p-6 hover-scale">
              <h3 className="text-xl font-semibold mb-3">Adjustable Rate Mortgage</h3>
              <p className="text-slate mb-4">
                Start with lower rates that may adjust over time. Ideal for those planning to move or refinance within a few years.
              </p>
              <ul className="text-slate space-y-2 mb-6">
                <li>• Lower initial interest rates</li>
                <li>• Fixed rate for initial period (3-10 years)</li>
                <li>• Rate adjusts based on market conditions</li>
              </ul>
              <Link to="/apply" className="text-teal font-medium flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gray rounded-lg p-6 hover-scale">
              <h3 className="text-xl font-semibold mb-3">Refinance Options</h3>
              <p className="text-slate mb-4">
                Replace your existing mortgage with a new one to secure better terms, lower rates, or access home equity.
              </p>
              <ul className="text-slate space-y-2 mb-6">
                <li>• Lower your monthly payment</li>
                <li>• Reduce your interest rate</li>
                <li>• Convert equity to cash</li>
              </ul>
              <Link to="/apply" className="text-teal font-medium flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-gray">
        <div className="container-tight">
          <div className="bg-white rounded-lg shadow-soft p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Mortgage Calculator</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Property Value</label>
                    <input type="text" placeholder="₹5,000,000" className="w-full p-3 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Down Payment</label>
                    <input type="text" placeholder="₹1,000,000" className="w-full p-3 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Interest Rate (%)</label>
                    <input type="text" placeholder="7.5%" className="w-full p-3 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Loan Term (Years)</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>10</option>
                      <option>15</option>
                      <option>20</option>
                      <option selected>30</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full cta-primary">
                    Calculate
                  </button>
                </form>
              </div>
              
              <div className="bg-gray p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Estimated Payment</h3>
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-slate">Principal & Interest</span>
                    <span className="font-medium">₹30,000/month</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-slate">Property Tax</span>
                    <span className="font-medium">₹5,000/month</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-slate">Home Insurance</span>
                    <span className="font-medium">₹2,000/month</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total Payment</span>
                    <span>₹37,000/month</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate">Total Loan Amount</span>
                    <span>₹4,000,000</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-slate">Total Interest Paid</span>
                    <span>₹6,800,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container-tight">
          <h2 className="text-3xl font-bold mb-10 text-center">Home Loan Process</h2>
          
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-8 top-8 bottom-8 w-1 bg-teal hidden md:block"></div>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 flex items-center mb-4 md:mb-0">
                  <div className="h-16 w-16 bg-teal rounded-full flex items-center justify-center text-white text-xl font-bold z-10">
                    1
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-3">Pre-Approval</h3>
                  <p className="text-slate">
                    Get pre-approved to understand how much home you can afford. This step involves 
                    checking your credit history, income verification, and assessing your financial situation.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 flex items-center mb-4 md:mb-0">
                  <div className="h-16 w-16 bg-teal rounded-full flex items-center justify-center text-white text-xl font-bold z-10">
                    2
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-3">Home Shopping</h3>
                  <p className="text-slate">
                    With pre-approval in hand, find your dream home with confidence knowing exactly 
                    what you can afford. Work with a real estate agent to navigate the market.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 flex items-center mb-4 md:mb-0">
                  <div className="h-16 w-16 bg-teal rounded-full flex items-center justify-center text-white text-xl font-bold z-10">
                    3
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-3">Loan Application</h3>
                  <p className="text-slate">
                    Submit your full mortgage application with details about the property you've 
                    selected. We'll guide you through required documentation and next steps.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 flex items-center mb-4 md:mb-0">
                  <div className="h-16 w-16 bg-teal rounded-full flex items-center justify-center text-white text-xl font-bold z-10">
                    4
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-3">Processing & Underwriting</h3>
                  <p className="text-slate">
                    Our team reviews your application, verifies information, orders property 
                    appraisal, and performs a detailed analysis of your financial profile.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 flex items-center mb-4 md:mb-0">
                  <div className="h-16 w-16 bg-teal rounded-full flex items-center justify-center text-white text-xl font-bold z-10">
                    5
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-3">Closing</h3>
                  <p className="text-slate">
                    After approval, review and sign final loan documents, pay closing costs, 
                    and complete the home purchase. Receive your keys and celebrate your new home!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-tight text-center">
          <h2 className="title-lg mb-6">Ready to Start Your Home Buying Journey?</h2>
          <p className="text-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Speak with our mortgage specialists to explore your options and get pre-approved today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/apply" className="cta-primary">
              Apply for Pre-Approval <ArrowRight className="ml-2 h-5 w-5 inline-block" />
            </Link>
            <Link to="/contact" className="cta-outline">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomeLoans;
