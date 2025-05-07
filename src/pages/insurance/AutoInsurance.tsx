
import React from 'react';
import Layout from "@/components/layout/Layout";
import { Shield, ArrowRight, Car, Wrench, FileText, BadgePercent } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
                <Link to="/apply">
                  <Button className="cta-primary">Get a Quote</Button>
                </Link>
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

      <section className="py-16 bg-gray">
        <div className="container-tight">
          <h2 className="title-md text-center mb-12">Why Choose Our Auto Insurance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-12 w-12 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                <Car className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Tailored Coverage</h3>
              <p className="text-slate text-sm">Customized plans to fit your vehicle and driving needs.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-12 w-12 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                <BadgePercent className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Competitive Rates</h3>
              <p className="text-slate text-sm">Save money with our affordable premium options.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-12 w-12 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Claims</h3>
              <p className="text-slate text-sm">Simple and hassle-free claims process when you need it.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-12 w-12 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-slate text-sm">Round-the-clock customer service for emergencies.</p>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/apply">
              <Button className="cta-primary">
                Compare Auto Insurance Quotes <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AutoInsurance;
