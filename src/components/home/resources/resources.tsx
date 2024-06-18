"use client";

import { ElementRef, useRef } from "react";

import { crismonPro } from "~/fonts";

import { cn } from "~/lib/utils";

import { Container } from "~/components/layouts/base/container";

import { Resource } from "~/components/home/resources/resource";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Resource {
  icon: string;
  title: string;
  description: string;
  href: string;
  alt: string;
}

const resources: Resource[] = [
  {
    icon: "/icons/bus.svg",
    title: "Tranportation Options for Students on Campus",
    description:
      "The EDSU transportation board in collaboration with the cab drivers association ensures that transportation is readily available to students on campus",
    href: "/",
    alt: "Bus icon",
  },
  {
    icon: "/icons/books.svg",
    title: "Online School Library and Databases",
    description:
      "Access to academic journals, articles, and research papers is crucial for students' academic projects and assignments through our schools lms platform. ",
    href: "/",
    alt: "Books icon",
  },
  {
    icon: "/icons/graph.svg",
    title: "Tools for Learning and Physical Research",
    description:
      "Enhance writing proficiency by refining language skills, meticulously ensuring grammatical accuracy, and meticulously detecting plagiarism through advanced online tools.",
    href: "/",
    alt: "Graph icon",
  },
  {
    icon: "/icons/notebook.svg",
    title: "Career Exploration and Planning Tools",
    description:
      "Engage in exploration of various career options, conduct in-depth research into diverse industries, and strategically plan educational pursuits and career pathways.",
    href: "/",
    alt: "Notebook icon",
  },
];

export const Resources = () => {
  const container = useRef<ElementRef<"section">>(null);

  useGSAP(
    () => {
      gsap.from(".card", {
        y: 100,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: ".card",
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className=" py-24 ">
      <Container>
        <div className={cn(crismonPro.variable, "pb-6 font-serif")}>
          <h3 className="text-2xl font-semibold">
            Essential Resources for Students
          </h3>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource, index) => {
              return (
                <Resource
                  key={index}
                  alt={resource.alt}
                  title={resource.title}
                  description={resource.description}
                  icon={resource.icon}
                  href={resource.href}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
