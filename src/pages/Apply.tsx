
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { ArrowRight, Check } from "lucide-react";

const Apply = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    productType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    employmentStatus: "",
    annualIncome: "",
    address: "",
    city: "",
    pincode: "",
    agreedToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' 
        ? (e.target as HTMLInputElement).checked 
        : value
    });
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    setStep(4); // Go to thank you step
    window.scrollTo(0, 0);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Choose a Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Credit Card', 'Personal Loan', 'Home Loan', 'Business Loan', 'Buy Now Pay Later'].map((product) => (
                <label 
                  key={product}
                  className={`bg-white p-5 rounded-lg shadow-sm border-2 cursor-pointer transition-all ${
                    formData.productType === product 
                      ? 'border-teal ring-2 ring-teal-light' 
                      : 'border-transparent hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-start">
                    <input
                      type="radio"
                      name="productType"
                      value={product}
                      checked={formData.productType === product}
                      onChange={handleChange}
                      className="mt-1 mr-3"
                    />
                    <div>
                      <h3 className="font-medium">{product}</h3>
                      <p className="text-sm text-slate mt-1">Get matched with the best {product.toLowerCase()} options</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
            
            <div className="flex justify-end mt-8">
              <button 
                type="button" 
                onClick={nextStep} 
                disabled={!formData.productType}
                className="cta-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue <ArrowRight className="ml-2 h-5 w-5 inline-block" />
              </button>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Employment Status</label>
                <select
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Self-employed">Self-employed</option>
                  <option value="Unemployed">Unemployed</option>
                  <option value="Retired">Retired</option>
                  <option value="Student">Student</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                type="button" 
                onClick={prevStep}
                className="cta-outline"
              >
                Back
              </button>
              <button 
                type="button" 
                onClick={nextStep}
                disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.dob || !formData.employmentStatus}
                className="cta-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue <ArrowRight className="ml-2 h-5 w-5 inline-block" />
              </button>
            </div>
          </div>
        );
        
      case 3:
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Financial & Address Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">Annual Income (₹)</label>
                <input
                  type="number"
                  name="annualIncome"
                  value={formData.annualIncome}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                  placeholder="e.g., 500000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms as boolean}
                    onChange={handleChange}
                    className="mt-1 mr-3"
                    required
                  />
                  <span className="text-sm text-slate">
                    I agree to the <a href="/terms" className="text-teal">Terms & Conditions</a> and <a href="/privacy" className="text-teal">Privacy Policy</a>. I understand that my information will be used to process my application and may be shared with relevant financial partners.
                  </span>
                </label>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                type="button" 
                onClick={prevStep}
                className="cta-outline"
              >
                Back
              </button>
              <button 
                type="submit"
                disabled={!formData.annualIncome || !formData.address || !formData.city || !formData.pincode || !formData.agreedToTerms}
                className="cta-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Application
              </button>
            </div>
          </form>
        );
        
      case 4:
        return (
          <div className="text-center py-8">
            <div className="h-20 w-20 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-teal" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Application Submitted!</h2>
            <p className="text-slate mb-8 max-w-md mx-auto">
              Thank you for your application. We've received your information and will process it shortly. 
              You'll receive a confirmation email at {formData.email}.
            </p>
            <div className="space-y-4">
              <p className="font-medium">What's Next?</p>
              <ol className="text-left max-w-md mx-auto space-y-4">
                <li className="flex">
                  <span className="bg-teal-light h-6 w-6 rounded-full flex items-center justify-center text-teal font-medium mr-3 mt-0.5">1</span>
                  <span>Our team will review your application</span>
                </li>
                <li className="flex">
                  <span className="bg-teal-light h-6 w-6 rounded-full flex items-center justify-center text-teal font-medium mr-3 mt-0.5">2</span>
                  <span>You'll receive product options matching your profile</span>
                </li>
                <li className="flex">
                  <span className="bg-teal-light h-6 w-6 rounded-full flex items-center justify-center text-teal font-medium mr-3 mt-0.5">3</span>
                  <span>A financial advisor will contact you to discuss next steps</span>
                </li>
              </ol>
            </div>
            <div className="mt-8">
              <a href="/" className="cta-primary">
                Return to Home
              </a>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">Apply Now</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Complete your application in just a few minutes and get matched with the best financial products.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-gray">
        <div className="container-tight">
          {/* Progress Indicator */}
          {step < 4 && (
            <div className="mb-10">
              <div className="flex justify-between items-center">
                {[1, 2, 3].map((stepNumber) => (
                  <div key={stepNumber} className="flex flex-col items-center">
                    <div 
                      className={`rounded-full h-10 w-10 flex items-center justify-center ${
                        step >= stepNumber ? 'bg-teal text-white' : 'bg-gray-200 text-slate'
                      }`}
                    >
                      {stepNumber}
                    </div>
                    <span className="text-xs mt-2 text-slate">
                      {stepNumber === 1 && 'Product'}
                      {stepNumber === 2 && 'Personal Info'}
                      {stepNumber === 3 && 'Financial Details'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative mt-4">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200">
                  <div 
                    className="absolute top-0 left-0 h-1 bg-teal transition-all"
                    style={{ width: `${((step - 1) / 2) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          
          {/* Form Container */}
          <div className="bg-white rounded-lg shadow-soft p-8">
            {renderStep()}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
