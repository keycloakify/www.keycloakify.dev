import { ArrowUpRightIcon, LogInIcon, MailIcon, SettingsIcon, UserRoundIcon } from "lucide-react";
import * as m from "motion/react-m";
import { Eyebrow } from "#components/eyebrow";
import { Reveal } from "#components/reveal";
import { DOCUMENTATION_URL } from "#constants";
import { revealVariants, revealViewport, staggerVariants } from "#lib/motion";

const themeTypes = [
  {
    Icon: LogInIcon,
    title: "Login theme",
    description: "The login and registration pages, shown to users when they sign in or sign up.",
    href: DOCUMENTATION_URL,
  },
  {
    Icon: UserRoundIcon,
    title: "Account theme",
    description:
      "The account management interface, where users update their email, password and other settings.",
    href: `${DOCUMENTATION_URL}/theme-types/account-theme`,
  },
  {
    Icon: MailIcon,
    title: "Email theme",
    description:
      "The templates Keycloak uses for automated emails, such as email confirmation or password reset.",
    href: `${DOCUMENTATION_URL}/theme-types/email-theme`,
  },
  {
    Icon: SettingsIcon,
    title: "Admin theme",
    description: "The Admin Console, used by administrators to configure Keycloak.",
    href: `${DOCUMENTATION_URL}/theme-types/admin-theme`,
  },
];

export function ThemeTypes() {
  return (
    <section className="wrapper border-t md:tick-left md:tick-right">
      <Reveal className="flex flex-col items-center gap-3 px-5 py-14 text-center sm:px-10 sm:py-20">
        <Eyebrow>Theme types</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-5xl">
          More than the login page
        </h2>
        <p className="max-w-md text-balance text-muted-foreground">
          Keycloakify covers every user interface Keycloak ships with.
        </p>
      </Reveal>
      <m.ul
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="grid border-t sm:grid-cols-2 lg:grid-cols-4"
      >
        {themeTypes.map(({ Icon, title, description, href }) => (
          <li
            key={title}
            className="border-b last:border-b-0 sm:border-e sm:even:border-e-0 sm:nth-last-[-n+2]:border-b-0 lg:border-b-0 lg:even:border-e lg:last:border-e-0"
          >
            <m.a
              variants={revealVariants}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col gap-3 p-6 transition-colors duration-200 ease-out hover:bg-muted/40 sm:p-8"
            >
              <span className="flex items-center justify-between">
                <Icon className="size-5 text-brand" />
                <ArrowUpRightIcon className="size-4 text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </span>
              <h3 className="text-xl leading-snug font-medium tracking-tight">{title}</h3>
              <p className="text-sm text-pretty text-muted-foreground">{description}</p>
            </m.a>
          </li>
        ))}
      </m.ul>
    </section>
  );
}
