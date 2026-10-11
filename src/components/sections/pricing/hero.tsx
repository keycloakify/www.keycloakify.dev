import * as m from "motion/react-m";
import { Eyebrow } from "#components/eyebrow";
import { revealVariants, staggerVariants } from "#lib/motion";

export function PricingHero() {
  return (
    <section className="wrapper">
      <m.div
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-5 py-16 text-center sm:px-10 sm:py-24"
      >
        <m.div variants={revealVariants}>
          <Eyebrow>Pricing</Eyebrow>
        </m.div>
        <m.h1
          variants={revealVariants}
          className="text-4xl font-medium tracking-tighter text-balance sm:text-6xl"
        >
          Free to build yourself
          <span className="block text-brand">Or handled for you.</span>
        </m.h1>
        <m.p
          variants={revealVariants}
          className="max-w-xl text-pretty text-muted-foreground sm:text-lg"
        >
          Keycloakify is open source and free to use. If you'd rather not build and maintain the
          theme yourself, the team behind it can take care of it.
        </m.p>
      </m.div>
    </section>
  );
}
