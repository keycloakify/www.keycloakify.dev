import keycloakifyLogoHeroMovingPngUrl from "#assets/img/keycloakify-logo-hero-moving.png";
import keycloakifyLogoHeroStillPngUrl from "#assets/img/keycloakify-logo-hero-still.png";
import { cn } from "#lib/utils";

type Props = {
  className?: string;
};

export function KeycloakifyRotatingLogo(props: Props) {
  const { className } = props;

  return (
    <div className={cn("relative aspect-square", className)}>
      <img
        className="size-full animate-spin-slow motion-reduce:animate-none"
        src={keycloakifyLogoHeroMovingPngUrl}
        alt="Rotating react logo"
      />
      <img
        className="absolute inset-0 size-full"
        src={keycloakifyLogoHeroStillPngUrl}
        alt="keyhole"
      />
    </div>
  );
}
