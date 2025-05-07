
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import { Calculator, Info, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

const CreditScore = () => {
  const [score, setScore] = useState<number | null>(null);
  const [sliderValues, setSliderValues] = useState({
    paymentHistory: 35,
    creditUtilization: 30,
    creditAge: 15,
    inquiries: 10,
  });
  
  const form = useForm({
    defaultValues: {
      latePayments: "none",
      creditUtilization: "low",
      creditHistoryYears: "5+",
      recentInquiries: "0-1",
    },
  });

  const calculateScore = () => {
    const { latePayments, creditUtilization, creditHistoryYears, recentInquiries } = form.getValues();
    
    // Base score starting at 850 (perfect)
    let calculatedScore = 850;
    
    // Late payments impact
    if (latePayments === "none") calculatedScore -= 0;
    else if (latePayments === "one") calculatedScore -= 50;
    else if (latePayments === "several") calculatedScore -= 100;
    else if (latePayments === "many") calculatedScore -= 150;
    
    // Credit utilization impact
    if (creditUtilization === "low") calculatedScore -= 0;
    else if (creditUtilization === "medium") calculatedScore -= 40;
    else if (creditUtilization === "high") calculatedScore -= 80;
    else if (creditUtilization === "very-high") calculatedScore -= 120;
    
    // Credit history length impact
    if (creditHistoryYears === "5+") calculatedScore -= 0;
    else if (creditHistoryYears === "3-5") calculatedScore -= 20;
    else if (creditHistoryYears === "1-3") calculatedScore -= 40;
    else if (creditHistoryYears === "less-than-1") calculatedScore -= 60;
    
    // Recent inquiries impact
    if (recentInquiries === "0-1") calculatedScore -= 0;
    else if (recentInquiries === "2-3") calculatedScore -= 10;
    else if (recentInquiries === "4+") calculatedScore -= 30;
    
    // Ensure score stays within valid range
    calculatedScore = Math.max(300, Math.min(850, calculatedScore));
    
    setScore(calculatedScore);
    
    // Animate slider values for the results visualization
    setSliderValues({
      paymentHistory: 35,
      creditUtilization: 30,
      creditAge: 15,
      inquiries: 10,
    });
  };

  const getScoreCategory = (score: number) => {
    if (score >= 800) return { category: "Exceptional", color: "text-green-500" };
    if (score >= 740) return { category: "Very Good", color: "text-emerald-500" };
    if (score >= 670) return { category: "Good", color: "text-lime-500" };
    if (score >= 580) return { category: "Fair", color: "text-amber-500" };
    return { category: "Poor", color: "text-red-500" };
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Layout>
      <section className="bg-gradient-to-b from-navy to-navy/90 text-white py-24">
        <div className="container-tight pt-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="title-lg mb-4">Understand Your Credit Score</h1>
            <p className="subtitle text-white/80 mb-8">
              Your credit score is a vital part of your financial health. Calculate your estimated score and learn how to improve it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-xl shadow-lg p-8 border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="h-8 w-8 text-teal" />
                <h2 className="text-2xl font-semibold">Credit Score Calculator</h2>
              </div>

              <Form {...form}>
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="latePayments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Late Payments</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="none">None (Always on time)</SelectItem>
                            <SelectItem value="one">One (30 days late)</SelectItem>
                            <SelectItem value="several">Several (30-60 days late)</SelectItem>
                            <SelectItem value="many">Many (90+ days late)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Your payment history affects 35% of your score
                        </FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="creditUtilization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Credit Utilization</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="low">Low (Less than 10%)</SelectItem>
                            <SelectItem value="medium">Medium (10-30%)</SelectItem>
                            <SelectItem value="high">High (30-50%)</SelectItem>
                            <SelectItem value="very-high">Very High (Above 50%)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Your debt-to-credit ratio affects 30% of your score
                        </FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="creditHistoryYears"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Length of Credit History</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="5+">5+ years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="1-3">1-3 years</SelectItem>
                            <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          The age of your accounts affects 15% of your score
                        </FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="recentInquiries"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Recent Credit Inquiries (Last 12 months)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 inquiries</SelectItem>
                            <SelectItem value="2-3">2-3 inquiries</SelectItem>
                            <SelectItem value="4+">4+ inquiries</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Recent credit applications affect 10% of your score
                        </FormDescription>
                      </FormItem>
                    )}
                  />

                  <Button onClick={calculateScore} className="w-full cta-primary">
                    Calculate My Score
                  </Button>
                </div>
              </Form>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              {score ? (
                <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
                  <h3 className="text-xl font-semibold mb-4">Your Estimated Credit Score</h3>
                  
                  <div className="bg-slate-50 rounded-lg p-6 text-center mb-6">
                    <div className="text-5xl font-bold mb-2">{score}</div>
                    <div className={`text-xl ${getScoreCategory(score).color} font-medium`}>
                      {getScoreCategory(score).category}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Payment History</span>
                        <span className="font-medium">35%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full">
                        <motion.div 
                          className="h-full bg-teal rounded-full" 
                          initial={{ width: "0%" }}
                          animate={{ width: `${sliderValues.paymentHistory}%` }}
                          transition={{ duration: 0.8 }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Credit Utilization</span>
                        <span className="font-medium">30%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full">
                        <motion.div 
                          className="h-full bg-teal rounded-full" 
                          initial={{ width: "0%" }}
                          animate={{ width: `${sliderValues.creditUtilization}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Length of Credit History</span>
                        <span className="font-medium">15%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full">
                        <motion.div 
                          className="h-full bg-teal rounded-full" 
                          initial={{ width: "0%" }}
                          animate={{ width: `${sliderValues.creditAge}%` }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Recent Inquiries</span>
                        <span className="font-medium">10%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full">
                        <motion.div 
                          className="h-full bg-teal rounded-full" 
                          initial={{ width: "0%" }}
                          animate={{ width: `${sliderValues.inquiries}%` }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <Button variant="outline" className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      <span>View Improvement Tips</span>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 flex flex-col items-center justify-center text-center h-full">
                  <Info className="h-16 w-16 text-slate-300 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Your Credit Score Results</h3>
                  <p className="text-slate mb-6">Fill out the calculator to see your estimated credit score and detailed breakdown.</p>
                </div>
              )}
              
              <div className="mt-6 grid grid-cols-1 gap-4">
                <Card>
                  <CardHeader className="bg-slate-50">
                    <CardTitle className="text-lg">Why is this important?</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-sm text-slate">
                      Your credit score affects your ability to get loans, credit cards, and even impacts interest rates you'll be offered.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="bg-slate-50">
                    <CardTitle className="text-lg">Want the real score?</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-sm text-slate mb-4">
                      Our calculator provides an estimate. For your actual score, we recommend checking with credit bureaus.
                    </p>
                    <Button variant="link" className="flex items-center p-0 h-auto">
                      Learn more about credit reports
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CreditScore;
