import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
  schema?: any;
}

export const SEO = ({ title, description, canonicalUrl, keywords, schema }: SEOProps) => {
  const location = useLocation();

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "CarRental",
    "name": "Aggelos Rentals",
    "url": "https://antiparosrentacar.com",
    "image": "https://antiparosrentacar.com/wp-content/uploads/logo.png",
    "telephone": "+30 228 405 1010",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Parikia Port",
      "addressLocality": "Paros",
      "addressRegion": "Cyclades",
      "postalCode": "84400",
      "addressCountry": "GR"
    },
    "openingHours": "Mo-Su 07:00-23:00",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.0398079,
      "longitude": 25.0845734
    },
    "sameAs": [
      "https://facebook.com/aggelosrentacar",
      "https://instagram.com/aggelosrentacar"
    ]
  };

  const finalSchema = schema || defaultSchema;

  useEffect(() => {
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    const canonical = canonicalUrl || `http://rentacar-paros.gr${location.pathname}`;
    linkCanonical.setAttribute('href', canonical);

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', title);
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', description);
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', canonical);
    if (!document.querySelector('meta[property="og:url"]')) {
      document.head.appendChild(ogUrl);
    }

    // Add JSON-LD Schema
    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (schemaScript) {
      schemaScript.remove();
    }
    schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(finalSchema);
    document.head.appendChild(schemaScript);
  }, [title, description, canonicalUrl, keywords, location.pathname, finalSchema]);

  return null;
};
