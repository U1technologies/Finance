import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

const EligibilityCalculator = () => {
  const [formData, setFormData] = useState({
    income: '',
    age: '',
    employmentType: '',
    creditScore: '',
    existingLoans: ''
  });
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateEligibility = (e) => {
    e.preventDefault();
    
    const income = parseInt(formData.income);
    const age = parseInt(formData.age);
    const creditScore = parseInt(formData.creditScore);
    const existingLoans = parseInt(formData.existingLoans);
    
    let eligibilityScore = 0;
    let recommendations = [];
    
    // Income scoring
    if (income >= 100000) eligibilityScore += 30;
    else if (income >= 50000) eligibilityScore += 20;
    else if (income >= 25000) eligibilityScore += 10;
    
    // Age scoring
    if (age >= 25 && age <= 55) eligibilityScore += 20;
    else if (age >= 21 && age <= 65) eligibilityScore += 15;
    
    // Employment scoring
    if (formData.employmentType === 'salaried') eligibilityScore += 15;
    else if (formData.employmentType === 'business') eligibilityScore += 10;
    
    // Credit score scoring
    if (creditScore >= 750) eligibilityScore += 25;
    else if (creditScore >= 700) eligibilityScore += 20;
    else if (creditScore >= 650) eligibilityScore += 10;
    
    // Existing loans penalty
    if (existingLoans > 0) eligibilityScore -= 10;
    
    // Generate recommendations
    if (eligibilityScore >= 70) {
      recommendations = [
        'Premium Credit Cards with high limits',
        'Personal Loans up to ₹50 lakhs',
        'Business Loans with attractive rates',
        'Home Loans with preferential rates'
      ];
    } else if (eligibilityScore >= 50) {
      recommendations = [
        'Standard Credit Cards',
        'Personal Loans up to ₹25 lakhs',
        'Secured Credit Cards',
        'EMI Cards for purchases'
      ];
    } else {
      recommendations = [
        'Secured Credit Cards',
        'Small personal loans',
        'Improve credit score first',
        'Consider a co-applicant'
      ];
    }
    
    setResult({
      score: eligibilityScore,
      grade: eligibilityScore >= 70 ? 'Excellent' : eligibilityScore >= 50 ? 'Good' : 'Fair',
      recommendations
    });
    setShowResult(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-wide">
        <div className="text-center mb-12">
          <Calculator className="h-16 w-16 text-teal mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Eligibility Calculator</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Get instant eligibility check for credit cards and loans based on your profile
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Check Your Eligibility</h3>
              
              <form onSubmit={calculateEligibility} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Monthly Income (₹)</label>
                  <input
                    type="number"
                    name="income"
                    value={formData.income}
                    onChange={handleInputChange}
                    placeholder="Enter your monthly income"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Enter your age"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Employment Type</label>
                  <select
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent"
                    required
                  >
                    <option value="">Select employment type</option>
                    <option value="salaried">Salaried</option>
                    <option value="business">Business Owner</option>
                    <option value="freelancer">Freelancer</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Credit Score (if known)</label>
                  <input
                    type="number"
                    name="creditScore"
                    value={formData.creditScore}
                    onChange={handleInputChange}
                    placeholder="Enter your credit score (300-850)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Existing Loan EMIs (₹)</label>
                  <input
                    type="number"
                    name="existingLoans"
                    value={formData.existingLoans}
                    onChange={handleInputChange}
                    placeholder="Total monthly EMI amount"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-teal text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-dark transition-colors flex items-center justify-center"
                >
                  Calculate Eligibility
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Results */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {!showResult ? (
                <div className="text-center py-16">
                  <Calculator className="h-20 w-20 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Get Your Results</h3>
                  <p className="text-gray-500">Fill out the form to see your eligibility score and recommendations</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
                      result.score >= 70 ? 'bg-green-100' : result.score >= 50 ? 'bg-yellow-100' : 'bg-red-100'
                    }`}>
                      {result.score >= 70 ? (
                        <CheckCircle className="h-10 w-10 text-green-600" />
                      ) : (
                        <AlertCircle className="h-10 w-10 text-yellow-600" />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Eligibility Score</h3>
                    <div className="text-4xl font-bold text-teal mb-2">{result.score}/100</div>
                    <span className={`inline-block px-4 py-2 rounded-full text-white font-medium ${
                      result.score >= 70 ? 'bg-green-500' : result.score >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}>
                      {result.grade}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Recommended Products:</h4>
                    <ul className="space-y-2">
                      {result.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button
                    onClick={() => setShowResult(false)}
                    className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Calculate Again
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilityCalculator;
