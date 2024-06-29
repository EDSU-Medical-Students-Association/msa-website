import { Container } from "../base/container";
import { FooterBlock } from "./footer-block";

import { Block } from "./footer-block";

const blocks: Block[] = [
  {
    heading: "School",
    links: [
      { text: "About", href: "/about" },
      { text: "Services", href: "" },
      { text: "Admissions", href: "" },
      { text: "News & Events", href: "" },
      { text: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "Admissions",
    links: [
      {
        text: "Departments",
        href: "https://www.edouniversity.edu.ng/home/programs",
      },
      { text: "Advanced Placement Program", href: "" },
      { text: "Safe Schools Program", href: "" },
    ],
  },
  {
    heading: "Follow Us",
    links: [
      { text: "Snapchat", href: "" },
      { text: "Twitter", href: "https://x.com/EDSUMSA" },
      { text: "TikTok", href: "https://www.tiktok.com/@edsumsa" },
      { text: "Instagram", href: "https://www.instagram.com/edsumsa/" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="py-20">
      <Container>
        <section className="grid grid-cols-1 gap-4 pb-10  md:grid-cols-3">
          {blocks.map((block, index) => {
            return (
              <FooterBlock
                heading={block.heading}
                links={block.links}
                key={index}
              />
            );
          })}
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="text-left">
            <p>&copy; 2024 All Rights Reserved</p>
          </div>
          <div className="text-right">
            <p>Liscences</p>
          </div>
        </section>
      </Container>
    </footer>
  );
};
