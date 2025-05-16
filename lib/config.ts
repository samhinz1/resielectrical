// Configuration values shared across components
export const config = {
  // Define basePath for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/vpower' : '',
  
  // Company information
  companyName: 'VPower Electrical Services',
  phoneNumber: '0424 678 328',
  
  // Social media links
  socialLinks: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
    linkedin: '#'
  }
} 