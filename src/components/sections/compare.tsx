import { ChevronsLeftRightIcon } from "lucide-react";
import { animate, useInView, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import * as m from "motion/react-m";
import { useEffect, useRef } from "react";
import oldKeycloakUrl from "#assets/img/gallery/old-keycloak.png";
import signInUrl from "#assets/img/gallery/sign-in.png";
import { Eyebrow } from "#components/eyebrow";
import { Reveal } from "#components/reveal";

const frame = { width: 1991, height: 1271 };

/**
 * Stock Keycloak and the same page themed with Keycloakify, stacked in one
 * frame with a draggable divider.
 *
 * The whole surface is a native `<input type="range">` laid invisibly over the
 * images, so dragging, clicking and arrow keys come for free and the divider
 * just follows its value. On first view the divider sweeps once to show it can
 * move; that demo skips for reduced motion and stops the moment the user
 * touches the slider. Everything runs through motion values, so neither the
 * demo nor dragging re-renders the component.
 */
export function Compare() {
  const frameRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasInteracted = useRef(false);

  const position = useMotionValue(50);
  const clipPath = useTransform(position, (p) => `inset(0 ${100 - p}% 0 0)`);
  const left = useTransform(position, (p) => `${p}%`);

  const isInView = useInView(frameRef, { once: true, amount: 0.35 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || hasInteracted.current || prefersReducedMotion) return;
    const demo = animate(position, [50, 30, 70, 50], {
      delay: 0.35,
      duration: 3,
      ease: "easeInOut",
      // Keep the (uncontrolled) input in step so grabbing it mid-demo
      // continues from where the divider is, not from where it started
      onUpdate: (value) => {
        if (inputRef.current) inputRef.current.value = String(value);
      },
    });
    return () => demo.stop();
  }, [isInView, prefersReducedMotion, position]);

  // Any interaction ends the demo for good; the input takes over from here
  const stopDemo = () => {
    hasInteracted.current = true;
    position.stop();
  };

  return (
    <section className="wrapper border-t md:tick-left md:tick-right">
      <Reveal className="flex flex-col items-center gap-3 px-5 py-14 text-center sm:px-10 sm:py-20">
        <Eyebrow>Before & after</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-5xl">
          The same login page, made yours
        </h2>
        <p className="max-w-md text-balance text-muted-foreground">
          Drag the divider between what Keycloak serves out of the box and the same page themed with
          Keycloakify.
        </p>
      </Reveal>
      <div className="border-t p-5 sm:p-10">
        <div
          ref={frameRef}
          className="group relative mx-auto max-w-6xl overflow-hidden rounded-lg border bg-card select-none"
        >
          <img
            src={signInUrl}
            alt="The same login page themed with Keycloakify"
            width={frame.width}
            height={frame.height}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="h-auto w-full"
          />

          {/* The stock capture sits on top, clipped to the left of the divider */}
          <m.div aria-hidden="true" className="absolute inset-0" style={{ clipPath }}>
            <img
              src={oldKeycloakUrl}
              alt=""
              width={frame.width}
              height={frame.height}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="h-auto w-full"
            />
          </m.div>

          <m.div
            aria-hidden="true"
            className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-foreground/60"
            style={{ left }}
          >
            <div className="absolute top-1/2 left-1/2 flex size-9 -translate-1/2 items-center justify-center rounded-full border bg-background shadow-md transition-transform duration-200 ease-out group-active:scale-110">
              <ChevronsLeftRightIcon className="size-4 text-muted-foreground" />
            </div>
          </m.div>

          <div className="pointer-events-none absolute top-3 left-3">
            <Eyebrow className="rounded-md border bg-background/85 px-2 py-1.5 backdrop-blur">
              Stock Keycloak
            </Eyebrow>
          </div>
          <div className="pointer-events-none absolute top-3 right-3">
            <Eyebrow className="rounded-md border bg-background/85 px-2 py-1.5 backdrop-blur">
              With Keycloakify
            </Eyebrow>
          </div>

          <input
            ref={inputRef}
            type="range"
            min={0}
            max={100}
            step={0.1}
            defaultValue={50}
            onPointerDown={stopDemo}
            onKeyDown={stopDemo}
            onChange={(event) => {
              stopDemo();
              position.set(Number(event.target.value));
            }}
            aria-label="Reveal more of the stock page or the themed page"
            className="absolute inset-0 size-full cursor-ew-resize touch-pan-y appearance-none bg-transparent opacity-0"
          />
        </div>
        <p className="pt-4 text-center font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Drag to compare
        </p>
      </div>
    </section>
  );
}
