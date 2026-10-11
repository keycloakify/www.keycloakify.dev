import { ArrowUpRightIcon, EyeIcon, MailIcon, PackageIcon, PaletteIcon } from "lucide-react";
import { Eyebrow } from "#components/eyebrow";
import { Reveal } from "#components/reveal";
import { Button } from "#components/ui/button";
import { DISCORD_URL, DOCUMENTATION_URL, EDITOR_URL } from "#constants";

const editorFeatures = [
  {
    Icon: PaletteIcon,
    title: "Pick your tokens",
    description: "Colors, fonts, radius and layout, changed from a panel instead of a stylesheet.",
  },
  {
    Icon: EyeIcon,
    title: "Live preview",
    description: "Every login and registration page updates as you change the theme.",
  },
  {
    Icon: MailIcon,
    title: "Emails included",
    description: "Verification and password reset emails are themed from the same palette.",
  },
  {
    Icon: PackageIcon,
    title: "Export a JAR",
    description: "Leave with a deploy-ready Keycloakify theme to drop into Keycloak.",
  },
];

export function ClosingCta() {
  return (
    <section className="wrapper border-t md:tick-left md:tick-right">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-5 px-5 py-16 text-center sm:px-10 sm:py-24">
        <Eyebrow>Get started</Eyebrow>
        <h2 className="text-3xl font-medium tracking-tight text-balance sm:text-5xl">
          Make your login pages part of your app.
        </h2>
        <p className="max-w-md text-balance text-muted-foreground">
          Clone a starter, preview it in Storybook and ship a single JAR to Keycloak.
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
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
            render={<a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" />}
            className="h-10 px-4"
          >
            Join the Discord
          </Button>
        </div>
      </Reveal>

      <div className="grid border-t lg:grid-cols-[2fr_3fr]">
        <Reveal className="flex flex-col items-start gap-4 p-6 sm:p-10 lg:border-e lg:p-12">
          <Eyebrow>Prefer not to write code?</Eyebrow>
          <h3 className="text-2xl font-medium tracking-tight text-balance sm:text-3xl">
            Design your theme visually with the Keycloakify Editor.
          </h3>
          <p className="text-pretty text-muted-foreground">
            A visual editor for Keycloak login themes, built on Keycloakify, shadcn/ui and Tailwind.
            Designing is free, you only pay when you export.
          </p>
          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            render={<a href={EDITOR_URL} target="_blank" rel="noopener noreferrer" />}
            className="mt-2 h-10 px-4"
          >
            Open the editor
            <ArrowUpRightIcon data-icon="inline-end" />
          </Button>
        </Reveal>

        <ul className="grid border-t sm:grid-cols-2 lg:border-t-0">
          {editorFeatures.map(({ Icon, title, description }) => (
            <li
              key={title}
              className="border-b last:border-b-0 sm:odd:border-e sm:nth-last-[-n+2]:border-b-0"
            >
              <Reveal className="flex h-full flex-col gap-2 p-6 sm:p-8">
                <Icon className="size-5 text-brand" />
                <h4 className="font-medium tracking-tight">{title}</h4>
                <p className="text-sm text-pretty text-muted-foreground">{description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
