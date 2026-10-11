import { DiscordIcon, GithubIcon, NpmIcon } from "#components/brand-icons";
import {
  DISCORD_URL,
  DOCUMENTATION_URL,
  GITHUB_REPO_URL,
  NPM_PACKAGE_URL,
  STORYBOOK_URL,
} from "#constants";

const docs = (path: string) => `${DOCUMENTATION_URL}${path}`;

const columns = [
  {
    title: "Get started",
    links: [
      { label: "Quick start", href: docs("/") },
      { label: "Starter themes", href: docs("/starter-themes") },
      { label: "CSS customization", href: docs("/css-customization") },
      { label: "Testing your theme", href: docs("/testing-your-theme") },
      { label: "Deploying your theme", href: docs("/deploying-your-theme") },
      {
        label: "Integrating in your codebase",
        href: docs("/integration-keycloakify-in-your-codebase"),
      },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Internationalization", href: docs("/features/i18n") },
      { label: "Theme variants", href: docs("/features/theme-variants") },
      { label: "Environment variables", href: docs("/features/environment-variables") },
      { label: "Compiler options", href: docs("/features/compiler-options") },
      { label: "Using Tailwind", href: docs("/common-use-case-examples/using-tailwind") },
      {
        label: "Using a component library",
        href: docs("/common-use-case-examples/using-a-component-library"),
      },
    ],
  },
  {
    title: "Theme types",
    links: [
      {
        label: "Login vs other themes",
        href: docs("/theme-types/difference-between-login-themes-and-the-other-types-of-themes"),
      },
      { label: "Account theme", href: docs("/theme-types/account-theme") },
      { label: "Email theme", href: docs("/theme-types/email-theme") },
      { label: "Admin theme", href: docs("/theme-types/admin-theme") },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Release notes", href: docs("/release-notes-and-upgrade-instructions") },
      { label: "FAQ", href: docs("/faq") },
      { label: "Storybook", href: STORYBOOK_URL },
    ],
  },
];

const socials = [
  { label: "GitHub", href: GITHUB_REPO_URL, Icon: GithubIcon },
  { label: "Discord", href: DISCORD_URL, Icon: DiscordIcon },
  { label: "npm", href: NPM_PACKAGE_URL, Icon: NpmIcon },
];

const titleClassName =
  "font-mono text-xs leading-none font-medium tracking-widest text-muted-foreground uppercase";

const linkClassName =
  "text-sm text-muted-foreground transition-colors duration-200 ease-out hover:text-foreground";

export function SiteFooter() {
  return (
    <footer>
      <div className="wrapper grid grid-cols-2 gap-x-6 gap-y-10 border-t px-5 py-12 sm:px-10 sm:py-16 md:grid-cols-3 md:tick-left md:tick-right lg:grid-cols-[repeat(5,auto)] lg:justify-between lg:gap-x-16 lg:px-16">
        {columns.map(({ title, links }) => (
          <nav key={title} aria-label={title} className="flex flex-col gap-4">
            <span className={titleClassName}>{title}</span>
            <ul className="flex flex-col gap-2.5">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <nav aria-label="Social" className="flex flex-col gap-4">
          <span className={titleClassName}>Social</span>
          <ul className="flex flex-col gap-2.5">
            {socials.map(({ label, href, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 ${linkClassName}`}
                >
                  <Icon className="size-4" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
