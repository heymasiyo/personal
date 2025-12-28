"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { cn } from "@/lib/utils";
import { Monitor, Moon, Sun } from "lucide-react";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, theme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="bg-background h-8 w-1" />;

  const buttons = [
    {
      label: "system",
      icon: <Monitor />,
      active: theme === "system",
    },
    { label: "dark", icon: <Moon />, active: theme === "dark" },
    { label: "light", icon: <Sun />, active: theme === "light" },
  ];

  return (
    <ButtonGroup>
      {buttons.map(({ label, icon, active }) => (
        <Button
          variant="outline"
          key={label}
          onClick={() => setTheme(label)}
          size="icon-sm"
          className={cn(
            active
              ? "text-accent-foreground bg-accent!"
              : "text-muted-foreground"
          )}
        >
          {icon}
          <span className="sr-only">Set {label} theme</span>
        </Button>
      ))}
    </ButtonGroup>
  );
}
