import { cn } from "#lib/utils";

/** Inline link used inside body copy. */
export function ExternalLink(props: React.ComponentProps<"a">) {
  const { className, ...rest } = props;

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "font-medium text-foreground underline decoration-brand/60 underline-offset-4 transition-colors duration-200 ease-out hover:decoration-brand",
        className,
      )}
      {...rest}
    />
  );
}
