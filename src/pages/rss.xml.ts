---
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');
  const reviews = await getCollection('reviews');

  const allContent = [...posts, ...reviews].sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );

  return rss({
    title: 'TechPick - Independent Product Reviews',
    description: 'Thoroughly tested products, honest opinions, and expert buying guides.',
    site: context.site ?? 'https://techpick.example.com',
    items: allContent.map(item => ({
      title: item.data.title,
      pubDate: item.data.publishDate,
      description: item.data.description,
      link: item.collection === 'posts' ? `/blog/${item.slug}/` : `/review/${item.slug}/`,
      categories: [item.data.category, ...item.data.tags].filter(Boolean),
      author: item.data.author,
    })),
    customData: '<language>en-us</language>',
  });
}
