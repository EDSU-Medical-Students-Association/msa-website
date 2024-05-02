import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import Image from "next/image";

import { Goto } from "~/components/common/goto";

import { crismonPro } from "~/assets/fonts/fonts";

import { cn } from "~/lib/utils";

interface ResourceProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  alt: string;
}

export const Resource = ({
  icon,
  title,
  description,
  href,
  alt,
}: ResourceProps) => {
  return (
    <Card className="resource rounded-none border-0 bg-neutral-100 px-4 py-2 shadow-none md:px-6 md:py-4 md:text-3xs lg:px-8 lg:py-6">
      <CardHeader className="relative w-max">
        <div className="aspect-square w-[0.00125rem]">
          <Image fill src={icon} alt={alt} />
        </div>
      </CardHeader>
      <CardContent className="px-0 py-6">
        <CardTitle className="pb-3 text-base lg:text-lg">
          <h4 className={cn(crismonPro.variable, "font-serif")}>{title}</h4>
        </CardTitle>
        <CardDescription className="md:text-2xs lg:text-xs">
          <p>{description}</p>
        </CardDescription>
      </CardContent>
      <CardFooter className="p-0 md:text-2xs lg:text-xs">
        <div>
          <Goto href={href} arrowDirection="slant">
            Learn More
          </Goto>
        </div>
      </CardFooter>
    </Card>
  );
};
