import * as m from "motion/react-m";
import emailPreviewUrl from "#assets/img/email-preview.png";
import accountPersonalInfoUrl from "#assets/img/gallery/account-personal-info.png";
import accountSigningInUrl from "#assets/img/gallery/account-signing-in.png";
import centeredCardUrl from "#assets/img/gallery/centered-card.png";
import deleteAccountUrl from "#assets/img/gallery/delete-account.png";
import lightModeUrl from "#assets/img/gallery/light-mode.png";
import monospaceUrl from "#assets/img/gallery/monospace.png";
import sideImageUrl from "#assets/img/gallery/side-image.png";
import signInUrl from "#assets/img/gallery/sign-in.png";
import { Eyebrow } from "#components/eyebrow";
import { Reveal } from "#components/reveal";
import { Screenshot } from "#components/screenshot";
import { revealVariants, revealViewport, staggerVariants } from "#lib/motion";

const loginSize = { width: 1991, height: 1271 };
const accountSize = { width: 2050, height: 1271 };

const screenshots = [
  {
    title: "Social sign-in",
    alt: "Login page with social providers",
    src: signInUrl,
    ...loginSize,
  },
  {
    title: "Centered card",
    alt: "Login page, centered card layout",
    src: centeredCardUrl,
    ...loginSize,
  },
  { title: "Side image", alt: "Login page, side image layout", src: sideImageUrl, ...loginSize },
  { title: "Light mode", alt: "Login page in light mode", src: lightModeUrl, ...loginSize },
  {
    title: "Monospace",
    alt: "Login page with a monospace typeface",
    src: monospaceUrl,
    ...loginSize,
  },
  {
    title: "Delete account",
    alt: "Delete account confirmation page",
    src: deleteAccountUrl,
    ...loginSize,
  },
  {
    title: "Account: personal info",
    alt: "Account theme, personal info page",
    src: accountPersonalInfoUrl,
    ...accountSize,
  },
  {
    title: "Account: signing in",
    alt: "Account theme, signing in page",
    src: accountSigningInUrl,
    ...accountSize,
  },
  { title: "Email", alt: "Themed email", src: emailPreviewUrl, width: 845, height: 514 },
];

export function EnterpriseGallery() {
  return (
    <section className="wrapper border-t md:tick-left md:tick-right">
      <Reveal className="flex flex-col items-center gap-3 px-5 py-14 text-center sm:px-10 sm:py-20">
        <Eyebrow>Gallery</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-5xl">
          Every page looks like your product
        </h2>
        <p className="max-w-md text-balance text-muted-foreground">
          A few of the login pages, account pages and emails your theme ships with.
        </p>
      </Reveal>
      <m.ul
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="grid border-t sm:grid-cols-2 lg:grid-cols-3"
      >
        {screenshots.map(({ title, alt, src, width, height }) => (
          <li
            key={title}
            className="border-b last:border-b-0 sm:border-e sm:max-lg:even:border-e-0 sm:max-lg:nth-last-[-n+2]:border-b-0 lg:nth-[3n]:border-e-0 lg:nth-last-[-n+3]:border-b-0"
          >
            <m.figure
              variants={revealVariants}
              className="flex h-full flex-col justify-between gap-4 p-4 sm:p-6"
            >
              <Screenshot src={src} alt={alt} width={width} height={height} />
              <figcaption className="font-mono text-xs leading-none font-medium tracking-widest text-muted-foreground uppercase">
                {title}
              </figcaption>
            </m.figure>
          </li>
        ))}
      </m.ul>
    </section>
  );
}
