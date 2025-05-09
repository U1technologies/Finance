
import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const CreditScoreCalculator = () => {
  const { toast } = useToast();
  const [creditScore, setCreditScore] = useState<number | null>(null);
  const [formValues, setFormValues] = useState({
    paymentHistory: 80, // Payment history (35%)
    creditUtilization: 30, // Credit utilization (30%)
    creditAge: 5, // Length of credit history in years (15%)
    newCredit: 1, // Number of new credit accounts (10%)
    creditMix: 2 // Types of credit used (10%)
  });

  const calculateCreditScore = () => {
    // FICO score calculation (simplified model)
    const paymentHistoryScore = formValues.paymentHistory * 3.5; // 35%
    const utilizationScore = (100 - formValues.creditUtilization) * 3; // 30%
    const creditAgeScore = Math.min(formValues.creditAge * 30, 150); // 15%
    const newCreditScore = Math.max(100 - (formValues.newCredit * 25), 0); // 10%
    const creditMixScore = formValues.creditMix * 50; // 10%
    
    // Calculate total score (300-850 range)
    const calculatedScore = Math.round(
      300 + ((paymentHistoryScore + utilizationScore + creditAgeScore + newCreditScore + creditMixScore) / 1000) * 550
    );
    
    // Ensure the score is within valid FICO range
    const finalScore = Math.max(300, Math.min(850, calculatedScore));
    
    setCreditScore(finalScore);
    
    toast({
      title: "Credit Score Calculated",
      description: `Your estimated credit score is ${finalScore}`,
    });
  };

  const getCreditScoreCategory = (score: number) => {
    if (score >= 800) return { category: "Exceptional", color: "text-emerald-500" };
    if (score >= 740) return { category: "Very Good", color: "text-green-500" };
    if (score >= 670) return { category: "Good", color: "text-yellow-500" };
    if (score >= 580) return { category: "Fair", color: "text-amber-500" };
    return { category: "Poor", color: "text-red-500" };
  };

  const handleSliderChange = (name: keyof typeof formValues, value: number[]) => {
    setFormValues({ ...formValues, [name]: value[0] });
  };

  return (
    <Layout>
      <div className="container-wide py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="title-lg mb-4">Free Credit Score Calculator</h1>
            <p className="subtitle text-lg">
              Estimate your credit score with our interactive calculator. Adjust the sliders to see how different factors impact your score.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Credit Score Factors</CardTitle>
              <CardDescription>Adjust the sliders to match your financial situation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Payment History */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="font-medium">Payment History (35%)</label>
                  <span>{formValues.paymentHistory}% on-time payments</span>
                </div>
                <Slider
                  defaultValue={[formValues.paymentHistory]}
                  max={100}
                  step={1}
                  onValueChange={(value) => handleSliderChange("paymentHistory", value)}
                />
                <p className="text-sm text-slate">On-time payment percentage over the past 24 months</p>
              </div>
              
              {/* Credit Utilization */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="font-medium">Credit Utilization (30%)</label>
                  <span>{formValues.creditUtilization}%</span>
                </div>
                <Slider
                  defaultValue={[formValues.creditUtilization]}
                  max={100}
                  step={1}
                  onValueChange={(value) => handleSliderChange("creditUtilization", value)}
                />
                <p className="text-sm text-slate">Percentage of available credit you're using</p>
              </div>
              
              {/* Credit Age */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="font-medium">Length of Credit History (15%)</label>
                  <span>{formValues.creditAge} years</span>
                </div>
                <Slider
                  defaultValue={[formValues.creditAge]}
                  min={0}
                  max={30}
                  step={1}
                  onValueChange={(value) => handleSliderChange("creditAge", value)}
                />
                <p className="text-sm text-slate">Average age of all your credit accounts</p>
              </div>
              
              {/* New Credit */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="font-medium">New Credit (10%)</label>
                  <span>{formValues.newCredit} accounts</span>
                </div>
                <Slider
                  defaultValue={[formValues.newCredit]}
                  min={0}
                  max={10}
                  step={1}
                  onValueChange={(value) => handleSliderChange("newCredit", value)}
                />
                <p className="text-sm text-slate">Number of recently opened accounts</p>
              </div>
              
              {/* Credit Mix */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="font-medium">Credit Mix (10%)</label>
                  <span>{formValues.creditMix} types</span>
                </div>
                <Slider
                  defaultValue={[formValues.creditMix]}
                  min={1}
                  max={5}
                  step={1}
                  onValueChange={(value) => handleSliderChange("creditMix", value)}
                />
                <p className="text-sm text-slate">Different types of credit (credit cards, loans, etc.)</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={calculateCreditScore} className="w-full">Calculate My Credit Score</Button>
            </CardFooter>
          </Card>

          {creditScore && (
            <Card className="bg-navy text-white">
              <CardHeader>
                <CardTitle className="text-center">Your Estimated Credit Score</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-5xl font-bold mb-4">{creditScore}</div>
                <div className={`text-xl ${getCreditScoreCategory(creditScore).color}`}>
                  {getCreditScoreCategory(creditScore).category}
                </div>
                <p className="mt-4 text-slate-light">
                  This is an estimation based on the information provided. Your actual credit score may vary.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <p className="text-sm text-center text-slate-light">
                  Trusted by 10,000+ users for credit score estimates
                </p>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CreditScoreCalculator;
