// Configuration values shared across components
export const config = {
  // Define basePath for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/dyelectrical' : '',
  
  // Company information
  companyName: 'DY Electrical Services',
  phoneNumber: '0477 766 678',
  
  // Social media links
  socialLinks: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
    linkedin: '#'
  }
} 