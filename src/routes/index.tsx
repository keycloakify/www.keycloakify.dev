import { createFileRoute } from "@tanstack/react-router";
import { Articles } from "#components/sections/articles";
import { CheckList } from "#components/sections/check-list";
import { ClosingCta } from "#components/sections/closing-cta";
import { Faq } from "#components/sections/faq";
import { Hero } from "#components/sections/hero";
import { QuickStart } from "#components/sections/quick-start";
import { Sponsors } from "#components/sections/sponsors";
import { ThemeTypes } from "#components/sections/theme-types";
import { TrustedBy } from "#components/sections/trusted-by";
import { YoutubeVideo } from "#components/sections/youtube-video";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Articles />
      <QuickStart />
      <ThemeTypes />
      <CheckList />
      <YoutubeVideo />
      <Faq />
      <Sponsors />
      <ClosingCta />
    </>
  );
}
