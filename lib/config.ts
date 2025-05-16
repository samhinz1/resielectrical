// Configuration values shared across components
export const config = {
  // Base Paths and URLs
  basePath: process.env.NODE_ENV === 'production' ? '/resielectrical' : '',
  
  // Company information
  companyName: 'RESI Electrical',
  shortName: 'Resi',
  tagline: '#1 Trusted Electrician in Brisbane & Surrounds',
  description: 'We have been delivering quality residential and commercial electrical solutions to Brisbane & the surrounding areas for over 20 years.',
  yearEstablished: '2004',
  phoneNumber: '0411 215 355',
  email: 'aidan@resielectrical.com.au',
  address: {
    street: '123 Electric Avenue',
    suburb: 'Brisbane',
    state: 'QLD',
    postcode: '4000',
    country: 'Australia'
  },
  
  // Visual branding
  branding: {
    logo: {
      path: '/RESI LOGO.svg',
      width: 160,
      height: 80,
      altText: 'RESI Electrical Logo'
    },
    icon: {
      path: '/RESI ICON.svg',
      width: 32,
      height: 32,
      altText: 'RESI Electrical Icon'
    },
    colors: {
      primary: '#242131',      // Dark blue/navy
      secondary: '#d4af37',    // Gold
      text: '#494544',         // Dark gray
      background: '#f5f5f5',   // Light gray
      white: '#ffffff'
    },
    images: {
      hero: '/brisbane.avif',
      experience: '/powerline.avif'
    }
  },
  
  // Service areas
  serviceAreas: [
    'Brisbane',
    'Gold Coast',
    'Sunshine Coast',
    'Ipswich'
  ],
  
  // Services offered
  services: {
    residential: [
      'Lighting',
      'Air Conditioning',
      'Solar',
      'Home Battery',
      'Off Grid & Backup Systems',
      'Fault Diagnosis'
    ],
    commercial: [
      'Office Fit-outs',
      'Safety Inspections',
      'Energy Efficiency Audits',
      'Data & Communications',
      'Emergency Repairs'
    ]
  },
  
  // Licenses and certifications
  licenses: {
    electrical: 'LIC: 12345',
    arcCondition: 'ARC: AU12345'
  },
  
  // Social media links
  socialLinks: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
    linkedin: '#'
  },
  
  // Business hours
  businessHours: {
    weekdays: '7:00 AM - 5:00 PM',
    saturday: '8:00 AM - 2:00 PM',
    sunday: 'Closed'
  },
  
  // Contact information
  contact: {
    phone: '0411 215 355',
    emergencyPhone: '0411 215 355',
    email: 'aidan@resielectrical.com.au',
    quoteEmail: 'aidan@resielectrical.com.au'
  },
  
  // SEO information
  seo: {
    title: 'RESI Electrical Services | Brisbane & Gold Coast Electrician',
    description: 'Professional electrical services for residential and commercial properties in Brisbane and surrounding areas. Licensed, insured and experienced electricians.',
    keywords: 'electrician, Brisbane, electrical services, solar, air conditioning, lighting',
    ogImage: '/og-image.jpg'
  }
} 