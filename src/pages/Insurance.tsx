
import React from 'react';
import Layout from "@/components/layout/Layout";
import { Shield, Heart, Car, Home, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const insuranceCategories = [
  {
    id: 'health',
    title: 'Health Insurance',
    description: 'Comprehensive health coverage for you and your family',
    icon: <Heart className="w-12 h-12 text-teal" />,
    path: '/insurance/health',
    benefits: ['Hospital Coverage', 'Medicine Reimbursement', 'Specialist Consultation', 'Preventive Care'],
    premiumRange: '$150 - $450 per month'
  },
  {
    id: 'life',
    title: 'Life Insurance',
    description: 'Secure your family\'s financial future',
    icon: <Shield className="w-12 h-12 text-teal" />,
    path: '/insurance/life',
    benefits: ['Death Benefit', 'Cash Value Growth', 'Tax Advantages', 'Riders Available'],
    premiumRange: '$30 - $150 per month'
  },
  {
    id: 'auto',
    title: 'Auto Insurance',
    description: 'Protection for your vehicle and liability coverage',
    icon: <Car className="w-12 h-12 text-teal" />,
    path: '/insurance/auto',
    benefits: ['Collision Coverage', 'Comprehensive Protection', 'Liability Insurance', 'Roadside Assistance'],
    premiumRange: '$80 - $200 per month'
  },
  {
    id: 'home',
    title: 'Home Insurance',
    description: 'Safeguard your most valuable asset',
    icon: <Home className="w-12 h-12 text-teal" />,
    path: '/insurance/home',
    benefits: ['Property Protection', 'Liability Coverage', 'Contents Insurance', 'Additional Living Expenses'],
    premiumRange: '$100 - $300 per month'
  }
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
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3
    }
  }
};

const InsuranceCategory = ({ category }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div 
      className="w-full"
      variants={itemVariants}
      whileHover="hover"
    >
      <Card className="h-full bg-white overflow-hidden border-0 shadow-lg">
        <CardContent className="p-0">
          <div className="p-6">
            <div className="rounded-full bg-teal/10 p-4 w-20 h-20 flex items-center justify-center mb-5">
              {category.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
            <p className="text-slate mb-4">{category.description}</p>
            
            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
              <div className="py-4 border-t border-gray-100 mt-2">
                <h4 className="font-semibold mb-2">Benefits</h4>
                <ul className="space-y-2">
                  {category.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-slate">
                      <Shield className="h-4 w-4 text-teal mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <h4 className="font-semibold mb-1">Premium Range</h4>
                  <p className="text-slate">{category.premiumRange}</p>
                </div>

                <div className="mt-6">
                  <Link to={category.path}>
                    <Button className="bg-teal hover:bg-teal/90 text-white">
                      Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <button 
              className="mt-4 text-teal flex items-center text-sm font-medium"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show less' : 'Learn more'}
              <ChevronRight className={`ml-1 h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
            </button>
          </div>
          
          <div className="mt-auto">
            <Link to={category.path} className="block w-full py-3 px-6 bg-gray-50 hover:bg-gray-100 transition-colors text-center font-medium text-slate-dark">
              Explore {category.title}
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Insurance = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-navy to-navy/90 text-white py-24">
        <div className="container-tight pt-20">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              className="title-lg mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Insurance Solutions for Every Need
            </motion.h1>
            <motion.p 
              className="subtitle text-white/80 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Compare top insurance providers and find the coverage that fits your lifestyle and budget.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-tight">
          <div className="mb-12 text-center">
            <h2 className="title-md">Explore Insurance Categories</h2>
            <p className="text-slate max-w-2xl mx-auto mt-3">Select a category to learn more and get personalized quotes from top providers.</p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {insuranceCategories.map((category) => (
              <InsuranceCategory key={category.id} category={category} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-tight">
          <div className="bg-teal/5 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="title-md mb-4">Not sure what coverage you need?</h2>
                <p className="text-slate mb-6">Our insurance experts can help you find the right coverage for your specific situation. Get a personalized consultation today.</p>
                <Link to="/apply">
                  <Button className="bg-teal hover:bg-teal/90 text-white">
                    Talk to an Expert <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                  alt="Insurance consultation" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insurance;
