import { getPosts } from "@/lib/mdx";

export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? undefined;

export default async function sitemap() {
  let thoughts = getPosts("thoughts").map((post) => ({
    url: `${baseUrl}/thoughts/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  let routes = ["", "/thoughts", "/work"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...thoughts];
}
