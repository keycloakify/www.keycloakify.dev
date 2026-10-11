import PhaseTwoLogo from "#assets/img/phasetwo.svg?react";
import gouvSvgUrl from "#assets/img/users/gouv.svg";
import CorsairLogo from "#assets/img/users/corsair.svg?react";
import ironwoodPngUrl from "#assets/img/users/ironwood.png";
import NeonLogo from "#assets/img/users/neon.svg?react";
import SspCloudLogo from "#assets/img/users/sspcloud.svg?react";
import { Eyebrow } from "#components/eyebrow";

// Logos are rendered in the text color so the strip reads as one row in both themes.
const users = [
  {
    name: "Neon",
    href: "https://neon.tech/",
    logo: <NeonLogo aria-hidden="true" className="h-7 w-auto [&_path]:fill-current" />,
    hasWordmark: true,
  },
  {
    name: "Phase Two",
    href: "https://phasetwo.io?utm_source=keycloakify",
    logo: (
      <PhaseTwoLogo
        aria-hidden="true"
        className="h-7 w-auto [&_#Group-18-Copy-2>path]:fill-current"
      />
    ),
    hasWordmark: true,
  },
  {
    name: "Corsair",
    href: "https://www.corsair.com/",
    logo: <CorsairLogo aria-hidden="true" className="size-7 fill-current" />,
    hasWordmark: false,
  },
  {
    name: "Ironwood",
    href: "https://www.ironwoodcyber.com/",
    logo: (
      <img
        src={ironwoodPngUrl}
        alt=""
        width={1900}
        height={450}
        loading="lazy"
        className="h-11 w-auto brightness-0 dark:invert"
      />
    ),
    hasWordmark: true,
  },
  {
    name: "Insee",
    href: "https://datalab.sspcloud.fr/",
    logo: <SspCloudLogo aria-hidden="true" className="h-7 w-auto fill-current" />,
    hasWordmark: false,
  },
  {
    name: "gouv.fr",
    href: "https://camino.developpement-durable.gouv.fr",
    logo: (
      <img
        src={gouvSvgUrl}
        alt=""
        width={28}
        height={28}
        loading="lazy"
        className="size-7 rounded-sm"
      />
    ),
    hasWordmark: false,
  },
];

export function TrustedBy() {
  return (
    <section className="wrapper border-t md:tick-left md:tick-right">
      <div className="px-5 pt-8 pb-5 text-center sm:px-10">
        <Eyebrow>Trusted in production by</Eyebrow>
      </div>
      <ul className="grid grid-cols-2 border-t sm:grid-cols-3 lg:grid-cols-6">
        {users.map(({ name, href, logo, hasWordmark }) => (
          <li
            key={name}
            className="border-e border-b max-sm:even:border-e-0 max-sm:nth-last-[-n+2]:border-b-0 sm:max-lg:nth-[3n]:border-e-0 sm:max-lg:nth-last-[-n+3]:border-b-0 lg:border-b-0 lg:last:border-e-0"
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full items-center justify-center gap-2.5 px-4 py-6 text-lg font-medium tracking-tight text-foreground opacity-70 transition-[opacity,background-color] duration-200 ease-out hover:bg-muted/40 hover:opacity-100"
            >
              {logo}
              {hasWordmark ? <span className="sr-only">{name}</span> : name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
