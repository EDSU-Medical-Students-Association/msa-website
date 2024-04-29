"use client";
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
    const locomotiveScroll = new LocomotiveScroll({
      el: container?.current,
      smooth: true,
    });
  }, []);
  return (
    <div
      ref={container}
      data-scroll-container
      className={cn("h-[500svh]", className)}
    >
      {children}
    </div>
  );
};
