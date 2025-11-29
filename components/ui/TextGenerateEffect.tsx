"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * TextGenerateEffect - Animated text reveal with staggered word animation
 * Each word fades in sequentially for a professional entrance effect
 */
export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const wordsArray = words.split(" ");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const renderWords = () => {
    return (
      <motion.div>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              initial={{ opacity: 0, filter: filter ? "blur(10px)" : "none" }}
              animate={isMounted ? { opacity: 1, filter: filter ? "blur(0px)" : "none" } : {}}
              transition={{
                duration: duration,
                delay: idx * 0.1,
              }}
              className="dark:text-white text-black"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
