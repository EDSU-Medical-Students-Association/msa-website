import { crismonPro } from "~/assets/fonts/fonts";

import { Container } from "../base/container";

import { cn } from "~/lib/utils";
import { Engagement } from "./engagement";

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

import { Button } from "../ui/button";

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
  return (
    <section className=" bg-neutral-200 py-16">
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
              asChild
              className="border border-neutral-950 bg-neutral-200"
            >
              <Link href={"/"}>View all news & events</Link>
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
