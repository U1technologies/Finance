
import React from "react";
import Layout from "../components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-white">
        <div className="container-tight">
          <div className="text-center">
            <h1 className="title-xl mb-4">Privacy Policy</h1>
            <p className="text-lg text-slate-light max-w-2xl mx-auto">
              How we collect, use, and protect your personal information.
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
                At PremiumFinance, we respect your privacy and are committed to protecting your 
                personal data. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you use our website and services.
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree with the terms of this 
                Privacy Policy, please do not access our website or use our services.
              </p>
              
              <h2>2. Information We Collect</h2>
              <p>We may collect several types of information from and about users of our website, including:</p>
              
              <h3>2.1 Personal Identifiable Information</h3>
              <p>This may include:</p>
              <ul>
                <li>Contact information (name, email address, phone number, mailing address)</li>
                <li>Financial information (income, expenses, existing credit products)</li>
                <li>Identity verification information (date of birth, PAN)</li>
                <li>Employment details</li>
                <li>Login credentials for your PremiumFinance account</li>
              </ul>
              
              <h3>2.2 Non-Personal Information</h3>
              <p>This may include:</p>
              <ul>
                <li>Device and usage information (IP address, browser type, operating system)</li>
                <li>Browsing patterns and preferences</li>
                <li>Referral source</li>
                <li>Aggregate data about page views and website navigation</li>
              </ul>
              
              <h2>3. How We Collect Information</h2>
              <p>We collect information through various methods, including:</p>
              <ul>
                <li>Direct interactions when you provide information through our website forms</li>
                <li>Automated technologies using cookies and similar tracking technologies</li>
                <li>Third parties such as credit bureaus (with your consent) and analytics providers</li>
              </ul>
              
              <h2>4. How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process your product applications and requests</li>
                <li>Personalize your experience and deliver content relevant to your interests</li>
                <li>Communicate with you about products, services, and updates</li>
                <li>Conduct research and analysis to improve our website and services</li>
                <li>Protect the security and integrity of our website and business</li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>
              
              <h2>5. Disclosure of Your Information</h2>
              <p>We may disclose your personal information to:</p>
              <ul>
                <li>Financial institutions and product providers when you express interest in their products</li>
                <li>Service providers who perform services on our behalf</li>
                <li>Business partners with whom we jointly offer products or services</li>
                <li>Legal authorities when required by law or to protect our rights</li>
              </ul>
              <p>
                We do not sell your personal information to third parties for marketing purposes 
                without your explicit consent.
              </p>
              
              <h2>6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                These measures include:
              </p>
              <ul>
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and testing</li>
                <li>Access controls and authentication procedures</li>
                <li>Regular staff training on data protection</li>
              </ul>
              <p>
                While we strive to use commercially acceptable means to protect your personal information, 
                no method of transmission over the Internet or electronic storage is 100% secure, and we 
                cannot guarantee absolute security.
              </p>
              
              <h2>7. Your Data Protection Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul>
                <li>Right to access your personal information</li>
                <li>Right to rectify inaccurate or incomplete information</li>
                <li>Right to erase your personal information</li>
                <li>Right to restrict or object to processing</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the details provided in the 
                "Contact Us" section below.
              </p>
              
              <h2>8. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect and track information about 
                your browsing activities on our website. These technologies help us deliver a better and 
                more personalized service, analyze usage patterns, and target advertisements.
              </p>
              <p>
                You can set your browser to refuse all or some browser cookies or to alert you when 
                websites set or access cookies. If you disable or refuse cookies, please note that 
                some parts of our website may become inaccessible or not function properly.
              </p>
              
              <h2>9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites that are not operated by us. 
                If you click on a third-party link, you will be directed to that third party's site. 
                We strongly advise you to review the Privacy Policy of every site you visit.
              </p>
              <p>
                We have no control over and assume no responsibility for the content, privacy policies, 
                or practices of any third-party sites or services.
              </p>
              
              <h2>10. Changes to this Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to 
                this Privacy Policy are effective when they are posted on this page.
              </p>
              
              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:<br />
                privacy@premiumfinance.com<br />
                123 Finance Street, Business District, 10001
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
