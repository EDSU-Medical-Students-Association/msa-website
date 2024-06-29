"use client";

import { ElementRef, useRef } from "react";

import Link from "next/link";
import Image from "next/image";

import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

import { Container } from "../base/container";
import { crismonPro } from "~/assets/fonts/fonts";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

type HeroProps = {
  theme: string;
  src: string;
  alt: string;
  title: string;
  description: string;
} & (
  | {
      button: true;
      buttonText: string;
      href: string;
    }
  | {
      button: false;
    }
);

export const Hero = (props: HeroProps) => {
  const container = useRef<ElementRef<"section">>(null);

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
    },
    { scope: container },
  );
  return (
    <header className="h-svh w-full text-center md:text-left">
      <Container className="grid grid-cols-1 md:grid-cols-2">
        <section
          ref={container}
          style={{ backgroundColor: `${props.theme}` }}
          className={cn(
            `bg-[${props.theme}]`,
            "grid items-end px-6 py-20 md:px-12",
          )}
        >
          <div className="flex flex-col gap-3">
            <hgroup className="flex flex-col gap-3 px-4 md:px-0 items-center md:items-start">
              <h1
                className={cn(
                  crismonPro.variable,
                  "anim-pos-title w-full font-serif text-4xl md:w-9/12 md:text-6xl 2xl:text-7xl",
                )}
              >
                {props.title}
              </h1>
              <h2 className="anim-pos-subtitle w-full sm:text-sm md:w-2/3">
                {props.description}
              </h2>
            </hgroup>
            {props.button === true ? (
              <div className="anim-pos-button">
                <Button variant={"default"} asChild>
                  <Link href={props.href}>{props.buttonText}</Link>
                </Button>
              </div>
            ) : null}
          </div>
        </section>
        <section className="relative w-full">
          <Image
            priority
            fill
            src={props.src}
            alt={props.alt}
            style={{ objectFit: "cover" }}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </section>
      </Container>
    </header>
  );
};
