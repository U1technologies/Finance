
import React from "react";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/homepage/HeroSection";
import SmartComparison from "../components/homepage/SmartComparison";
import EligibilityCalculator from "../components/homepage/EligibilityCalculator";
import PartnerBanks from "../components/homepage/PartnerBanks";
import PersonalizedRecommendations from "../components/homepage/PersonalizedRecommendations";
import TestimonialSlider from "../components/homepage/TestimonialSlider";
import AnimatedStats from "../components/sections/AnimatedStats";
import AnimatedFAQ from "../components/sections/AnimatedFAQ";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout transparentHeader={true}>
      {/* Hero Section */}
      <HeroSection />

      {/* Animated Stats Section */}
      <AnimatedStats />

      {/* Partner Banks */}
      <PartnerBanks />

      {/* Smart Product Comparison */}
      <SmartComparison />

      {/* Eligibility Calculator */}
      <EligibilityCalculator />

      {/* Personalized Recommendations */}
      <PersonalizedRecommendations />

      {/* Testimonials Slider */}
      <TestimonialSlider />

      {/* FAQ Section */}
      <AnimatedFAQ />

      {/* CTA Banner */}
      <section className="py-16 bg-navy text-white">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Match?</h2>
          <p className="text-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Browse our wide selection of credit cards and financial products tailored to your unique needs and preferences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/credit-cards" className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center">
              Explore Credit Cards
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/credit-score" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-navy transition-all duration-300 inline-flex items-center justify-center">
              Check Credit Score
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
