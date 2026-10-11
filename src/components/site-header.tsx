import { MenuIcon } from "lucide-react";
import keycloakifyLogoPngUrl from "#assets/img/keycloakify-logo.png";
import { DiscordIcon } from "#components/brand-icons";
import { GithubStars } from "#components/github-stars";
import { ModeToggle } from "#components/mode-toggle";
import { NpmDownloads } from "#components/npm-downloads";
import { Button } from "#components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "#components/ui/dropdown-menu";
import {
  DISCORD_URL,
  DOCUMENTATION_URL,
  EDITOR_APP_URL,
  NPM_PACKAGE_URL,
  STORYBOOK_URL,
} from "#constants";

const links = [
  { label: "Documentation", href: DOCUMENTATION_URL },
  { label: "Storybook", href: STORYBOOK_URL },
  { label: "Editor", href: EDITOR_APP_URL },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md">
      <div className="wrapper flex items-center justify-between gap-4 border-b px-5 py-4 sm:px-6">
        <button
          type="button"
          className="flex cursor-pointer items-center gap-2"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          <img src={keycloakifyLogoPngUrl} alt="" className="h-8 w-auto" />
          <span className="font-medium tracking-tight whitespace-nowrap">
            Keycloakify <span className="font-semibold text-brand">Themes</span>
          </span>
        </button>

        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-1 md:flex">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-200 ease-out hover:bg-muted/60 hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <NpmDownloads className="max-sm:hidden" />
          <GithubStars />
          <Button
            variant="outline"
            size="icon"
            nativeButton={false}
            render={<a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" />}
            className="max-sm:hidden"
          >
            <DiscordIcon />
            <span className="sr-only">Join the Discord server</span>
          </Button>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" size="icon" className="md:hidden" />}
            >
              <MenuIcon />
              <span className="sr-only">Open menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                {links.map(({ label, href }) => (
                  <DropdownMenuItem
                    key={label}
                    render={<a href={href} target="_blank" rel="noopener noreferrer" />}
                  >
                    {label}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem
                  className="sm:hidden"
                  render={<a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" />}
                >
                  Discord
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="sm:hidden"
                  render={<a href={NPM_PACKAGE_URL} target="_blank" rel="noopener noreferrer" />}
                >
                  npm
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
