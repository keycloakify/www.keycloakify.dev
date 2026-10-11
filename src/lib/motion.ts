import type { Variants } from "motion/react";

/** Fade and rise, shared by everything that reveals on scroll. */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

/** Put on a parent so its revealing children come in one after the other. */
export const staggerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const revealViewport = { once: true, amount: 0.15 } as const;
