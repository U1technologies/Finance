
import React from 'react';
import Layout from "@/components/layout/Layout";
import { Shield, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const InsuranceTypes = [
  {
    id: 'auto',
    title: 'Auto Insurance',
    description: 'Protect your vehicle with comprehensive coverage options tailored to your needs.',
    icon: <Shield className="w-10 h-10 text-teal" />,
    path: '/insurance/auto',
  },
  {
    id: 'home',
    title: 'Home Insurance',
    description: 'Safeguard your most valuable asset with flexible protection plans.',
    icon: <ShieldCheck className="w-10 h-10 text-teal" />,
    path: '/insurance/home',
  },
  {
    id: 'life',
    title: 'Life Insurance',
    description: 'Ensure financial security for your loved ones with our life insurance plans.',
    icon: <Shield className="w-10 h-10 text-teal" />,
    path: '/insurance/life',
  },
  {
    id: 'health',
    title: 'Health Insurance',
    description: 'Access quality healthcare with affordable and comprehensive health plans.',
    icon: <ShieldCheck className="w-10 h-10 text-teal" />,
    path: '/insurance/health',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const Insurance = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-navy to-navy/90 text-white py-24">
        <div className="container-tight pt-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="title-lg mb-4">Insurance Solutions for Every Need</h1>
            <p className="subtitle text-white/80 mb-8">
              Compare top insurance providers and find the coverage that fits your lifestyle and budget.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-wide">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {InsuranceTypes.map((type) => (
              <motion.div 
                key={type.id} 
                className="bg-white rounded-xl shadow-md p-8 border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1"
                variants={itemVariants}
              >
                <div className="mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-slate mb-6">{type.description}</p>
                <Link to={type.path} className="inline-flex items-center text-teal hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-16">
            <h2 className="title-md mb-6">Need help choosing the right insurance?</h2>
            <Button className="cta-primary">Get a Free Quote</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insurance;
