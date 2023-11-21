import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

export async function GET({ site }: APIContext) {
  // Sort posts by date in descending order (newest first)
  const sortPostsByDate = (
    posts: CollectionEntry<"blog">[]
  ): CollectionEntry<"blog">[] => {
    return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  };

  // Get all entries from the "blog" collection and filter out drafts for production
  const posts = sortPostsByDate(
    await getCollection("blog", ({ data }) => {
      return import.meta.env.PROD ? data.isDraft !== true : true;
    })
  );

  return rss({
    title: "Mikko Jokipuu | Blog",
    description: "Place where I write articles about my life.",
    site: String(site),
    stylesheet: "/rss/styles.xsl",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body)),
    })),
    customData: `<language>en-us</language>`,
  });
}
