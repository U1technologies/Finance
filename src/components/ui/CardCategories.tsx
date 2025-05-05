
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  path: string;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  image,
  path,
  className,
}) => {
  return (
    <Link to={path}>
      <Card className={cn("overflow-hidden h-full transition-all duration-300 hover:shadow-gold-glow border-transparent hover:border-gold/30", className)}>
        <div className="relative h-44 overflow-hidden group">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
          <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{title}</h3>
          <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-teal flex items-center justify-center opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <ArrowRight className="h-4 w-4 text-white" />
          </div>
        </div>
        <CardContent className="p-4">
          <p className="text-slate text-sm">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

const CardCategories = () => {
  const categories = [
    {
      title: "Rewards Cards",
      description: "Earn points, miles, or cash back on your everyday purchases",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      path: "/credit-cards?rewards=points"
    },
    {
      title: "Travel Cards",
      description: "Enjoy travel benefits, airport lounge access, and no foreign transaction fees",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      path: "/credit-cards?rewards=travel"
    },
    {
      title: "Cashback Cards",
      description: "Get cash back on purchases with simple redemption options",
      image: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      path: "/credit-cards?rewards=cashback"
    },
    {
      title: "No Annual Fee",
      description: "Save money with cards that don't charge yearly fees",
      image: "https://images.unsplash.com/photo-1565514020179-026b5f5b3e6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      path: "/credit-cards?fee=no-fee"
    }
  ];

  return (
    <div className="py-10">
      <h2 className="title-md text-center mb-4">Explore Credit Card Categories</h2>
      <p className="text-center text-slate max-w-2xl mx-auto mb-10">
        Find the perfect card type to match your lifestyle and spending habits
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default CardCategories;
