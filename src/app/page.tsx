import { Hero } from "~/components/hero/hero";
import { Scroll } from "~/components/base/Scroll";
import { Banner } from "~/components/banner/banner";

export default function Home() {
  return (
    <main className="text-center text-base">
      <Scroll>
        <Hero />
        <Banner />
      </Scroll>
    </main>
  );
}
