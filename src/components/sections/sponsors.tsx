import { StarIcon } from "lucide-react";
import PhaseTwoLogo from "#assets/img/phasetwo.svg?react";
//import cloudIamPngUrl from "#assets/img/cloud-iam.png";
//import zone2ForDarkModePngUrl from "#assets/img/zone2_for_dark_mode.png";
//import zone2ForLightModePngUrl from "#assets/img/zone2_for_light_mode.png";
import { ExternalLink } from "#components/external-link";
import { Reveal } from "#components/reveal";
import { Badge } from "#components/ui/badge";
import { Button } from "#components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "#components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "#components/ui/tooltip";

export function Sponsors() {
  return (
    <section className="wrapper border-t px-5 py-14 sm:px-10 sm:py-24 md:tick-left md:tick-right">
      <Reveal className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-balance sm:text-5xl">Sponsor</h2>
          <p className="max-w-md text-balance text-muted-foreground">
            Backers of the project, we trust and recommend their services
          </p>
        </div>

        <div className="flex w-full flex-wrap justify-center gap-6">
          <Card className="w-full max-w-md">
            <CardHeader>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Badge
                      variant="outline"
                      render={<button type="button" />}
                      className="justify-self-end text-highlight"
                    />
                  }
                >
                  <StarIcon data-icon="inline-start" />
                  Major Code Contributors
                </TooltipTrigger>
                <TooltipContent className="block text-pretty">
                  Along with their financial support, Phase Two helps on the Java side of things
                  going as far as <strong>submitting PRs to Keycloak</strong> to streamline
                  Keycloakify integration.
                </TooltipContent>
              </Tooltip>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6 text-center">
              <PhaseTwoLogo
                aria-label="Phase Two"
                className="my-6 h-auto w-full max-w-70 dark:[&_#Group-18-Copy-2>path]:fill-foreground"
              />
              <div className="flex flex-col gap-2">
                <CardTitle>Keycloak as a Service</CardTitle>
                <CardDescription className="text-pretty">
                  Keycloak community contributors of popular{" "}
                  <ExternalLink href="https://github.com/p2-inc#our-extensions-?utm_source=keycloakify">
                    extensions
                  </ExternalLink>{" "}
                  providing free and dedicated{" "}
                  <ExternalLink href="https://phasetwo.io/hosting/?utm_source=keycloakify">
                    Keycloak hosting
                  </ExternalLink>{" "}
                  and enterprise{" "}
                  <ExternalLink href="https://phasetwo.io/support/?utm_source=keycloakify">
                    Keycloak support
                  </ExternalLink>{" "}
                  to businesses of all sizes.
                </CardDescription>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <Button
                nativeButton={false}
                render={
                  <a
                    href="https://phasetwo.io?utm_source=keycloakify"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Check them out
              </Button>
            </CardFooter>
          </Card>

          {/*
          <Card className="w-full max-w-md">
            <CardContent className="flex flex-col items-center gap-6 text-center">
              <img
                src={
                  resolvedTheme === "dark"
                    ? zone2ForDarkModePngUrl
                    : zone2ForLightModePngUrl
                }
                alt="Zone2"
                className="my-6 w-full max-w-75"
              />
              <div className="flex flex-col gap-2">
                <CardTitle>Keycloak Consulting Services</CardTitle>
                <CardDescription className="text-pretty">
                  Your partner in Keycloak deployment, configuration, and
                  extension development for optimized identity management
                  solutions.
                </CardDescription>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <Button
                nativeButton={false}
                render={
                  <a
                    href="https://www.zone2.tech/services/keycloak-consulting"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Check them out
              </Button>
            </CardFooter>
          </Card>
          */}

          {/*
          <Card className="w-full max-w-md">
            <CardContent className="flex flex-col items-center gap-6 text-center">
              <img src={cloudIamPngUrl} alt="Cloud-IAM" className="my-6 w-36" />
              <div className="flex flex-col gap-2">
                <CardTitle>Cloud-IAM</CardTitle>
                <CardDescription className="text-pretty">
                  Managed Keycloak Provider: Simplify and secure your Keycloak
                  Identity and Access Management.
                  <br />
                  <i>
                    Use code <code>keycloakify5</code> at checkout for a 5%
                    discount.
                  </i>
                </CardDescription>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <Button
                nativeButton={false}
                render={
                  <a
                    href="https://cloud-iam.com/?mtm_campaign=keycloakify-deal&mtm_source=keycloakify-web-site"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Check them out
              </Button>
            </CardFooter>
          </Card>
          */}
        </div>
      </Reveal>
    </section>
  );
}
