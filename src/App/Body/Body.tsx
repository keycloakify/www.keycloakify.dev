import { GlArticle } from "gitlanding/GlArticle";
import keycloakifyDemoWebmUrl from "assets/video/Keycloakify_demo_full-vp9-chrome.webm";
import keycloakifyDemoMp4Url from "assets/video/Keycloakify_demo.mp4";
import themeSelectWebmUrl from "assets/video/theme_select-vp9-chrome.webm";
import themeSelectMp4Url from "assets/video/theme_select.mp4";
import frontendValidationMp4Url from "assets/video/keycloakify_frontend_validation.mp4";
import frontendValidationWebmUrl from "assets/video/keycloakify_frontend_validation-vp9-chrome.webm";
import phaseTwoSvgUrl from "assets/img/phasetwo.svg";
import { GlSectionDivider } from "gitlanding/GlSectionDivider";
import { GlCheckList } from "gitlanding/GlCheckList";
import { GlCards } from "gitlanding/GlCards";
import { GlLogoCard } from "gitlanding/GlCards/GlLogoCard";
import cloudIamPngUrl from "assets/img/cloud-iam.png";
import zone2ForDarkModePngUrl from "assets/img/zone2_for_dark_mode.png";
import zone2ForLightModePngUrl from "assets/img/zone2_for_light_mode.png";
import tailwindPngUrl from "assets/img/tailwind.png";
import { GlYoutubeVideoSection } from "gitlanding/GlYoutubeVideoSection";
import { Text } from "onyxia-ui/Text";
import { Hero } from "./Hero";
import { DOCUMENTATION_URL } from "constants";
import { tss } from "tss";
import { breakpointsValues } from "onyxia-ui";
import StarsIcon from '@mui/icons-material/Stars';
import { Icon } from "onyxia-ui/Icon";
import { Tooltip } from "onyxia-ui/Tooltip";
import { Markdown } from "onyxia-ui/Markdown";

