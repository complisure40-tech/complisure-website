import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, unknown>;
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  structuredData,
}: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateProperty = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);

    updateProperty('og:title', ogTitle || title);
    updateProperty('og:description', ogDescription || description);
    updateProperty('og:type', ogType);
    if (ogImage) updateProperty('og:image', ogImage);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (script) {
        script.remove();
      }
      const newScript = document.createElement('script');
      newScript.type = 'application/ld+json';
      newScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(newScript);
    }

    return () => {
      document.title = 'CompliSure';
    };
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogType, structuredData]);
};
