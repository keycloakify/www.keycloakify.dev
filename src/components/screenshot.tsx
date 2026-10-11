import { cn } from "#lib/utils";
import { Dialog } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";

/** Framed, lazy-loaded screenshot. Click it to view it full size. */
export function Screenshot(props: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  const { src, alt, width, height, className } = props;

  return (
    <Dialog.Root>
      <Dialog.Trigger
        aria-label={`Enlarge screenshot: ${alt}`}
        className={cn(
          "block w-full cursor-zoom-in overflow-hidden rounded-lg border bg-card outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
          className,
        )}
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className="h-auto w-full"
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm duration-200 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
        <Dialog.Popup className="fixed inset-0 z-50 outline-none duration-200 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95">
          <Dialog.Title className="sr-only">{alt}</Dialog.Title>
          {/* The whole overlay closes the dialog, not just the image */}
          <Dialog.Close
            aria-label="Close the enlarged screenshot"
            className="flex size-full cursor-zoom-out items-center justify-center p-4 outline-none sm:p-10"
          >
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="h-auto max-h-full w-auto max-w-full rounded-lg border bg-card object-contain shadow-2xl"
            />
            <XIcon aria-hidden="true" className="absolute top-4 right-4 size-6 text-white/80" />
          </Dialog.Close>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
