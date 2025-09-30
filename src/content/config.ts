import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tech: z.array(z.string()),
    screens: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects,
};