import { useEffect, useState } from "react";
import { StarIcon } from "lucide-react";
import { GithubIcon } from "#components/brand-icons";
import { Button } from "#components/ui/button";
import { GITHUB_REPO_URL } from "#constants";

const GITHUB_API_REPO_URL = GITHUB_REPO_URL.replace(
  "https://github.com/",
  "https://api.github.com/repos/",
);

const formatter = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

export function GithubStars() {
  const [starCount, setStarCount] = useState<number | undefined>(undefined);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(GITHUB_API_REPO_URL, { signal: abortController.signal })
      .then((response) => (response.ok ? response.json() : undefined))
      .then((data) => {
        if (typeof data?.stargazers_count === "number") {
          setStarCount(data.stargazers_count);
        }
      })
      // The count is a nice-to-have, the button works without it.
      .catch(() => {});

    return () => abortController.abort();
  }, []);

  return (
    <Button
      variant="outline"
      nativeButton={false}
      render={<a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" />}
    >
      <GithubIcon data-icon="inline-start" />
      <span className="sr-only">Keycloakify on GitHub</span>
      {starCount !== undefined && (
        <span className="flex items-center gap-1 text-muted-foreground max-sm:hidden">
          <StarIcon className="size-3 fill-highlight text-highlight" />
          <span className="text-foreground tabular-nums">{formatter.format(starCount)}</span>
          <span className="sr-only">stars</span>
        </span>
      )}
    </Button>
  );
}
