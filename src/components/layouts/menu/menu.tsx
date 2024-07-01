"use client";

import { ElementRef, useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

import { NavLink } from "~/components/layouts/nav/nav-link";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

interface MenuProps {
  show: boolean;
  toggleShow: () => void;
}
export const Menu = ({ show, toggleShow }: MenuProps) => {
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
          <li className="item flex gap-3" onClick={toggleShow}>
            <span className="text-xs">[01]</span>
            <NavLink href="/" text="Home" />
          </li>
          <li className="item flex gap-3" onClick={toggleShow}>
            <span className="text-xs">[02]</span>
            <NavLink href="/dashboard" text="Dashboard" />
          </li>
          <li className="item flex gap-3" onClick={toggleShow}>
            <span className="text-xs">[03]</span>
            <NavLink href="/about" text="About" />
          </li>
          <li className="item flex gap-3" onClick={toggleShow}>
            <span className="text-xs">[04]</span>
            <NavLink href="/contact" text="Contact" />
          </li>
          <li className="item flex gap-3" onClick={toggleShow}>
            <span className="text-xs">[05]</span>
            <NavLink href="/sign-in" text="Sign In" />
          </li>
          <li className="item flex gap-3" onClick={toggleShow}>
            <span className="text-xs">[06]</span>
            <NavLink href="/sign-up" text="Sign Up" />
          </li>
          <li className="item flex gap-3" onClick={toggleShow}>
            <span className="text-xs">[07]</span>
            <NavLink href="/" text="Log out" />
          </li>
        </ul>
      </div>
    </div>
  );
};
