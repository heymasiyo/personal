"use client";

import type { ImageProps } from "next/image";

import Image from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils";

interface MDXImageProps extends ImageProps {
  alt: string;
  caption?: string;
}

export function MDXImage({ caption, alt, ...props }: MDXImageProps) {
  const [isImageLoading, setImageLoading] = React.useState(true);

  return (
    <div className="not-prose my-10 flex w-full flex-col items-center gap-4">
      <Image
        unoptimized
        loading="lazy"
        alt={alt}
        width={1000}
        height={1000}
        sizes="100vw"
        className={cn(
          "bg-muted h-auto w-full rounded-xl border object-cover object-center",
          isImageLoading ? "blur-sm" : "blur-none"
        )}
        onLoad={() => setImageLoading(false)}
        {...props}
      />

      {caption && (
        <sub className="text-muted-foreground text-sm font-medium">
          {caption}
        </sub>
      )}
    </div>
  );
}
