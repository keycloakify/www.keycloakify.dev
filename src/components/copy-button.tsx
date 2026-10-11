import { Button } from "#components/ui/button";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function CopyButton(props: { text: string; className?: string }) {
  const { text, className } = props;

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) {
      return;
    }

    const timer = setTimeout(() => setIsCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [isCopied]);

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      className={className}
      onClick={() => {
        navigator.clipboard
          .writeText(text)
          .then(() => setIsCopied(true))
          // Clipboard access can be denied, the command stays selectable.
          .catch(() => {});
      }}
    >
      {isCopied ? <CheckIcon className="text-green-500" /> : <CopyIcon />}
      <span className="sr-only">{isCopied ? "Copied" : "Copy to clipboard"}</span>
    </Button>
  );
}
