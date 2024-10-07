import { GlFooter } from "gitlanding/GlFooter";

export function Footer() {
  return (
    <GlFooter
      bottomDivContent={`[Edit this website](https://github.com/keycloakify/www.keycloakify.dev)`}
      links={[
        {
          href: "https://www.npmjs.com/package/keycloakify",
          label: <img src="https://img.shields.io/npm/dm/keycloakify" alt="" />,
        },
        {
          href: "https://github.com/garronej/keycloakify/blob/main/LICENSE",
          label: <img src="https://img.shields.io/npm/l/keycloakify" alt="" />,
        },
        {
          href: "https://github.com/thomasdarimont/awesome-keycloak",
          label: <img src="https://awesome.re/mentioned-badge.svg" alt="" />,
        },
        {
          href: "https://github.com/InseeFrLab/keycloakify/blob/729503fe31a155a823f46dd66ad4ff34ca274e0a/tsconfig.json#L14",
          label: (
            <img
              src="https://camo.githubusercontent.com/0f9fcc0ac1b8617ad4989364f60f78b2d6b32985ad6a508f215f14d8f897b8d3/68747470733a2f2f62616467656e2e6e65742f62616467652f547970655363726970742f7374726963742532302546302539462539322541412f626c7565"
              alt=""
            />
          ),
        },
      ]}
    />
  );
}
