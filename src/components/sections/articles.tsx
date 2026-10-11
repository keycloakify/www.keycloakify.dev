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
import { DOCUMENTATION_URL } from "#constants";
import { cn } from "#lib/utils";

export function Articles() {
  return (
    <>
      <Article
        id="firstSection"
        title="A real solution to a real problem"
        buttonHref={DOCUMENTATION_URL}
        illustrationPosition="right"
        illustration={
          <ArticleVideo mp4Url={keycloakifyDemoMp4Url} webmUrl={keycloakifyDemoWebmUrl} />
        }
      >
        <p>
          Keycloak provides{" "}
          <ExternalLink href="https://www.keycloak.org/docs/latest/server_development/#_themes">
            theme support
          </ExternalLink>{" "}
          for web pages. This allows customizing the look and feel of end-user facing pages so they
          can be integrated with your applications. It involves, however, a lot of raw JS/CSS/
          <ExternalLink href="https://freemarker.apache.org/">FTL</ExternalLink> hacking, and
          bundling the theme is not exactly straightforward.
        </p>
        <p>
          Beyond that, if you use Keycloak for a specific app you want your login page to be tightly
          integrated with it. Ideally, you don't want the user to notice when he is being redirected
          away.
        </p>
        <p>
          Trying to reproduce the look and feel of a specific app in another stack is not an easy
          task not to mention the sheer amount of maintenance that it involves.
        </p>
        <p>
          Wouldn't it be great if we could just design the login and register pages as if they were
          part of our app?
        </p>
      </Article>

      <Article
        title="Using React is just an option"
        buttonHref={DOCUMENTATION_URL}
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
          Keycloakify is first and foremost a tool to help you build and test your theme in{" "}
          <ExternalLink href="https://docs.keycloakify.dev/testing-your-theme/outside-of-keycloak">
            Storybook
          </ExternalLink>{" "}
          or in a local{" "}
          <ExternalLink href="https://docs.keycloakify.dev/testing-your-theme/inside-of-keycloak">
            Keycloak container
          </ExternalLink>{" "}
          with hot-reload.
          <br />
          You can use React if you want to use your own components or fancy libraries like{" "}
          <ExternalLink href="https://mui.com/joy-ui/getting-started/templates/sign-in-side/">
            MUI
          </ExternalLink>{" "}
          or{" "}
          <ExternalLink href="https://ui.shadcn.com/examples/authentication">
            Shadcn/ui
          </ExternalLink>{" "}
          but it's not mandatory.
          <br />
          You can also customize the pages without touching React using CSS,{" "}
          <ExternalLink href="https://sass-lang.com/">SCSS</ExternalLink>,{" "}
          <ExternalLink href="https://tailwindcss.com/">Tailwind</ExternalLink>,{" "}
          <ExternalLink href="https://getbootstrap.com/">Bootstrap</ExternalLink>,{" "}
          <ExternalLink href="https://emotion.sh/docs/@emotion/css">@emotion/css</ExternalLink>, you
          name it.
        </p>
      </Article>

      <Article
        title="Easy to deploy"
        buttonHref={DOCUMENTATION_URL}
        illustrationPosition="right"
        illustration={<ArticleVideo mp4Url={themeSelectMp4Url} webmUrl={themeSelectWebmUrl} />}
      >
        <p>
          Keycloakify bundles your <strong>login</strong>, <strong>account</strong> and{" "}
          <strong>email</strong> theme into{" "}
          <strong>
            a single <code className="font-mono">.jar</code>
          </strong>{" "}
          that you'll be able to import into your keycloak server.
          <br />
          The Keycloak themes generated with Keycloakify are compatible with all Keycloak versions.
        </p>
      </Article>

      <Article
        title="It's not just cosmetics"
        buttonHref="https://docs.keycloakify.dev"
        illustrationPosition="left"
        illustration={
          <ArticleVideo mp4Url={frontendValidationMp4Url} webmUrl={frontendValidationWebmUrl} />
        }
      >
        <p>
          Keycloakify enables you to greatly improve the UX of your login and registration pages by
          enabling realtime input validation. Define{" "}
          <strong>from the Keycloak admin console</strong> your validator and provide instantaneous
          feedback to your users.
          <br />
          Best yet, it work <strong>out of the box</strong> with any theme generated with
          Keycloakify.
        </p>
      </Article>
    </>
  );
}

const illustrationClassName = "h-auto w-full rounded-xl border bg-background shadow-lg";

function Article(props: {
  id?: string;
  title: string;
  buttonHref: string;
  illustration: React.ReactNode;
  illustrationPosition: "left" | "right";
  children: React.ReactNode;
}) {
  const { id, title, buttonHref, illustration, illustrationPosition, children } = props;

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
            Get started
          </Button>
        </div>
        <div className={cn(illustrationPosition === "left" && "lg:order-first")}>
          {illustration}
        </div>
      </Reveal>
    </section>
  );
}

function ArticleVideo(props: { mp4Url: string; webmUrl: string }) {
  const { mp4Url, webmUrl } = props;

  return (
    <video autoPlay muted loop playsInline className={illustrationClassName}>
      <source src={mp4Url} type='video/mp4; codecs="hvc1"' />
      <source src={webmUrl} type="video/webm" />
    </video>
  );
}
