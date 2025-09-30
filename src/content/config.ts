import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    stack: z.array(z.string()),
    screens: z.array(image()).optional(),
  }),
});

export const collections = {
  projects,
};