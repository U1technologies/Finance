
import React from 'react';

const PartnerBanks = () => {
  const partners = [
    { name: 'HDFC Bank', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop' },
    { name: 'ICICI Bank', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop' },
    { name: 'Axis Bank', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop' },
    { name: 'SBI Card', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop' },
    { name: 'Kotak Bank', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop' },
    { name: 'American Express', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop' },
    { name: 'Standard Chartered', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop' },
    { name: 'Citibank', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop' }
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted by Leading Banks</h2>
          <p className="text-slate max-w-2xl mx-auto">
            We partner with India's top banks and financial institutions to bring you the best deals
          </p>
        </div>
        
        {/* Partner Logos Slider */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors p-4"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-slate">
            <span className="font-semibold text-teal">50+ Partner Banks</span> • 
            <span className="font-semibold text-teal"> 10,000+ Happy Customers</span> • 
            <span className="font-semibold text-teal"> ₹500+ Crores Disbursed</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerBanks;
