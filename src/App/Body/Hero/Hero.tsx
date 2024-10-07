import { GlHero } from "gitlanding/GlHero";
import { GlHeroText } from "gitlanding/GlHero/GlHeroText";
import { Text } from "onyxia-ui/Text";
import { tss } from "tss";
import { KeycloakifyRotatingLogo } from "./KeycloakifyRotatingLogo";

type Props = {
  className?: string;
};

export function Hero(props: Props) {
  const { className } = props;

  const { classes } = useStyle();

  return (
    <GlHero
      className={className}
      title={
        <>
          <GlHeroText>Keycloak theming</GlHeroText>
          <Text typo="display heading" className={classes.title2}>
            For the modern web.
          </Text>
        </>
      }
      subTitle={`Customize the look and feel of your login and registration pages without having to mess with FreeMarker.`}
      illustration={{
        type: "custom component",
        Component: KeycloakifyRotatingLogo,
      }}
      hasLinkToSectionBellow={true}
      classes={{
        subtitle: classes.subtitle,
      }}
    />
  );
}

const useStyle = tss.withName({ Hero }).create(({ theme }) => ({
  title2: {
    color: theme.colors.useCases.typography.textFocus,
    fontStyle: "italic",
  },
  subtitle: {
    color: theme.colors.useCases.typography.textPrimary,
  },
}));
