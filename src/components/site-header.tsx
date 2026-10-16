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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "#components/ui/dropdown-menu";
import {
  DISCORD_URL,
  DOCUMENTATION_URL,
  EDITOR_URL,
  NPM_PACKAGE_URL,
  STORYBOOK_URL,
} from "#constants";
import { cn } from "#lib/utils";
import { Link } from "@tanstack/react-router";
import { ArrowUpRightIcon, MenuIcon } from "lucide-react";

const pages = [
  { label: "Enterprise", to: "/enterprise" },
  // Hidden while pricing is not public yet, the /pricing route still exists
  // { label: "Pricing", to: "/pricing" },
] as const;

const links = [
  { label: "Docs", href: DOCUMENTATION_URL },
  { label: "Storybook", href: STORYBOOK_URL },
  { label: "Editor", href: EDITOR_URL },
];

const navLinkClassName =
  "rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-200 ease-out hover:bg-muted/60 hover:text-foreground";

/** Marks a link that leaves the site and opens in a new tab. */
function ExternalMark(props: { className?: string }) {
  const { className } = props;

  return (
    <>
      <ArrowUpRightIcon aria-hidden="true" className={cn("size-3 opacity-60", className)} />
      <span className="sr-only">(opens in a new tab)</span>
    </>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md">
      <div className="wrapper flex items-center justify-between gap-4 border-b px-5 py-4 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2"
          // Already on the home page, there is no navigation to reset the scroll
          onClick={() => window.scrollTo({ top: 0 })}
        >
          <img src={keycloakifyLogoPngUrl} alt="" className="h-8 w-auto" />
          <span className="font-medium tracking-tight whitespace-nowrap">
            Keycloakify <span className="font-semibold text-brand">Themes</span>
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-1 lg:flex">
            {pages.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={cn(
                  navLinkClassName,
                  "data-[status=active]:bg-muted/60 data-[status=active]:text-foreground",
                )}
              >
                {label}
              </Link>
            ))}
            <span aria-hidden="true" className="mx-2 h-4 w-px bg-border" />
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(navLinkClassName, "flex items-center gap-1")}
              >
                {label}
                <ExternalMark />
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
              render={<Button variant="outline" size="icon" className="lg:hidden" />}
            >
              <MenuIcon />
              <span className="sr-only">Open menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                {pages.map(({ label, to }) => (
                  <DropdownMenuItem
                    key={to}
                    render={<Link to={to} className="data-[status=active]:font-medium" />}
                  >
                    {label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {links.map(({ label, href }) => (
                  <DropdownMenuItem
                    key={label}
                    render={<a href={href} target="_blank" rel="noopener noreferrer" />}
                  >
                    {label}
                    <ExternalMark className="ms-auto" />
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem
                  className="sm:hidden"
                  render={<a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" />}
                >
                  Discord
                  <ExternalMark className="ms-auto" />
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="sm:hidden"
                  render={<a href={NPM_PACKAGE_URL} target="_blank" rel="noopener noreferrer" />}
                >
                  npm
                  <ExternalMark className="ms-auto" />
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
