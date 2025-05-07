
import React from 'react';
import Layout from "@/components/layout/Layout";
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HealthInsurance = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-navy to-navy/90 text-white py-24">
        <div className="container-tight pt-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="title-lg mb-4">Health Insurance</h1>
            <p className="subtitle text-white/80 mb-8">
              Access quality healthcare with affordable and comprehensive health plans.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Health Insurance" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="title-md mb-6">Plan Options</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">HMO Plans</h3>
                    <p className="text-slate text-sm">Lower costs with a primary care physician network.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">PPO Plans</h3>
                    <p className="text-slate text-sm">More flexibility to see providers outside the network.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">EPO Plans</h3>
                    <p className="text-slate text-sm">Lower out-of-pocket costs with in-network care only.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">HDHP with HSA</h3>
                    <p className="text-slate text-sm">High-deductible plans with tax-advantaged health savings accounts.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="cta-primary">Compare Plans</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HealthInsurance;
