
/**
 * SEO Enhancer for PremiumFinance
 * This script adds additional SEO elements to the homepage including:
 * - Schema.org structured data
 * - Testimonial rich snippets
 * - Trust signals
 */

(function() {
  // Only run on homepage
  if (window.location.pathname === '/') {
    // Schema.org structured data for financial service
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'FinancialService',
      'name': 'PremiumFinance',
      'description': 'Compare credit cards, loans and financial products. Find the best rewards, cashback, travel benefits, and interest rates.',
      'url': window.location.origin,
      'sameAs': [
        'https://www.facebook.com/PremiumFinance',
        'https://twitter.com/PremiumFinance',
        'https://www.instagram.com/PremiumFinance',
        'https://www.linkedin.com/company/PremiumFinance'
      ],
      'logo': `${window.location.origin}/logo.png`,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '123 Finance Street',
        'addressLocality': 'Business District',
        'postalCode': '10001',
        'addressCountry': 'IN'
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.8',
        'ratingCount': '10432'
      },
      'offers': {
        '@type': 'Offer',
        'description': 'Free Credit Score Check',
        'url': `${window.location.origin}/credit-score`
      }
    };
    
    // Reviews schema data
    const reviewsSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'PremiumFinance Credit Score Services',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.8',
        'reviewCount': '10432'
      },
      'review': [
        {
          '@type': 'Review',
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': '5',
            'bestRating': '5'
          },
          'author': {
            '@type': 'Person',
            'name': 'Rajiv Mehta'
          },
          'reviewBody': 'PremiumFinance made it incredibly easy to find the perfect credit card for my business needs.'
        },
        {
          '@type': 'Review',
          'reviewRating': {
            '@type': 'Rating',
            'ratingValue': '4',
            'bestRating': '5'
          },
          'author': {
            '@type': 'Person',
            'name': 'Priya Sharma'
          },
          'reviewBody': 'I was looking for a travel rewards card and found exactly what I needed here.'
        }
      ]
    };

    // Create and append schema data script tags
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify(schemaData);
    document.head.appendChild(schemaScript);
    
    const reviewsSchemaScript = document.createElement('script');
    reviewsSchemaScript.type = 'application/ld+json';
    reviewsSchemaScript.text = JSON.stringify(reviewsSchema);
    document.head.appendChild(reviewsSchemaScript);
    
    // Update meta tags with keywords
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = 'Get your Free Credit Score, Instant Credit Check & Personalized Credit Tips. Compare the best credit cards, loans and financial products with PremiumFinance - Trusted by 10,000+ users.';
    }
    
    // Add additional meta tags for SEO
    const keywordsTag = document.createElement('meta');
    keywordsTag.name = 'keywords';
    keywordsTag.content = 'Free Credit Score, Instant Credit Check, Personalized Credit Tips, Credit Cards, Personal Loans, Financial Comparison, Credit Report';
    document.head.appendChild(keywordsTag);
    
    // Dynamically update page title
    document.title = 'Free Credit Score & Financial Comparison | PremiumFinance';
    
    console.log('SEO enhancements applied to homepage');
  }
})();
