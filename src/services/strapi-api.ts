/**
 * Strapi API service
 * Handles all communication with the Strapi backend
 */

import {
  BlogPostAttributes,
  CategoryAttributes,
  PageAttributes,
  StrapiEntity,
  StrapiResponse,
  StrapiSingleResponse,
  BlogPost,
  Category,
} from '@/types/strapi';
import { getStrapiConfig, buildStrapiImageUrl } from '@/lib/strapi-config';

interface FetchOptions {
  readonly method?: string;
  readonly headers?: HeadersInit;
  readonly body?: BodyInit;
}

async function fetchFromStrapi<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const config = getStrapiConfig();
  const url = `${config.apiUrl}/api${endpoint}`;
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  if (config.apiToken) {
    headers['Authorization'] = `Bearer ${config.apiToken}`;
  }
  const response = await fetch(url, {
    ...options,
    headers,
  });
  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.statusText}`);
  }
  return response.json();
}

function transformBlogPost(entity: StrapiEntity<BlogPostAttributes>): BlogPost {
  const { id, attributes } = entity;
  const imageUrl = attributes.featuredImage.data?.attributes.url;
  return {
    id,
    title: attributes.title,
    slug: attributes.slug,
    excerpt: attributes.excerpt,
    content: attributes.content,
    author: attributes.author,
    category: attributes.category,
    readTime: attributes.readTime,
    featured: attributes.featured,
    date: attributes.publishedAt || attributes.createdAt,
    image: buildStrapiImageUrl(imageUrl),
  };
}

function transformCategory(entity: StrapiEntity<CategoryAttributes>): Category {
  const { id, attributes } = entity;
  return {
    id,
    name: attributes.name,
    slug: attributes.slug,
    description: attributes.description,
    icon: attributes.icon,
  };
}

export async function fetchBlogPosts(params?: {
  readonly page?: number;
  readonly pageSize?: number;
  readonly featured?: boolean;
  readonly category?: string;
}): Promise<{ posts: BlogPost[]; totalPages: number }> {
  const queryParams = new URLSearchParams();
  queryParams.append('populate', '*');
  queryParams.append('sort', 'publishedAt:desc');
  if (params?.page) {
    queryParams.append('pagination[page]', params.page.toString());
  }
  if (params?.pageSize) {
    queryParams.append('pagination[pageSize]', params.pageSize.toString());
  }
  if (params?.featured !== undefined) {
    queryParams.append('filters[featured][$eq]', params.featured.toString());
  }
  if (params?.category) {
    queryParams.append('filters[category][$eq]', params.category);
  }
  const response = await fetchFromStrapi<
    StrapiResponse<StrapiEntity<BlogPostAttributes>[]>
  >(`/blog-posts?${queryParams.toString()}`);
  const posts = response.data.map(transformBlogPost);
  const totalPages = response.meta.pagination.pageCount;
  return { posts, totalPages };
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const queryParams = new URLSearchParams();
  queryParams.append('populate', '*');
  queryParams.append('filters[slug][$eq]', slug);
  const response = await fetchFromStrapi<
    StrapiResponse<StrapiEntity<BlogPostAttributes>[]>
  >(`/blog-posts?${queryParams.toString()}`);
  if (response.data.length === 0) {
    return null;
  }
  return transformBlogPost(response.data[0]);
}

export async function fetchCategories(): Promise<Category[]> {
  const queryParams = new URLSearchParams();
  queryParams.append('sort', 'name:asc');
  const response = await fetchFromStrapi<
    StrapiResponse<StrapiEntity<CategoryAttributes>[]>
  >(`/categories?${queryParams.toString()}`);
  return response.data.map(transformCategory);
}

export async function fetchPageBySlug(slug: string): Promise<StrapiEntity<PageAttributes> | null> {
  const queryParams = new URLSearchParams();
  queryParams.append('filters[slug][$eq]', slug);
  const response = await fetchFromStrapi<
    StrapiResponse<StrapiEntity<PageAttributes>[]>
  >(`/pages?${queryParams.toString()}`);
  if (response.data.length === 0) {
    return null;
  }
  return response.data[0];
}

