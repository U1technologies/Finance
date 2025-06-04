
// SEO Enhancement utilities for better search engine optimization

// Dynamic meta tag management
export const updateMetaTags = (title, description, keywords = '') => {
  // Update page title
  document.title = title;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }
  
  // Update meta keywords if provided
  if (keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);
  }
};

// Structured data for better SEO
export const addStructuredData = (data) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// Default structured data for financial services
export const addDefaultStructuredData = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "PremiumFinance",
    "description": "Compare credit cards, loans, and financial products. Find the best rates and benefits.",
    "url": window.location.origin,
    "logo": `${window.location.origin}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-890",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://facebook.com/premiumfinance",
      "https://twitter.com/premiumfinance",
      "https://linkedin.com/company/premiumfinance"
    ]
  };
  
  addStructuredData(organizationData);
};

// Initialize SEO enhancements
export const initializeSEO = () => {
  // Add default structured data
  addDefaultStructuredData();
  
  // Add canonical URL
  const canonical = document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = window.location.href;
  document.head.appendChild(canonical);
  
  // Add viewport meta if not present
  if (!document.querySelector('meta[name="viewport"]')) {
    const viewport = document.createElement('meta');
    viewport.name = 'viewport';
    viewport.content = 'width=device-width, initial-scale=1.0';
    document.head.appendChild(viewport);
  }
};

// Auto-initialize when script loads
if (typeof window !== 'undefined') {
  initializeSEO();
}
