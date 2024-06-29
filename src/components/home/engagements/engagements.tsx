// "use client";

import { useRef, ElementRef } from "react";

import { crismonPro } from "~/assets/fonts/fonts";

import { Container } from "~/components/layouts/base/container";

import { cn } from "~/lib/utils";

import { Engagement } from "./engagement";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// gsap.registerPlugin(useGSAP, ScrollTrigger);

export interface Info {
  category: "Events" | "News";
  month:
    | "January"
    | "February"
    | "March"
    | "April"
    | "May"
    | "June"
    | "July"
    | "August"
    | "September"
    | "October"
    | "November"
    | "December";
  href: string;
  title: string;
  src: string;
  alt: string;
}

import { Button } from "../../ui/button";

import Link from "next/link";

const information: Info[] = [
  {
    category: "Events",
    href: "/",
    title: "NIMSA Games 101 for Medical Students Associations",
    month: "May",
    src: "/info/info_one.png",
    alt: "Students actively participating in a volley ball tournaments",
  },
  {
    category: "News",
    href: "/",
    title: "NIMSA Games Registration Deadline | April 2024",
    month: "April",
    src: "/info/info_two.png",
    alt: "Student questioning a teacher",
  },
  {
    category: "News",
    title: "EDSU Students Week",
    href: "/",
    month: "May",
    src: "/info/info_three.png",
    alt: "Students excited about the student week activities",
  },
];

export const Engagements = () => {
  // const container = useRef<ElementRef<"section">>(null);

  // // Animation is bugged: Fix the starting Trigger of the animation
  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline();
  //     tl.from(".card", {
  //       y: 100,
  //       opacity: 0,
  //       duration: 0.6,
  //       ease: "power2.out",
  //       stagger: 0.2,
  //       scrollTrigger: ".card",
  //     })
  //       .from(".anim-width-line", {
  //         scrollTrigger: ".anim-width-line",
  //         width: "0%",
  //         duration: 2,
  //         ease: "power3.out",
  //       })
  //       .from(".anim-pos-image", {
  //         scrollTrigger: ".anim-pos-image",
  //         x: -200,
  //         duration: 0.7,
  //         ease: "power3.out",
  //       })
  //       .from(".anim-pos-details", {
  //         scrollTrigger: ".anim-pos-details",
  //         x: 200,
  //         opacity: 0,
  //         duration: 0.5,
  //         ease: "power3.out",
  //         stagger: 0.1,
  //       });
  //   },
  //   { scope: container },
  // );

  return (
    <section className=" overflow-hidden bg-neutral-200 py-16">
      <Container>
        <div className="grid gap-3 pb-6 md:grid-cols-2">
          <div className="">
            <h3
              className={cn(
                crismonPro.variable,
                "font-serif text-2xl font-semibold",
              )}
            >
              Stay Informed and Engaged
            </h3>
          </div>
          <div className="flex md:justify-end">
            <Button
              variant={"secondary"}
              disabled
              asChild
              className="border border-neutral-950 bg-neutral-200"
            >
              <p>View all news & events</p>
            </Button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {information.map((info, index) => (
              <Engagement
                category={info.category}
                month={info.month}
                key={index}
                src={info.src}
                alt={info.alt}
                title={info.title}
                href={info.href}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
