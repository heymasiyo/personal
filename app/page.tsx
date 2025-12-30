import Link from "next/link";

export default function Home() {
  return (
    <div className="text-mm mb-16 flex flex-col gap-16">
      <section className="text-foreground/70 flex flex-col gap-4 leading-7">
        <h1 className="text-foreground font-display text-1xl font-medium">
          Satrio Wicaksono
        </h1>

        <p>I'm a software engineer based in Indonesia.</p>

        <p>
          I currently work at{" "}
          <Link
            href="https://inolabs.net"
            className="custom-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inolabs
          </Link>
          , where I focus on building reliable, thoughtful software and
          contributing with care to both the product and the team.
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
    </div>
  );
}
