
import React from 'react';
import Layout from "@/components/layout/Layout";
import { Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const AutoInsurance = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-navy to-navy/90 text-white py-24">
        <div className="container-tight pt-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="title-lg mb-4">Auto Insurance</h1>
            <p className="subtitle text-white/80 mb-8">
              Protect your vehicle with comprehensive coverage options tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="title-md mb-6">Coverage Options</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Liability Coverage</h3>
                    <p className="text-slate text-sm">Covers damages to other vehicles and injuries to others.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Collision Coverage</h3>
                    <p className="text-slate text-sm">Covers damage to your vehicle from an accident.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Comprehensive Coverage</h3>
                    <p className="text-slate text-sm">Covers damage caused by events other than collisions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Uninsured Motorist Coverage</h3>
                    <p className="text-slate text-sm">Protection if you're hit by an uninsured driver.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="cta-primary">Get a Quote</Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Car Insurance" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AutoInsurance;
