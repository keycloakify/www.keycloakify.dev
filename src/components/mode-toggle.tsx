import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "#components/ui/button";
import { useTheme } from "#components/theme-provider";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <Button variant="outline" size="icon" onClick={() => setTheme(isDark ? "light" : "dark")}>
      {isDark ? <MoonIcon /> : <SunIcon />}
      <span className="sr-only">Switch to {isDark ? "light" : "dark"} mode</span>
    </Button>
  );
}
