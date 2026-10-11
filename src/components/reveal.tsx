import type { HTMLMotionProps } from "motion/react";
import * as m from "motion/react-m";
import { revealVariants, revealViewport } from "#lib/motion";

/** Fades its children in the first time they scroll into view. */
export function Reveal(props: HTMLMotionProps<"div">) {
  return (
    <m.div
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      {...props}
    />
  );
}
