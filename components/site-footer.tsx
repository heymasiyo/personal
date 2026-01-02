import { ThemeToggle } from "@/components/theme-provider";

export function SiteFooter() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t pt-4">
      <p className="text-muted-foreground text-sm">&#169; Satrio Wicaksono</p>

      <ThemeToggle />
    </footer>
  );
}
