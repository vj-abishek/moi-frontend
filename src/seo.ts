// SEO constants and Schema.org structured data generators

export const SEO_CONFIG = {
  siteName: 'Moi',
  /** Name shown in SoftwareApplication rich result – descriptive so search doesn’t show only “Moi” */
  schemaAppName: 'Moi – Wedding Gift Tracker',
  siteUrl: 'https://getmoi.in',
  appUrl: 'https://app.getmoi.in',
  author: 'Moi',
  email: 'abishek@merg.cc',
  locale: 'en_IN',
  logoUrl: 'https://getmoi.in/logo.png',
  /** Short, keyword-rich description for SoftwareApplication rich results */
  appDescription: 'Free wedding gift tracker app. Track UPI, cash and gifts in real time. One link for guests.',
  keywords: [
    'moi',
    'மொய்',
    'gift tracking',
    'wedding gift management',
    'contribution tracking',
    'Indian wedding',
    'Tamil wedding',
    'UPI payments',
    'gift registry',
    'celebration gifts',
    'shagun tracker',
    'wedding moi',
  ],
  description: 'Track gift contributions during weddings and celebrations. Never miss a மொய்.',
};

// Schema.org types
export interface SchemaOrg {
  '@context': string;
  '@type': string | string[];
  [key: string]: unknown;
}

/**
 * Generate Organization schema - used globally
 */
export function generateOrganizationSchema(): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    logo: SEO_CONFIG.logoUrl,
    description: SEO_CONFIG.description,
    email: SEO_CONFIG.email,
    contactPoint: {
      '@type': 'ContactPoint',
      email: SEO_CONFIG.email,
      contactType: 'customer support',
      availableLanguage: ['English', 'Tamil'],
    },
  };
}

/**
 * Generate WebSite schema - used globally
 */
export function generateWebSiteSchema(): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    description: SEO_CONFIG.description,
    inLanguage: 'en-IN',
    publisher: {
      '@type': 'Organization',
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl,
    },
  };
}

/**
 * Generate SoftwareApplication schema - for home page (rich results for "Moi app" etc.)
 */
export function generateSoftwareApplicationSchema(): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SEO_CONFIG.schemaAppName,
    description: SEO_CONFIG.appDescription,
    url: SEO_CONFIG.siteUrl,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    featureList: [
      'Real-time contribution tracking',
      'UPI payment integration',
      'QR code sharing',
      'Team management',
      'CSV export',
      'Passwordless authentication',
    ],
    screenshot: SEO_CONFIG.logoUrl,
    author: {
      '@type': 'Organization',
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl,
    },
  };
}

/**
 * Generate VideoObject schema for crawlable video on a page
 * @see https://developers.google.com/search/docs/appearance/google-images-video
 */
export function generateVideoObjectSchema(
  embedUrl: string,
  contentUrl: string,
  options: {
    name: string;
    description: string;
    thumbnailUrl: string;
    duration?: string; // ISO 8601 e.g. "PT1M" for 1 minute
    uploadDate?: string; // ISO 8601 datetime with timezone (e.g. 2024-01-01T00:00:00Z)
  }
): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: options.name,
    description: options.description,
    thumbnailUrl: options.thumbnailUrl,
    contentUrl,
    embedUrl,
    uploadDate: options.uploadDate ?? '2024-01-01T00:00:00Z',
    ...(options.duration && { duration: options.duration }),
    publisher: {
      '@type': 'Organization',
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl,
      logo: SEO_CONFIG.logoUrl,
    },
  };
}

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema(
  url: string,
  title: string,
  description: string,
  dateModified?: string
): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    inLanguage: 'en-IN',
    isPartOf: {
      '@type': 'WebSite',
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl,
    },
    ...(dateModified && { dateModified }),
  };
}

/**
 * Generate AboutPage schema
 */
export function generateAboutPageSchema(url: string): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Moi',
    description: 'Learn about Moi - digitizing the timeless tradition of மொய் for modern celebrations.',
    url,
    mainEntity: generateOrganizationSchema(),
  };
}

/**
 * Generate ContactPage schema
 */
export function generateContactPageSchema(url: string): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Support - Moi',
    description: 'Get help with Moi - find answers, contact us, or check system status.',
    url,
    mainEntity: {
      '@type': 'Organization',
      name: SEO_CONFIG.siteName,
      email: SEO_CONFIG.email,
      contactPoint: {
        '@type': 'ContactPoint',
        email: SEO_CONFIG.email,
        contactType: 'customer support',
      },
    },
  };
}

/**
 * Generate FAQPage schema with questions
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQPageSchema(url: string, faqs: FAQItem[]): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: 'Frequently Asked Questions - Moi',
    description: 'Everything you need to know about using Moi for gift contribution tracking.',
    url,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate HowTo schema for troubleshooting
 */
export interface HowToStep {
  name: string;
  text: string;
}

export function generateHowToSchema(
  url: string,
  name: string,
  description: string,
  steps: HowToStep[]
): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    url,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/**
 * Generate Blog schema
 */
export function generateBlogSchema(url: string): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Moi Blog',
    description: 'A collection of thoughts, tutorials, and explorations about gift tracking and Indian celebrations.',
    url,
    publisher: {
      '@type': 'Organization',
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl,
      logo: SEO_CONFIG.logoUrl,
    },
    inLanguage: 'en-IN',
  };
}

/**
 * Generate BlogPosting schema
 */
export function generateBlogPostingSchema(
  url: string,
  title: string,
  description: string,
  datePublished: string,
  dateModified?: string,
  image?: string
): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    image: image || SEO_CONFIG.logoUrl,
    author: {
      '@type': 'Organization',
      name: SEO_CONFIG.siteName,
    },
    publisher: {
      '@type': 'Organization',
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: SEO_CONFIG.logoUrl,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

/**
 * Generate BreadcrumbList schema
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Combine multiple schemas into a graph
 */
export function combineSchemas(...schemas: SchemaOrg[]): object {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas.map(({ '@context': _, ...rest }) => rest),
  };
}

/**
 * Serialize schema to JSON-LD script tag content
 */
export function serializeSchema(schema: object): string {
  return JSON.stringify(schema, null, 0);
}

