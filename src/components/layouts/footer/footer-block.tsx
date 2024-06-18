import Link from "next/link";

import { crismonPro } from "~/assets/fonts/fonts";

import { cn } from "~/lib/utils";

interface Link {
  text: string;
  href: string;
}

export interface Block {
  heading: string;
  links: Link[];
}

export const FooterBlock = ({ heading, links }: Block) => {
  return (
    <div>
      <div>
        <h3 className={cn(crismonPro.variable, "font-serif text-xl")}>
          {heading}
        </h3>
      </div>
      <div>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.href} className="hover:text-neutral-600">
                  <span className="">{link.text}</span>
                  <span className="w-full border-t border-solid border-neutral-950"></span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
