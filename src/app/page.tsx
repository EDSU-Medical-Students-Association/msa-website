import { Scroll } from "~/components/layouts/base/scroll";
import { Hero } from "~/components/home/hero/hero";
import { Banner } from "~/components/home/banner/banner";
import { Resources } from "~/components/home/resources/resources";
import { Services } from "~/components/home/services/services";
import { Engagements } from "~/components/home/engagements/engagements";

export default function Home() {
  return (
    <main className="text-base">
      <Scroll>
        <Hero />
        <Banner />
        <Resources />
        <Services />
        <Engagements />
      </Scroll>
    </main>
  );
}
