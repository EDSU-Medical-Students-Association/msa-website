import React from "react";
import { cn } from "~/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={cn(
        "h-full w-full max-w-[1536px] px-4 py-2 text-xs sm:text-base md:px-7.5 2xl:mx-auto 2xl:text-lg",
        className,
      )}
    >
      {children}
    </div>
  );
};
