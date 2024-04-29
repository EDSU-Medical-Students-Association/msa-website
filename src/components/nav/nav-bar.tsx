"use client";

import Link from "next/link";

import { NavLink } from "./nav-link";
import { NavLogo } from "./nav-logo";
import { NavWordMark } from "./nav-word-mark";

import { Button } from "~/components/ui/button";

import { Menu } from "~/components/menu/menu";
import { useState } from "react";
import { Container } from "../base/container";

const NavBar = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <nav className="fixed z-50 w-full">
      <Container className="grid grid-cols-xs-nav items-center sm:grid-cols-2">
        <section className="z-[60] flex h-full w-full items-center justify-self-start">
          <Link
            href={"/"}
            className="flex h-full w-full items-center gap-1 sm:gap-2"
          >
            <NavLogo />
            <NavWordMark />
          </Link>
        </section>
        <section className="hidden md:block">
          <ul className="h-full items-center justify-end gap-2 pt-4 md:flex">
            <li>
              <NavLink href="/" text="Index" />
            </li>
            <li>
              <NavLink href="/payments" text="Payment" />
            </li>
            <li>
              <NavLink href="/info" text="Info" />
            </li>
            <li>
              <NavLink href="/about" text="About" />
            </li>
            <li>
              <NavLink href="/contact" text="Contact" />
            </li>
            <li>
              <NavLink href="" text="Admissions" />
            </li>
          </ul>
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
        <Menu show={show} />
      </Container>
    </nav>
  );
};

export default NavBar;
