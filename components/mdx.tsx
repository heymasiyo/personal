import type { MDXComponents } from "mdx/types";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import type { PluggableList } from "unified";

import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { MDXImage } from "@/components/mdx-image";
import { cn } from "@/lib/utils";

const components: MDXComponents = {
  Image: ({ caption, alt, ...props }) => (
    <MDXImage {...props} caption={caption} alt={alt} />
  ),
  a: ({ className, children, ...props }: React.ComponentProps<"a">) => {
    let href = props.href;

    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={cn("custom-link", className)} {...props}>
          {children}
        </Link>
      );
    }

    if (href?.startsWith("#")) {
      return (
        <a className={cn("custom-link", className)} {...props}>
          {children}
        </a>
      );
    }

    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={cn("custom-link", className)}
        {...props}
      >
        {children}
      </a>
    );
  },
};

export function MDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypePrettyCode,
              {
                theme: {
                  dark: "github-dark",
                  light: "github-light",
                },
                keepBackground: false,
              },
            ],
          ] as PluggableList,
        },
      }}
    />
  );
}
