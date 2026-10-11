import { ExternalLink } from "#components/external-link";
import { Eyebrow } from "#components/eyebrow";
import { Reveal } from "#components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "#components/ui/accordion";
import { Button } from "#components/ui/button";
import { DISCORD_URL, DOCUMENTATION_URL, GITHUB_REPO_URL, STORYBOOK_URL } from "#constants";

const questions: { question: string; answer: React.ReactNode }[] = [
  {
    question: "Do I have to use React?",
    answer: (
      <>
        No. Keycloakify supports React, Angular and Svelte, and CSS-level customizations work the
        same with any of them. React has the most complete integration and is the only one that can
        customize the Admin Console.
      </>
    ),
  },
  {
    question: "Which Keycloak versions are supported?",
    answer: (
      <>
        Themes generated with Keycloakify are backward compatible with Keycloak versions as far back
        as 11, and are designed to remain compatible with future Keycloak updates.
      </>
    ),
  },
  {
    question: "Which parts of Keycloak can I customize?",
    answer: (
      <>
        The login theme (login and registration pages), the account theme, the email theme and the
        admin theme. You can preview the built-in UIs in the{" "}
        <ExternalLink href={STORYBOOK_URL}>Storybook</ExternalLink>.
      </>
    ),
  },
  {
    question: "How do I deploy my theme?",
    answer: (
      <>
        Keycloakify bundles your theme into a JAR file, ready to import directly into Keycloak. See{" "}
        <ExternalLink href={`${DOCUMENTATION_URL}/deploying-your-theme`}>
          Deploying your theme
        </ExternalLink>
        .
      </>
    ),
  },
  {
    question: "Can I test my theme without running Keycloak?",
    answer: (
      <>
        Yes. You can develop{" "}
        <ExternalLink href={`${DOCUMENTATION_URL}/testing-your-theme/outside-of-keycloak`}>
          in Storybook
        </ExternalLink>
        , or run your theme{" "}
        <ExternalLink href={`${DOCUMENTATION_URL}/testing-your-theme/inside-of-keycloak`}>
          in a local Keycloak container
        </ExternalLink>{" "}
        with hot reloading.
      </>
    ),
  },
  {
    question: "Can I add Keycloakify to an existing project?",
    answer: (
      <>
        Yes, it can live inside an existing Vite app or as a subproject of your monorepo. With
        Angular the theme has to be a standalone project or a monorepo subproject. See{" "}
        <ExternalLink href={`${DOCUMENTATION_URL}/integration-keycloakify-in-your-codebase`}>
          Integrating Keycloakify in your codebase
        </ExternalLink>
        .
      </>
    ),
  },
  {
    question: "Is Keycloakify free?",
    answer: (
      <>
        Yes. Keycloakify is open source and released under the MIT license. The code is on{" "}
        <ExternalLink href={GITHUB_REPO_URL}>GitHub</ExternalLink>.
      </>
    ),
  },
];

export function Faq() {
  return (
    <section className="wrapper border-t px-5 py-14 sm:px-10 sm:py-24 md:tick-left md:tick-right">
      <Reveal className="mx-auto flex max-w-3xl flex-col gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="text-3xl font-medium tracking-tight text-balance sm:text-5xl">
            Questions, answered
          </h2>
        </div>

        <Accordion>
          {questions.map(({ question, answer }) => (
            <AccordionItem key={question} value={question} className="py-1">
              <AccordionTrigger className="text-base">{question}</AccordionTrigger>
              <AccordionContent className="text-base text-pretty text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <p className="text-muted-foreground">Still have questions?</p>
          <Button
            variant="outline"
            nativeButton={false}
            render={<a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" />}
          >
            Ask on Discord
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
