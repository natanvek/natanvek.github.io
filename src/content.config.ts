import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    tagline: z.string(),
    category: z.enum(['competition', 'research', 'trading', 'games', 'volunteering', 'work', 'tools']),
    period: z.string(),
    sortDate: z.coerce.date(),
    award: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    logo: image().optional(),
    cover: z.object({ src: image(), alt: z.string() }).optional(),
    gallery: z.array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() })).default([]),
  }),
});

export const collections = { projects };
