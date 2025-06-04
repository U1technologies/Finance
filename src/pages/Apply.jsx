
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { CheckCircle, ArrowRight, User, DollarSign, FileText } from "lucide-react";

const Apply = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    ssn: '',
    
    // Address Information
    address: '',
    city: '',
    state: '',
    zipCode: '',
    housingStatus: '',
    monthlyRent: '',
    
    // Employment Information
    employmentStatus: '',
    employer: '',
    jobTitle: '',
    workPhone: '',
    startDate: '',
    annualIncome: '',
    
    // Financial Information
    bankName: '',
    accountType: '',
    monthlyExpenses: '',
    existingDebt: '',
    
    // Product Selection
    productType: '',
    requestedAmount: '',
    purpose: ''
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form
      console.log('Form submitted:', formData);
      alert('Application submitted successfully!');
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStepIcon = (step) => {
    if (step < currentStep) return <CheckCircle className="h-6 w-6 text-green-500" />;
    if (step === currentStep) return <div className="h-6 w-6 bg-teal rounded-full flex items-center justify-center text-white text-sm font-bold">{step}</div>;
    return <div className="h-6 w-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-bold">{step}</div>;
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">Apply Now</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Complete your application in minutes. Our secure process ensures your 
              information is protected every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-white border-b">
        <div className="container-tight">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            <div className="flex items-center">
              {getStepIcon(1)}
              <span className="ml-2 text-sm font-medium">Product</span>
            </div>
            <div className="flex-1 h-px bg-gray-300 mx-4"></div>
            
            <div className="flex items-center">
              {getStepIcon(2)}
              <span className="ml-2 text-sm font-medium">Personal</span>
            </div>
            <div className="flex-1 h-px bg-gray-300 mx-4"></div>
            
            <div className="flex items-center">
              {getStepIcon(3)}
              <span className="ml-2 text-sm font-medium">Employment</span>
            </div>
            <div className="flex-1 h-px bg-gray-300 mx-4"></div>
            
            <div className="flex items-center">
              {getStepIcon(4)}
              <span className="ml-2 text-sm font-medium">Financial</span>
            </div>
            <div className="flex-1 h-px bg-gray-300 mx-4"></div>
            
            <div className="flex items-center">
              {getStepIcon(5)}
              <span className="ml-2 text-sm font-medium">Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray">
        <div className="container-tight">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-soft p-8">
              
              {/* Step 1: Product Selection */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center mb-6">
                    <DollarSign className="h-6 w-6 text-teal mr-2" />
                    <h2 className="text-xl font-semibold">Product Selection</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Product Type</label>
                      <select 
                        className="w-full p-3 border rounded-lg"
                        value={formData.productType}
                        onChange={(e) => handleInputChange('productType', e.target.value)}
                      >
                        <option value="">Select a product</option>
                        <option value="personal-loan">Personal Loan</option>
                        <option value="credit-card">Credit Card</option>
                        <option value="home-loan">Home Loan</option>
                        <option value="business-loan">Business Loan</option>
                        <option value="auto-loan">Auto Loan</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Requested Amount</label>
                      <input 
                        type="number"
                        className="w-full p-3 border rounded-lg"
                        placeholder="Enter amount"
                        value={formData.requestedAmount}
                        onChange={(e) => handleInputChange('requestedAmount', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Purpose</label>
                      <select 
                        className="w-full p-3 border rounded-lg"
                        value={formData.purpose}
                        onChange={(e) => handleInputChange('purpose', e.target.value)}
                      >
                        <option value="">Select purpose</option>
                        <option value="debt-consolidation">Debt Consolidation</option>
                        <option value="home-improvement">Home Improvement</option>
                        <option value="business-expansion">Business Expansion</option>
                        <option value="education">Education</option>
                        <option value="medical">Medical Expenses</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center mb-6">
                    <User className="h-6 w-6 text-teal mr-2" />
                    <h2 className="text-xl font-semibold">Personal Information</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input 
                        type="text"
                        className="w-full p-3 border rounded-lg"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input 
                        type="text"
                        className="w-full p-3 border rounded-lg"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email"
                        className="w-full p-3 border rounded-lg"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input 
                        type="tel"
                        className="w-full p-3 border rounded-lg"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Date of Birth</label>
                      <input 
                        type="date"
                        className="w-full p-3 border rounded-lg"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">SSN (Last 4 digits)</label>
                      <input 
                        type="text"
                        className="w-full p-3 border rounded-lg"
                        placeholder="0000"
                        maxLength="4"
                        value={formData.ssn}
                        onChange={(e) => handleInputChange('ssn', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Address</label>
                      <input 
                        type="text"
                        className="w-full p-3 border rounded-lg"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">City</label>
                        <input 
                          type="text"
                          className="w-full p-3 border rounded-lg"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">State</label>
                        <select 
                          className="w-full p-3 border rounded-lg"
                          value={formData.state}
                          onChange={(e) => handleInputChange('state', e.target.value)}
                        >
                          <option value="">Select State</option>
                          <option value="CA">California</option>
                          <option value="NY">New York</option>
                          <option value="TX">Texas</option>
                          <option value="FL">Florida</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">ZIP Code</label>
                        <input 
                          type="text"
                          className="w-full p-3 border rounded-lg"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Employment Information */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center mb-6">
                    <FileText className="h-6 w-6 text-teal mr-2" />
                    <h2 className="text-xl font-semibold">Employment Information</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Employment Status</label>
                      <select 
                        className="w-full p-3 border rounded-lg"
                        value={formData.employmentStatus}
                        onChange={(e) => handleInputChange('employmentStatus', e.target.value)}
                      >
                        <option value="">Select status</option>
                        <option value="employed">Employed</option>
                        <option value="self-employed">Self-Employed</option>
                        <option value="retired">Retired</option>
                        <option value="student">Student</option>
                        <option value="unemployed">Unemployed</option>
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Employer</label>
                        <input 
                          type="text"
                          className="w-full p-3 border rounded-lg"
                          value={formData.employer}
                          onChange={(e) => handleInputChange('employer', e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Job Title</label>
                        <input 
                          type="text"
                          className="w-full p-3 border rounded-lg"
                          value={formData.jobTitle}
                          onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Work Phone</label>
                        <input 
                          type="tel"
                          className="w-full p-3 border rounded-lg"
                          value={formData.workPhone}
                          onChange={(e) => handleInputChange('workPhone', e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Start Date</label>
                        <input 
                          type="date"
                          className="w-full p-3 border rounded-lg"
                          value={formData.startDate}
                          onChange={(e) => handleInputChange('startDate', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Annual Income</label>
                      <input 
                        type="number"
                        className="w-full p-3 border rounded-lg"
                        placeholder="Enter annual income"
                        value={formData.annualIncome}
                        onChange={(e) => handleInputChange('annualIncome', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Financial Information */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="flex items-center mb-6">
                    <DollarSign className="h-6 w-6 text-teal mr-2" />
                    <h2 className="text-xl font-semibold">Financial Information</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Bank Name</label>
                        <input 
                          type="text"
                          className="w-full p-3 border rounded-lg"
                          value={formData.bankName}
                          onChange={(e) => handleInputChange('bankName', e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Account Type</label>
                        <select 
                          className="w-full p-3 border rounded-lg"
                          value={formData.accountType}
                          onChange={(e) => handleInputChange('accountType', e.target.value)}
                        >
                          <option value="">Select type</option>
                          <option value="checking">Checking</option>
                          <option value="savings">Savings</option>
                          <option value="both">Both</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Monthly Expenses</label>
                        <input 
                          type="number"
                          className="w-full p-3 border rounded-lg"
                          placeholder="Enter monthly expenses"
                          value={formData.monthlyExpenses}
                          onChange={(e) => handleInputChange('monthlyExpenses', e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Existing Debt</label>
                        <input 
                          type="number"
                          className="w-full p-3 border rounded-lg"
                          placeholder="Enter total debt"
                          value={formData.existingDebt}
                          onChange={(e) => handleInputChange('existingDebt', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Review */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="flex items-center mb-6">
                    <CheckCircle className="h-6 w-6 text-teal mr-2" />
                    <h2 className="text-xl font-semibold">Review Your Application</h2>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-medium mb-4">Application Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Product:</span>
                        <span className="font-medium">{formData.productType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Amount:</span>
                        <span className="font-medium">${formData.requestedAmount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Name:</span>
                        <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email:</span>
                        <span className="font-medium">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Annual Income:</span>
                        <span className="font-medium">${formData.annualIncome}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      By submitting this application, you agree to our terms and conditions and 
                      authorize us to check your credit report.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                {currentStep > 1 && (
                  <button 
                    onClick={prevStep}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </button>
                )}
                
                <button 
                  onClick={nextStep}
                  className={`px-6 py-2 bg-teal text-white rounded-lg hover:bg-teal-dark transition-colors flex items-center ${currentStep === 1 ? 'ml-auto' : ''}`}
                >
                  {currentStep === 5 ? 'Submit Application' : 'Next'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
