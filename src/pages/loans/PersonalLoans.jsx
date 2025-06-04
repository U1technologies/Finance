
import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { Calculator, CheckCircle2, TrendingUp, Clock, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const PersonalLoans = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [tenure, setTenure] = useState(24);
  const [interestRate] = useState(12);

  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / (12 * 100);
    const months = tenure;
    
    const emi = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    return Math.round(emi);
  };

  const loanOffers = [
    {
      bank: "HDFC Bank",
      interestRate: "10.5%",
      processingFee: "₹999",
      amount: "₹50K - ₹40L",
      tenure: "12-60 months",
      rating: 4.7,
      features: ["Quick approval", "No collateral", "Flexible tenure"]
    },
    {
      bank: "ICICI Bank",
      interestRate: "11.25%",
      processingFee: "₹999",
      amount: "₹30K - ₹25L",
      tenure: "12-48 months",
      rating: 4.5,
      features: ["Digital process", "Instant approval", "Competitive rates"]
    },
    {
      bank: "Axis Bank",
      interestRate: "11.5%",
      processingFee: "₹1,499",
      amount: "₹50K - ₹15L",
      tenure: "12-60 months",
      rating: 4.4,
      features: ["Minimal documentation", "Quick disbursal", "Attractive rates"]
    }
  ];

  const eligibilityPoints = [
    "Age between 21-65 years",
    "Minimum monthly income of ₹15,000",
    "Stable employment for 2+ years",
    "Good credit score (650+)",
    "Indian resident with valid documents"
  ];

  const requiredDocs = [
    "Identity proof (Aadhaar/PAN/Passport)",
    "Address proof (Utility bills/Rent agreement)",
    "Income proof (Salary slips/Bank statements)",
    "Employment proof (Appointment letter)",
    "Recent photographs"
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">Personal Loans</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Get instant personal loans with competitive interest rates and flexible repayment options. No collateral required.
            </p>
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section className="py-12 bg-gray">
        <div className="container-tight">
          <div className="bg-white rounded-lg p-6 shadow-soft">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <Calculator className="h-6 w-6 text-teal mr-2" />
              EMI Calculator
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Loan Amount</label>
                  <input
                    type="range"
                    min="50000"
                    max="4000000"
                    step="50000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-slate mt-1">
                    <span>₹50K</span>
                    <span className="font-medium">₹{(loanAmount / 100000).toFixed(1)}L</span>
                    <span>₹40L</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Tenure (Months)</label>
                  <input
                    type="range"
                    min="12"
                    max="60"
                    step="6"
                    value={tenure}
                    onChange={(e) => setTenure(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-slate mt-1">
                    <span>12</span>
                    <span className="font-medium">{tenure} months</span>
                    <span>60</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Interest Rate (per annum)</label>
                  <div className="text-2xl font-bold text-teal">{interestRate}%</div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Loan Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Loan Amount</span>
                    <span className="font-medium">₹{loanAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Interest Rate</span>
                    <span className="font-medium">{interestRate}% p.a.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tenure</span>
                    <span className="font-medium">{tenure} months</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-bold text-teal">
                    <span>Monthly EMI</span>
                    <span>₹{calculateEMI().toLocaleString()}</span>
                  </div>
                </div>
                <Link to="/apply" className="cta-primary w-full mt-4 text-center">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Offers */}
      <section className="py-12 bg-white">
        <div className="container-tight">
          <h2 className="title-md text-center mb-10">Best Personal Loan Offers</h2>
          
          <div className="space-y-6">
            {loanOffers.map((offer, index) => (
              <div key={index} className="card-premium p-6 border hover:shadow-lg transition-all">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{offer.bank}</h3>
                      <div className="flex items-center bg-gray-100 px-2 py-1 rounded">
                        <Star className="h-4 w-4 text-gold fill-gold mr-1" />
                        <span className="text-sm">{offer.rating}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-slate">Interest Rate</span>
                        <div className="font-semibold text-teal">{offer.interestRate}</div>
                      </div>
                      <div>
                        <span className="text-sm text-slate">Processing Fee</span>
                        <div className="font-semibold">{offer.processingFee}</div>
                      </div>
                      <div>
                        <span className="text-sm text-slate">Amount</span>
                        <div className="font-semibold">{offer.amount}</div>
                      </div>
                      <div>
                        <span className="text-sm text-slate">Tenure</span>
                        <div className="font-semibold">{offer.tenure}</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {offer.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-teal/10 text-teal px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Link to="/apply" className="cta-primary text-center">
                      Apply Now
                    </Link>
                    <button className="cta-outline text-center">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-12 bg-gray">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle2 className="h-6 w-6 text-teal mr-2" />
                Eligibility Criteria
              </h3>
              <ul className="space-y-3">
                {eligibilityPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Clock className="h-6 w-6 text-teal mr-2" />
                Required Documents
              </h3>
              <ul className="space-y-3">
                {requiredDocs.map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container-tight text-center">
          <h2 className="title-lg mb-6">Need Funds Urgently?</h2>
          <p className="text-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Get instant personal loan approval with minimal documentation. Apply now and get funds in your account within 24 hours.
          </p>
          <Link to="/apply" className="cta-primary">
            Apply for Personal Loan <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default PersonalLoans;
