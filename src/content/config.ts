import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).min(3).max(6),
    author: z.string(),
    coverImage: z.string().url(),
    coverImageAlt: z.string(),
    coverImageCredit: z.string(),
    readingTime: z.number(),
    featured: z.boolean().default(false),
  }),
});

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    productName: z.string(),
    productBrand: z.string(),
    category: z.string(),
    affiliateLink: z.string().url(),
    productImage: z.string().url(),
    productImageAlt: z.string(),
    rating: z.number().min(1).max(10),
    verdict: z.string().max(100),
    pros: z.array(z.string()).min(3).max(5),
    cons: z.array(z.string()).min(2).max(4),
    scores: z.object({
      design: z.number().min(1).max(10),
      performance: z.number().min(1).max(10),
      value: z.number().min(1).max(10),
      easeOfUse: z.number().min(1).max(10),
      durability: z.number().min(1).max(10),
    }),
    specs: z.record(z.string()),
    author: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  posts,
  reviews,
};
