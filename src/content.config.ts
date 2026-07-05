import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    categories: z.array(z.string()).default([]),
    author: z.string(),
    authorImage: z.string().optional(),
    authorBio: z.string().optional(),
    authorEmail: z.string().optional(),
    authorSocial: z.record(z.string(), z.string()).optional(),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
