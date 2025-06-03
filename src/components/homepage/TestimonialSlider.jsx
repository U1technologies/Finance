
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: 'Rajiv Mehta',
      role: 'Business Owner',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: 'PremiumFinance made it incredibly easy to find the perfect credit card for my business needs. The comparison tool saved me hours of research.',
      rating: 5,
      location: 'Mumbai'
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Professional',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'I was looking for a travel rewards card and found exactly what I needed here. The application process was smooth and I got approved quickly.',
      rating: 5,
      location: 'Delhi'
    },
    {
      name: 'Vikram Singh',
      role: 'Software Engineer',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
      quote: 'The detailed card comparisons helped me understand the benefits and choose a card with the best rewards for my spending habits.',
      rating: 5,
      location: 'Bangalore'
    },
    {
      name: 'Anita Desai',
      role: 'Doctor',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      quote: 'Got my home loan approved within 48 hours! The team was professional and the interest rates were the best in the market.',
      rating: 5,
      location: 'Chennai'
    },
    {
      name: 'Rohit Kumar',
      role: 'Entrepreneur',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      quote: 'The business loan helped me expand my startup. Quick processing and transparent terms made all the difference.',
      rating: 5,
      location: 'Pune'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect financial match
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 h-16 w-16 text-teal/10" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentSlide].avatar}
                    alt={testimonials[currentSlide].name}
                    className="w-24 h-24 rounded-full object-cover shadow-lg"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold fill-gold" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-slate-dark font-medium mb-6 leading-relaxed">
                    "{testimonials[currentSlide].quote}"
                  </blockquote>
                  
                  {/* Author */}
                  <div>
                    <h4 className="font-bold text-lg text-navy">{testimonials[currentSlide].name}</h4>
                    <p className="text-slate">{testimonials[currentSlide].role}</p>
                    <p className="text-teal text-sm">{testimonials[currentSlide].location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-navy" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-teal' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
            >
              <ChevronRight className="h-6 w-6 text-navy" />
            </button>
          </div>

          {/* Thumbnail Previews */}
          <div className="hidden md:flex justify-center mt-8 gap-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`p-4 rounded-lg transition-all ${
                  index === currentSlide 
                    ? 'bg-teal/10 border-2 border-teal' 
                    : 'bg-white hover:bg-gray-50 border-2 border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-slate">{testimonial.role}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
