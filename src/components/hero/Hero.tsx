import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { crismonPro } from "~/fonts";

import { Button } from "~/components/ui/button";
import { Container } from "~/components/base/container";
import { cn } from "~/lib/utils";

export const Hero = () => {
  return (
    <header className="grid w-full items-center text-center md:h-svh md:text-left">
      <Container className="grid gap-32 py-32 md:h-4/6 md:grid-cols-2 md:gap-0 md:py-0 lg:h-5/6 2xl:h-[65svh]">
        <div className="grid items-end">
          <div className="grid h-fit gap-8">
            <div>
              <hgroup className="flex flex-col gap-3 px-6 md:px-0">
                <h1
                  data-scroll
                  data-sroll-speed={"0.3"}
                  className={cn(
                    crismonPro.variable,
                    "w-full font-serif text-5xl md:w-9/12 2xl:text-6xl",
                  )}
                >
                  Fostering Excellence in Medical Education
                </h1>
                <h2
                  data-scroll
                  data-scroll-speed={"0.01"}
                  className="w-full sm:text-sm md:w-2/3"
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
              <Button asChild size={"lg"}>
                <Link href={"/"}>Contact Us </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid">
          <div
            data-scroll
            data-scroll-speed={"0.3"}
            className="border-1 relative h-[75vh] w-11/12 self-center justify-self-center rounded-[9px] border-blue-400 bg-blue-200 md:h-full md:justify-self-end"
          >
            <Image
              priority
              fill
              src={"/games_two.jpg"}
              alt="A student Basketballer at the NUGA Games"
              style={{ objectFit: "cover" }}
              className="rounded-[9px]"
            />
          </div>
          <div
            data-scroll
            data-scroll-speed={"0.6"}
            className="absolute top-full z-10 w-60 translate-x-9 justify-self-center rounded-[6px] border border-green-500 bg-green-300 p-4 text-left md:top-3/4 md:w-80 md:justify-self-start lg:w-96"
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
            <div className="group">
              <Link href={``} className="flex items-center gap-3">
                <span className="font-bold">Discover Events</span>
                <span className="rounded-full border border-neutral-950 p-1 transition-transform ease-in-out group-hover:translate-x-1">
                  <ArrowRightIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
