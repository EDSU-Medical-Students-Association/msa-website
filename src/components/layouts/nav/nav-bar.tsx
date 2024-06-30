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
import { auth } from "~/components/firebase/firebase";
import {onAuthStateChanged, signOut} from 'firebase/auth';

const NavBar = () => {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const [show, setShow] = useState<boolean>(false);
  const nav = useRef<ElementRef<"nav">>(null);

  const toggleShow = () => {
    setShow(prevState => !prevState)
  }


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
        <section className="hidden md:flex md:items-center md:gap-6">
          <ul className="h-full items-center justify-end gap-6 md:flex">
            <li>
              <NavLink href="/" text="Index" />
            </li>
            <li>
              <NavLink href="/dashboard" text="Dashboard  " />
            </li>
            {/* <li>
              <NavLink href="/info" text="Info" />
            </li> */}
            <li>
              <NavLink href="/about" text="About" />
            </li>
            <li>
              <NavLink href="/contact" text="Contact" />
            </li>
            {/* <li>
              <NavLink href="" text="Admissions" />
            </li> */}
          </ul>
          <div className="flex gap-3 ">
            {!user ? (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/sign-in">Sign in</Link>
                </Button>
                <Button variant="ghost" className="" asChild>
                  <Link className="" href="/sign-up">
                    Sign up
                  </Link>
                </Button>

              </>
            ) : (
              <Button asChild className=" py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600" style={{marginLeft:'22rem'}} onClick={handleLogout}>
                <Link href="/">Log Out</Link>
              </Button>

            )}
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
