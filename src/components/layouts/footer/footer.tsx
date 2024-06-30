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
      { text: "Twitter", href: "" },
      { text: "YouTube", href: "" },
      { text: "Instagram", href: "" },
    ],
  },
];

interface Developer {
  name: string;
  email: string;
}

const developers: Developer[] = [
  { name: 'Ademola OluwaTobi', email: 'oluwatobiadee@gmail.com' },
  { name: 'Abduljalal Mohammed', email: 'abduljalal849@gmail.com' },
  { name: 'Jossy Chidi', email: 'cjossywike546@gmail.com' },
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
            <p>Licences</p>
          </div>
        </section>
        <section className="grid">
          <div className="text-center">
            <p>
              Developed by: {" "}
              {developers.map((developer, index) => (
                <span style={{color:'blue'}} key={developer.email}>
                  <a href={`mailto:${developer.email}`}>{developer.name}</a>
                  {index < developers.length - 1 && ", "}
                </span>
              ))}
            </p>
          </div>
        </section>
      </Container>
    </footer>
  );
};
