import React from "react";
import { cn } from "~/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <section
      className={cn(
        "h-full w-full max-w-[1536px] px-2 py-2 text-3xs sm:text-xs md:px-7.5 2xl:mx-auto 2xl:text-lg",
        className,
      )}
    >
      {children}
    </section>
  );
};
