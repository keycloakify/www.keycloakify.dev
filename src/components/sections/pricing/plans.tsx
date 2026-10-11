import { Link } from "@tanstack/react-router";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { DiscordIcon, GithubIcon } from "#components/brand-icons";
import { Eyebrow } from "#components/eyebrow";
import { Reveal } from "#components/reveal";
import { Button } from "#components/ui/button";
import { DOCUMENTATION_URL, ENTERPRISE_CONTACT_URL, GITHUB_REPO_URL } from "#constants";
import { cn } from "#lib/utils";

const openSourceFeatures = [
  "Free, MIT licensed.",
  "Login, Account, Email and Admin theme support.",
  "Start with the default Keycloak look and implement your customization with code.",
  "Support via GitHub issues.",
];

const enterpriseFeatures = [
  "Modern, professionally designed Login, Email and Account themes out of the box.",
  "Visual customization, without code, on our SaaS platform.",
  "Lifetime updates, no stress about your theme breaking when you upgrade Keycloak.",
  "Need advanced customization the visual editor doesn't support? We implement it for you.",
  "A problem deploying the theme, or a production issue? We're on call 24/7.",
];

function Plan(props: {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  className?: string;
  children: React.ReactNode;
}) {
  const { name, price, priceNote, description, features, className, children } = props;

  return (
    <Reveal className={cn("flex flex-col gap-8 p-6 sm:p-10 lg:p-12", className)}>
      <div className="flex flex-col gap-4">
        <Eyebrow>{name}</Eyebrow>
        <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-5xl font-medium tracking-tighter sm:text-6xl">{price}</span>
          {priceNote !== undefined && (
            <span className="text-sm text-muted-foreground">{priceNote}</span>
          )}
        </p>
        <p className="max-w-md text-pretty text-muted-foreground">{description}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3">{children}</div>

      <ul className="flex flex-col gap-3 border-t pt-8">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3 text-pretty">
            <CheckIcon aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand" />
            {feature}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function PricingPlans() {
  return (
    <section className="wrapper grid border-t md:tick-left md:tick-right lg:grid-cols-2">
      <Plan
        name="Open source framework"
        price="$0"
        priceNote="Free, MIT licensed"
        description="The Keycloakify framework. You build and maintain your theme yourself."
        features={openSourceFeatures}
        className="border-b lg:border-e lg:border-b-0"
      >
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
      </Plan>

      <Plan
        name="Enterprise services"
        price="€700"
        description="The team behind Keycloakify handles all your customization needs for you."
        features={enterpriseFeatures}
        className="bg-muted/30"
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
          render={<Link to="/enterprise" />}
          className="h-10 px-4"
        >
          See what's included
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </Plan>
    </section>
  );
}
