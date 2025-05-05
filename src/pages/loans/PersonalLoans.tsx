
import React from "react";
import Layout from "../../components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PersonalLoans = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">Personal Loans</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Get the funds you need with flexible personal loans tailored to your unique financial situation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Loan Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-lg shadow-soft p-8">
                <h2 className="text-2xl font-semibold mb-6">Personal Loan Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex">
                    <div className="h-12 w-12 rounded-full bg-teal-light flex items-center justify-center mr-4">
                      <span className="text-teal font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Fast Approval</h3>
                      <p className="text-slate text-sm">Get approval within 24 hours and funds in your account quickly.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="h-12 w-12 rounded-full bg-teal-light flex items-center justify-center mr-4">
                      <span className="text-teal font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Flexible Terms</h3>
                      <p className="text-slate text-sm">Choose repayment terms that fit your budget and financial goals.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="h-12 w-12 rounded-full bg-teal-light flex items-center justify-center mr-4">
                      <span className="text-teal font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Competitive Rates</h3>
                      <p className="text-slate text-sm">Access competitive interest rates based on your credit profile.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="h-12 w-12 rounded-full bg-teal-light flex items-center justify-center mr-4">
                      <span className="text-teal font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">No Collateral</h3>
                      <p className="text-slate text-sm">Unsecured loans with no need to put up assets as security.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-soft p-8">
                <h2 className="text-2xl font-semibold mb-6">What You Can Use Personal Loans For</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-gray p-4 rounded-lg text-center">
                    <h3 className="font-medium mb-2">Debt Consolidation</h3>
                    <p className="text-slate text-sm">Combine multiple debts into one manageable payment.</p>
                  </div>
                  <div className="bg-gray p-4 rounded-lg text-center">
                    <h3 className="font-medium mb-2">Home Improvements</h3>
                    <p className="text-slate text-sm">Finance renovations and upgrades to your property.</p>
                  </div>
                  <div className="bg-gray p-4 rounded-lg text-center">
                    <h3 className="font-medium mb-2">Major Purchases</h3>
                    <p className="text-slate text-sm">Fund large expenses like appliances or furniture.</p>
                  </div>
                  <div className="bg-gray p-4 rounded-lg text-center">
                    <h3 className="font-medium mb-2">Medical Expenses</h3>
                    <p className="text-slate text-sm">Cover healthcare costs not covered by insurance.</p>
                  </div>
                  <div className="bg-gray p-4 rounded-lg text-center">
                    <h3 className="font-medium mb-2">Education</h3>
                    <p className="text-slate text-sm">Pay for courses, certifications, or other education.</p>
                  </div>
                  <div className="bg-gray p-4 rounded-lg text-center">
                    <h3 className="font-medium mb-2">Wedding Expenses</h3>
                    <p className="text-slate text-sm">Finance your dream wedding and honeymoon.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-soft p-8">
                <h2 className="text-2xl font-semibold mb-6">Personal Loan Process</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="h-10 w-10 rounded-full bg-navy flex items-center justify-center text-white mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Apply Online</h3>
                      <p className="text-slate">Complete our simple online application in just a few minutes.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="h-10 w-10 rounded-full bg-navy flex items-center justify-center text-white mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Quick Verification</h3>
                      <p className="text-slate">We'll verify your details and credit history.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="h-10 w-10 rounded-full bg-navy flex items-center justify-center text-white mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Loan Approval</h3>
                      <p className="text-slate">Receive loan approval and review your personalized offer.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="h-10 w-10 rounded-full bg-navy flex items-center justify-center text-white mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Get Funded</h3>
                      <p className="text-slate">Accept your offer and receive funds in your account.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Application Form & Rates */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-soft p-8">
                <h2 className="text-xl font-semibold mb-6">Check Your Rate</h2>
                <p className="text-slate mb-6">See your personalized rates without affecting your credit score.</p>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Loan Amount</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>₹50,000</option>
                      <option>₹100,000</option>
                      <option>₹200,000</option>
                      <option>₹500,000</option>
                      <option>₹1,000,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Loan Purpose</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>Debt Consolidation</option>
                      <option>Home Improvement</option>
                      <option>Major Purchase</option>
                      <option>Medical Expenses</option>
                      <option>Education</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Credit Score Range</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>Excellent (750+)</option>
                      <option>Good (700-749)</option>
                      <option>Fair (650-699)</option>
                      <option>Below 650</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full cta-primary">
                    Check My Rate
                  </button>
                </form>
                <p className="text-xs text-slate mt-4 text-center">
                  Checking your rate won't affect your credit score.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-soft p-8">
                <h2 className="text-xl font-semibold mb-4">Current Rates</h2>
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-slate">Excellent Credit</span>
                    <span className="font-medium">8.99% - 12.99%</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-slate">Good Credit</span>
                    <span className="font-medium">13.99% - 17.99%</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-slate">Fair Credit</span>
                    <span className="font-medium">18.99% - 23.99%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate">Below 650</span>
                    <span className="font-medium">24.99% - 29.99%</span>
                  </div>
                </div>
                <p className="text-xs text-slate mt-4">
                  Rates are subject to change and may vary based on individual circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-tight text-center">
          <h2 className="title-lg mb-6">Ready to Apply?</h2>
          <p className="text-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Start your application today and get the funds you need for your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/apply" className="cta-primary">
              Apply Now <ArrowRight className="ml-2 h-5 w-5 inline-block" />
            </Link>
            <Link to="/contact" className="cta-outline">
              Speak to an Advisor
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PersonalLoans;
