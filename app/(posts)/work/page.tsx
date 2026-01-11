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
    </>
  );
}
