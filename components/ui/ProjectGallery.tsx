"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Screen = { src: string; caption: string };

const noopSubscribe = () => () => {};

/** Full-screen screenshot viewer for projects without a case-study page. */
export function ProjectGallery({
  title,
  screens,
  open,
  onClose,
}: {
  title: string;
  screens: Screen[];
  open: boolean;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  // true on the client, false during SSR — portals need `document`.
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);

  const close = useCallback(() => {
    setIndex(0);
    onClose();
  }, [onClose]);

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + screens.length) % screens.length),
    [screens.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, go]);

  if (!mounted) return null;

  const screen = screens[index];

  return createPortal(
    <AnimatePresence>
      {open && screen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screens`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex flex-col bg-black/85 backdrop-blur-sm"
          onClick={close}
        >
          <div className="flex items-center justify-between px-4 py-4 text-white/80 sm:px-8">
            <p className="text-sm">
              {title}
              <span className="ml-3 text-white/45">
                {index + 1} / {screens.length}
              </span>
            </p>
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center px-4 sm:px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              key={screen.src}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[70vh] w-full max-w-6xl"
            >
              <Image
                src={screen.src}
                alt={screen.caption}
                fill
                sizes="(max-width: 1280px) 100vw, 1150px"
                className="object-contain"
              />
            </motion.div>

            {screens.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous screen"
                  onClick={() => go(-1)}
                  className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next screen"
                  onClick={() => go(1)}
                  className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          <p className="px-6 pb-8 pt-4 text-center text-sm text-white/70">{screen.caption}</p>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
