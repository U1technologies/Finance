
import React, { useState } from 'react';
import { ArrowRight, Shield, CreditCard, TrendingUp, Award } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const FeatureSpotlight = () => {
  const features = [
    {
      icon: <CreditCard className="h-12 w-12 text-teal" />,
      title: "Premium Credit Cards",
      description: "Exclusive rewards, cashback, and travel benefits with our premium card selection",
      color: "from-teal/10 to-teal/20"
    },
    {
      icon: <Shield className="h-12 w-12 text-gold" />,
      title: "Secure Transactions",
      description: "Advanced security features to protect your identity and financial information",
      color: "from-gold/10 to-gold/20"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-navy" />,
      title: "Financial Growth",
      description: "Tools and resources to help you build credit and achieve financial goals",
      color: "from-navy/10 to-navy/20"
    },
    {
      icon: <Award className="h-12 w-12 text-teal-dark" />,
      title: "Award-Winning Service",
      description: "Dedicated support team providing exceptional customer experience",
      color: "from-teal-dark/10 to-teal-dark/20"
    }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container-wide">
        <h2 className="title-md text-center mb-12 animate-fade-in">Discover Premium Features</h2>
        
        <Carousel className="w-full">
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className={`h-full border-0 shadow-soft hover:shadow-lg transition-all duration-300 overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} -z-10`}></div>
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-slate mb-6 flex-grow">{feature.description}</p>
                    <div className="mt-auto">
                      <button className="group flex items-center text-teal font-medium">
                        Learn More 
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="relative static transform-none mx-2" />
            <CarouselNext className="relative static transform-none mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default FeatureSpotlight;
