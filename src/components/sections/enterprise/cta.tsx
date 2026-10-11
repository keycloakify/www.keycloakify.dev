import { DiscordIcon } from "#components/brand-icons";
import { Eyebrow } from "#components/eyebrow";
import { Reveal } from "#components/reveal";
import { Button } from "#components/ui/button";
import { EDITOR_URL, ENTERPRISE_CONTACT_URL } from "#constants";

export function EnterpriseCta() {
  return (
    <section className="wrapper border-t md:tick-left md:tick-right">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-5 px-5 py-16 text-center sm:px-10 sm:py-24">
        <Eyebrow>Get in touch</Eyebrow>
        <h2 className="text-3xl font-medium tracking-tight text-balance sm:text-5xl">
          Tell us about your Keycloak setup.
        </h2>
        <p className="max-w-md text-balance text-muted-foreground">
          We'll take it from there. Or start on your own in the editor, designing is free.
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
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
            Open the editor
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
