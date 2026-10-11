import { useState } from "react";
import { ArrowUpIcon } from "lucide-react";
import { AnimatePresence, useMotionValueEvent, useScroll } from "motion/react";
import * as m from "motion/react-m";
import { Button } from "#components/ui/button";

export function ScrollToTop() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > window.innerHeight);
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          className="fixed right-5 bottom-5"
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 8 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        >
          <Button
            variant="outline"
            size="icon-lg"
            onClick={() => window.scrollTo({ top: 0 })}
            className="rounded-full shadow-md"
          >
            <ArrowUpIcon />
            <span className="sr-only">Back to top</span>
          </Button>
        </m.div>
      )}
    </AnimatePresence>
  );
}
