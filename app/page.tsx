import type { Post } from "@/lib/mdx";

import Link from "next/link";

import { getPosts } from "@/lib/mdx";
import { estimateReadingTime, formatDate } from "@/lib/utils";

export default function Home() {
  const posts: Post[] = getPosts("thoughts")
    .sort((a, b) => {
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    })
    .slice(0, 3);

  return (
    <div className="text-mm mb-20 flex flex-col gap-20">
      <section className="text-foreground/70 flex flex-col gap-4 leading-7">
        <h1 className="text-foreground font-display text-xl font-medium">
          Satrio Wicaksono
        </h1>

        <p>I'm a software engineer based in Indonesia.</p>

        <p>
          I work full-time and as a freelancer, building software with a focus
          on clarity, reliability, and thoughtful collaboration.
        </p>

        <p>
          Outside of work, I enjoy{" "}
          <Link href="/thoughts" className="custom-link">
            writing
          </Link>
          , exploring{" "}
          <Link href="/work" className="custom-link">
            ideas
          </Link>
          , and experimenting with{" "}
          <Link
            href="https://dribbble.com/heymasiyo"
            className="custom-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            design
          </Link>{" "}
          and{" "}
          <Link href="/work" className="custom-link">
            technology
          </Link>
          . I also spend time{" "}
          <Link
            href="https://www.goodreads.com/heymasiyo"
            className="custom-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            reading
          </Link>{" "}
          and{" "}
          <Link
            href="https://letterboxd.com/heymasiyo"
            className="custom-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            watching films
          </Link>{" "}
          to keep my perspective fresh.
        </p>

        <p>
          You can reach me on{" "}
          <Link
            href="http://x.com/heymasiyo"
            className="custom-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>{" "}
          or via{" "}
          <Link
            href="mailto:mail.satriows@gmail.com"
            className="custom-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </Link>
          . For a closer look at my work, you can find me on{" "}
          <Link
            href="https://github.com/heymasiyo"
            className="custom-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          .
        </p>
      </section>

      {posts.length > 0 && (
        <section className="flex flex-col gap-3">
          <div className="border-b pb-5">
            <h2 className="text-foreground font-display text-[1.1875rem] leading-normal font-medium">
              Thoughts
            </h2>
          </div>

          <div className="flex flex-col">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/thoughts/${post.slug}`}
                className="text-mm group flex flex-col gap-1.5 py-4"
                aria-label={post.title}
              >
                <h2 className="group-hover:text-foreground/80 font-medium">
                  {post.title}
                </h2>

                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                  <span>{formatDate(new Date(post.publishedAt))}</span>

                  <span>&#8226;</span>

                  <span>{estimateReadingTime(post.content)} minutes read</span>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/thoughts"
            className="text-muted-foreground hover:text-foreground py-3 text-right text-xs font-medium uppercase transition-colors"
          >
            View all
          </Link>
        </section>
      )}
    </div>
  );
}
