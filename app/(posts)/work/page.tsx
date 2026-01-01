import type { Metadata } from "next";

import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: "Work",
};

export default function Work() {
  return (
    <>
      <Navigation
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: "Work", href: "/work", isLink: false },
        ]}
      />
    </>
  );
}
