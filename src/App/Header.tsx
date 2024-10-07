import { GlHeader } from "gitlanding/GlHeader";
import keycloakifyLogoPngUrl from "assets/img/keycloakify-logo.png";
import { Text } from "onyxia-ui/Text";
import { tss } from "tss";
import { DOCUMENTATION_URL, GITHUB_REPO_URL } from "constants";

export function Header() {
  const { classes } = useStyle();

  return (
    <GlHeader
      title={
        <div
          className={classes.headerTitleWrapper}
          onClick={() => window.scrollTo(0, 0)}
        >
          <img
            src={keycloakifyLogoPngUrl}
            className={classes.logo}
            alt="logo"
          />
          <div className={classes.headerMainTextContainer}>
            <Text typo="section heading" className={classes.headerOnyxiaText}>
              Keycloakify
            </Text>
            <Text typo="section heading" className={classes.headerDatalabText}>
              Themes
            </Text>
          </div>
        </div>
      }
      links={[
        {
          label: "GitHub",
          href: GITHUB_REPO_URL,
        },
        {
          label: "Documentation",
          href: DOCUMENTATION_URL,
        },
        {
          label: "Storybook",
          href: "https://storybook.keycloakify.dev",
        },
      ]}
      enableDarkModeSwitch={true}
      githubRepoUrl={GITHUB_REPO_URL}
      githubButtonSize="large"
      showGithubStarCount={true}
    />
  );
}

const useStyle = tss.withName({ Header }).create(({ theme }) => ({
  headerTitleWrapper: {
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
  },
  logo: {
    fill: theme.colors.useCases.typography.textFocus,
    width: 33,
    height: "100%",
  },
  headerMainTextContainer: {
    cursor: "pointer",
    "& > *": {
      display: "inline",
    },
  },
  headerOnyxiaText: {
    ...theme.spacing.rightLeft("margin", 2),
  },
  headerDatalabText: {
    //...theme.spacing.rightLeft("margin", 2),
    fontWeight: 600,
    color: theme.colors.useCases.typography.textFocus,
  },
}));
