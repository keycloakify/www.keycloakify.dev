import { AngularIcon, GithubIcon, ReactIcon, SvelteIcon } from "#components/brand-icons";
import { CopyButton } from "#components/copy-button";
import { ExternalLink } from "#components/external-link";
import { Eyebrow } from "#components/eyebrow";
import { Reveal } from "#components/reveal";
import { Button } from "#components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#components/ui/tabs";
import { DOCUMENTATION_URL } from "#constants";

const frameworks = [
  {
    id: "react",
    label: "React",
    Icon: ReactIcon,
    library: { name: "keycloakify", href: "https://github.com/keycloakify/keycloakify" },
    cloneCommand: "git clone https://github.com/keycloakify/keycloakify-starter",
    note: "The most complete integration, and the only one that can customize the Admin Console.",
  },
  {
    id: "angular",
    label: "Angular",
    Icon: AngularIcon,
    library: {
      name: "keycloakify-angular",
      href: "https://github.com/keycloakify/keycloakify-angular",
    },
    cloneCommand:
      "git clone https://github.com/keycloakify/keycloakify-starter-angular-vite keycloakify-starter",
    note: "Fully supported for login and account themes. The theme lives in a standalone project or a monorepo subproject.",
  },
  {
    id: "svelte",
    label: "Svelte",
    Icon: SvelteIcon,
    library: {
      name: "keycloakify-svelte",
      href: "https://github.com/keycloakify/keycloakify-svelte",
    },
    cloneCommand:
      "git clone https://github.com/keycloakify/keycloakify-starter-svelte keycloakify-starter",
    note: "Fully supported for login and account themes.",
  },
];

const nextCommands = [
  "cd keycloakify-starter",
  "npm install",
  "npx keycloakify add-story",
  "npm run storybook",
];

export function QuickStart() {
  return (
    <section className="wrapper border-t px-5 py-14 sm:px-10 sm:py-24 md:tick-left md:tick-right">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <Eyebrow>Quick start</Eyebrow>
          <h2 className="text-3xl font-medium tracking-tight text-balance sm:text-5xl">
            Pick your framework
          </h2>
          <p className="max-w-md text-balance text-muted-foreground">
            Clone a starter and preview the login pages in Storybook. For CSS-only customizations,
            any of the three works.
          </p>
        </div>

        <Tabs defaultValue="react" className="w-full gap-4">
          <TabsList className="self-center">
            {frameworks.map(({ id, label, Icon }) => (
              <TabsTrigger key={id} value={id} className="px-4">
                <Icon data-icon="inline-start" />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
          {frameworks.map(({ id, cloneCommand, note, library }) => (
            <TabsContent key={id} value={id} className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-xl border bg-card">
                <CommandLine command={cloneCommand} />
                {nextCommands.map((command) => (
                  <CommandLine key={command} command={command} />
                ))}
              </div>
              <p className="text-center text-pretty text-muted-foreground">{note}</p>
              <a
                href={library.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 self-center font-mono text-sm text-muted-foreground transition-colors duration-200 ease-out hover:text-foreground"
              >
                <GithubIcon className="size-4" />
                keycloakify/{library.name}
              </a>
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            nativeButton={false}
            render={<a href={DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer" />}
            className="h-10 px-4"
          >
            Read the full quick start
          </Button>
          <p className="text-sm text-muted-foreground">
            Any package manager works, see the{" "}
            <ExternalLink href={DOCUMENTATION_URL}>docs</ExternalLink>.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function CommandLine(props: { command: string }) {
  const { command } = props;

  return (
    <div className="flex items-center gap-3 border-b px-4 py-2 last:border-b-0">
      <span aria-hidden="true" className="font-mono text-sm text-muted-foreground select-none">
        $
      </span>
      <code className="min-w-0 flex-1 overflow-x-auto font-mono text-sm whitespace-nowrap scrollbar-none">
        {command}
      </code>
      <CopyButton text={command} />
    </div>
  );
}
