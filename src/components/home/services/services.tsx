"use client";

import { useRef, ElementRef } from "react";

import { crismonPro } from "~/fonts";

import { cn } from "~/lib/utils";

import { Container } from "~/components/layouts/base/container";
import { Service } from "~/components/home/services/service";

import { Button } from "../../ui/button";
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Service {
  src: string;
  title: string;
  description: string;
  alt: string;
}

const services: Service[] = [
  {
    src: "/services/service_one.png",
    title: "Academic Counselling",
    description:
      "Counsellors provide individual and group support in the areas of course selection, pathway planning, post secondary applications, scholarships, and access to study supports and peer tutoring.",
    alt: "",
  },
  {
    src: "/services/service_two.png",
    title: "Personal Counselling",
    description:
      "Provides support and resiliency skills to manage stress, anxiety, relationships and personal decision making. Students may also be connected to our Child and Youth Care staff, Social Worker, or Psychologists.",
    alt: "",
  },
  {
    src: "/services/service_three.png",
    title: "Resources and Information",
    description:
      "Designed to support and enhance the learning journey of our students, this invaluable platform provides easy access to a wide range of educational materials, helpful guides, research databases, and interactive tools.",
    alt: "",
  },
];

export const Services = () => {
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
    <section ref={container} className="py-24">
      <Container className="">
        <div className="grid gap-3 pb-6 md:grid-cols-2">
          <div className="">
            <h3
              className={cn(
                crismonPro.variable,
                "font-serif text-2xl font-semibold",
              )}
            >
              Comprehensive Student Resources
            </h3>
          </div>
          <div className="flex md:justify-end">
            <Button
              variant={"secondary"}
              asChild
              className="border border-neutral-950 bg-white"
            >
              <Link href={"/"}>Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            return (
              <Service
                key={index}
                alt={service.alt}
                src={service.src}
                title={service.title}
                description={service.description}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};
