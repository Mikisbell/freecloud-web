import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*' as '*' | string[],
      allow: '/',
      disallow: ['/private/', '/admin/'], // Rutas que no quieres indexar
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
