import { Scroll } from "~/components/base/scroll";
import { Hero } from "~/components/hero/hero";
import { Banner } from "~/components/banner/banner";
import { Resources } from "~/components/resources/resources";
import { Services } from "~/components/services/services";
import { Engagements } from "~/components/engagements/engagements";
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
