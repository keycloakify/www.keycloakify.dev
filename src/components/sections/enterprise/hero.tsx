import { DiscordIcon } from "#components/brand-icons";
import { Eyebrow } from "#components/eyebrow";
import { Button } from "#components/ui/button";
import { EDITOR_URL, ENTERPRISE_CONTACT_URL } from "#constants";
import { revealVariants, staggerVariants } from "#lib/motion";
import { PaletteIcon } from "lucide-react";
import * as m from "motion/react-m";

export function EnterpriseHero() {
  return (
    <section className="wrapper">
      <m.div
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-5 py-16 text-center sm:px-10 sm:py-28"
      >
        <m.div variants={revealVariants}>
          <Eyebrow>Enterprise services</Eyebrow>
        </m.div>
        <m.h1
          variants={revealVariants}
          className="text-4xl font-medium tracking-tighter text-balance sm:text-6xl"
        >
          Keycloak theming
          <span className="block text-brand">Handled for you.</span>
        </m.h1>
        <m.p
          variants={revealVariants}
          className="max-w-xl text-pretty text-muted-foreground sm:text-lg"
        >
          The team behind Keycloakify takes care of all your customization needs, from the first
          design to the production deployment and every Keycloak upgrade after it.
        </m.p>
        <m.div
          variants={revealVariants}
          className="mt-2 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            size="lg"
            nativeButton={false}
            render={<a href={ENTERPRISE_CONTACT_URL} target="_blank" rel="noopener noreferrer" />}
            className="h-10 px-4"
          >
            <DiscordIcon data-icon="inline-start" />
            Talk to us
          </Button>
          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            render={<a href={EDITOR_URL} target="_blank" rel="noopener noreferrer" />}
            className="h-10 px-4"
          >
            <PaletteIcon data-icon="inline-start" />
            Try the editor
          </Button>
        </m.div>
      </m.div>
    </section>
  );
}
