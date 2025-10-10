import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    users: z.string().optional(),
    url: z.string().url().optional(),
    draft: z.boolean().optional(),
    stack: z.array(z.string()),
    screens: z.array(z.object({
      image: image(),
      caption: z.string().optional(),
      alt: z.string().optional(),
    })).optional(),
  }),
});

// A collection for projects under NDA; content from nda.md
const nda = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = {
  projects,
  nda,
};