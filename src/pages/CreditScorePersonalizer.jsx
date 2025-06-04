
import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { TrendingUp, AlertCircle, CheckCircle, Target } from "lucide-react";

const CreditScorePersonalizer = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    currentScore: '',
    targetScore: '',
    paymentHistory: '',
    creditUtilization: '',
    creditAge: '',
    newAccounts: '',
    primaryGoal: ''
  });
  const [recommendations, setRecommendations] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const generateRecommendations = () => {
    const current = parseInt(formData.currentScore);
    const target = parseInt(formData.targetScore);
    const utilization = parseInt(formData.creditUtilization);
    
    const recs = [];
    
    // Payment history recommendations
    if (formData.paymentHistory === 'sometimes') {
      recs.push({
        priority: 'high',
        title: 'Set Up Automatic Payments',
        description: 'Payment history is 35% of your score. Set up autopay for at least minimum payments.',
        impact: '+20-50 points',
        timeframe: '1-3 months'
      });
    }
    
    // Credit utilization recommendations
    if (utilization > 30) {
      recs.push({
        priority: 'high',
        title: 'Reduce Credit Utilization',
        description: `Your utilization is ${utilization}%. Aim for under 30%, ideally under 10%.`,
        impact: '+10-30 points',
        timeframe: '1-2 months'
      });
    }
    
    // Credit age recommendations
    if (parseInt(formData.creditAge) < 2) {
      recs.push({
        priority: 'medium',
        title: 'Keep Old Accounts Open',
        description: 'Don\'t close your oldest credit cards. Length of credit history affects your score.',
        impact: '+5-15 points',
        timeframe: '6-12 months'
      });
    }
    
    // New accounts recommendations
    if (parseInt(formData.newAccounts) > 2) {
      recs.push({
        priority: 'medium',
        title: 'Limit New Credit Applications',
        description: 'You\'ve opened several new accounts. Avoid new applications for 6 months.',
        impact: '+5-10 points',
        timeframe: '3-6 months'
      });
    }
    
    // Goal-specific recommendations
    if (formData.primaryGoal === 'mortgage') {
      recs.push({
        priority: 'high',
        title: 'Optimize for Mortgage Application',
        description: 'Pay down balances to 0% utilization and avoid new credit for 6 months before applying.',
        impact: '+15-40 points',
        timeframe: '3-6 months'
      });
    }

    if (recs.length === 0) {
      recs.push({
        priority: 'low',
        title: 'Maintain Good Habits',
        description: 'Your credit profile looks good! Continue paying on time and keeping utilization low.',
        impact: '+5-10 points',
        timeframe: '6-12 months'
      });
    }
    
    setRecommendations(recs);
    toast({
      title: "Recommendations Generated",
      description: `We've created ${recs.length} personalized recommendations for you.`,
    });
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      generateRecommendations();
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return AlertCircle;
      case 'medium': return Target;
      case 'low': return CheckCircle;
      default: return TrendingUp;
    }
  };

  return (
    <Layout>
      <div className="container-wide py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="title-lg mb-4">Credit Score Personalizer</h1>
            <p className="subtitle text-lg">
              Get personalized recommendations to improve your credit score based on your specific situation.
            </p>
          </div>

          {!recommendations ? (
            <Card>
              <CardHeader>
                <CardTitle>Step {currentStep} of 3</CardTitle>
                <CardDescription>
                  {currentStep === 1 && "Tell us about your current credit situation"}
                  {currentStep === 2 && "Help us understand your credit behavior"}
                  {currentStep === 3 && "What's your primary financial goal?"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {currentStep === 1 && (
                  <>
                    <div className="space-y-2">
                      <label className="font-medium">Current Credit Score Range</label>
                      <select 
                        className="w-full p-3 border rounded-lg"
                        value={formData.currentScore}
                        onChange={(e) => handleInputChange('currentScore', e.target.value)}
                      >
                        <option value="">Select your range</option>
                        <option value="300">300-579 (Poor)</option>
                        <option value="580">580-669 (Fair)</option>
                        <option value="670">670-739 (Good)</option>
                        <option value="740">740-799 (Very Good)</option>
                        <option value="800">800-850 (Exceptional)</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="font-medium">Target Credit Score</label>
                      <select 
                        className="w-full p-3 border rounded-lg"
                        value={formData.targetScore}
                        onChange={(e) => handleInputChange('targetScore', e.target.value)}
                      >
                        <option value="">Select your target</option>
                        <option value="650">650+ (Fair)</option>
                        <option value="700">700+ (Good)</option>
                        <option value="750">750+ (Very Good)</option>
                        <option value="800">800+ (Exceptional)</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="font-medium">Current Credit Utilization</label>
                      <select 
                        className="w-full p-3 border rounded-lg"
                        value={formData.creditUtilization}
                        onChange={(e) => handleInputChange('creditUtilization', e.target.value)}
                      >
                        <option value="">Select utilization rate</option>
                        <option value="0">0-10% (Excellent)</option>
                        <option value="20">10-30% (Good)</option>
                        <option value="50">30-50% (Fair)</option>
                        <option value="70">50-70% (Poor)</option>
                        <option value="90">70%+ (Very Poor)</option>
                      </select>
                    </div>
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <div className="space-y-2">
                      <label className="font-medium">Payment History</label>
                      <select 
                        className="w-full p-3 border rounded-lg"
                        value={formData.paymentHistory}
                        onChange={(e) => handleInputChange('paymentHistory', e.target.value)}
                      >
                        <option value="">How often do you pay on time?</option>
                        <option value="always">Always on time</option>
                        <option value="usually">Usually on time</option>
                        <option value="sometimes">Sometimes late</option>
                        <option value="often">Often late</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="font-medium">Oldest Credit Account Age</label>
                      <select 
                        className="w-full p-3 border rounded-lg"
                        value={formData.creditAge}
                        onChange={(e) => handleInputChange('creditAge', e.target.value)}
                      >
                        <option value="">How old is your oldest account?</option>
                        <option value="0">Less than 1 year</option>
                        <option value="1">1-2 years</option>
                        <option value="3">3-5 years</option>
                        <option value="6">6-10 years</option>
                        <option value="10">10+ years</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="font-medium">New Accounts in Last 12 Months</label>
                      <select 
                        className="w-full p-3 border rounded-lg"
                        value={formData.newAccounts}
                        onChange={(e) => handleInputChange('newAccounts', e.target.value)}
                      >
                        <option value="">How many new accounts?</option>
                        <option value="0">0 accounts</option>
                        <option value="1">1 account</option>
                        <option value="2">2 accounts</option>
                        <option value="3">3 accounts</option>
                        <option value="4">4+ accounts</option>
                      </select>
                    </div>
                  </>
                )}

                {currentStep === 3 && (
                  <div className="space-y-2">
                    <label className="font-medium">Primary Financial Goal</label>
                    <select 
                      className="w-full p-3 border rounded-lg"
                      value={formData.primaryGoal}
                      onChange={(e) => handleInputChange('primaryGoal', e.target.value)}
                    >
                      <option value="">What's your main goal?</option>
                      <option value="general">General credit improvement</option>
                      <option value="creditcard">Get approved for a credit card</option>
                      <option value="autoloan">Get approved for an auto loan</option>
                      <option value="mortgage">Get approved for a mortgage</option>
                      <option value="personal">Get a personal loan</option>
                      <option value="rates">Get better interest rates</option>
                    </select>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={nextStep}
                  className="w-full"
                  disabled={
                    (currentStep === 1 && (!formData.currentScore || !formData.targetScore || !formData.creditUtilization)) ||
                    (currentStep === 2 && (!formData.paymentHistory || !formData.creditAge || !formData.newAccounts)) ||
                    (currentStep === 3 && !formData.primaryGoal)
                  }
                >
                  {currentStep === 3 ? 'Get My Recommendations' : 'Next Step'}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-6 w-6 mr-2 text-teal" />
                    Your Personalized Recommendations
                  </CardTitle>
                  <CardDescription>
                    Based on your profile, here are the most impactful actions you can take:
                  </CardDescription>
                </CardHeader>
              </Card>

              {recommendations.map((rec, index) => {
                const IconComponent = getPriorityIcon(rec.priority);
                return (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-2 rounded-full ${getPriorityColor(rec.priority)}`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg">{rec.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(rec.priority)}`}>
                              {rec.priority.toUpperCase()} PRIORITY
                            </span>
                          </div>
                          <p className="text-slate mb-3">{rec.description}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="text-green-600 font-medium">
                              Potential Impact: {rec.impact}
                            </span>
                            <span className="text-blue-600">
                              Timeframe: {rec.timeframe}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-slate mb-4">
                    Want to track your progress and get updated recommendations?
                  </p>
                  <Button onClick={() => {
                    setRecommendations(null);
                    setCurrentStep(1);
                    setFormData({
                      currentScore: '',
                      targetScore: '',
                      paymentHistory: '',
                      creditUtilization: '',
                      creditAge: '',
                      newAccounts: '',
                      primaryGoal: ''
                    });
                  }}>
                    Start Over
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CreditScorePersonalizer;
