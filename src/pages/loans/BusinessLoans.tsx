
import React from "react";
import Layout from "../../components/layout/Layout";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessLoans = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">Business Loans</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Fuel your business growth with flexible financing solutions tailored to your company's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-16 bg-white">
        <div className="container-tight">
          <h2 className="text-3xl font-bold mb-10 text-center">Business Financing Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray rounded-lg p-8 hover-scale">
              <h3 className="text-xl font-semibold mb-3">Term Loans</h3>
              <p className="text-slate mb-4">
                Traditional business loans with fixed or variable interest rates and repayment periods.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                  <span>Loan amounts from ₹5 lakhs to ₹5 crores</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                  <span>Terms from 1 to 10 years</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                  <span>Competitive interest rates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                  <span>Fast application process</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link to="/apply" className="cta-secondary">
                  Apply Now
                </Link>
              </div>
            </div>
            
            <div className="bg-gray rounded-lg p-8 hover-scale">
              <h3 className="text-xl font-semibold mb-3">Working Capital Loans</h3>
              <p className="text-slate mb-4">
                Short-term financing to cover operational expenses and cash flow gaps.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                  <span>Quick access to funds</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                  <span>Flexible repayment options</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                  <span>No collateral requirements for established businesses</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                  <span>Revolving credit options available</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link to="/apply" className="cta-secondary">
                  Apply Now
                </Link>
              </div>
            </div>
            
            <div className="bg-gray rounded-lg p-8 hover-scale">
              <h3 className="text-xl font-semibold mb-3">Equipment Financing</h3>
              <p className="text-slate mb-4">
                Loans specifically for purchasing business equipment, machinery, or vehicles.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                  <span>Financing up to 100% of equipment value</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                  <span>Equipment serves as collateral</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                  <span>Tax advantages available</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                  <span>Lease options with purchase opportunities</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link to="/apply" className="cta-secondary">
                  Apply Now
                </Link>
              </div>
            </div>
            
            <div className="bg-gray rounded-lg p-8 hover-scale">
              <h3 className="text-xl font-semibold mb-3">Business Expansion Loans</h3>
              <p className="text-slate mb-4">
                Specialized financing for opening new locations, entering new markets, or scaling operations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                  <span>Higher loan amounts for significant growth</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                  <span>Customized repayment structures</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                  <span>Business plan review and advisory</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                  <span>Optional business coaching</span>
                </li>
              </ul>
              <div className="mt-auto">
                <Link to="/apply" className="cta-secondary">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-gray">
        <div className="container-tight">
          <div className="bg-white rounded-lg shadow-soft p-8">
            <h2 className="text-2xl font-semibold mb-8 text-center">Business Loan Eligibility</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Basic Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                    <span>Business operational for at least 6 months</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                    <span>Monthly revenue of at least ₹50,000</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                    <span>Valid business registration/licenses</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                    <span>Good business credit history</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                    <span>Owner's personal credit score above 650</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Required Documentation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                    <span>Business PAN and GST registration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                    <span>Bank statements for the last 6 months</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                    <span>Financial statements (Balance sheet, P&L)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                    <span>Business plan (for new ventures/expansion)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal mr-2 mt-0.5" />
                    <span>Proof of business ownership</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/eligibility-check" className="cta-secondary">
                Check Your Eligibility
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-tight">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose PremiumFinance for Business Loans</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Fast Approval</h3>
              <p className="text-slate">
                Get decisions within 24-48 hours and funding as quickly as same day after approval.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Dedicated Advisor</h3>
              <p className="text-slate">
                Work with a specialized business loan advisor who understands your industry needs.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Flexible Terms</h3>
              <p className="text-slate">
                Customizable repayment schedules tailored to your business cash flow patterns.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Competitive Rates</h3>
              <p className="text-slate">
                Access to some of the most competitive business loan rates in the market.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Secure Process</h3>
              <p className="text-slate">
                Bank-level security for all your business and financial information.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Simple Application</h3>
              <p className="text-slate">
                Streamlined online application process with minimal paperwork required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-tight text-center">
          <h2 className="title-lg mb-6">Ready to Grow Your Business?</h2>
          <p className="text-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Get the funding you need to take your business to the next level. Apply online in minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/apply" className="cta-primary">
              Apply Now <ArrowRight className="ml-2 h-5 w-5 inline-block" />
            </Link>
            <Link to="/contact" className="cta-outline">
              Speak to a Business Advisor
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessLoans;
