import type { BreadcrumbProps } from "@/components/navigation";

import { notFound } from "next/navigation";

import { Navigation } from "@/components/navigation";
import { SitePost } from "@/components/site-post";
import { getPosts } from "@/lib/mdx";

const route = "thoughts";

const Posts = getPosts(route);

const breadcrumbs: BreadcrumbProps[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Thoughts",
    href: "/thoughts",
    isLink: true,
  },
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Posts.map((post) => ({
    slug: `${post.slug}`,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const param = await params;
  const post = Posts.find((post) => post.slug === param.slug);
  const title = post?.title;
  const description = post?.description;

  return {
    title,
    description,
  };
}

export default async function Page({ params }: PageProps) {
  const param = await params;
  const post = Posts.find((post) => post.slug === param.slug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <Navigation breadcrumbs={breadcrumbs} />

      <SitePost post={post} route={route} />
    </>
  );
}
