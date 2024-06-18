import React, { ElementRef, useRef } from "react";
import { Container } from "~/components/layouts/base/container";
import { cn } from "~/lib/utils";
import { crismonPro } from "~/assets/fonts/fonts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
import { Amenity } from "~/components/about/support/amenity";

interface Amenity {
  icon: string;
  title: string;
  description: string;
  href: string;
  alt: string;
}
const amenities: Amenity[] = [
  {
    icon: "/icons/slate.svg",
    title: "Student Services",
    description:
      "We offer steadfast assistance to medical students throughout their academic journey, from orientation to graduation and beyond. Our team provides guidance on course selections, offers insights into graduation requirements, and assists with postgraduate planning and career opportunities within the medical field.",
    href: "/",
    alt: "Slate icon",
  },
  {
    icon: "/icons/book.svg",
    title: "Information Centre",
    description:
      "The Information Center within our medical students association is dedicated to cultivating information literacy and lifelong learning among members. Our center, fully automated and secure, serves as a key academic amenity for students and staff alike. Our primary focus is on teaching efficient and effective research skills to enhance members' academic endeavors.",
    href: "/",
    alt: "Book icon",
  },
  {
    icon: "/icons/folder.svg",
    title: "amenity Department",
    description:
      "At Edo university , students who need additional academic support can access the services of the amenity Department, which assists students in variety of ways: working with students within a classroom, providing a place to write tests and exams in a smaller setting, offering the Learning Strategies course, and developing students’ reading levels.",
    href: "/",
    alt: "Folder icon",
  },
  {
    icon: "/icons/medal.svg",
    title: "Med health  Program",
    description:
      "Explore the dynamic medical program at Edo University, where we shape future healthcare leaders. Our comprehensive curriculum blends theory with hands-on experience, preparing students for success in medicine. With immersive clinical rotations and research opportunities, students gain valuable insights into patient care and innovation. Join us at Edo University's medical program and embark on a path to excellence in healthcare.",
    href: "/",
    alt: "Medal icon",
  },
];

const Support = () => {
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
    <section ref={container}>
      <Container>
        <div className="pb-12">
          <h3
            className={cn(
              crismonPro.variable,
              "font-serif text-3xl md:text-4xl",
            )}
          >
            Personalised Support for Each Member
          </h3>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 2xl:grid-cols-4 ">
            {amenities.map((amenity, index) => {
              return (
                <Amenity
                  key={index}
                  alt={amenity.alt}
                  title={amenity.title}
                  description={amenity.description}
                  icon={amenity.icon}
                  href={amenity.href}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Support;
