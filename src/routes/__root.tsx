import { ScrollToTop } from "#components/scroll-to-top";
import { SiteFooter } from "#components/site-footer";
import { SiteHeader } from "#components/site-header";
import { ThemeProvider } from "#components/theme-provider";
import { Button } from "#components/ui/button";
import { TooltipProvider } from "#components/ui/tooltip";
import { SITE_URL } from "#constants";
import { seo } from "#lib/seo";
import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import indexCssUrl from "../index.css?url";

const GOOGLE_TAG_ID = "G-3GR2J9PKWP";

const googleTagScript = `
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "${GOOGLE_TAG_ID}");
`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      // The site ships its own dark mode, opt out of Dark Reader's rewrite
      { name: "darkreader-lock" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE_URL}/preview.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/preview.png` },
      ...seo({
        title: import.meta.env.VITE_TITLE,
        description: import.meta.env.VITE_DESCRIPTION,
        path: "/",
      }),
    ],
    links: [
      { rel: "stylesheet", href: indexCssUrl },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
    scripts: [
      { src: `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`, async: true },
      { children: googleTagScript },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    // The color scheme script sets the class and style of <html> before hydration.
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider defaultTheme="system" storageKey="theme">
          <LazyMotion features={domAnimation} strict>
            <MotionConfig reducedMotion="user">
              <TooltipProvider>
                <div className="flex min-h-svh flex-col">
                  <SiteHeader />
                  <main className="flex-1">
                    <Outlet />
                  </main>
                  <SiteFooter />
                </div>
                <ScrollToTop />
              </TooltipProvider>
            </MotionConfig>
          </LazyMotion>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <section className="wrapper">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 px-5 py-16 text-center sm:px-10 sm:py-24">
        <h1 className="text-4xl font-medium tracking-tighter text-balance sm:text-6xl">
          Page not found
        </h1>
        <Button size="lg" nativeButton={false} render={<Link to="/" />} className="mt-3 h-10 px-4">
          Back to home
        </Button>
      </div>
    </section>
  );
}
