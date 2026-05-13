import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function getRatingColor(rating: number): string {
  if (rating >= 8.5) return 'text-green-600';
  if (rating >= 7.0) return 'text-blue-600';
  if (rating >= 5.5) return 'text-yellow-600';
  return 'text-red-600';
}

export function getRatingBgColor(rating: number): string {
  if (rating >= 8.5) return 'bg-green-100';
  if (rating >= 7.0) return 'bg-blue-100';
  if (rating >= 5.5) return 'bg-yellow-100';
  return 'bg-red-100';
}

export const SITE_CONFIG = {
  name: 'TechPick',
  description: 'Independent product reviews and buying guides for tech enthusiasts',
  url: process.env.PUBLIC_SITE_URL || 'https://techpick.example.com',
  email: 'editorial@techpick.example.com',
  social: {
    twitter: '@techpickreviews',
  },
};

export const CATEGORIES = [
  {
    name: 'Smart Home',
    slug: 'smart-home',
    description: 'Smart speakers, displays, cameras, and home automation',
    icon: 'Home',
  },
  {
    name: 'Portable Power',
    slug: 'portable-power',
    description: 'Power banks, solar chargers, and portable batteries',
    icon: 'Battery',
  },
  {
    name: 'Audio',
    slug: 'audio',
    description: 'Headphones, earbuds, speakers, and audio gear',
    icon: 'Headphones',
  },
  {
    name: 'Outdoor Gear',
    slug: 'outdoor-gear',
    description: 'Camping, hiking, and outdoor adventure equipment',
    icon: 'Mountain',
  },
  {
    name: 'Wearables',
    slug: 'wearables',
    description: 'Smartwatches, fitness trackers, and health devices',
    icon: 'Watch',
  },
  {
    name: 'Accessories',
    slug: 'accessories',
    description: 'Cables, adapters, mounts, and essential gadgets',
    icon: 'Cable',
  },
];

export const AUTHORS = [
  {
    name: 'James Mitchell',
    role: 'Senior Editor',
    bio: 'Former audio engineer with 12 years of experience testing consumer electronics. Specializes in headphones, speakers, and portable audio equipment.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'Sarah Chen',
    role: 'Tech Editor',
    bio: 'Smart home enthusiast and home automation expert. Previously worked at a leading smart home startup, testing over 200 connected devices.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Gear Editor',
    bio: 'Outdoor adventure guide and product tester. Certified backcountry instructor with expertise in portable power and outdoor tech gear.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
];
