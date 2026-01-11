import type { BreadcrumbProps } from "@/components/navigation";

import { Navigation } from "@/components/navigation";

const breadcrumbs: BreadcrumbProps[] = [
  {
    title: "Home",
    href: "/",
    isLink: true,
  },
];

export default function NotFound() {
  return (
    <div className="mb-16 flex flex-col gap-12">
      <Navigation breadcrumbs={breadcrumbs} />

      <div className="flex flex-col gap-2">
        <h1 className="font-display text-[1.625rem] leading-normal font-medium">
          404 — Not found
        </h1>

        <p className="text-muted-foreground text-mm">
          This page seems to be missing. You might want to head back.
        </p>
      </div>
    </div>
  );
}
