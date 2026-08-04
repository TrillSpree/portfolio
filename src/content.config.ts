import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      headline: z.string(),
      description: z.string(),
      role: z.array(z.string()),
      releaseDate: z.string(),
      press: z
        .array(
          z.object({
            publication: z.string(),
            articleTitle: z.string(),
            url: z.string().optional(),
          }),
        )
        .optional(),
      image: image().optional(),
      gallery: z.array(image()).optional(),
      date: z.coerce.date(),
      problem: z.string().optional(),
      explorations: z.string().optional(),
      solution: z.string().optional(),
      takeaway: z.string().optional(),
      impact: z.array(z.string()).optional(),
      featured: z.boolean().optional().default(false),
    }),
});

export const collections = { work };
