import { useEffect, useRef, useState } from "react";
import {
  BracesIcon,
  CheckIcon,
  LayoutGridIcon,
  LogInIcon,
  MailIcon,
  PackageIcon,
  PaletteIcon,
  SendIcon,
  SettingsIcon,
  UserRoundIcon,
} from "lucide-react";
import { AnimatePresence, useInView, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import keycloakifyLogoPngUrl from "#assets/img/keycloakify-logo.png";
import {
  AngularIcon,
  AngularMaterialIcon,
  MuiIcon,
  ReactIcon,
  SassIcon,
  ShadcnIcon,
  SpartanIcon,
  SvelteIcon,
  TailwindIcon,
} from "#components/brand-icons";
import { cn } from "#lib/utils";

const SLOT_NAMES = ["Theme", "Framework", "Components", "Styling"];

type Input = { label: string; Icon: React.ComponentType<{ className?: string }> };

/**
 * Stacks that actually work together, one row per pipeline run.
 * Account and admin themes are React only, and each framework has its own component libraries.
 */
const combinations: [Input, Input, Input, Input][] = [
  [
    { label: "Login theme", Icon: LogInIcon },
    { label: "React", Icon: ReactIcon },
    { label: "shadcn/ui", Icon: ShadcnIcon },
    { label: "Tailwind CSS", Icon: TailwindIcon },
  ],
  [
    { label: "Login theme", Icon: LogInIcon },
    { label: "Angular", Icon: AngularIcon },
    { label: "Angular Material", Icon: AngularMaterialIcon },
    { label: "SCSS", Icon: SassIcon },
  ],
  [
    { label: "Account theme", Icon: UserRoundIcon },
    { label: "React", Icon: ReactIcon },
    { label: "MUI", Icon: MuiIcon },
    { label: "Emotion", Icon: PaletteIcon },
  ],
  [
    { label: "Login theme", Icon: LogInIcon },
    { label: "Svelte", Icon: SvelteIcon },
    { label: "shadcn-svelte", Icon: ShadcnIcon },
    { label: "Tailwind CSS", Icon: TailwindIcon },
  ],
  [
    { label: "Login theme", Icon: LogInIcon },
    { label: "Angular", Icon: AngularIcon },
    { label: "spartan/ui", Icon: SpartanIcon },
    { label: "Tailwind CSS", Icon: TailwindIcon },
  ],
  [
    { label: "Email theme", Icon: MailIcon },
    { label: "React", Icon: ReactIcon },
    { label: "jsx-email", Icon: SendIcon },
    { label: "Plain CSS", Icon: BracesIcon },
  ],
  [
    { label: "Admin theme", Icon: SettingsIcon },
    { label: "React", Icon: ReactIcon },
    { label: "PatternFly", Icon: LayoutGridIcon },
    { label: "Plain CSS", Icon: BracesIcon },
  ],
];

// Geometry of the drawing, in the SVG's own units. The HTML parts are placed with
// percentages of the same box, so everything scales together.
const WIDTH = 480;
const HEIGHT = 400;
const CHIP = { width: 142, height: 40 };
const SLOT_Y = [65, 155, 245, 335];
const NODE = { x: 244, y: 200, radius: 40 };
const JAR = { x: 326, width: 154, height: 108 };

// One run of the pipeline, in seconds: the inputs change, pulses travel to the mark,
// the mark builds, a pulse leaves for the JAR, the JAR lights up.
const STEP_DURATION = 4.8;
const TIMELINE = {
  inputPulse: { start: 0.5, duration: 1, stagger: 0.1 },
  build: { start: 1.45, duration: 1.15 },
  outputPulse: { start: 2.45, duration: 0.6 },
  delivered: 2.95,
};

const EASE = [0.4, 0, 0.2, 1] as const;

const inputPaths = SLOT_Y.map(
  (y) =>
    `M ${CHIP.width} ${y} C ${CHIP.width + 46} ${y}, ${NODE.x - NODE.radius - 46} ${NODE.y}, ${NODE.x - NODE.radius} ${NODE.y}`,
);
const outputPath = `M ${NODE.x + NODE.radius} ${NODE.y} L ${JAR.x} ${NODE.y}`;

function percentX(value: number) {
  return `${(value / WIDTH) * 100}%`;
}

function percentY(value: number) {
  return `${(value / HEIGHT) * 100}%`;
}

/**
 * Your stack goes in on the left, runs through Keycloakify, and comes out as a JAR.
 * Every few seconds the inputs change and a new pulse travels down the pipes.
 */
export function HeroGraphic(props: { className?: string }) {
  const { className } = props;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const shouldReduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    // No point running the pipeline while it is scrolled out of view.
    if (shouldReduceMotion || !isInView) {
      return;
    }

    const timer = setInterval(() => setStep((value) => value + 1), STEP_DURATION * 1000);

    return () => clearInterval(timer);
  }, [shouldReduceMotion, isInView]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("@container relative aspect-6/5 text-[clamp(9px,2.6cqw,14px)]", className)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_72%)] bg-size-[1.4em_1.4em]" />

      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="none"
        fill="none"
        className="absolute inset-0 size-full overflow-visible"
      >
        {[...inputPaths, outputPath].map((d) => (
          <g key={d}>
            <path d={d} className="stroke-border" strokeWidth={1.5} />
            {/* Faint dashes that keep drifting toward the JAR between two runs */}
            <path
              d={d}
              strokeWidth={1.5}
              strokeDasharray="2 10"
              strokeLinecap="round"
              className="animate-flow stroke-muted-foreground/40 motion-reduce:animate-none"
            />
          </g>
        ))}

        {/* Keyed on the step so the pulses replay each time the inputs change */}
        <g
          key={step}
          strokeLinecap="round"
          className="stroke-brand drop-shadow-[0_0_3px_var(--brand)]"
        >
          {inputPaths.map((d, index) => (
            <Pulse
              key={d}
              d={d}
              delay={TIMELINE.inputPulse.start + index * TIMELINE.inputPulse.stagger}
              duration={TIMELINE.inputPulse.duration}
            />
          ))}
          <Pulse
            d={outputPath}
            delay={TIMELINE.outputPulse.start}
            duration={TIMELINE.outputPulse.duration}
          />
        </g>
      </svg>

      {combinations[step % combinations.length].map(({ label, Icon }, index) => {
        const name = SLOT_NAMES[index];

        return (
          <div
            key={name}
            style={{
              top: percentY(SLOT_Y[index] - CHIP.height / 2),
              width: percentX(CHIP.width),
              height: percentY(CHIP.height),
            }}
            className="absolute left-0"
          >
            <span className="absolute bottom-full left-[0.3em] pb-[0.4em] font-mono text-[0.72em] leading-none tracking-widest text-muted-foreground uppercase">
              {name}
            </span>
            {/* Keyed on the label: only the inputs that change roll over, the rest stay put */}
            <AnimatePresence initial={false}>
              <m.div
                key={label}
                initial={{ opacity: 0, y: "55%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-55%" }}
                transition={{ duration: 0.45, ease: EASE }}
                className="absolute inset-0 flex items-center gap-[0.45em] rounded-lg border bg-card px-[0.6em] shadow-sm"
              >
                <Icon className="size-[1.3em] shrink-0" />
                <span className="truncate font-medium">{label}</span>
              </m.div>
            </AnimatePresence>
          </div>
        );
      })}

      <div
        style={{
          left: percentX(NODE.x - NODE.radius),
          top: percentY(NODE.y - NODE.radius),
          width: percentX(NODE.radius * 2),
        }}
        className="absolute flex aspect-square items-center justify-center rounded-full border border-brand/50 bg-card shadow-lg"
      >
        {/* An arc that sweeps around the mark while it "builds" */}
        <m.span
          key={step}
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 540, opacity: [0, 1, 1, 0] }}
          transition={{
            delay: TIMELINE.build.start,
            duration: TIMELINE.build.duration,
            ease: EASE,
          }}
          className="absolute -inset-[9%] rounded-full border-2 border-transparent border-t-brand"
        />
        <img src={keycloakifyLogoPngUrl} alt="" className="w-[64%]" />
      </div>

      <div
        style={{
          left: percentX(JAR.x),
          top: percentY(NODE.y - JAR.height / 2),
          width: percentX(JAR.width),
          height: percentY(JAR.height),
        }}
        className="absolute flex flex-col items-center justify-center gap-[0.45em] rounded-xl border border-brand/40 bg-card shadow-lg"
      >
        {/* Glow that swells once when the JAR is delivered */}
        <m.span
          key={step}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: TIMELINE.delivered, duration: 1.1, ease: "easeOut" }}
          className="absolute -inset-px rounded-[inherit] border border-brand shadow-[0_0_1.6em_var(--brand)]"
        />
        <m.span
          key={`icon-${step}`}
          initial={{ y: "0%" }}
          animate={{ y: ["0%", "-14%", "0%"] }}
          transition={{ delay: TIMELINE.delivered, duration: 0.5, ease: EASE }}
        >
          <PackageIcon className="size-[1.9em] text-brand" />
        </m.span>
        <span className="font-mono text-[0.8em] leading-none font-medium">keycloak-theme.jar</span>
        <span className="relative flex h-[1.1em] w-full items-center justify-center text-[0.8em] leading-none text-muted-foreground">
          <m.span
            key={`building-${step}`}
            initial={{ opacity: step === 0 ? 0 : 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: TIMELINE.delivered - 0.15, duration: 0.2 }}
            className="absolute"
          >
            Building…
          </m.span>
          <m.span
            key={`ready-${step}`}
            initial={{ opacity: step === 0 ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: TIMELINE.delivered, duration: 0.3 }}
            className="absolute flex items-center gap-[0.3em]"
          >
            <CheckIcon className="size-[1.1em] text-brand" />
            Ready to deploy
          </m.span>
        </span>
      </div>
    </div>
  );
}

/** A bright streak that fades in, runs once along a path, and fades out. */
function Pulse(props: { d: string; delay: number; duration: number }) {
  const { d, delay, duration } = props;

  return (
    <m.path
      d={d}
      pathLength={1}
      strokeWidth={2.5}
      strokeDasharray="0.28 1"
      initial={{ strokeDashoffset: 0.28, opacity: 0 }}
      animate={{ strokeDashoffset: -1, opacity: [0, 1, 1, 0] }}
      transition={{
        delay,
        duration,
        ease: EASE,
        opacity: { delay, duration, times: [0, 0.15, 0.8, 1] },
      }}
    />
  );
}
