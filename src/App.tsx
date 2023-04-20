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

  const { classes, css } = useStyles();

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
                <Text typo="display heading" className={classes.title2}>Made easy. With React.</Text>
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
the cheer amount of maintenance that it involves.  

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
            title="Batteries included"
            body={`Keycloakify bundles your theme into a single \`.jar\` that you'll be able to import
          into your keycloak server.`}
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
            illustrationPosition="left"
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
            illustrationPosition="right"
          />

          <GlSectionDivider />

          <GlCheckList
            heading="Everything you expect and more"
            hasAnimation={true}
            elements={[
              {
                "title": "Account theme support",
                "description": `Customize the pages where the user can update he's profile, change he's password, ect...`,
              },
              {
                "title": "[Email customization support](https://docs.keycloakify.dev/email-customization)",
                "description": `Customize the email sent to validates users addresses and other emails of sorts.`,
              },
              {
                "title": "[Easily testable](https://docs.keycloakify.dev/developpement)",
                "description": `Test your login page with a mock context without having to deploy to a real Keycloak instance.
            When you are ready spin up a Keycloak container with a simple command and check that everything is working.`,
              },
              {
                "title": "[Context persistence](https://docs.keycloakify.dev/context-persistence)",
                "description": `You can easily carry the theme (dark/light) and the language from your main app over to the login pages.`,
              },
              {
                "title": "Recommended on the support forum",
                "description": `This tool [has been recommended](https://keycloak.discourse.group/t/keycloak-nodejs-admin-api-for-custom-login/12220/2?u=garronej) to users by a member of the Keycloak team.`,
              },
              {
                "title": "Shallow or advanced customization, it's up to you",
                "description": `You can opt to just inject some CSS of branding into the pages but you can also opt for modifying the pages 
            at the component level.`,
              },
              {
                "title": "[Terms and conditions](https://docs.keycloakify.dev/terms-and-conditions)",
                "description": `Need your users to accept your terms and conditions when registering?
            Just provide a Markdown file, optionally in different languages. That's it.`,
              },
              {
                "title": "[Starter setups](https://github.com/codegouvfr/keycloakify-starter)",
                "description": `If you are not big on reading documentation there are working demo repo you can start hacking from.
            `,
              },
              {
                "title": "Strong and active community of contributor",
                "description": `This tool [will stay up to date with Keycloak](https://docs.keycloakify.dev/#supported-keycloak-version) for the forseeable future and you 
              are welcome to [open issues](https://github.com/InseeFrLab/keycloakify/issues/new) if you are experiencing any issues.
            `,
              },
            ]}
          />
          <GlCards title="Our exclusive sponsor" classes={{
            "cardsWrapper": classes.sponsorCardsWrapper
          }}>
            <GlLogoCard
              className={classes.sponsorCard}
              classes={{
                "iconWrapper": css({ "& > img": { "width": 100 }})
              }}
              title="Cloud IAM"
              paragraph={<>
                Simplify and secure your Keycloak Identity and Access Management. Keycloak as a Service.
                <br/>  
                <br/>  
                <i>Use the promo code <code>keycloakify5</code> to get 5% off your annual subscription and support us.</i>
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
          bottomDivContent={`[Page created with GitLanding](https://www.gitlanding.dev)`}
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

const useStyles = makeStyles({ "name": { App } })(theme => ({
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
  "sponsorCardsWrapper": {
    "display": "flex",
    "justifyContent": "center"
  },
  "sponsorCard": {
    ...theme.spacing.rightLeft("padding", 5),
  }
}));
