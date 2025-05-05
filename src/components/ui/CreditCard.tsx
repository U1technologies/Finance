
import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface CardProps {
  id: string;
  name: string;
  bank: string;
  image: string;
  annualFee: string;
  interestRate: string;
  rewards: string;
  rating: number;
  featured?: boolean;
}

const CreditCard: React.FC<CardProps> = ({
  id,
  name,
  bank,
  image,
  annualFee,
  interestRate,
  rewards,
  rating,
  featured = false,
}) => {
  return (
    <div className={`card-premium overflow-hidden p-0 ${featured ? 'border-2 border-gold' : ''}`}>
      {featured && (
        <div className="bg-gold text-navy-dark text-center py-1 text-sm font-medium">
          Featured Card
        </div>
      )}
      <div className="p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Card Image */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-auto rounded-lg shadow-soft" 
            />
          </div>
          
          {/* Card Details */}
          <div className="w-full md:w-2/3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate text-sm">{bank}</p>
                <h3 className="title-sm mt-1 mb-3">{name}</h3>
              </div>
              <div className="flex items-center bg-gray-100 px-2 py-1 rounded-md">
                <Star className="h-4 w-4 text-gold fill-gold mr-1" />
                <span className="text-sm font-medium">{rating}</span>
              </div>
            </div>
            
            {/* Card Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <div>
                <p className="text-slate text-sm mb-1">Annual Fee</p>
                <p className="font-medium">{annualFee}</p>
              </div>
              <div>
                <p className="text-slate text-sm mb-1">Interest Rate</p>
                <p className="font-medium">{interestRate}</p>
              </div>
              <div>
                <p className="text-slate text-sm mb-1">Rewards</p>
                <p className="font-medium">{rewards}</p>
              </div>
            </div>
            
            {/* Card Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link 
                to={`/credit-cards/${id}`}
                className="cta-primary flex-1 text-center"
              >
                View Details
              </Link>
              <Link 
                to={`/apply/${id}`}
                className="cta-secondary flex-1 text-center"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Learn More Footer */}
      <div className="border-t border-gray-100 mt-4">
        <Link 
          to={`/credit-cards/${id}`} 
          className="flex items-center justify-center py-3 text-teal hover:bg-gray-50 transition-colors"
        >
          Learn More <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default CreditCard;
