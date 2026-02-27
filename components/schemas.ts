// Structured Data Schemas for PRAEQ

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PRAEQ",
  "alternateName": ["PRAEQ Talent Management", "PRAEQ Global", "PRAEQ Brand Architecture"],
  "url": "https://www.praeq.in",
  "logo": "https://www.praeq.in/logo.png",
  "description": "Elite talent management and global brand architecture firm specializing in sonic branding, media influence, and real estate innovation. Industry-agnostic solutions for Fortune 500 companies and emerging brands.",
  "foundingDate": "2024",
  "slogan": "Architecting Excellence. Managing Legends.",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Business Inquiries",
    "email": "info@praeq.in",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://linkedin.com/company/praeq",
    "https://twitter.com/praeq",
    "https://instagram.com/praeq"
  ],
  "areaServed": {
    "@type": "Place",
    "name": "Global"
  },
  "serviceType": [
    "Talent Management",
    "Brand Architecture",
    "Sonic Branding",
    "Media Strategy",
    "Real Estate Brand Development",
    "Influencer Management",
    "Content Creator Management"
  ]
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Talent Management & Brand Architecture",
  "provider": {
    "@type": "Organization",
    "name": "PRAEQ",
    "url": "https://www.praeq.in"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Global"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "PRAEQ Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sonic Spectrum",
          "description": "Music talent management, artist development, sonic branding, and audio identity design for global brands",
          "category": "Music & Audio Branding"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dialogue Axis",
          "description": "Influencer partnerships, content creator management, media strategy, and digital brand narrative architecture",
          "category": "Media & Influence Management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Estate Vision",
          "description": "Real estate brand development, property branding, location strategy, and development marketing",
          "category": "Real Estate Brand Architecture"
        }
      }
    ]
  }
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://www.praeq.in${item.url}`
  }))
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "PRAEQ",
  "url": "https://www.praeq.in",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.praeq.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};
