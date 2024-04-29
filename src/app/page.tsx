import { Hero } from "~/components/hero/hero";
import { Scroll } from "~/components/base/Scroll";

export default function Home() {
  return (
    <main className="text-center text-base">
      <Scroll>
        <Hero />
      </Scroll>
    </main>
  );
}
