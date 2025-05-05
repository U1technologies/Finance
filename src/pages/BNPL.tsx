
import React from "react";
import Layout from "../components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BNPL = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">Buy Now, Pay Later</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Shop now and split your payments over time with our flexible 
              Buy Now, Pay Later options.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray">
        <div className="container-tight">
          <div className="bg-white rounded-lg shadow-soft p-8 mb-10">
            <h2 className="text-2xl font-semibold mb-6">How Buy Now, Pay Later Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal">1</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Shop Your Favorites</h3>
                <p className="text-slate">Browse and select your desired products from our partner retailers.</p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal">2</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Choose BNPL at Checkout</h3>
                <p className="text-slate">Select the Buy Now, Pay Later option at checkout and get instant approval.</p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal">3</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Pay in Installments</h3>
                <p className="text-slate">Split your payment into 4 interest-free installments over 6 weeks.</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-6">Our BNPL Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-soft flex items-center justify-center">
              <span className="font-medium text-lg">Partner 1</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-soft flex items-center justify-center">
              <span className="font-medium text-lg">Partner 2</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-soft flex items-center justify-center">
              <span className="font-medium text-lg">Partner 3</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-soft flex items-center justify-center">
              <span className="font-medium text-lg">Partner 4</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-tight text-center">
          <h2 className="title-lg mb-6">Start Shopping Today</h2>
          <p className="text-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Enjoy the flexibility of Buy Now, Pay Later with no interest and no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/apply" className="cta-primary">
              Get Started <ArrowRight className="ml-2 h-5 w-5 inline-block" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BNPL;
