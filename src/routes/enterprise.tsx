import { createFileRoute } from "@tanstack/react-router";
import { EnterpriseCta } from "#components/sections/enterprise/cta";
import { EnterpriseEditor } from "#components/sections/enterprise/editor";
import { EnterpriseGallery } from "#components/sections/enterprise/gallery";
import { EnterpriseHero } from "#components/sections/enterprise/hero";
import { EnterpriseServices } from "#components/sections/enterprise/services";
import { seo } from "#lib/seo";

export const Route = createFileRoute("/enterprise")({
  head: () => ({
    meta: seo({
      title: "Enterprise services - Keycloakify",
      description:
        "The team behind Keycloakify handles your Keycloak theme for you: professionally designed themes, visual customization, lifetime updates, custom development and 24/7 support.",
      path: "/enterprise",
    }),
  }),
  component: EnterpriseServicesPage,
});

function EnterpriseServicesPage() {
  return (
    <>
      <EnterpriseHero />
      <EnterpriseServices />
      <EnterpriseEditor />
      <EnterpriseGallery />
      <EnterpriseCta />
    </>
  );
}
