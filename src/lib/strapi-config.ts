/**
 * Strapi API configuration
 */

export interface StrapiConfig {
  readonly apiUrl: string;
  readonly apiToken?: string;
}

function getStrapiUrl(): string {
  const url = import.meta.env.VITE_STRAPI_URL;
  if (!url) {
    console.warn('VITE_STRAPI_URL not set, using fallback');
    return 'http://localhost:1337';
  }
  return url;
}

function getStrapiToken(): string | undefined {
  return import.meta.env.VITE_STRAPI_API_TOKEN;
}

export function getStrapiConfig(): StrapiConfig {
  return {
    apiUrl: getStrapiUrl(),
    apiToken: getStrapiToken(),
  };
}

export function buildStrapiImageUrl(imageUrl: string | undefined | null): string {
  if (!imageUrl) {
    return '/placeholder.svg';
  }
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }
  const config = getStrapiConfig();
  return `${config.apiUrl}${imageUrl}`;
}

