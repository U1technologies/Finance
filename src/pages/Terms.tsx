
import React from "react";
import Layout from "../components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">Terms & Conditions</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray">
        <div className="container-tight">
          <div className="bg-white rounded-lg shadow-soft p-8">
            <div className="prose prose-lg max-w-none">
              <p>Last Updated: May 1, 2025</p>
              
              <h2>1. Introduction</h2>
              <p>
                Welcome to PremiumFinance. These Terms and Conditions govern your use of our website, 
                products, and services. By accessing or using PremiumFinance, you agree to be bound 
                by these Terms. If you disagree with any part of these terms, you may not access our services.
              </p>
              
              <h2>2. Definitions</h2>
              <p>
                <strong>"Service"</strong> refers to the PremiumFinance website and platform.<br />
                <strong>"User"</strong> refers to any individual accessing or using the Service.<br />
                <strong>"Products"</strong> refers to financial products compared or offered on our platform.<br />
                <strong>"Content"</strong> refers to information displayed on our website including text, images, audio, video, or other material.
              </p>
              
              <h2>3. Use of Service</h2>
              <p>
                PremiumFinance provides a platform for comparing financial products and services 
                from various providers. We do not provide financial advice or directly offer financial products. 
                The Service is intended for informational purposes only.
              </p>
              <p>
                You agree to use the Service only for lawful purposes and in accordance with these Terms. 
                You are prohibited from:
              </p>
              <ul>
                <li>Using the Service for any illegal activity</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Engaging in any activity that disrupts or interferes with the Service</li>
                <li>Collecting or harvesting data from the Service without permission</li>
                <li>Using the Service to transmit malware or other harmful code</li>
              </ul>
              
              <h2>4. Account Registration</h2>
              <p>
                Some features of our Service may require account registration. You agree to provide 
                accurate and complete information when creating an account and to update this information 
                to keep it current. You are responsible for maintaining the confidentiality of your account 
                credentials and for all activities that occur under your account.
              </p>
              
              <h2>5. Product Information</h2>
              <p>
                While we strive to provide accurate and up-to-date information about financial products, 
                we cannot guarantee the accuracy, completeness, or reliability of any product information 
                displayed on our Service. Product details, rates, fees, and terms are subject to change by 
                the respective providers without notice.
              </p>
              <p>
                Before applying for any financial product, we recommend reviewing the provider's official 
                documentation and terms.
              </p>
              
              <h2>6. Applications and Referrals</h2>
              <p>
                When you apply for a financial product through our Service, you may be directed to a third-party 
                website to complete your application. Your interaction with these third parties is governed by 
                their respective terms and privacy policies, which we encourage you to review.
              </p>
              <p>
                PremiumFinance may receive compensation from financial providers when users apply for or 
                acquire products through our Service. This compensation may influence how and where products 
                appear on our platform.
              </p>
              
              <h2>7. Intellectual Property</h2>
              <p>
                All content on the Service, including but not limited to text, graphics, logos, images, and 
                software, is the property of PremiumFinance or our content suppliers and is protected by copyright, 
                trademark, and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works from any content without 
                our explicit written permission.
              </p>
              
              <h2>8. Disclaimer of Warranties</h2>
              <p>
                The Service is provided on an "as is" and "as available" basis. PremiumFinance makes no 
                warranties, expressed or implied, regarding the reliability, accuracy, completeness, availability, 
                or performance of the Service.
              </p>
              <p>
                We do not warrant that the Service will be uninterrupted or error-free, that defects will be 
                corrected, or that our servers are free of viruses or other harmful components.
              </p>
              
              <h2>9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, PremiumFinance shall not be liable for any indirect, 
                incidental, special, consequential or punitive damages, or any loss of profits or revenues, 
                whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible 
                losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
              
              <h2>10. Modifications to Terms</h2>
              <p>
                PremiumFinance reserves the right to modify these Terms at any time. We will provide notice of 
                significant changes by posting an announcement on our website or sending you an email. Your 
                continued use of the Service after such modifications constitutes your acceptance of the revised Terms.
              </p>
              
              <h2>11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India, without 
                regard to its conflict of law provisions.
              </p>
              
              <h2>12. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:<br />
                legal@premiumfinance.com<br />
                123 Finance Street, Business District, 10001
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
