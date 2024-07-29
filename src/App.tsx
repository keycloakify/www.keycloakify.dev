import { useEffect } from "react";
import { GlTemplate } from "gitlanding/GlTemplate";
import { useSplashScreen } from "onyxia-ui";
import { GlHeader } from "gitlanding/GlHeader";
import { useTranslation } from "i18n";
import { makeStyles, Text } from "theme";
//import { useLng } from "i18n/useLng";
//import { LanguageSelect } from "theme";
//import { breakpointsValues } from "onyxia-ui";
import { GlHero } from "gitlanding/GlHero";
import { GlHeroText } from "gitlanding/GlHero/GlHeroText";
import keycloakifyLogoPngUrl from "assets/img/keycloakify-logo.png";
import { KeycloakifyRotatingLogo } from "./KeycloakifyRotatingLogo";
import { GlArticle } from "gitlanding/GlArticle";
import keycloakifyDemoWebmUrl from "assets/video/Keycloakify_demo_full-vp9-chrome.webm";
import keycloakifyDemoMp4Url from "assets/video/Keycloakify_demo.mp4";
import themeSelectWebmUrl from "assets/video/theme_select-vp9-chrome.webm"
import themeSelectMp4Url from "assets/video/theme_select.mp4";
import frontendValidationMp4Url from "assets/video/keycloakify_frontend_validation.mp4";
import frontendValidationWebmUrl from "assets/video/keycloakify_frontend_validation-vp9-chrome.webm";
import { GlSectionDivider } from "gitlanding/GlSectionDivider";
import { GlCheckList } from "gitlanding/GlCheckList";
import { GlFooter } from "gitlanding/GlFooter";
import { declareComponentKeys } from "i18nifty";
import { GlCards } from "gitlanding/GlCards"
import { GlLogoCard } from "gitlanding/GlCards/GlLogoCard";
import cloudIamPngUrl from "assets/img/cloud-iam.png";
import zone2ForDarkModePngUrl from "assets/img/zone2_for_dark_mode.png";
import zone2ForLightModePngUrl from "assets/img/zone2_for_light_mode.png";
import { breakpointsValues } from "gitlanding";
import tailwindPngUrl from "assets/img/tailwind.png";
import { GlYoutubeVideoSection } from "gitlanding/GlYoutubeVideoSection";

const githubRepoUrl = "https://github.com/InseeFrLab/keycloakify";
const documentationUrl = "https://docs.keycloakify.dev";

