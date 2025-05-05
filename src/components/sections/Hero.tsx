
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
}) => {
  return (
    <div 
      className="relative min-h-[85vh] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 35, 66, 0.85), rgba(10, 35, 66, 0.9)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/60 to-navy/95"></div>
      
      {/* Content */}
      <div className="container-tight relative z-10 text-center py-24">
        <h1 className="title-xl text-white mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl text-slate-light/90 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link to={ctaLink} className="cta-primary">
            {ctaText} <ArrowRight className="ml-2 h-5 w-5 inline-block" />
          </Link>
          
          {secondaryCtaText && secondaryCtaLink && (
            <Link to={secondaryCtaLink} className="cta-outline border-white text-white hover:bg-white/10">
              {secondaryCtaText}
            </Link>
          )}
        </div>
        
        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
          <div className="flex flex-col items-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl font-bold mb-2">500K+</div>
            <div className="text-slate-light">Happy Customers</div>
          </div>
          <div className="flex flex-col items-center animate-scale-in" style={{ animationDelay: '0.7s' }}>
            <div className="text-3xl font-bold mb-2">₹20B+</div>
            <div className="text-slate-light">Credit Disbursed</div>
          </div>
          <div className="flex flex-col items-center animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-3xl font-bold mb-2">100+</div>
            <div className="text-slate-light">Card Options</div>
          </div>
          <div className="flex flex-col items-center animate-scale-in" style={{ animationDelay: '0.9s' }}>
            <div className="text-3xl font-bold mb-2">4.8/5</div>
            <div className="text-slate-light">Customer Rating</div>
          </div>
        </div>
      </div>
      
      {/* Wave Design at Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="white">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
