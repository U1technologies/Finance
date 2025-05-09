
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import { 
  CreditCard, 
  Shield, 
  ArrowRight, 
  TrendingUp, 
  Lock, 
  LineChart, 
  AlertCircle 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";

const CreditScore = () => {
  const [creditScore, setCreditScore] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  // Credit score calculator form schema
  const calculatorFormSchema = z.object({
    age: z.string().min(1, "Age is required"),
    income: z.string().min(1, "Annual income is required"),
    creditCards: z.string().min(1, "Number of credit cards is required"),
    loans: z.string().min(1, "Number of loans is required"),
  });

  // Lead collection form schema
  const leadFormSchema = z.object({
    panCard: z.string().min(10, "PAN Card must be 10 characters").max(10, "PAN Card must be 10 characters"),
    email: z.string().email("Please enter a valid email address"),
    mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
  });

  const calculatorForm = useForm<z.infer<typeof calculatorFormSchema>>({
    resolver: zodResolver(calculatorFormSchema),
    defaultValues: {
      age: "",
      income: "",
      creditCards: "0",
      loans: "0",
    },
  });

  const leadForm = useForm<z.infer<typeof leadFormSchema>>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      panCard: "",
      email: "",
      mobile: "",
    },
  });

  const calculateCreditScore = (data: z.infer<typeof calculatorFormSchema>) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Simple algorithm for demo purposes
      const age = parseInt(data.age);
      const income = parseInt(data.income);
      const creditCards = parseInt(data.creditCards);
      const loans = parseInt(data.loans);
      
      let score = 500;
      
      // Age factor (older = more stability)
      if (age > 25) score += 30;
      if (age > 35) score += 30;
      if (age > 50) score += 20;
      
      // Income factor
      if (income > 300000) score += 50;
      if (income > 600000) score += 50;
      if (income > 1200000) score += 50;
      
      // Credit cards factor (2-3 is optimal)
      if (creditCards >= 1 && creditCards <= 3) score += 50;
      if (creditCards > 3) score -= 20 * (creditCards - 3);
      
      // Loans factor (fewer is better)
      if (loans === 0) score += 50;
      if (loans >= 1) score -= 20 * loans;
      
      // Ensure score is within range
      score = Math.max(300, Math.min(score, 850));
      
      setCreditScore(score);
      setLoading(false);
    }, 1500);
  };
  
  const submitLeadForm = (data: z.infer<typeof leadFormSchema>) => {
    console.log("Lead form data:", data);
    
    toast({
      title: "Lead submitted successfully!",
      description: "We'll contact you with personalized credit services soon.",
    });
    
    leadForm.reset();
  };

  return (
    <Layout>
      <section className="bg-gradient-to-b from-navy to-navy/90 text-white py-24">
        <div className="container-tight pt-20">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              className="title-lg mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Check Your Credit Score
            </motion.h1>
            <motion.p 
              className="subtitle text-white/80 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Understand your credit health and get personalized recommendations to improve your score.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="title-md mb-6">Credit Score Calculator</h2>
              <p className="text-slate mb-6">
                Fill in the details below to get an estimate of your credit score. This is for demonstration purposes and doesn't reflect your actual credit score.
              </p>
              
              <Card className="shadow-md border-0">
                <CardContent className="p-6">
                  <Form {...calculatorForm}>
                    <form onSubmit={calculatorForm.handleSubmit(calculateCreditScore)} className="space-y-6">
                      <FormField
                        control={calculatorForm.control}
                        name="age"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Age</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="Enter your age" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={calculatorForm.control}
                        name="income"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Annual Income (₹)</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="Enter your annual income" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={calculatorForm.control}
                          name="creditCards"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Number of Credit Cards</FormLabel>
                              <FormControl>
                                <Input type="number" placeholder="0" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={calculatorForm.control}
                          name="loans"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Active Loans</FormLabel>
                              <FormControl>
                                <Input type="number" placeholder="0" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-teal hover:bg-teal/90 text-white"
                        disabled={loading}
                      >
                        {loading ? "Calculating..." : "Calculate Credit Score"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
              
              {creditScore && (
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="overflow-hidden border-0 shadow-md">
                    <div className="bg-teal text-white p-4 text-center">
                      <h3 className="font-semibold">Your Estimated Credit Score</h3>
                    </div>
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="relative h-44 w-44">
                          <div className="absolute inset-0 rounded-full border-8 border-gray-100"></div>
                          <motion.div 
                            className="absolute inset-0 rounded-full border-8 border-teal"
                            style={{ 
                              borderColor: creditScore < 550 ? '#ef4444' : creditScore < 700 ? '#f59e0b' : '#10b981',
                              pathLength: (creditScore - 300) / 550
                            }}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: (creditScore - 300) / 550 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                          ></motion.div>
                          <div className="absolute inset-0 flex items-center justify-center flex-col">
                            <motion.span 
                              className="text-4xl font-bold"
                              initial={{ scale: 0.5, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.5, duration: 0.5 }}
                            >
                              {creditScore}
                            </motion.span>
                            <span className="text-sm text-slate">out of 850</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-left mt-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-slate">Poor</span>
                          <span className="text-sm text-slate">Excellent</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full">
                          <motion.div 
                            className="h-full rounded-full"
                            style={{ 
                              width: `${((creditScore - 300) / 550) * 100}%`,
                              backgroundColor: creditScore < 550 ? '#ef4444' : creditScore < 700 ? '#f59e0b' : '#10b981'
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: `${((creditScore - 300) / 550) * 100}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          ></motion.div>
                        </div>
                      </div>

                      <div className="mt-6 text-left">
                        <h4 className="font-semibold mb-2">
                          {creditScore < 550 ? 'Poor Credit Score' : creditScore < 700 ? 'Fair Credit Score' : 'Good Credit Score'}
                        </h4>
                        <p className="text-slate text-sm">
                          {creditScore < 550 
                            ? 'Your credit score needs improvement. Consider reducing debt and making on-time payments.'
                            : creditScore < 700 
                              ? 'Your credit score is fair. Continue making payments on time and reduce high-interest debt.'
                              : 'Congratulations! You have a good credit score. Keep up the good financial habits.'}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
            
            <div>
              <div className="sticky top-24">
                <h2 className="title-md mb-6">Get Personalized Credit Advice</h2>
                <p className="text-slate mb-6">
                  Provide your details below and our credit experts will contact you with customized recommendations to improve your credit score.
                </p>
                
                <Card className="bg-white shadow-lg border-0 overflow-hidden">
                  <div className="bg-teal text-white p-4">
                    <h3 className="font-semibold">Credit Services Lead Form</h3>
                  </div>
                  <CardContent className="p-6">
                    <Form {...leadForm}>
                      <form onSubmit={leadForm.handleSubmit(submitLeadForm)} className="space-y-6">
                        <FormField
                          control={leadForm.control}
                          name="panCard"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>PAN Card</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter PAN Card number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={leadForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="Enter your email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={leadForm.control}
                          name="mobile"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mobile Number</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="Enter your mobile number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-teal hover:bg-teal/90 text-white"
                        >
                          Submit <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </Form>
                    
                    <div className="flex items-center justify-center mt-6 text-slate text-xs">
                      <Lock className="h-3 w-3 mr-1" />
                      <span>Your information is secure and will not be shared</span>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-8 bg-teal/5 rounded-lg p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-teal" />
                    Why Check Your Credit Score?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate">Get better interest rates on loans and credit cards</span>
                    </li>
                    <li className="flex items-start">
                      <CreditCard className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate">Qualify for higher credit limits and premium cards</span>
                    </li>
                    <li className="flex items-start">
                      <LineChart className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate">Track your financial health and progress over time</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate">Identify areas for improvement in your financial habits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CreditScore;
