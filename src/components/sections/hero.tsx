import * as m from "motion/react-m";
import { KeycloakifyRotatingLogo } from "#components/keycloakify-rotating-logo";
import { revealVariants, staggerVariants } from "#lib/motion";

export function Hero() {
  return (
    <section className="wrapper">
      <div className="grid min-h-[calc(100svh-4.5rem)] items-center gap-10 px-6 pt-16 pb-24 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16">
        <m.div
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-5 max-lg:items-center max-lg:text-center"
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
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-lg"
        >
          <div
            aria-hidden="true"
            className="absolute inset-8 -z-10 rounded-full bg-brand opacity-15 blur-3xl"
          />
          <KeycloakifyRotatingLogo />
        </m.div>
      </div>
    </section>
  );
}
