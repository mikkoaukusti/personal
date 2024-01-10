import { getCollection, type CollectionEntry } from "astro:content";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Sort posts by date in descending order (newest first)
const sortPostsByDate = (
  posts: CollectionEntry<"blog">[]
): CollectionEntry<"blog">[] => {
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
};

// Get all entries from the "blog" collection and filter out drafts for production
export const posts = sortPostsByDate(
  await getCollection("blog", ({ data }) => {
    return import.meta.env.PROD ? data.isDraft !== true : true;
  })
);
