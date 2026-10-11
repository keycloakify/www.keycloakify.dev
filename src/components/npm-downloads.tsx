import { useEffect, useState } from "react";
import { NpmIcon } from "#components/brand-icons";
import { Button } from "#components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "#components/ui/tooltip";
import { NPM_PACKAGE_URL } from "#constants";

const NPM_API_DOWNLOADS_URL = "https://api.npmjs.org/downloads/point/last-month/keycloakify";

const formatter = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 0,
});

export function NpmDownloads(props: { className?: string }) {
  const { className } = props;

  const [downloadCount, setDownloadCount] = useState<number | undefined>(undefined);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(NPM_API_DOWNLOADS_URL, { signal: abortController.signal })
      .then((response) => (response.ok ? response.json() : undefined))
      .then((data) => {
        if (typeof data?.downloads === "number") {
          setDownloadCount(data.downloads);
        }
      })
      // The count is a nice-to-have, the link works without it.
      .catch(() => {});

    return () => abortController.abort();
  }, []);

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="ghost"
            nativeButton={false}
            render={<a href={NPM_PACKAGE_URL} target="_blank" rel="noopener noreferrer" />}
            className={className}
          />
        }
      >
        <NpmIcon data-icon="inline-start" />
        <span className="sr-only">Keycloakify on npm</span>
        {downloadCount !== undefined && (
          <span className="tabular-nums">
            {formatter.format(downloadCount)}
            <span className="text-muted-foreground">/mo</span>
          </span>
        )}
      </TooltipTrigger>
      <TooltipContent side="bottom">
        {downloadCount !== undefined
          ? `${downloadCount.toLocaleString("en-US")} npm downloads in the last 30 days`
          : "Keycloakify on npm"}
      </TooltipContent>
    </Tooltip>
  );
}
