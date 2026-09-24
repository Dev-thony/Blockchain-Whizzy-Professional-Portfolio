import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  onFinish: () => void;
};

export function LoadingScreen({ onFinish }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);

      setTimeout(onFinish, 700);
    }, 2800);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-999 flex items-center justify-center bg-[#090909]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-full px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1 className="font-heading text-center text-[13vw] leading-none tracking-[-0.08em] text-white">
                DAVID
              </h1>

              <h1 className="font-heading text-center text-[13vw] leading-none tracking-[-0.08em] text-neutral-700">
                ANTHONY
              </h1>
            </motion.div>

            <motion.p
              className="mt-6 text-center text-xs uppercase tracking-[0.45em] text-neutral-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Frontend Engineer · Product Builder
            </motion.p>

            {/* Loading Line */}
            <div className="mx-auto mt-16 h-px w-full max-w-xl bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  delay: 1.1,
                  duration: 1.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
