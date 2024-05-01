import Link from "next/link";
import React from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "~/lib/utils";

interface LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  arrowDirection?: "straight" | "slant";
}

export const Goto = ({
  children,
  href,
  className,
  arrowDirection,
}: LinkProps) => {
  return (
    <Link
      href={href}
      className={cn("group flex items-center gap-2", className)}
    >
      <span className="font-bold">{children}</span>
      <span
        className={`${arrowDirection === "straight" || arrowDirection === undefined ? "" : "-rotate-45"} rounded-full border border-neutral-950 p-1 transition-transform ease-in-out group-hover:translate-x-1`}
      >
        <ArrowRightIcon />
      </span>
    </Link>
  );
};
