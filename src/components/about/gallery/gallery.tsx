import Image from "next/image";
import { Container } from "~/components/layouts/base/container";

export const Gallery = () => {
  return (
    <section>
      <Container className="h-[50vh] md:h-[70vh]">
        <div className="grid h-full grid-cols-3 gap-2 md:gap-4">
          <div className="relative col-start-1 col-end-3 row-start-1 row-end-3">
            <Image
              src={"/games_one.jpg"}
              fill
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative">
            <Image
              src={"/games_two.jpg"}
              fill
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative">
            <Image
              src={"/games_three.jpg"}
              fill
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
