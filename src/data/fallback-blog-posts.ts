/**
 * Fallback blog posts data when Strapi is not available
 */

import { BlogPost } from '@/types/strapi';

export const fallbackBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Complete Guide to Exploring Paros by Car: Best Routes and Hidden Gems',
    excerpt:
      'Discover the most scenic routes around Paros island, from the famous Golden Beach to hidden coves only accessible by car. Our local experts share insider tips for the perfect island road trip.',
    date: '2024-01-15',
    author: 'Aggelos Rentals Team',
    readTime: '8 min read',
    category: 'Travel Guide',
    image: '/images/blog/paros-car-exploration.jpg',
    slug: 'complete-guide-exploring-paros-car',
    content: '',
    featured: true,
  },
  {
    id: 2,
    title: 'Antiparos Island Hopping: Ferry Schedule and Car Rental Tips',
    excerpt:
      'Everything you need to know about taking your rental car to Antiparos. Ferry schedules, parking tips, and the best spots to visit on this charming smaller island.',
    date: '2024-01-10',
    author: 'Aggelos Rentals Team',
    readTime: '6 min read',
    category: 'Island Hopping',
    image: '/images/blog/antiparos-ferry-guide.jpg',
    slug: 'antiparos-island-hopping-ferry-guide',
    content: '',
    featured: false,
  },
  {
    id: 3,
    title: 'Scooter vs Car vs ATV: Which Vehicle is Best for Your Paros Adventure?',
    excerpt:
      'Compare the pros and cons of different rental vehicles for exploring Paros and Antiparos. From fuel efficiency to off-road capability, find the perfect ride for your island adventure.',
    date: '2024-01-05',
    author: 'Aggelos Rentals Team',
    readTime: '5 min read',
    category: 'Vehicle Guide',
    image: '/images/blog/vehicle-comparison-paros.jpg',
    slug: 'scooter-car-atv-comparison-paros',
    content: '',
    featured: false,
  },
  {
    id: 4,
    title: 'Paros Airport to Naoussa: Complete Transportation Guide',
    excerpt:
      'Step-by-step guide for getting from Paros Airport to Naoussa village. Compare rental car pickup, public transport, and taxi options to start your island adventure right.',
    date: '2024-01-01',
    author: 'Aggelos Rentals Team',
    readTime: '4 min read',
    category: 'Transportation',
    image: '/images/blog/paros-airport-naoussa-guide.jpg',
    slug: 'paros-airport-naoussa-transportation-guide',
    content: '',
    featured: false,
  },
  {
    id: 5,
    title: "Best Beaches in Paros Accessible by Car: A Local's Guide",
    excerpt:
      "Discover Paros' most beautiful beaches that you can easily reach by car. From family-friendly shores to secluded coves, our local guide reveals the island's best-kept secrets.",
    date: '2023-12-28',
    author: 'Aggelos Rentals Team',
    readTime: '7 min read',
    category: 'Beaches',
    image: '/images/blog/paros-beaches-car-access.jpg',
    slug: 'best-beaches-paros-accessible-car',
    content: '',
    featured: false,
  },
  {
    id: 6,
    title: 'Driving in Greece: Essential Rules and Tips for Tourists',
    excerpt:
      'Everything international visitors need to know about driving in Greece. From traffic rules to parking regulations, stay safe and confident behind the wheel in Paros and Antiparos.',
    date: '2023-12-20',
    author: 'Aggelos Rentals Team',
    readTime: '6 min read',
    category: 'Safety Tips',
    image: '/images/blog/driving-greece-tips-tourists.jpg',
    slug: 'driving-greece-rules-tips-tourists',
    content: '',
    featured: false,
  },
];

