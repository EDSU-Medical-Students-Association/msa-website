"use client";
// @ts-ignore
import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect, useRef, ElementRef } from "react";
import { cn } from "~/lib/utils";

interface ScrollProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const Scroll = ({ children, className }: ScrollProps) => {
  const container = useRef<ElementRef<"div">>(null);
  useEffect(() => {
    if (typeof window !== "undefined" && container.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: container.current,
        smooth: true,
      });

      return () => {
        locomotiveScroll.destroy();
      };
    }
  }, []);
  return (
    <div ref={container} data-scroll-container className={cn("", className)}>
      {children}
    </div>
  );
};
