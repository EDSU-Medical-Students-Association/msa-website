import { Container } from "../base/container";
import { FooterBlock } from "./footer-block";

import { Block } from "./footer-block";

const blocks: Block[] = [
  {
    heading: "School",
    links: [
      { text: "About", href: "" },
      { text: "Services", href: "" },
      { text: "Admissions", href: "" },
      { text: "News & Events", href: "" },
      { text: "Contact Us", href: "" },
    ],
  },
  {
    heading: "Admissions",
    links: [
      { text: "Department", href: "" },
      { text: "Advanced Placement Program", href: "" },
      { text: "Safe Schools Program", href: "" },
    ],
  },
  {
    heading: "Follow Us",
    links: [
      { text: "Facebook", href: "" },
      { text: "Twitter", href: "" },
      { text: "YouTube", href: "" },
      { text: "Instagram", href: "" },
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
