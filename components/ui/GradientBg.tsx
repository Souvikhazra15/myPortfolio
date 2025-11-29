"use client";

import { cn } from "@/lib/utils";
import React from "react";

/**
 * BackgroundGradientAnimation - Animated gradient background
 * Creates a smooth, flowing gradient effect for special grid items
 */
export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = React.useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = React.useState(false);
  const [curX, setCurX] = React.useState(0);
  const [curY, setCurY] = React.useState(0);
  const [tgX, setTgX] = React.useState(0);
  const [tgY, setTgY] = React.useState(0);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (!isMounted) return;
    
    if (interactiveRef.current) {
      const handleMouseMove = (event: MouseEvent) => {
        if (interactiveRef.current) {
          const rect = interactiveRef.current.getBoundingClientRect();
          setTgX(event.clientX - rect.left);
          setTgY(event.clientY - rect.top);
        }
      };

      if (interactive) {
        interactiveRef.current.addEventListener("mousemove", handleMouseMove);
      }

      return () => {
        if (interactiveRef.current) {
          interactiveRef.current.removeEventListener(
            "mousemove",
            handleMouseMove
          );
        }
      };
    }
  }, [interactive, isMounted]);

  React.useEffect(() => {
    if (!isMounted) return;
    
    const animate = () => {
      setCurX((prev) => prev + (tgX - prev) / 20);
      setCurY((prev) => prev + (tgY - prev) / 20);
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [tgX, tgY, isMounted]);

  return (
    <div
      className={cn(
        "h-full w-full relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
      style={
        {
          "--gradient-background-start": gradientBackgroundStart,
          "--gradient-background-end": gradientBackgroundEnd,
        } as React.CSSProperties
      }
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("", className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          interactive ? "opacity-70" : "opacity-60"
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--first-color),_0.8)_0,_rgba(var(--first-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`
          )}
          style={
            {
              "--first-color": firstColor,
              "--size": size,
              "--blending-value": blendingValue,
            } as React.CSSProperties
          }
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-100`
          )}
          style={
            {
              "--second-color": secondColor,
              "--size": size,
              "--blending-value": blendingValue,
            } as React.CSSProperties
          }
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-100`
          )}
          style={
            {
              "--third-color": thirdColor,
              "--size": size,
              "--blending-value": blendingValue,
            } as React.CSSProperties
          }
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-70`
          )}
          style={
            {
              "--fourth-color": fourthColor,
              "--size": size,
              "--blending-value": blendingValue,
            } as React.CSSProperties
          }
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            `animate-fifth`,
            `opacity-100`
          )}
          style={
            {
              "--fifth-color": fifthColor,
              "--size": size,
              "--blending-value": blendingValue,
            } as React.CSSProperties
          }
        ></div>

        {interactive && (
          <div
            ref={interactiveRef}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
              `opacity-70`
            )}
            style={
              {
                "--pointer-color": pointerColor,
                "--blending-value": blendingValue,
                transform: `translate(${curX}px, ${curY}px)`,
              } as React.CSSProperties
            }
          ></div>
        )}
      </div>
    </div>
  );
};

export default BackgroundGradientAnimation;
