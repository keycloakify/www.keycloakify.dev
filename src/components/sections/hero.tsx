import * as m from "motion/react-m";
import { GithubIcon } from "#components/brand-icons";
import { CopyButton } from "#components/copy-button";
import { HeroGraphic } from "#components/hero-graphic";
import { Button } from "#components/ui/button";
import { DOCUMENTATION_URL, GITHUB_REPO_URL } from "#constants";
import { revealVariants, staggerVariants } from "#lib/motion";

const STARTER_COMMAND = "git clone https://github.com/keycloakify/keycloakify-starter";

export function Hero() {
  return (
    <section className="wrapper overflow-x-clip">
      <div className="grid min-h-[calc(100svh-4.5rem)] items-center gap-10 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16">
        <m.div
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
          className="flex min-w-0 flex-col gap-5 max-lg:items-center max-lg:text-center"
        >
          <m.h1
            variants={revealVariants}
            className="text-4xl font-medium tracking-tighter text-balance sm:text-6xl"
          >
            Keycloak theming
            <span className="block text-brand ">For the modern web.</span>
          </m.h1>
          <m.p
            variants={revealVariants}
            className="max-w-136 text-pretty text-muted-foreground sm:text-lg"
          >
            Customize the look and feel of your login and registration pages without having to mess
            with FreeMarker.
          </m.p>

          <m.div variants={revealVariants} className="mt-2 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              nativeButton={false}
              render={<a href={DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer" />}
              className="h-10 px-4"
            >
              Get started
            </Button>
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={<a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" />}
              className="h-10 px-4"
            >
              <GithubIcon data-icon="inline-start" />
              View on GitHub
            </Button>
          </m.div>

          <m.div
            variants={revealVariants}
            className="mt-4 flex w-full max-w-xl items-center gap-3 rounded-xl border bg-card px-4 py-2 text-left"
          >
            <span
              aria-hidden="true"
              className="font-mono text-sm text-muted-foreground select-none"
            >
              $
            </span>
            <code className="min-w-0 flex-1 overflow-x-auto font-mono text-sm whitespace-nowrap scrollbar-none">
              {STARTER_COMMAND}
            </code>
            <CopyButton text={STARTER_COMMAND} />
          </m.div>
        </m.div>

        <HeroGraphic className="mx-auto w-full max-w-md lg:max-w-xl" />
      </div>
    </section>
  );
}
