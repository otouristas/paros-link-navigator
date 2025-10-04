/**
 * React Query hook for fetching blog posts from Strapi
 */

import { useQuery } from '@tanstack/react-query';
import { fetchBlogPosts, fetchBlogPostBySlug } from '@/services/strapi-api';
import { BlogPost } from '@/types/strapi';

interface UseBlogPostsParams {
  readonly page?: number;
  readonly pageSize?: number;
  readonly featured?: boolean;
  readonly category?: string;
  readonly enabled?: boolean;
}

interface UseBlogPostsResult {
  readonly posts: BlogPost[];
  readonly totalPages: number;
  readonly isLoading: boolean;
  readonly isError: boolean;
  readonly error: Error | null;
}

export function useBlogPosts(params: UseBlogPostsParams = {}): UseBlogPostsResult {
  const { page = 1, pageSize = 10, featured, category, enabled = true } = params;
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['blog-posts', page, pageSize, featured, category],
    queryFn: () => fetchBlogPosts({ page, pageSize, featured, category }),
    enabled,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
  return {
    posts: data?.posts || [],
    totalPages: data?.totalPages || 0,
    isLoading,
    isError,
    error: error as Error | null,
  };
}

interface UseBlogPostBySlugResult {
  readonly post: BlogPost | null;
  readonly isLoading: boolean;
  readonly isError: boolean;
  readonly error: Error | null;
}

export function useBlogPostBySlug(slug: string): UseBlogPostBySlugResult {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: () => fetchBlogPostBySlug(slug),
    enabled: Boolean(slug),
    staleTime: 10 * 60 * 1000,
    retry: 2,
  });
  return {
    post: data || null,
    isLoading,
    isError,
    error: error as Error | null,
  };
}

