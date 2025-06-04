
import React from "react";
import Layout from "../components/layout/Layout";
import { ArrowRight, Shield, Car, Home, Heart, User } from "lucide-react";
import { Link } from "react-router-dom";

const Insurance = () => {
  const insuranceTypes = [
    {
      title: "Auto Insurance",
      description: "Protect your vehicle with comprehensive coverage options.",
      icon: Car,
      link: "/insurance/auto",
      features: ["Liability coverage", "Collision protection", "Comprehensive coverage"]
    },
    {
      title: "Home Insurance",
      description: "Safeguard your home and belongings with reliable coverage.",
      icon: Home,
      link: "/insurance/home",
      features: ["Dwelling protection", "Personal property", "Liability coverage"]
    },
    {
      title: "Life Insurance",
      description: "Ensure financial security for your loved ones.",
      icon: Heart,
      link: "/insurance/life",
      features: ["Term life options", "Whole life plans", "Universal life"]
    },
    {
      title: "Health Insurance",
      description: "Access quality healthcare with affordable health plans.",
      icon: User,
      link: "/insurance/health",
      features: ["HMO plans", "PPO options", "High deductible plans"]
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">Insurance</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Protect what matters most with comprehensive insurance coverage. 
              Compare policies and find the right protection for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-16 bg-gray">
        <div className="container-wide">
          <h2 className="title-lg text-center mb-12">Insurance Coverage Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insuranceTypes.map((insurance, index) => {
              const IconComponent = insurance.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-soft p-8 hover-scale">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-teal-light rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-teal" />
                    </div>
                    <h3 className="text-xl font-semibold">{insurance.title}</h3>
                  </div>
                  <p className="text-slate mb-6">{insurance.description}</p>
                  <ul className="space-y-2 mb-6">
                    {insurance.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-slate flex items-center">
                        <Shield className="h-3 w-3 text-teal mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={insurance.link} className="text-teal font-medium flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Insurance */}
      <section className="py-16 bg-white">
        <div className="container-tight">
          <h2 className="title-lg text-center mb-12">Why Insurance Matters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-lg font-medium mb-2">Financial Protection</h3>
              <p className="text-slate text-sm">Protect yourself from unexpected financial losses due to accidents, disasters, or health issues.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-lg font-medium mb-2">Peace of Mind</h3>
              <p className="text-slate text-sm">Sleep better knowing you and your loved ones are protected against life's uncertainties.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-lg font-medium mb-2">Legal Compliance</h3>
              <p className="text-slate text-sm">Meet legal requirements for auto insurance and protect yourself from liability claims.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray">
        <div className="container-tight">
          <h2 className="title-lg text-center mb-12">How to Get Covered</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal">1</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Compare Quotes</h3>
              <p className="text-slate text-sm">Get quotes from multiple insurers to find the best coverage at the best price.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal">2</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Choose Coverage</h3>
              <p className="text-slate text-sm">Select the coverage levels and options that best fit your needs and budget.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal">3</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Apply & Pay</h3>
              <p className="text-slate text-sm">Complete your application and make your first payment to activate coverage.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal">4</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Stay Protected</h3>
              <p className="text-slate text-sm">Review your coverage annually and update as your needs change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-tight text-center">
          <h2 className="title-lg mb-6">Get Protected Today</h2>
          <p className="text-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Don't wait for tomorrow to protect what matters today. Get quotes and compare insurance options now.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/apply" className="cta-primary">
              Get Quotes <ArrowRight className="ml-2 h-5 w-5 inline-block" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insurance;
