import type { BreadcrumbProps } from "@/components/navigation";
import type { Metadata } from "next";

import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: "Work",
  description: "Projects, experiments, and experience.",
};

const breadcrumbs: BreadcrumbProps[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
];

export default function Work() {
  return (
    <>
      <Navigation breadcrumbs={breadcrumbs} />

      <div className="flex flex-col gap-3">
        <div className="border-b pb-5">
          <h1 className="font-display text-1xl font-medium">Work</h1>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col gap-1.5 py-4">
            <h2 className="text-mm font-medium">Coming soon</h2>

            <p className="text-muted-foreground text-sm">
              This page is reserved for projects, experiments, and experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