export function Body() {
  const { classes, css, theme } = useStyle();

  return (
    <>
      <Hero />

      <GlArticle
        id="firstSection"
        title="A real solution to a real problem"
        body={`Keycloak provides [theme support](https://www.keycloak.org/docs/latest/server_development/#_themes) for web pages. This allows customizing the look and feel of end-user facing pages so they can be integrated with your applications.
It involves, however, a lot of raw JS/CSS/[FTL](https://freemarker.apache.org/) hacking, and bundling the theme is not exactly straightforward.

Beyond that, if you use Keycloak for a specific app you want your login page to be tightly integrated with it.
Ideally, you don't want the user to notice when he is being redirected away.

Trying to reproduce the look and feel of a specific app in another stack is not an easy task not to mention
the sheer amount of maintenance that it involves.  

Wouldn't it be great if we could just design the login and register pages as if they were part of our app?  

                `}
        buttonLabel={`Get started`}
        buttonLink={{ href: DOCUMENTATION_URL }}
        illustration={{
          type: "video",
          sources: [
            {
              src: keycloakifyDemoMp4Url,
              type: 'video/mp4; codecs="hvc1"',
            },
            {
              src: keycloakifyDemoWebmUrl,
              type: "video/webm",
            },
          ],
          hasShadow: true,
        }}
        hasAnimation={true}
        illustrationPosition="right"
      />

      <GlArticle
        title="Using React is just an option"
        body={`Keycloakify is first and foremost a tool to help you 
build and test your theme in [Storybook](https://docs.keycloakify.dev/testing-your-theme/in-storybook) or 
in a local [Keycloak container](https://docs.keycloakify.dev/testing-your-theme/in-a-keycloak-docker-container) with hot-reload.  
You can use React if you want to use your own components or fancy libraries like [MUI](https://mui.com/joy-ui/getting-started/templates/sign-in-side/) or [Shadcn/ui](https://ui.shadcn.com/examples/authentication) 
but it's not mandatory.  
You can also customize the pages without touching React using CSS, [SCSS](https://sass-lang.com/), [Tailwind](https://tailwindcss.com/), 
[Bootstrap](https://getbootstrap.com/), [@emotion/css](https://emotion.sh/docs/@emotion/css), you name it.  
              `}
        buttonLabel={`Get started`}
        buttonLink={{ href: DOCUMENTATION_URL }}
        illustration={{
          type: "image",
          src: tailwindPngUrl,
          hasShadow: true,
        }}
        hasAnimation={true}
        illustrationPosition="left"
      />

      <GlArticle
        title="Easy to deploy"
        body={`Keycloakify bundles your **login**, **account** and **email** theme into **a single \`.jar\`** that you'll be able to import
                  into your keycloak server.  
                  The Keycloak themes generated with Keycloakify are compatible with all Keycloak versions.`}
        buttonLabel={`Get started`}
        buttonLink={{ href: DOCUMENTATION_URL }}
        illustration={{
          type: "video",
          sources: [
            {
              src: themeSelectMp4Url,
              type: 'video/mp4; codecs="hvc1"',
            },
            {
              src: themeSelectWebmUrl,
              type: "video/webm",
            },
          ],
          hasShadow: true,
        }}
        hasAnimation={true}
        illustrationPosition="right"
      />

      <GlArticle
        title="It's not just cosmetics"
        body={`Keycloakify enables you to greatly improve the UX of your login and registration pages
          by enabling realtime input validation.
          Define **from the Keycloak admin consol** your validator and provide instantaneous feedback to your users.  
          Best yet, it work **out of the box** with any theme generated with Keycloakify.`}
        buttonLabel={`Get started`}
        buttonLink={{ href: "https://docs.keycloakify.dev" }}
        illustration={{
          type: "video",
          sources: [
            {
              src: frontendValidationMp4Url,
              type: 'video/mp4; codecs="hvc1"',
            },
            {
              src: frontendValidationWebmUrl,
              type: "video/webm",
            },
          ],
          hasShadow: true,
        }}
        hasAnimation={true}
        illustrationPosition="left"
      />

      <GlSectionDivider />

      <GlCheckList
        heading="Everything you expect and more"
        hasAnimation={true}
        elements={[
          {
            title: "Widely Adopted",
            description: `Keycloakify is trusted by leading tech companies like [Neon](https://neon.tech/) and [Corsair](https://www.corsair.com/).  
                                It is used in production by cybersecurity firms like [Ironwood](https://www.ironwoodcyber.com/) and in the public sector by organizations such as the [European Data Science Platform](https://datalab.sspcloud.fr/) 
                                and official French government websites like [this one](https://code.gouv.fr/sill/).`,
          },
          {
            title: "Optimized Performance",
            description: `Keycloakify merely increases the page payload by 10%, but those extra bytes dramatically improve the user experience.  
                                Additionally, if you customize your theme without relying on [the default styles](https://www.patternfly.org/), you can **significantly**
                                reduce the payload compared to the default theme. (Patternfly is quite heavy when compared to solution with style extraction like Tailwind)`,
          },
          {
            title: "Retro-compatible",
            description: `Themes generated with Keycloakify are compatible with all Keycloak versions. 
                You develop your theme like if you were targeting the latest Keycloak version and Keycloakify will polyfill the missing features for you.`,
          },
          {
            title: "Easy to integrate in your codebase",
            description: `Keycloakify can be integrated [directly within an existing Vite or Webpack project](https://docs.keycloakify.dev/keycloakify-in-my-codebase/in-your-react-project) 
                                or [as a submodule of your monorepo](https://docs.keycloakify.dev/keycloakify-in-my-codebase/as-a-subproject-of-your-monorepo).`,
          },
          {
            title: "Easily testable",
            description: `Test your theme [in storybook](https://docs.keycloakify.dev/testing-your-theme/in-storybook) or 
                in [a local Keycloak container](https://docs.keycloakify.dev/testing-your-theme/in-a-keycloak-docker-container) with a simple command.`,
          },
          {
            title: "We are here to help!",
            description: `We are happy to provide support on our [Discord server](https://discord.gg/mJdYJSdcm4) that has many active users and some members of core Keycloak team.`,
          },
          {
            title: "Theme variants",
            description: `Keycloakify enables you to create [theme variants](https://docs.keycloakify.dev/theme-variants) and theme dynamically 
                customizable with [environment variables](https://docs.keycloakify.dev/environment-variables).`,
          },
          {
            title: "Feature complete",
            description: `Everything that works in the default Keycloak theme also works in Keycloakify themes. Beyond that Keycloakify adds **many** exclusive features.`,
          },
          {
            title: "Doesn't Bloat your node_modules",
            description: `The Keycloakify NPM package is [dependency free](https://www.npmjs.com/package/keycloakify?activeTab=dependencies).  
                                The CLI is shipped as a single executable.`,
          },
        ]}
      />

      <GlYoutubeVideoSection
        title={"Keycloakify from the point of view of a React developer"}
        src="https://www.youtube.com/embed/BPAayGPmQZI?si=oM4tzn4vEszwW8Ye"
        hasAnimation={true}
      />

      <GlCards
        title={
          <div className={css({ textAlign: "center" })}>
            <Text
              typo="page heading"
              className={css({
                lineHeight: "2rem",
                fontSize: "2rem",
                marginBottom: theme.spacing(2),
              })}
            >
              {" "}
              Sponsors{" "}
            </Text>
            <Text typo="subtitle">
              Backers of the project, we trust and recommend their services
            </Text>
          </div>
        }
        classes={{
          root: classes.cards,
          cardsWrapper: classes.sponsorCardsWrapper,
        }}
      >

        <GlLogoCard
          className={classes.sponsorCard}
          classes={{
            iconWrapper: css({
              marginTop: 55,
              "& > svg": (() => {
                const width = 280;

                return {
                  width,
                  height: width * 0.255,
                  "& #Group-18-Copy-2 > path": {
                    fill: theme.isDarkModeEnabled ?  theme.colors.useCases.typography.textPrimary : undefined
                  }
                } as const;

              })(),
            }),
            textWrapper: css({
              "marginTop": theme.windowInnerWidth > breakpointsValues.md ? 50 : undefined,
            })
          }}
          title="Keycloak as a Service"
          paragraph={
            <>
              <Tooltip
                title={
                  <>
                    Along with their financial support, Phase Two helps on the Java side of things
                    going as far as <strong>submitting PRs to Keycloak</strong> to streamline Keycloakify integration.
                  </>
                }
              >
                <Text
                  typo="object heading"
                  className={css({
                    position: "absolute",
                    top: theme.spacing(3),
                    right: theme.spacing(3) + 10,
                    marginBottom: theme.spacing(2),
                    display: "inline-flex",
                    gap: theme.spacing(1),
                    alignItems: "center",
                    color: theme.isDarkModeEnabled ? "#D4AF37": "#FFD700",
                  })}
                >
                  <Icon icon={StarsIcon} />
                  <span>Major Code Contributors</span>
                </Text>
              </Tooltip>
              <Markdown>
                Keycloak community contributors of popular
                [extensions](https://github.com/p2-inc#our-extensions-?utm_source=keycloakify)
                providing free and dedicated [Keycloak
                hosting](https://phasetwo.io/hosting/?utm_source=keycloakify) and enterprise [Keycloak
                support](https://phasetwo.io/support/?utm_source=keycloakify) to businesses of all
                sizes.
              </Markdown>
            </>
          }
          iconUrls={[phaseTwoSvgUrl]}
          buttonLabel="Check them out"
          link={{
            href: "https://phasetwo.io?utm_source=keycloakify",
          }}
        />


        <GlLogoCard
          className={classes.sponsorCard}
          classes={{
            iconWrapper: css({
              "& > img": {
                width: 300,
                paddingTop: theme.spacing(6) + 8,
              },
            }),
          }}
          title="Keycloak Consulting Services"
          paragraph={
            <>
              Your partner in Keycloak deployment, configuration, and extension
              development for optimized identity management solutions.
            </>
          }
          iconUrls={[
            theme.isDarkModeEnabled
              ? zone2ForDarkModePngUrl
              : zone2ForLightModePngUrl,
          ]}
          buttonLabel="Check them out"
          link={{
            href: "https://www.zone2.tech/services/keycloak-consulting",
          }}
        />


        <GlLogoCard
          className={classes.sponsorCard}
          classes={{
            iconWrapper: css({ 
              "marginTop": 20,
              "& > img": { width: 145 } 
            }),
          }}
          title="Cloud-IAM"
          paragraph={
            <>
              Managed Keycloak Provider: Simplify and secure your Keycloak
              Identity and Access Management.
              <br />
              <i>
                Use code <code>keycloakify5</code> at checkout for a 5%
                discount.
              </i>
              <br />
              <br />
            </>
          }
          iconUrls={[cloudIamPngUrl]}
          buttonLabel="Check them out"
          link={{
            href: "https://cloud-iam.com/?mtm_campaign=keycloakify-deal&mtm_source=keycloakify-web-site",
          }}
        />
      </GlCards>
    </>
  );
}

const useStyle = tss.withName({ Body }).create(({ theme }) => ({
  cards: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sponsorCardsWrapper: {
    display: "flex",
    justifyContent: "center",
    "flex-wrap": "wrap",
    flexDirection:
      theme.windowInnerWidth > breakpointsValues.md ? "row" : "column",
    maxWidth: 1500,
  },
  sponsorCard: {
    ...theme.spacing.rightLeft("padding", 5),
    flex: 1,
    position: "relative",
  },
}));
