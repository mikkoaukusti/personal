import { z, defineCollection } from "astro:content";

export const collections = {
  blog: defineCollection({
    type: "content", // v2.5.0 and later
    schema: z.object({
      isDraft: z.boolean().default(true),
      title: z
        .string()
        .min(1, { message: "Title must be at least 1 character long" }),
      description: z
        .string()
        .min(1, { message: "Description must be at least 1 character long" }),
      date: z.date(),
    }),
  }),
};
