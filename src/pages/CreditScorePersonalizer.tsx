
import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle2, ArrowRight, Shield } from "lucide-react";

const CreditScorePersonalizer = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    panCard: '',
    fullName: '',
    email: '',
    mobile: '',
    dateOfBirth: '',
    address: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validatePAN = (pan: string) => {
    // Basic validation for Indian PAN card: 5 letters + 4 numbers + 1 letter
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(pan);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobile = (mobile: string) => {
    // Basic validation for Indian mobile numbers
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile);
  };

  const handleContinue = () => {
    if (step === 1) {
      if (!validatePAN(formData.panCard)) {
        toast({
          title: "Invalid PAN Card",
          description: "Please enter a valid PAN Card number (e.g., ABCDE1234F)",
          variant: "destructive",
        });
        return;
      }
    } else if (step === 2) {
      if (!validateEmail(formData.email)) {
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email address",
          variant: "destructive",
        });
        return;
      }
      if (!validateMobile(formData.mobile)) {
        toast({
          title: "Invalid Mobile Number",
          description: "Please enter a valid 10-digit Indian mobile number",
          variant: "destructive",
        });
        return;
      }
    }

    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would typically submit the data to an API
    console.log("Submitting form data:", formData);
    
    // Show success message
    toast({
      title: "Request Submitted Successfully",
      description: "We'll send your personalized credit report to your email shortly.",
    });
    
    setSubmitted(true);
  };

  return (
    <Layout>
      <div className="container-wide py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="title-lg mb-4">Personalized Credit Score Analysis</h1>
            <p className="subtitle text-lg">
              Get a detailed analysis of your credit score and personalized tips to improve it.
            </p>
          </div>

          {!submitted ? (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-teal text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
                    <div className={`h-0.5 w-12 ${step >= 2 ? 'bg-teal' : 'bg-gray-200'}`}></div>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-teal text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
                    <div className={`h-0.5 w-12 ${step >= 3 ? 'bg-teal' : 'bg-gray-200'}`}></div>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-teal text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
                  </div>
                </div>
                <CardTitle>{
                  step === 1 ? "Identity Verification" : 
                  step === 2 ? "Contact Information" : 
                  "Additional Details"
                }</CardTitle>
                <CardDescription>{
                  step === 1 ? "Enter your PAN Card details for verification" : 
                  step === 2 ? "Provide your contact information for the report delivery" : 
                  "Help us understand your credit profile better"
                }</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {step === 1 && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="panCard">PAN Card Number *</Label>
                        <Input 
                          id="panCard"
                          name="panCard"
                          placeholder="ABCDE1234F"
                          value={formData.panCard}
                          onChange={handleChange}
                          className="uppercase"
                          maxLength={10}
                        />
                        <p className="text-xs text-slate">Your PAN will be used only for verification purposes</p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name (as per PAN) *</Label>
                        <Input 
                          id="fullName"
                          name="fullName"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.name@example.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <p className="text-xs text-slate">Your credit report will be sent to this email</p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mobile">Mobile Number *</Label>
                        <Input 
                          id="mobile"
                          name="mobile"
                          placeholder="10-digit mobile number"
                          value={formData.mobile}
                          onChange={handleChange}
                          maxLength={10}
                        />
                      </div>
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input 
                          id="dateOfBirth"
                          name="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Current Address</Label>
                        <Input 
                          id="address"
                          name="address"
                          placeholder="Enter your current address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mt-6">
                        <p className="text-sm flex items-start">
                          <Shield className="h-5 w-5 text-teal mr-2 mt-0.5" />
                          <span>Your data is protected with bank-level security and will not be shared with any third parties.</span>
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {step > 1 ? (
                  <Button variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                ) : <div></div>}
                <Button onClick={handleContinue}>
                  {step < 3 ? "Continue" : "Get My Credit Report"} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="bg-teal/10">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-teal/20 flex items-center justify-center mb-2">
                    <CheckCircle2 className="h-10 w-10 text-teal" />
                  </div>
                  <h3 className="text-2xl font-semibold">Request Submitted Successfully!</h3>
                  <p className="text-slate max-w-md">
                    Thank you for using our personalized credit score service. We'll analyze your credit history and send a detailed report with improvement tips to your email within 24 hours.
                  </p>
                  <div className="bg-white p-4 rounded-lg w-full mt-4">
                    <p className="font-semibold">What happens next?</p>
                    <ul className="text-left space-y-2 mt-2">
                      <li className="flex items-start">
                        <span className="text-teal mr-2">1.</span> 
                        <span>Our system will verify your PAN details</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2">2.</span> 
                        <span>We'll generate your comprehensive credit report</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2">3.</span> 
                        <span>You'll receive an email with your personalized report and improvement tips</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-slate">Didn't receive your report? Contact our support at support@premiumfinance.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mt-10">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Why Use Our Credit Score Service?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-teal mr-2 mt-0.5" />
                  <span>100% Free Credit Analysis with No Hidden Charges</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-teal mr-2 mt-0.5" />
                  <span>Personalized Tips to Improve Your Score</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-teal mr-2 mt-0.5" />
                  <span>Bank-Grade Security for Your Personal Information</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-teal mr-2 mt-0.5" />
                  <span>Trusted by 10,000+ Users Across India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreditScorePersonalizer;
