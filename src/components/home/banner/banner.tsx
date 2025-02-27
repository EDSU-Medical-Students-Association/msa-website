import { crismonPro } from "~/fonts";

import { Button } from "~/components/ui/button";

import { cn } from "~/lib/utils";

import Image from "next/image";

import { Container } from "../../layouts/base/container";

export const Banner = () => {
  return (
    <section className="bg-[#C3EFC8] pt-8">
      <Container>
        <div className={cn(crismonPro.variable, "font-serif")}>
          <h3 className="heading w-full text-balance text-left text-3xl md:w-2/3 ">
            Join Our Welcoming Community through Edo State University Uzairue
            Admissions
          </h3>
        </div>
        <div className="flex items-start py-6">
          <Button size={"lg"} asChild>
            <a href={"https://www.edouniversity.edu.ng/admissions/undergraduate"} target="_blank" rel="noopener noreferrer">Learn More</a>
          </Button>
        </div>
      </Container>
      <div className="relative h-56 w-full">
        <Image
          src={"/pattern_two.svg"}
          style={{ objectFit: "cover" }}
          fill
          alt="Beautifully coloured geometric patterns"
        />
      </div>
    </section>
  );
};
