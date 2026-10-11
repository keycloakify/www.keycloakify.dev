import { ArrowUpRightIcon, EyeIcon, LanguagesIcon, MailIcon, PackageIcon } from "lucide-react";
import * as m from "motion/react-m";
import editorPreviewDarkUrl from "#assets/img/editor-preview-dark.png";
import editorPreviewWhiteUrl from "#assets/img/editor-preview-white.png";
import { Eyebrow } from "#components/eyebrow";
import { Reveal } from "#components/reveal";
import { Screenshot } from "#components/screenshot";
import { Button } from "#components/ui/button";
import { EDITOR_URL } from "#constants";
import { revealVariants, revealViewport, staggerVariants } from "#lib/motion";

// NOTE: Keep in sync with the figures advertised on the editor's landing page
const stats = [
  { value: "38", label: "Login pages" },
  { value: "30", label: "Languages" },
  { value: "18", label: "Color presets" },
  { value: "9", label: "Typefaces" },
];

const features = [
  {
    Icon: EyeIcon,
    title: "Live preview",
    description:
      "The editor renders the actual theme, the same code Keycloak will serve, and updates it as you change it.",
  },
  {
    Icon: LanguagesIcon,
    title: "Internationalization",
    description:
      "Every page is translated in 30 languages, right-to-left included. Preview any locale in the editor.",
  },
  {
    Icon: MailIcon,
    title: "Email templates",
    description:
      "Verification, password reset and the other emails are themed from the same palette.",
  },
  {
    Icon: PackageIcon,
    title: "Deploy-ready JAR",
    description:
      "Login and email themes are bundled in a single JAR. Copy it to Keycloak, restart and select the theme.",
  },
];

const editorPreviewAlt =
  "The Keycloakify Editor, with a live preview of a login page next to the branding panel";

export function EnterpriseEditor() {
  return (
    <section className="wrapper border-t md:tick-left md:tick-right">
      <Reveal className="flex flex-col items-center gap-3 px-5 py-14 text-center sm:px-10 sm:py-20">
        <Eyebrow>The editor</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-5xl">
          It starts with the Keycloakify Editor
        </h2>
        <p className="max-w-xl text-balance text-muted-foreground">
          Our visual platform for Keycloak themes. Pick a palette, a typeface, a radius and a
          layout, no FreeMarker and no CSS.
        </p>
        <Button
          variant="outline"
          size="lg"
          nativeButton={false}
          render={<a href={EDITOR_URL} target="_blank" rel="noopener noreferrer" />}
          className="mt-3 h-10 px-4"
        >
          Discover the editor
          <ArrowUpRightIcon data-icon="inline-end" />
        </Button>
      </Reveal>

      <Reveal className="border-t p-4 sm:p-8">
        <Screenshot
          src={editorPreviewDarkUrl}
          alt={editorPreviewAlt}
          width={2309}
          height={1271}
          className="hidden rounded-xl dark:block"
        />
        <Screenshot
          src={editorPreviewWhiteUrl}
          alt={editorPreviewAlt}
          width={2309}
          height={1271}
          className="rounded-xl dark:hidden"
        />
      </Reveal>

      <dl className="grid grid-cols-2 border-t lg:grid-cols-4">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="border-e border-b even:border-e-0 nth-last-[-n+2]:border-b-0 lg:border-b-0 lg:even:border-e lg:last:border-e-0"
          >
            <Reveal className="flex flex-col-reverse gap-2 p-6 sm:p-8">
              <dt className="font-mono text-xs leading-none font-medium tracking-widest text-muted-foreground uppercase">
                {label}
              </dt>
              <dd className="text-4xl font-medium tracking-tighter tabular-nums sm:text-5xl">
                {value}
              </dd>
            </Reveal>
          </div>
        ))}
      </dl>

      <m.ul
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="grid border-t sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map(({ Icon, title, description }) => (
          <li
            key={title}
            className="border-b last:border-b-0 sm:border-e sm:even:border-e-0 sm:nth-last-[-n+2]:border-b-0 lg:border-b-0 lg:even:border-e lg:last:border-e-0"
          >
            <m.div variants={revealVariants} className="flex h-full flex-col gap-3 p-6 sm:p-8">
              <Icon className="size-5 text-brand" />
              <h3 className="text-xl leading-snug font-medium tracking-tight">{title}</h3>
              <p className="text-sm text-pretty text-muted-foreground">{description}</p>
            </m.div>
          </li>
        ))}
      </m.ul>
    </section>
  );
}