export function App() {

  //const { lng, setLng } = useLng();

  {
    const { hideRootSplashScreen } = useSplashScreen();

    useEffect(() => {
      hideRootSplashScreen();
    }, []);
  }

  const { classes, css, theme } = useStyles();

  const { t } = useTranslation({ App });

  return (
    <GlTemplate
      header={
        <GlHeader
          title={
            <div className={classes.headerTitleWrapper} onClick={() => window.scrollTo(0, 0)}>
              <img src={keycloakifyLogoPngUrl} className={classes.logo} alt="logo" />
              <div
                className={classes.headerMainTextContainer}
              >
                <Text
                  typo="section heading"
                  className={classes.headerOnyxiaText}
                >
                  Keycloakify
                </Text>
                <Text
                  typo="section heading"
                  className={classes.headerDatalabText}
                >
                  Themes
                </Text>
              </div>
            </div>
          }
          links={[
            {
              "label": "GitHub",
              "href": githubRepoUrl
            },
            {
              "label": t("documentation"),
              "href": documentationUrl,
            },
            {
              "label": "Storybook",
              "href": "https://storybook.keycloakify.dev"
            }
          ]}
          enableDarkModeSwitch={true}
          githubRepoUrl={githubRepoUrl}
          githubButtonSize="large"
          showGithubStarCount={true}
        /* TODO: Re enable when translation on point
        customItemEnd={
          <LanguageSelect
            className={classes.languageSelect}
            language={lng}
            onLanguageChange={setLng}
            variant="big"
          />
        }
        */
        />
      }
      headerOptions={{
        "position": "sticky",
        "isRetracted": "smart",
      }}
      body={
        <>
          <GlHero
            title={
              <>
                <GlHeroText>Keycloak theming</GlHeroText>
                <Text typo="display heading" className={classes.title2}>For the modern web.</Text>
              </>
            }
            subTitle={`
          Customize the look and feel of your login and registration pages without having to mess with FreeMarker.
          `}
            illustration={{
              "type": "custom component",
              "Component": KeycloakifyRotatingLogo,


            }}
            hasLinkToSectionBellow={true}
            classes={{
              "subtitle": classes.subtitle,
            }}
          />

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
            buttonLink={{ "href": documentationUrl }}
            illustration={
              {
                "type": "video",
                "sources":
                  [
                    {
                      "src": keycloakifyDemoMp4Url,
                      "type": 'video/mp4; codecs="hvc1"',
                    },
                    {
                      "src": keycloakifyDemoWebmUrl,
                      "type": "video/webm",
                    },
                  ],
                "hasShadow": true
              }
            }
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
            buttonLink={{ "href": documentationUrl }}
            illustration={
              {
                "type": "image",
                "src": tailwindPngUrl,
                "hasShadow": true
              }
            }
            hasAnimation={true}
            illustrationPosition="left"
          />

          <GlArticle
            title="Easy to deploy"
            body={`Keycloakify bundles your login, account and email theme into a single \`.jar\` that you'll be able to import
                  into your keycloak server.  
                  The Keycloak themes generated with Keycloakify are compatible with all Keycloak versions.`}
            buttonLabel={`Get started`}
            buttonLink={{ "href": documentationUrl }}
            illustration={
              {
                "type": "video",
                "sources":
                  [
                    {
                      "src": themeSelectMp4Url,
                      "type": 'video/mp4; codecs="hvc1"',
                    },
                    {
                      "src": themeSelectWebmUrl,
                      "type": "video/webm",
                    },
                  ],
                "hasShadow": true
              }



            }
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
            buttonLink={{ "href": "https://docs.keycloakify.dev" }}
            illustration={

              {
                "type": "video",
                "sources":
                  [
                    {
                      "src": frontendValidationMp4Url,
                      "type": 'video/mp4; codecs="hvc1"',
                    },
                    {
                      "src": frontendValidationWebmUrl,
                      "type": "video/webm",
                    },
                  ],
                "hasShadow": true
              }
            }
            hasAnimation={true}
            illustrationPosition="left"
          />

          <GlSectionDivider />


          <GlCheckList
            heading="Everything you expect and more"
            hasAnimation={true}
            elements={[
              {
                "title": "Easy to integrate in your codebase",
                "description": `Keycloakify can be integrated [directly within an existing Vite or Webpack project](https://docs.keycloakify.dev/keycloakify-in-my-codebase/in-your-react-project) 
                                or [as a submodule of your monorepo](https://docs.keycloakify.dev/keycloakify-in-my-codebase/as-a-subproject-of-your-monorepo).`,
              },
              {
                "title": "Easily testable",
                "description": `Test your theme [in storybook](https://docs.keycloakify.dev/testing-your-theme/in-storybook) or 
                in [a local Keycloak container](https://docs.keycloakify.dev/testing-your-theme/in-a-keycloak-docker-container) with a simple command.`,
              },
              {
                "title": "Retro-compatible",
                "description": `Themes generated with Keycloakify are compatible with all Keycloak versions. 
                You develop your theme like if you were targeting the latest Keycloak version and Keycloakify will polyfill the missing features for you.`,
              },
              {
                "title": "We are here to help!",
                "description": `We are happy to provide support on our [Discord server](https://discord.gg/mJdYJSdcm4) that has many active users and some members of core Keycloak team.`,
              },
              {
                "title": "Theme variants",
                "description": `Keycloakify enables you to create [theme variants](https://docs.keycloakify.dev/theme-variants) and theme dynamically 
                customizable with [environnement variables](https://docs.keycloakify.dev/environment-variables).`,
              },
              {
                "title": "Feature complete",
                "description": `Everything that works in the default Keycloak theme also works in Keycloakify themes. Beyond that Keycloakify adds **many** of exclusive features.`,
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
              <div className={css({ "textAlign": "center" })}>
                <Text typo="page heading" className={css({ "lineHeight": "2rem", "fontSize": "2rem", "marginBottom": theme.spacing(2) })}> Sponsors </Text>
                <Text typo="subtitle">Backers of the project, we trust and recommend their services</Text>
              </div>
            }
            classes={{
              "root": classes.cards,
              "cardsWrapper": classes.sponsorCardsWrapper
            }}
          >
            <GlLogoCard
              className={classes.sponsorCard}
              classes={{
                "iconWrapper": css({
                  "& > img": {
                    "width": 300,
                    "paddingTop": theme.spacing(4)
                  }
                })
              }}
              title="Keycloak Consulting Services"
              paragraph={<>
                Your partner in Keycloak deployment, configuration, and extension development for optimized identity management solutions.
              </>}
              iconUrls={[theme.isDarkModeEnabled ? zone2ForDarkModePngUrl : zone2ForLightModePngUrl]}
              buttonLabel="Check them out"
              link={{
                "href": "https://www.zone2.tech/services/keycloak-consulting"
              }}
            />

            <GlLogoCard
              className={classes.sponsorCard}
              classes={{
                "iconWrapper": css({ "& > img": { "width": 145 } })
              }}
              title="Cloud-IAM"
              paragraph={<>
                Managed Keycloak Provider:
                Simplify and secure your Keycloak Identity and Access Management.
                <br />
                <i>Use code <code>keycloakify5</code> at checkout for a 5% discount.</i>
                <br />
                <br />
              </>}
              iconUrls={[cloudIamPngUrl]}
              buttonLabel="Check them out"
              link={{
                "href": "https://cloud-iam.com/?mtm_campaign=keycloakify-deal&mtm_source=keycloakify-web-site"
              }}
            />

          </GlCards>

        </>
      }
      footer={
        <GlFooter
          bottomDivContent={`[Edit this website](https://github.com/keycloakify/www.keycloakify.dev)`}
          links={[
            {
              "href": "https://www.npmjs.com/package/keycloakify",
              "label": <img src="https://img.shields.io/npm/dm/keycloakify" alt="" />
            },
            {
              "href": "https://github.com/garronej/keycloakify/blob/main/LICENSE",
              "label": <img src="https://img.shields.io/npm/l/keycloakify" alt="" />
            },
            {
              "href": "https://github.com/thomasdarimont/awesome-keycloak",
              "label": <img src="https://awesome.re/mentioned-badge.svg" alt="" />
            },
            {
              "href": "https://github.com/InseeFrLab/keycloakify/blob/729503fe31a155a823f46dd66ad4ff34ca274e0a/tsconfig.json#L14",
              "label": <img src="https://camo.githubusercontent.com/0f9fcc0ac1b8617ad4989364f60f78b2d6b32985ad6a508f215f14d8f897b8d3/68747470733a2f2f62616467656e2e6e65742f62616467652f547970655363726970742f7374726963742532302546302539462539322541412f626c7565" alt="" />
            },
          ]}
        />
      }
    />
  );

}

export declare namespace App {
  export type I18n = {
    documentation: undefined;
    pricing: undefined;
    "paid for by French taxpayers": undefined;
    "it is libre software": undefined;
    "ok": undefined;
  };
}

export const { i18n } = declareComponentKeys<
  | "documentation"
  | "pricing"
  | "paid for by French taxpayers"
  | "it is libre software"
  | "ok"
>()({ App })

const useStyles = makeStyles({ "name": { App } })((theme, _params, classes) => ({
  "headerTitleWrapper": {
    "display": "flex",
    "cursor": "pointer",
    "alignItems": "center"
  },
  "logo": {
    "fill": theme.colors.useCases.typography.textFocus,
    "width": 33,
    "height": "100%"
  },
  "headerMainTextContainer": {
    "cursor": "pointer",
    "& > *": {
      "display": "inline",
    },
  },
  "headerOnyxiaText": {
    ...theme.spacing.rightLeft("margin", 2),
  },
  "headerDatalabText": {
    //...theme.spacing.rightLeft("margin", 2),
    "fontWeight": 600,
    "color": theme.colors.useCases.typography.textFocus,
  },
  /*
  "languageSelect": {
    "marginLeft": theme.spacing(3),
    "display": (() => {

      if (theme.windowInnerWidth >= breakpointsValues.lg) {
        return undefined;
      }

      return "none";

    })()
  },
  */
  "title2": {
    "color": theme.colors.useCases.typography.textFocus,
    "fontStyle": "italic"
  },
  "subtitle": {
    "color": theme.colors.useCases.typography.textPrimary
  },
  "cards": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
  },
  "sponsorCardsWrapper": {
    "display": "flex",
    "justifyContent": "center",
    "flex-wrap": "wrap",
    "flexDirection": theme.windowInnerWidth > breakpointsValues.md ? "row" : "column",
    "maxWidth": 1200
  },
  "sponsorCard": {
    ...theme.spacing.rightLeft("padding", 5),
    "flex": 1
  }
}));
