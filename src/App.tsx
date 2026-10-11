import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import { ScrollToTop } from "#components/scroll-to-top";
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
import { SiteFooter } from "#components/site-footer";
import { SiteHeader } from "#components/site-header";
import { ThemeProvider } from "#components/theme-provider";
import { TooltipProvider } from "#components/ui/tooltip";

export function App() {
  return (
    <ThemeProvider>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <TooltipProvider>
            <div className="flex min-h-svh flex-col">
              <SiteHeader />
              <main className="flex-1">
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
              </main>
              <SiteFooter />
            </div>
            <ScrollToTop />
          </TooltipProvider>
        </MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  );
}
