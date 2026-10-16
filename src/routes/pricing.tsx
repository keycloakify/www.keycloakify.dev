import { createFileRoute } from "@tanstack/react-router";
import { PricingHero } from "#components/sections/pricing/hero";
import { PricingPlans } from "#components/sections/pricing/plans";
import { seo } from "#lib/seo";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      ...seo({
        title: "Pricing - Keycloakify",
        description:
          "Keycloakify is free and open source under the MIT license. With enterprise services, the team behind it designs, customizes, updates and supports your Keycloak theme for you.",
        path: "/pricing",
      }),
      // Not public yet: keep search engines from indexing it
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
    </>
  );
}
