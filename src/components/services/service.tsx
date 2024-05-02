import { crismonPro } from "~/fonts";

import Image from "next/image";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";

import { cn } from "~/lib/utils";

interface ServiceProps {
  src: string;
  title: string;
  description: string;
  alt: string;
}

export const Service = ({ src, title, description, alt }: ServiceProps) => {
  return (
    <Card className="relative aspect-square w-full border-none shadow-none">
      <div className="absolute h-full w-full">
        <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="absolute z-[5] h-full w-full bg-gradient-to-b from-[#00000000] to-[#00000080] "></div>
      <div className="absolute z-10 grid h-full w-full items-end">
        <div>
          <CardHeader>
            <CardTitle>
              <h3
                className={cn(
                  crismonPro.variable,
                  "font-serif text-white md:text-lg lg:text-xl",
                )}
              >
                {title}
              </h3>
            </CardTitle>
            <CardDescription>
              <p className="text-white md:text-3xs lg:text-xs">{description}</p>
            </CardDescription>
          </CardHeader>
        </div>
      </div>
    </Card>
  );
};
