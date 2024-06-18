"use client";

import { ElementRef, useRef } from "react";

import { Container } from "~/components/layouts/base/container";
import { crismonPro } from "~/fonts";

import { cn } from "~/lib/utils";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Banner = () => {
  const container = useRef<ElementRef<"section">>(null);

  useGSAP(
    () => {
      gsap.from(".anim-pos-quote", {
        scrollTrigger: ".anim-pos-quote",
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".anim-width-line", {
        scrollTrigger: ".anim-width-line",
        width: "0%",
        duration: 2,
        ease: "power3.out",
      });
      gsap.from(".anim-pos-cite", {
        scrollTrigger: ".anim-pos-cite",
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  return (
    <Container>
      <section ref={container} className="bg-[#E2D4F4] px-6 py-12">
        <blockquote className="flex w-full flex-col gap-3">
          <div className="anim-pos-quote">
            <h3 className={cn(crismonPro.variable, "font-serif text-4xl")}>
              <q>Fostering Excellence in Medical Education</q>
            </h3>
          </div>
          <div className="anim-width-line block w-full border-b border-solid border-black"></div>
          <div className="anim-pos-cite">
            <p>
              <cite>Our motto at EDSUMSA</cite>
            </p>
          </div>
        </blockquote>
      </section>
    </Container>
  );
};
