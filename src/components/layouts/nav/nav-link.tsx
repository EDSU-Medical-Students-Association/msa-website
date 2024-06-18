"use client";

import Link from "next/link";
import { ElementRef, useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

interface NavLinkProps {
  href: string;
  text: string;
}

export const NavLink = ({ href, text }: NavLinkProps) => {
  const childOne = useRef<ElementRef<"div">>(null);
  const childTwo = useRef<ElementRef<"div">>(null);

  const [isHovered, setIsHovered] = useState<boolean>(false);

  useGSAP(
    () => {
      if (isHovered) {
        gsap.to(".letter", {
          rotationX: 90,
          y: -15,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        });
      } else {
        gsap.to(".letter", {
          rotationX: 0,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        });
      }
    },
    { scope: childOne, dependencies: [isHovered] },
  );
  useGSAP(
    () => {
      if (isHovered) {
        gsap.to(".letter", {
          rotateX: 0,
          y: -15,
          stagger: 0.1,
          ease: "power3.out",
          duration: 1,
        });
      } else {
        gsap.to(".letter", {
          rotateX: -90,
          y: 0,
          staggger: 0.1,
          duration: 2,
          ease: "power3.out",
        });
      }
    },
    {
      scope: childTwo,
      dependencies: [isHovered],
    },
  );
  return (
    <Link
      className="anim-pos-link border-3 block border-zinc-800 leading-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={href}
    >
      <div ref={childOne} className="">
        {text.split("").map((letter, index) => {
          return (
            <span
              key={index}
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "top",
              }}
              className="letter inline-block will-change-transform"
            >
              {letter}
            </span>
          );
        })}
      </div>
      <div ref={childTwo} className="">
        {text.split("").map((letter, index) => {
          return (
            <span
              key={index}
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "bottom",
                transform: "rotateX(-90deg)",
              }}
              className="letter inline-block will-change-transform"
            >
              {letter}
            </span>
          );
        })}
      </div>
    </Link>
  );
};
