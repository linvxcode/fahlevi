import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
    
      userAgent: '*',
      allow: '/',
    },
    host: 'https://fahlevi.vercel.app',
    sitemap: 'https://fahlevi.vercel.app/sitemap.xml',
  }
}