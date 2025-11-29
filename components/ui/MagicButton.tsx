"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
}

/**
 * MagicButton - A button with an animated gradient border effect
 * Features a spinning conic gradient border for that premium Aceternity UI look
 */
const MagicButton = ({
  title,
  icon,
  position = "right",
  handleClick,
  otherClasses,
}: MagicButtonProps) => {
  return (
    <button
      className={cn(
        "relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10",
        otherClasses
      )}
      onClick={handleClick}
    >
      {/* Animated gradient border */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      
      {/* Button content */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
