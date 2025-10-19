// This is what allows shit like blog links to be hardcoded bc I'm too stupid to understand

import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    readingTime: z.number(),
  }),
});

export const collections = { blog };
