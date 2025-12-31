import type { MDXComponents } from "mdx/types";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import type { PluggableList } from "unified";

import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";

const components: MDXComponents = {
  h2: ({ className, ...props }: React.ComponentProps<"h2">) => (
    <h2
      className={cn(
        "font-display mt-9 mb-4 w-full text-xl font-medium",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn(
        "font-display mt-4.5 mb-2 w-full text-lg font-medium",
        className
      )}
      {...props}
    />
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
  p: ({ className, ...props }: React.ComponentProps<"p">) => (
    <p
      className={cn("text-foreground/80 text-mm w-full leading-7", className)}
      {...props}
    />
  ),
  em: ({ className, ...props }: React.ComponentProps<"em">) => (
    <em
      className={cn(
        "text-muted-foreground text-mm leading-7 italic",
        className
      )}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote
      className={cn(
        "*:text-muted-foreground *:text-mm my-3 border-l-2 px-6.5 pl-3 *:leading-7",
        className
      )}
      {...props}
    />
  ),
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
