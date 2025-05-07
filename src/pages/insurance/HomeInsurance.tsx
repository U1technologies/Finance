
import React from 'react';
import Layout from "@/components/layout/Layout";
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HomeInsurance = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-navy to-navy/90 text-white py-24">
        <div className="container-tight pt-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="title-lg mb-4">Home Insurance</h1>
            <p className="subtitle text-white/80 mb-8">
              Protect your most valuable asset with comprehensive coverage options.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80" 
                alt="Home Insurance" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="title-md mb-6">Coverage Options</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Dwelling Coverage</h3>
                    <p className="text-slate text-sm">Protects the structure of your home from covered perils.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Personal Property Coverage</h3>
                    <p className="text-slate text-sm">Covers your personal belongings like furniture and appliances.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Liability Protection</h3>
                    <p className="text-slate text-sm">Covers legal expenses if someone is injured on your property.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Additional Living Expenses</h3>
                    <p className="text-slate text-sm">Covers costs if you need to live elsewhere during home repairs.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="cta-primary">Get a Quote</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomeInsurance;
