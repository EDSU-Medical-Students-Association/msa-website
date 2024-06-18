"use client";

import Image from "next/image";

import { Container } from "~/components/layouts/base/container";

import { cn } from "~/lib/utils";

import { crismonPro } from "~/fonts";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Question = () => {
  return (
    <section className="py-16">
      <Container className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16">
        <div>
          <div>
            <h3
              className={cn(
                crismonPro.variable,
                "pb-6 font-serif text-3xl md:text-5xl",
              )}
            >
              How We Meet The Needs of Medical Students
            </h3>
          </div>
          <div className="pr-16">
            <div>
              <div>
                <h4
                  className={cn(
                    crismonPro.variable,
                    "pb-2 font-serif text-2xl md:text-3xl",
                  )}
                >
                  Inner Well-being
                </h4>
              </div>
              <div className="w-full border-b border-solid border-black"></div>
              <div className="pt-2">
                <p>
                  The medical faculty at Edo University is dedicated to
                  embodying the principles of compassionate healthcare. Rooted
                  in the ethos of the profession, we uphold values of empathy,
                  integrity, and service. Our commitment to excellence in
                  medical education is intertwined with fostering a culture of
                  respect, collaboration, and continuous learning. We endeavor
                  to inspire and support students and staff alike on their
                  journey towards becoming compassionate healthcare
                  professionals, guided by the principles of justice, healing,
                  and empathy.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h4
                  className={cn(
                    crismonPro.variable,
                    "pb-2 font-serif text-2xl md:text-3xl",
                  )}
                >
                  Comprehensive Learning Experience
                </h4>
              </div>
              <div className="w-full border-b border-solid border-black"></div>
              <div className="pt-2">
                <p>
                  In our medical students association at Edo University, we
                  emphasize holistic development. Alongside academics, we offer
                  diverse extracurricular activities. From community service to
                  research, we encourage members to explore interests beyond the
                  classroom, fostering well-rounded future healthcare
                  professionals.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h4
                  className={cn(
                    crismonPro.variable,
                    "pb-2 font-serif text-2xl md:text-3xl",
                  )}
                >
                  Achievement for Every Member
                </h4>
              </div>
              <div className="w-full border-b border-solid border-black"></div>
              <div className="pt-2">
                <p>
                  At our medical students association at Edo University, we
                  prioritize academic support for all members. Our program
                  includes Credit Recovery, assisting students who haven&apos;t
                  met credit expectations for their year..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid h-[40vh] items-end md:h-full">
          <div className="relative h-full w-full md:h-4/5">
            <Image
              src={"/games_two.jpg"}
              alt=""
              fill
              sizes="100vw, (min-width: 768px) 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
