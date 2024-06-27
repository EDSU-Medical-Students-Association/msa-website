"use client";
import Link from "next/link";
import { NavLogo } from "~/components/layouts/nav/nav-logo";
import { NavWordMark } from "~/components/layouts/nav/nav-word-mark";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

import { ElementRef, useRef, useState } from "react";

const NavBar = () => {
  const [show, setShow] = useState<boolean>(false);
  const nav = useRef<ElementRef<"nav">>(null);

  useGSAP(
    () => {
      gsap.from(".anim-pos-link", {
        y: -200,
        duration: 0.7,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.1,
      });
      gsap.from(".anim-pos-section", {
        y: -100,
        duration: 1,
        opacity: 0,
        ease: "power3.out",
      });
    },
    { scope: nav },
  );
  return (
    <nav className="sticky top-0 z-50 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex items-center gap-2">
              <NavLogo />
              <NavWordMark />
            </div>
          </div>
          {/* Navigation links updated for Next.js, aligned to the right and smaller text size */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            <Link href="/" legacyBehavior>
              <a className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                Home
              </a>
            </Link>
            <Link href="/payments" legacyBehavior>
              <a className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                Payment
              </a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                About
              </a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                Contact Us
              </a>
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu button */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
