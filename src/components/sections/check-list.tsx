import { CircleCheckIcon } from "lucide-react";
import * as m from "motion/react-m";
import { ExternalLink } from "#components/external-link";
import { Reveal } from "#components/reveal";
import { DISCORD_URL } from "#constants";
import { revealVariants, revealViewport, staggerVariants } from "#lib/motion";

const elements: { title: string; description: React.ReactNode }[] = [
  {
    title: "Widely adopted",
    description: (
      <>
        Keycloakify is trusted by leading tech companies like{" "}
        <ExternalLink href="https://neon.tech/">Neon</ExternalLink> and{" "}
        <ExternalLink href="https://www.corsair.com/">Corsair</ExternalLink>.
        <br />
        It is used in production by cybersecurity firms like{" "}
        <ExternalLink href="https://www.ironwoodcyber.com/">Ironwood</ExternalLink> and in the
        public sector by organizations such as the{" "}
        <ExternalLink href="https://datalab.sspcloud.fr/">
          European Data Science Platform
        </ExternalLink>{" "}
        and official French government websites like{" "}
        <ExternalLink href="https://code.gouv.fr/sill/">this one</ExternalLink>.
      </>
    ),
  },
  {
    title: "shadcn/ui and TypeScript",
    description: (
      <>
        Keycloakify features an alternative default look for the login pages based on shadcn/ui and
        Tailwind.{" "}
        <ExternalLink href="https://docs.keycloakify.dev/starter-themes/shadcn-ui-tailwind">
          See the starter theme
        </ExternalLink>
      </>
    ),
  },
  {
    title: "Retro-compatible",
    description: (
      <>
        Themes generated with Keycloakify are compatible with all Keycloak versions. You develop
        your theme as if you were targeting the latest Keycloak version and Keycloakify polyfills
        the missing features for you.
      </>
    ),
  },
  {
    title: "Easy to integrate in your codebase",
    description: (
      <>
        Keycloakify can be integrated directly within an existing Vite SPA or as a submodule of your
        monorepo. See{" "}
        <ExternalLink href="https://docs.keycloakify.dev/integration-keycloakify-in-your-codebase">
          Docs
        </ExternalLink>
      </>
    ),
  },
  {
    title: "Easily testable",
    description: (
      <>
        Test your theme{" "}
        <ExternalLink href="https://docs.keycloakify.dev/testing-your-theme/outside-of-keycloak">
          in storybook
        </ExternalLink>{" "}
        or in{" "}
        <ExternalLink href="https://docs.keycloakify.dev/testing-your-theme/inside-of-keycloak">
          a local Keycloak container
        </ExternalLink>{" "}
        with a simple command.
      </>
    ),
  },
  {
    title: "We are here to help!",
    description: (
      <>
        We are happy to provide support on our{" "}
        <ExternalLink href={DISCORD_URL}>Discord server</ExternalLink> that has many active users
        and some members of the core Keycloak team.
      </>
    ),
  },
  {
    title: "Theme variants",
    description: (
      <>
        Keycloakify enables you to create{" "}
        <ExternalLink href="https://docs.keycloakify.dev/features/theme-variants">
          theme variants
        </ExternalLink>{" "}
        and themes that are dynamically customizable with{" "}
        <ExternalLink href="https://docs.keycloakify.dev/features/environment-variables">
          environment variables
        </ExternalLink>
        .
      </>
    ),
  },
  {
    title: "Feature complete",
    description: (
      <>
        Everything that works in the default Keycloak theme also works in Keycloakify themes. Beyond
        that Keycloakify adds <strong>many</strong> exclusive features.
      </>
    ),
  },
  {
    title: "Doesn't bloat your node_modules",
    description: (
      <>
        The Keycloakify NPM package is{" "}
        <ExternalLink href="https://www.npmjs.com/package/keycloakify?activeTab=dependencies">
          dependency free
        </ExternalLink>
        .
        <br />
        The CLI is shipped as a single executable.
      </>
    ),
  },
];

export function CheckList() {
  return (
    <section className="wrapper border-t md:tick-left md:tick-right">
      <Reveal className="px-5 py-14 text-center sm:px-10 sm:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-5xl">
          Everything you expect and more
        </h2>
      </Reveal>
      <m.ul
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="grid border-t md:grid-cols-2 lg:grid-cols-3"
      >
        {elements.map(({ title, description }) => (
          <li
            key={title}
            className="border-b max-md:last:border-b-0 md:border-e md:max-lg:even:border-e-0 md:max-lg:last:border-b-0 lg:nth-[3n]:border-e-0 lg:nth-last-[-n+3]:border-b-0"
          >
            <m.div variants={revealVariants} className="flex h-full flex-col gap-3 p-6 sm:p-8">
              <CircleCheckIcon className="size-5 text-brand" />
              <h3 className="text-xl leading-snug font-medium tracking-tight text-balance">
                {title}
              </h3>
              <p className="text-sm text-pretty text-muted-foreground [&_strong]:font-medium [&_strong]:text-foreground">
                {description}
              </p>
            </m.div>
          </li>
        ))}
      </m.ul>
    </section>
  );
}
