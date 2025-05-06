
import React, { useEffect, useState } from 'react';

interface StatCounterProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ end, duration, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById(`stat-${end}`);
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div id={`stat-${end}`} className="text-3xl md:text-4xl font-bold text-navy">
      {prefix}{count}{suffix}
    </div>
  );
};

const AnimatedStats = () => {
  return (
    <section className="py-16 bg-gray relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-teal/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gold/5 blur-3xl"></div>
      
      <div className="container-tight relative z-10">
        <h2 className="title-md text-center mb-4">Our Impact in Numbers</h2>
        <p className="text-center text-slate max-w-2xl mx-auto mb-12">
          Discover why thousands of customers trust PremiumFinance for their financial needs
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow-soft animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <StatCounter end={500} duration={2000} suffix="K+" />
            <p className="text-slate mt-2">Happy Customers</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-soft animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <StatCounter end={20} duration={2000} prefix="₹" suffix="B+" />
            <p className="text-slate mt-2">Credit Disbursed</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-soft animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <StatCounter end={100} duration={2000} suffix="+" />
            <p className="text-slate mt-2">Card Options</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-soft animate-scale-in" style={{ animationDelay: '0.7s' }}>
            <StatCounter end={4.8} duration={2000} suffix="/5" />
            <p className="text-slate mt-2">Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
