import { cn } from "#lib/utils";

/** Small monospace label that sits above a section heading. */
export function Eyebrow(props: React.ComponentProps<"span">) {
  const { className, ...rest } = props;

  return (
    <span
      className={cn(
        "font-mono text-xs leading-none font-medium tracking-widest text-muted-foreground uppercase",
        className,
      )}
      {...rest}
    />
  );
}
