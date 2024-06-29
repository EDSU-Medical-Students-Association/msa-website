"use client";

import Link from "next/link";

import { NavLink } from "./nav-link";
import { NavLogo } from "./nav-logo";
import { NavWordMark } from "./nav-word-mark";

import { Button } from "~/components/ui/button";

import { Menu } from "~/components/layouts/menu/menu";
import { ElementRef, useEffect, useRef, useState } from "react";
import { Container } from "../base/container";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const NavBar = () => {
  const [show, setShow] = useState<boolean>(false);
  const nav = useRef<ElementRef<"nav">>(null);

  const toggleShow = () => {
    setShow((prevState) => !prevState);
  };

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
    <nav
      ref={nav}
      className="fixed left-0 top-0 z-50 w-full bg-white shadow-sm"
    >
      <Container className="grid grid-cols-xs-nav items-center sm:grid-cols-2">
        <section className="anim-pos-section z-[60] flex h-full w-full items-center justify-self-start">
          <Link
            href={"/"}
            className="flex h-full w-full items-center gap-1 sm:gap-3"
          >
            <NavLogo />
            <NavWordMark />
          </Link>
        </section>
        <section className="hidden md:flex md:items-center md:justify-end md:gap-3 lg:gap-5">
          <ul className="h-full items-center justify-end md:flex md:gap-2 md:text-sm lg:gap-6 lg:text-base">
            <li className="anim-pos-link">
              <NavLink href="/" text="Index" />
            </li>
            <li className="anim-pos-link">
              <NavLink href="/dashboard" text="Dashboard  " />
            </li>
            {/* <li className="anim-pos-link">
              <NavLink href="/info" text="Info" />
            </li> */}
            <li className="anim-pos-link">
              <NavLink href="/about" text="About" />
            </li>
            <li className="anim-pos-link">
              <NavLink href="/contact" text="Contact" />
            </li>
            {/* <li className="anim-pos-link">
              <NavLink href="" text="Admissions" />
            </li> */}
          </ul>
          <div className="flex gap-1 md:gap-1 md:text-sm lg:gap-3 lg:text-base ">
            <Button variant={"ghost"} asChild size={"sm"} className="h-6">
              <Link className="" href={"/sign-up"}>
                Sign up
              </Link>
            </Button>
            <Button variant={"ghost"} asChild size={"sm"} className="h-6">
              <Link href={"/sign-in"}>Sign in</Link>
            </Button>
            <Button variant={"outline"} asChild size={"sm"} className="h-6">
              <Link href={""}>Log Out</Link>
            </Button>
          </div>
        </section>
        <section className="z-[60] justify-self-end md:hidden">
          <Button
            onClick={() => setShow((prev) => !prev)}
            variant={`outline`}
            className=" block rounded-full border-none bg-inherit p-0 hover:bg-inherit"
          >
            <div className="grid aspect-square w-6  place-items-center gap-1 rounded-full border border-solid border-neutral-950 p-1.5 transition-all hover:gap-3 md:w-8 md:p-2 xl:w-10">
              <div className="w-full border-b border-solid border-neutral-950"></div>
              <div className="w-full border-b border-solid border-neutral-950"></div>
            </div>
          </Button>
        </section>
        <Menu show={show} toggleShow={toggleShow} />
      </Container>
    </nav>
  );
};

export default NavBar;
