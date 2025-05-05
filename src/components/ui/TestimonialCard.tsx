
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  avatar,
  quote,
  rating,
}) => {
  return (
    <div className="card-premium p-6 h-full flex flex-col">
      {/* Testimonial Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-gold fill-gold' : 'text-slate-200'
            }`}
          />
        ))}
      </div>
      
      {/* Testimonial Quote */}
      <blockquote className="text-lg mb-6 flex-grow">
        "{quote}"
      </blockquote>
      
      {/* Testimonial Author */}
      <div className="flex items-center mt-auto">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <p className="font-medium text-navy">{name}</p>
          <p className="text-sm text-slate">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
