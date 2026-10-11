import {
  HeadsetIcon,
  LayoutTemplateIcon,
  RefreshCwIcon,
  SlidersHorizontalIcon,
  WrenchIcon,
} from "lucide-react";
import { Eyebrow } from "#components/eyebrow";
import { Reveal } from "#components/reveal";

const services = [
  {
    Icon: LayoutTemplateIcon,
    title: "Professionally designed themes",
    description:
      "Modern Login, Email and Account themes, ready out of the box. You start from a polished base instead of Keycloak's stock pages.",
  },
  {
    Icon: SlidersHorizontalIcon,
    title: "Visual customization, no code",
    description:
      "Adjust your theme on our SaaS platform without writing a line of code. Change the colors, typeface, radius and layout from a panel and watch every login page and email update live, then export a JAR that's ready to deploy.",
  },
  {
    Icon: RefreshCwIcon,
    title: "Lifetime updates",
    description:
      "No more stress about your theme breaking when you upgrade Keycloak. We keep it up to date for you.",
  },
  {
    Icon: WrenchIcon,
    title: "Advanced customization",
    description:
      "Need something the visual editor doesn't support? We implement it for you, on top of your theme.",
  },
  {
    Icon: HeadsetIcon,
    title: "On call 24/7",
    description:
      "A problem deploying the theme, or an issue in production? We're on call around the clock.",
  },
];

export function EnterpriseServices() {
  return (
    <section className="wrapper grid border-t md:tick-left md:tick-right lg:grid-cols-[2fr_3fr]">
      <div className="lg:border-e">
        <Reveal className="flex flex-col items-start gap-4 p-6 sm:p-10 lg:sticky lg:top-20 lg:p-12">
          <Eyebrow>What you get</Eyebrow>
          <h2 className="text-3xl font-medium tracking-tight text-balance sm:text-5xl">
            One team for your whole theme.
          </h2>
          <p className="text-pretty text-muted-foreground">
            You get the people who build Keycloakify, working on your login, email and account
            pages.
          </p>
        </Reveal>
      </div>

      <ol className="border-t lg:border-t-0">
        {services.map(({ Icon, title, description }, index) => (
          <li key={title} className="border-b last:border-b-0">
            <Reveal className="flex gap-5 p-6 sm:gap-8 sm:p-8 lg:px-12">
              <span
                aria-hidden="true"
                className="pt-1.5 font-mono text-xs leading-none text-muted-foreground tabular-nums"
              >
                0{index + 1}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="flex items-center gap-3 text-xl leading-snug font-medium tracking-tight">
                  <Icon className="size-5 shrink-0 text-brand" />
                  {title}
                </h3>
                <p className="text-pretty text-muted-foreground">{description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
