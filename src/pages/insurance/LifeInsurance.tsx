
import React from 'react';
import Layout from "@/components/layout/Layout";
import { Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const LifeInsurance = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-navy to-navy/90 text-white py-24">
        <div className="container-tight pt-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="title-lg mb-4">Life Insurance</h1>
            <p className="subtitle text-white/80 mb-8">
              Ensure financial security for your loved ones with our life insurance plans.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="title-md mb-6">Policy Types</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Term Life Insurance</h3>
                    <p className="text-slate text-sm">Coverage for a specific term with affordable premiums.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Whole Life Insurance</h3>
                    <p className="text-slate text-sm">Permanent coverage with a cash value component.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Universal Life Insurance</h3>
                    <p className="text-slate text-sm">Flexible premiums and death benefits with a savings component.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Variable Life Insurance</h3>
                    <p className="text-slate text-sm">Investment opportunities with flexible premium options.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="cta-primary">Get a Quote</Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80" 
                alt="Life Insurance" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LifeInsurance;
