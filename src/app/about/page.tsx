"use client";
import { Banner } from "~/components/about/banner/banner";
import { Scroll } from "~/components/layouts/base/scroll";
import { Hero } from "~/components/layouts/hero/hero";
import { Info } from "~/components/about/info/info";
import { Gallery } from "~/components/about/gallery/gallery";
import { Question } from "~/components/about/question/question";
import Support from "~/components/about/support/support";

export default function About() {
  return (
    <main className="text-base">
      <Scroll>
        <Hero
          theme="#DDE9EF"
          src="/games_one.jpg"
          button
          buttonText="Contact us"
          href="/"
          alt="A medical student playing chess, participating in the games"
          title="Unveiling Our commitment to Excellence"
          description="As a distinguished medical students association within our university, we are committed to upholding a proud tradition of excellence in education."
        />
        <Banner />
        <Info />
        <Gallery />
        <Question />
        <Support />
      </Scroll>
    </main>
  );
}
