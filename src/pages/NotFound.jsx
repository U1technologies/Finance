
import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center bg-gray">
        <div className="container-tight text-center">
          <div className="max-w-md mx-auto">
            {/* 404 Illustration */}
            <div className="mb-8">
              <div className="text-8xl font-bold text-teal opacity-20 mb-4">404</div>
              <div className="w-32 h-32 mx-auto bg-teal/10 rounded-full flex items-center justify-center mb-6">
                <Search className="h-16 w-16 text-teal" />
              </div>
            </div>
            
            {/* Error Message */}
            <h1 className="title-lg mb-4">Page Not Found</h1>
            <p className="text-slate text-lg mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved. 
              Let's get you back to exploring our financial products.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="cta-primary inline-flex items-center">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Link>
              <Link to="/credit-cards" className="cta-outline inline-flex items-center">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Browse Credit Cards
              </Link>
            </div>
            
            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Popular Pages</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link to="/credit-cards" className="text-teal hover:underline">Credit Cards</Link>
                <Link to="/loans" className="text-teal hover:underline">Personal Loans</Link>
                <Link to="/business-loans" className="text-teal hover:underline">Business Loans</Link>
                <Link to="/credit-score" className="text-teal hover:underline">Credit Score</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
