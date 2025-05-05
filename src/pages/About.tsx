
import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">About Us</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Learn about our mission, team, and commitment to making financial 
              products more accessible for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-slate mb-4">
                Founded in 2020, PremiumFinance was born out of a simple idea: financial
                products should be accessible, transparent, and tailored to everyone's needs.
              </p>
              <p className="text-slate mb-4">
                We noticed a gap in the market where many consumers struggled to understand
                complex financial products and make informed decisions. Our team of finance
                experts and technology enthusiasts came together to create a platform that
                simplifies this process.
              </p>
              <p className="text-slate">
                Today, we help thousands of customers find the right financial products
                for their unique situations, from credit cards to loans and more.
              </p>
            </div>
            <div className="bg-gray h-96 rounded-lg flex items-center justify-center">
              <span className="text-slate">Company Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray">
        <div className="container-tight text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-slate text-lg max-w-3xl mx-auto mb-12">
            We're on a mission to make financial products more accessible, 
            transparent, and rewarding for everyone. We believe in empowering
            people to make informed financial decisions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
              <p className="text-slate">
                Making financial products available to everyone regardless of 
                their background or expertise.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold mb-4">Transparency</h3>
              <p className="text-slate">
                Providing clear, honest information about all financial products 
                with no hidden terms.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <p className="text-slate">
                Helping our users understand complex financial concepts through 
                guides and resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-tight">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
          <p className="text-slate text-lg max-w-3xl mx-auto text-center mb-12">
            Meet the experts behind PremiumFinance who are dedicated to improving 
            your financial journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="text-center">
                <div className="h-64 bg-gray rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-slate">Photo</span>
                </div>
                <h3 className="text-xl font-semibold">Team Member {member}</h3>
                <p className="text-teal mb-2">Position</p>
                <p className="text-slate text-sm">
                  Brief description about the team member and their expertise.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
