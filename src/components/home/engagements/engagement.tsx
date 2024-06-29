import { crismonPro } from "~/assets/fonts/fonts";

import Image from "next/image";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";

import { cn } from "~/lib/utils";

import { Info } from "~/components/home/engagements/engagements";
import { Goto } from "~/components/ui/goto";

interface EngagementProps extends Info {}

export const Engagement = ({
  alt,
  href,
  src,
  title,
  month,
  category,
}: EngagementProps) => {
  return (
    <Card className="card rounded-none border-none bg-inherit shadow-none">
      <CardHeader className="w-full  px-0 ">
        <div className="py-3">
          <p>{category}</p>
        </div>
        <div className="anim-width-line block w-full border-b border-solid border-black"></div>
      </CardHeader>
      <CardContent className="grid w-4/5 grid-cols-2 gap-3 px-0 py-3">
        <div className="anim-pos-image relative aspect-[3/4] w-4/5 md:aspect-[9/12] md:w-full ">
          <Image fill src={src} alt={alt} style={{ objectFit: "cover" }} />
        </div>
        <div className="grid md:gap-3 lg:gap-0">
          <div>
            <CardDescription className="anim-pos-details md:text-xs lg:text-sm">
              {month}
            </CardDescription>
            <CardTitle
              className={cn(
                crismonPro.variable,
                "md:text-md anim-pos-details font-serif text-xl lg:text-xl",
              )}
            >
              {title}
            </CardTitle>
          </div>

          <div className="anim-pos-details lg:text-md self-end text-xs md:text-sm">
            {/* <Goto href={href} arrowDirection="straight">
              Learn More
            </Goto> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
