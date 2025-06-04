
import React from "react";
import Layout from "../components/layout/Layout";
import { ArrowRight, TrendingUp, Calculator, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const CreditScore = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">Credit Score</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Understand, monitor, and improve your credit score. Get free access to your credit report 
              and personalized tips to boost your financial health.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-gray">
        <div className="container-wide">
          <h2 className="title-lg text-center mb-12">Credit Score Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-soft p-8 hover-scale">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-teal-light rounded-lg flex items-center justify-center mr-4">
                  <Calculator className="h-6 w-6 text-teal" />
                </div>
                <h3 className="text-xl font-semibold">Credit Score Calculator</h3>
              </div>
              <p className="text-slate mb-6">
                Estimate your credit score based on your financial profile and see how different factors impact your score.
              </p>
              <Link to="/credit-score/calculator" className="text-teal font-medium flex items-center">
                Try Calculator <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-soft p-8 hover-scale">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-teal-light rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-teal" />
                </div>
                <h3 className="text-xl font-semibold">Credit Score Personalizer</h3>
              </div>
              <p className="text-slate mb-6">
                Get personalized recommendations to improve your credit score based on your specific situation.
              </p>
              <Link to="/credit-score/personalizer" className="text-teal font-medium flex items-center">
                Get Recommendations <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Score Ranges */}
      <section className="py-16 bg-white">
        <div className="container-tight">
          <h2 className="title-lg text-center mb-12">Understanding Credit Score Ranges</h2>
          
          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-green-800">Exceptional</h3>
                  <p className="text-green-600">You qualify for the best rates and terms</p>
                </div>
                <span className="text-2xl font-bold text-green-800">800-850</span>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-blue-800">Very Good</h3>
                  <p className="text-blue-600">You qualify for favorable rates and terms</p>
                </div>
                <span className="text-2xl font-bold text-blue-800">740-799</span>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800">Good</h3>
                  <p className="text-yellow-600">You qualify for competitive rates</p>
                </div>
                <span className="text-2xl font-bold text-yellow-800">670-739</span>
              </div>
            </div>
            
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-orange-800">Fair</h3>
                  <p className="text-orange-600">You may qualify with higher rates</p>
                </div>
                <span className="text-2xl font-bold text-orange-800">580-669</span>
              </div>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-red-800">Poor</h3>
                  <p className="text-red-600">Credit building recommended</p>
                </div>
                <span className="text-2xl font-bold text-red-800">300-579</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factors Section */}
      <section className="py-16 bg-gray">
        <div className="container-tight">
          <h2 className="title-lg text-center mb-12">What Affects Your Credit Score</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-20 w-20 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal">35%</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Payment History</h3>
              <p className="text-slate text-sm">Your track record of making payments on time is the most important factor.</p>
            </div>
            
            <div className="text-center">
              <div className="h-20 w-20 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal">30%</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Credit Utilization</h3>
              <p className="text-slate text-sm">How much of your available credit you're using affects your score significantly.</p>
            </div>
            
            <div className="text-center">
              <div className="h-20 w-20 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal">15%</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Credit History Length</h3>
              <p className="text-slate text-sm">The length of time you've had credit accounts impacts your score.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="text-center">
              <div className="h-20 w-20 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal">10%</span>
              </div>
              <h3 className="text-lg font-medium mb-2">New Credit</h3>
              <p className="text-slate text-sm">Recent credit inquiries and new accounts can temporarily lower your score.</p>
            </div>
            
            <div className="text-center">
              <div className="h-20 w-20 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal">10%</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Credit Mix</h3>
              <p className="text-slate text-sm">Having different types of credit accounts can positively impact your score.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="container-tight">
          <h2 className="title-lg text-center mb-12">Tips to Improve Your Credit Score</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <TrendingUp className="h-5 w-5 text-teal mr-3 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Pay Bills on Time</h3>
                  <p className="text-slate text-sm">Set up automatic payments to ensure you never miss a due date.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <TrendingUp className="h-5 w-5 text-teal mr-3 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Keep Balances Low</h3>
                  <p className="text-slate text-sm">Aim to use less than 30% of your available credit limit.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <TrendingUp className="h-5 w-5 text-teal mr-3 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Don't Close Old Accounts</h3>
                  <p className="text-slate text-sm">Keep older accounts open to maintain your credit history length.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-teal mr-3 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Monitor Your Report</h3>
                  <p className="text-slate text-sm">Check your credit report regularly for errors and dispute any inaccuracies.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-teal mr-3 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Limit New Credit Inquiries</h3>
                  <p className="text-slate text-sm">Only apply for new credit when necessary to avoid multiple hard inquiries.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-teal mr-3 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Consider Credit Mix</h3>
                  <p className="text-slate text-sm">Having different types of credit can help improve your score over time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-tight text-center">
          <h2 className="title-lg mb-6">Start Improving Your Credit Today</h2>
          <p className="text-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Take control of your financial future with our credit monitoring and improvement tools.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/credit-score/calculator" className="cta-primary">
              Check Your Score <ArrowRight className="ml-2 h-5 w-5 inline-block" />
            </Link>
            <Link to="/credit-score/personalizer" className="cta-outline">
              Get Recommendations
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CreditScore;
