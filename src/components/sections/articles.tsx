import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import keycloakifyDemoWebmUrl from "#assets/video/Keycloakify_demo_full-vp9-chrome.webm";
import keycloakifyDemoMp4Url from "#assets/video/Keycloakify_demo.mp4";
import themeSelectWebmUrl from "#assets/video/theme_select-vp9-chrome.webm";
import themeSelectMp4Url from "#assets/video/theme_select.mp4";
import frontendValidationMp4Url from "#assets/video/keycloakify_frontend_validation.mp4";
import frontendValidationWebmUrl from "#assets/video/keycloakify_frontend_validation-vp9-chrome.webm";
import tailwindPngUrl from "#assets/img/tailwind.png";
import { ExternalLink } from "#components/external-link";
import { Reveal } from "#components/reveal";
import { Button } from "#components/ui/button";
import { DOCUMENTATION_URL, STORYBOOK_URL } from "#constants";
import { cn } from "#lib/utils";

export function Articles() {
  return (
    <>
      <Article
        id="firstSection"
        title="A real solution to a real problem"
        buttonLabel="Get started"
        buttonHref={DOCUMENTATION_URL}
        illustrationPosition="right"
        illustration={
          <ArticleVideo mp4Url={keycloakifyDemoMp4Url} webmUrl={keycloakifyDemoWebmUrl} />
        }
      >
        <p>
          Keycloak has{" "}
          <ExternalLink href="https://www.keycloak.org/docs/latest/server_development/#_themes">
            theme support
          </ExternalLink>
          , but using it means a lot of raw JS/CSS/
          <ExternalLink href="https://freemarker.apache.org/">FTL</ExternalLink> hacking, and
          reproducing the look and feel of your app in another stack is a maintenance burden.
        </p>
        <p>
          With Keycloakify you design the login and register pages as if they were part of your app,
          so your users don't notice when they are redirected away.
        </p>
      </Article>

      <Article
        title="Using React is just an option"
        buttonLabel="Testing your theme"
        buttonHref={`${DOCUMENTATION_URL}/testing-your-theme`}
        illustrationPosition="left"
        illustration={
          <img
            src={tailwindPngUrl}
            alt=""
            width={3380}
            height={1788}
            loading="lazy"
            className={illustrationClassName}
          />
        }
      >
        <p>
          Keycloakify is first and foremost a tool to build and test your theme in{" "}
          <ExternalLink href={`${DOCUMENTATION_URL}/testing-your-theme/outside-of-keycloak`}>
            Storybook
          </ExternalLink>{" "}
          or in a local{" "}
          <ExternalLink href={`${DOCUMENTATION_URL}/testing-your-theme/inside-of-keycloak`}>
            Keycloak container
          </ExternalLink>{" "}
          with hot reload.
        </p>
        <p>
          Bring your own components or libraries like{" "}
          <ExternalLink href="https://mui.com/joy-ui/getting-started/templates/sign-in-side/">
            MUI
          </ExternalLink>{" "}
          or{" "}
          <ExternalLink href="https://ui.shadcn.com/examples/authentication">
            shadcn/ui
          </ExternalLink>
          , or customize the pages without touching React using CSS,{" "}
          <ExternalLink href="https://sass-lang.com/">SCSS</ExternalLink>,{" "}
          <ExternalLink href="https://tailwindcss.com/">Tailwind</ExternalLink> or{" "}
          <ExternalLink href="https://getbootstrap.com/">Bootstrap</ExternalLink>.
        </p>
      </Article>

      <Article
        title="Easy to deploy"
        buttonLabel="Deploying your theme"
        buttonHref={`${DOCUMENTATION_URL}/deploying-your-theme`}
        illustrationPosition="right"
        illustration={<ArticleVideo mp4Url={themeSelectMp4Url} webmUrl={themeSelectWebmUrl} />}
      >
        <p>
          Keycloakify bundles your <strong>login</strong>, <strong>account</strong> and{" "}
          <strong>email</strong> themes into{" "}
          <strong>
            a single <code className="font-mono">.jar</code>
          </strong>{" "}
          that you import into your Keycloak server. The themes it generates are compatible with all
          Keycloak versions.
        </p>
      </Article>

      <Article
        title="It's not just cosmetics"
        buttonLabel="See it in Storybook"
        buttonHref={STORYBOOK_URL}
        illustrationPosition="left"
        illustration={
          <ArticleVideo mp4Url={frontendValidationMp4Url} webmUrl={frontendValidationWebmUrl} />
        }
      >
        <p>
          Keycloakify improves the UX of your login and registration pages with realtime input
          validation. Define your validators <strong>from the Keycloak admin console</strong> and
          your users get instant feedback.
        </p>
        <p>
          It works <strong>out of the box</strong> with any theme generated with Keycloakify.
        </p>
      </Article>
    </>
  );
}

const illustrationClassName = "h-auto w-full rounded-xl border bg-background shadow-lg";

function Article(props: {
  id?: string;
  title: string;
  buttonLabel: string;
  buttonHref: string;
  illustration: React.ReactNode;
  illustrationPosition: "left" | "right";
  children: React.ReactNode;
}) {
  const { id, title, buttonLabel, buttonHref, illustration, illustrationPosition, children } =
    props;

  return (
    <section id={id} className="wrapper scroll-mt-4 border-t md:tick-left md:tick-right">
      <Reveal className="grid items-center gap-10 px-5 py-14 sm:px-10 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-16">
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-3xl font-medium tracking-tight text-balance sm:text-4xl">{title}</h2>
          <div className="flex flex-col gap-4 text-pretty text-muted-foreground [&_strong]:font-medium [&_strong]:text-foreground">
            {children}
          </div>
          <Button
            size="lg"
            nativeButton={false}
            render={<a href={buttonHref} target="_blank" rel="noopener noreferrer" />}
            className="mt-2 h-10 px-4"
          >
            {buttonLabel}
          </Button>
        </div>
        <div className={cn(illustrationPosition === "left" && "lg:order-first")}>
          {illustration}
        </div>
      </Reveal>
    </section>
  );
}

/** Only downloads and plays the video while it is on screen. */
function ArticleVideo(props: { mp4Url: string; webmUrl: string }) {
  const { mp4Url, webmUrl } = props;

  const ref = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { margin: "200px" });

  useEffect(() => {
    const video = ref.current;

    if (video === null) {
      return;
    }

    if (isInView) {
      // Autoplay can be refused (e.g. data saver), the first frame stays visible.
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <video ref={ref} muted loop playsInline preload="metadata" className={illustrationClassName}>
      <source src={mp4Url} type='video/mp4; codecs="hvc1"' />
      <source src={webmUrl} type="video/webm" />
    </video>
  );
}
