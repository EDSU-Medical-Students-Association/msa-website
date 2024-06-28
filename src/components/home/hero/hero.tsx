"use client";

import { ElementRef, useRef } from "react";

import Link from "next/link";
import Image from "next/image";

import { crismonPro } from "~/fonts";

import { Button } from "~/components/ui/button";

import { Container } from "~/components/layouts/base/container";
import { Goto } from "~/components/ui/goto";

import { cn } from "~/lib/utils";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import games_picture from "../../../../public/games_two.jpg";

export const Hero = () => {
  const container = useRef<ElementRef<"header">>(null);

  useGSAP(
    () => {
      gsap.from(".anim-pos-title", {
        scrollTrigger: ".anim-pos-title",
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".anim-pos-subtitle", {
        scrollTrigger: ".anim-pos-subtitle",
        y: -50,
        opacity: 0,
        duration: 0.7,
        ease: "power1.in",
      });
      gsap.from(".anim-pos-image", {
        scrollTrigger: ".anim-pos-image",
        x: 100,
        opacity: 0.5,
        duration: 2,
        ease: "power3.out",
      });
      gsap.from(".anim-pos-info", {
        scrollTrigger: ".anim-pos-info",
        y: 100,
        opacity: 0,
        duration: 2,
        ease: "power1.inOut",
      });
    },
    { scope: container },
  );

  return (
    <header
      ref={container}
      className="grid w-full items-center text-center md:h-svh md:text-left"
    >
      <Container className="grid gap-32 py-32 md:h-4/6 md:grid-cols-2 md:gap-0 md:py-0 lg:h-5/6 2xl:h-[85svh]">
        <div className="grid items-center">
          <div className="grid h-fit gap-6">
            <div>
              <hgroup className="flex flex-col gap-3 px-6 md:px-0">
                <h1
                  data-scroll
                  data-sroll-speed={"0.3"}
                  className={cn(
                    crismonPro.variable,
                    "anim-pos-title w-full font-serif text-5xl md:w-9/12 2xl:text-6xl",
                  )}
                >
                  Fostering Excellence in Medical Education
                </h1>
                <h2
                  data-scroll
                  data-scroll-speed={"0.01"}
                  className="anim-pos-subtitle w-full sm:text-sm md:w-2/3"
                >
                  Welcome to EDSU medical students association! Get ready for
                  another year of learning and growing together. We&apos;re
                  excited to have you here!
                </h2>
              </hgroup>
            </div>
            <div className="flex w-full justify-center gap-3 md:justify-start">
              <Button asChild size={"lg"}>
                <Link href={"/"}>About School</Link>
              </Button>
              <Button
                asChild
                size={"lg"}
                variant={"secondary"}
                className=" border border-neutral-950 bg-white"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>

        <div className=" grid overflow-x-hidden">
          <div
            data-scroll
            data-scroll-speed={"0.3"}
            className="anim-pos-image border-1 relative h-[75vh] w-11/12 self-center justify-self-center rounded-[9px] border-blue-400 bg-blue-200 md:h-full md:justify-self-end"
          >
            <Image
              priority
              fill
              src={games_picture}
              placeholder="blur"
              alt="A student Basketballer at the NUGA Games"
              style={{ objectFit: "cover" }}
              className="rounded-[9px]"
            />
          </div>
          <div
            data-scroll
            data-scroll-speed={"0.6"}
            className="anim-pos-info absolute top-full z-10 w-60 translate-x-9 justify-self-center rounded-[6px] border border-green-500 bg-[#C3EFC8] p-4 text-left md:top-3/4 md:w-80 md:justify-self-start lg:w-96"
          >
            <div>
              <p>May</p>
            </div>
            <div className="py-2">
              <h3
                className={cn(
                  crismonPro.variable,
                  "font-serif text-xl font-semibold",
                )}
              >
                NIMSA Games 101 for Medical Students&apos; Association
              </h3>
            </div>
            <div>
              <Goto href="/" arrowDirection="straight">
                Discover Events
              </Goto>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
