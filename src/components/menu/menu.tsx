"use client";

import { ElementRef, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

import { NavLink } from "~/components/nav/nav-link";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

interface MenuProps {
  show: boolean;
}
export const Menu = ({ show }: MenuProps) => {
  const container = useRef<ElementRef<"div">>(null);

  useGSAP(
    () => {
      if (show) {
        gsap.to(container.current, { left: "0%", ease: "power3.inOut" });
        gsap.from(".item", { y: 100, opacity: 0, stagger: 0.1 });
      } else {
        gsap.to(container.current, { left: "100%", ease: "power3.inOut" });
      }
    },
    { scope: container, dependencies: [show] },
  );

  return (
    <div
      ref={container}
      className="absolute left-0 top-0 z-40 h-svh w-svw items-center bg-white px-12 py-12 text-3xl md:hidden"
    >
      <div className="h-5/6">
        <ul className="flex h-full flex-col justify-around">
          <li className="item flex gap-3">
            <span className="text-xs">[01]</span>
            <NavLink href="/" text="Home" />
          </li>
          <li className="item flex gap-3">
            <span className="text-xs">[02]</span>
            <NavLink href="/" text="Payments" />
          </li>
          <li className="item flex gap-3">
            <span className="text-xs">[03]</span>
            <NavLink href="/" text="Info" />
          </li>
          <li className="item flex gap-3">
            <span className="text-xs">[04]</span>
            <NavLink href="/" text="About" />
          </li>
          <li className="item flex gap-3">
            <span className="text-xs">[05]</span>
            <NavLink href="/" text="Admissions" />
          </li>
        </ul>
      </div>
      <div className="flex h-1/6 items-end justify-end text-base">
        <Link href="/" className="flex justify-center gap-1">
          <span>Instagram</span>
          <span className="pt-1.5">
            <ArrowTopRightIcon />
          </span>
        </Link>
      </div>
    </div>
  );
};
