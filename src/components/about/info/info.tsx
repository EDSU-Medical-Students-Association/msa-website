import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { crismonPro } from "~/fonts";
import { Container } from "~/components/layouts/base/container";

export const Info = () => {
  return (
    <section className="py-12">
      <Container className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 md:gap-0 md:text-left">
        <div className="grid w-full justify-center gap-4 ">
          <div className="grid w-full justify-center md:justify-start">
            <h3
              className={cn(
                crismonPro.variable,
                "font-serif text-3xl md:w-2/3 md:text-5xl ",
              )}
            >
              Discover Edo University Iyamho
            </h3>
          </div>
          <div className="grid items-center justify-center md:justify-start">
            <Button asChild>
              <Link href={"/"}>Our Departments</Link>
            </Button>
          </div>
        </div>
        <div>
          <p className="px-8 md:px-0">
            Edo University Iyamho (abbreviated as EUI) is a state
            government-owned university in Iyamho, a town in Edo State, Nigeria.
            Established in 2016, it is one of the newest universities in
            Nigeria. The university aims to provide quality education and
            contribute to the development of the region and the nation as a
            whole. Edo University offers undergraduate and postgraduate programs
            in various fields, including Medicine, Law, Engineering, Social
            Sciences, Natural Sciences, and Arts. It is known for its modern
            facilities, experienced faculty, and commitment to academic
            excellence.
          </p>
        </div>
      </Container>
    </section>
  );
};
