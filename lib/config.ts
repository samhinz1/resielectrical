// Configuration values shared across components
export const config = {
  // Base Paths and URLs
  basePath: process.env.NODE_ENV === 'production' ? '/resielectrical' : '',
  
  // Company information
  companyName: 'RESI Electrical',
  shortName: 'Resi',
  tagline: 'Powering Brisbane with Trust & Expertise',
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
      path: '/resi-logo.svg',
      width: 160,
      height: 80,
      altText: 'RESI Electrical Logo'
    },
    icon: {
      path: '/resi-icon.svg',
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
      experience: '/brisbane3.avif'
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
  
  // Testimonials
  testimonials: [
    {
      quote: "Outstanding service! RESI Electrical truly exceeded my expectations. From start to finish, their team exhibited professionalism and expertise. I'm thrilled with the quality of their workmanship. Highly recommend!",
      author: "Sarah Johnson",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "RESI Electrical saved the day! I was facing a tricky electrical issue at home, and their quick response and efficient troubleshooting resolved it in no time. Friendly staff, excellent service. Thank you, RESI Electrical!",
      author: "Michael Chang",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Impressive work by RESI Electrical! Their attention to detail and dedication to ensuring our electrical needs were met with precision and care were truly commendable. We couldn't be happier with the results.",
      author: "Emily Patel",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      quote: "The team at RESI Electrical did an amazing job with our home rewiring project. They were professional, punctual, and worked cleanly. The pricing was fair, and the results are excellent!",
      author: "Robert Wilson",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      quote: "I've used RESI Electrical several times for my business, and they never disappoint. Their knowledge and expertise are unmatched, and they always provide prompt and reliable service.",
      author: "Lisa Thompson",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/29.jpg"
    }
  ],
  
  // SEO information
  seo: {
    title: 'RESI Electrical Services | Brisbane & Gold Coast Electrician',
    description: 'Professional electrical services for residential and commercial properties in Brisbane and surrounding areas. Licensed, insured and experienced electricians.',
    keywords: 'electrician, Brisbane, electrical services, solar, air conditioning, lighting',
    ogImage: '/og-image.jpg'
  }
} 