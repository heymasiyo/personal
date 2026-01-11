"use client";

import type { ImageProps } from "next/image";

import Image from "next/image";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface MDXImageProps extends ImageProps {
  alt: string;
  caption?: string;
}

export function MDXImage({ caption, alt, ...props }: MDXImageProps) {
  return (
    <div className="not-prose my-10 flex w-full flex-col items-center gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <button
            type="button"
            aria-label="Open image in full screen"
            className="relative w-full cursor-zoom-in! rounded-xl text-left"
          >
            <Image
              unoptimized
              alt={alt}
              width={1000}
              height={1000}
              sizes="100vw"
              className={cn(
                "bg-muted h-auto w-full rounded-xl border object-contain"
              )}
              {...props}
            />
          </button>
        </DialogTrigger>

        <DialogContent className="h-screen w-screen border-none bg-transparent p-0 shadow-none sm:max-w-none">
          <DialogTitle className="sr-only">{alt}</DialogTitle>

          <DialogDescription className="sr-only" />

          <DialogClose asChild>
            <button
              type="button"
              aria-label="Close image preview"
              className="relative flex h-screen w-screen cursor-zoom-out! items-center justify-center"
            >
              <div className="relative h-full w-full">
                <Image
                  unoptimized
                  fill
                  alt={alt}
                  className="object-contain"
                  {...props}
                />
              </div>
            </button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      {caption && (
        <sub className="text-muted-foreground text-sm font-medium">
          {caption}
        </sub>
      )}
    </div>
  );
}
