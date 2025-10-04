/**
 * Strapi API response types
 */

export interface StrapiImage {
  readonly id: number;
  readonly name: string;
  readonly url: string;
  readonly alternativeText: string | null;
  readonly caption: string | null;
  readonly width: number;
  readonly height: number;
  readonly formats: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
}

export interface StrapiImageFormat {
  readonly name: string;
  readonly url: string;
  readonly width: number;
  readonly height: number;
}

export interface StrapiMeta {
  readonly pagination: {
    readonly page: number;
    readonly pageSize: number;
    readonly pageCount: number;
    readonly total: number;
  };
}

export interface StrapiResponse<T> {
  readonly data: T;
  readonly meta: StrapiMeta;
}

export interface StrapiSingleResponse<T> {
  readonly data: T;
}

export interface StrapiEntity<T> {
  readonly id: number;
  readonly attributes: T;
}

export interface BlogPostAttributes {
  readonly title: string;
  readonly slug: string;
  readonly excerpt: string;
  readonly content: string;
  readonly author: string;
  readonly category: string;
  readonly readTime: string;
  readonly featured: boolean;
  readonly publishedAt: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly featuredImage: {
    readonly data: StrapiEntity<StrapiImage> | null;
  };
}

export interface CategoryAttributes {
  readonly name: string;
  readonly slug: string;
  readonly description: string;
  readonly icon: string;
}

export interface PageAttributes {
  readonly title: string;
  readonly slug: string;
  readonly content: string;
  readonly metaDescription: string;
  readonly metaKeywords: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export interface BlogPost {
  readonly id: number;
  readonly title: string;
  readonly slug: string;
  readonly excerpt: string;
  readonly content: string;
  readonly author: string;
  readonly category: string;
  readonly readTime: string;
  readonly featured: boolean;
  readonly date: string;
  readonly image: string;
}

export interface Category {
  readonly id: number;
  readonly name: string;
  readonly slug: string;
  readonly description: string;
  readonly icon: string;
}

