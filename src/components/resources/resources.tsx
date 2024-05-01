import { crismonPro } from "~/fonts";

import { cn } from "~/lib/utils";

import { Container } from "~/components/base/container";

import { Resource } from "~/components/resources/resource";

interface Resource {
  icon: string;
  title: string;
  description: string;
  href: string;
  alt: string;
}

const resources: Resource[] = [
  {
    icon: "/icons/bus.svg",
    title: "Tranportation Options for Students on Campus",
    description:
      "The EDSU transportation board in collaboration with the cab drivers association ensures that transportation is readily available to students on campus",
    href: "/",
    alt: "Bus icon",
  },
  {
    icon: "/icons/books.svg",
    title: "Online School Library and Databases",
    description:
      "Access to academic journals, articles, and research papers is crucial for students' academic projects and assignments through our schools lms platform. ",
    href: "/",
    alt: "Books icon",
  },
  {
    icon: "/icons/graph.svg",
    title: "Tools for Learning and Physical Research",
    description:
      "Enhance writing proficiency by refining language skills, meticulously ensuring grammatical accuracy, and meticulously detecting plagiarism through advanced online tools.",
    href: "/",
    alt: "Graph icon",
  },
  {
    icon: "/icons/notebook.svg",
    title: "Career Exploration and Planning Tools",
    description:
      "Engage in exploration of various career options, conduct in-depth research into diverse industries, and strategically plan educational pursuits and career pathways.",
    href: "/",
    alt: "Notebook icon",
  },
];

export const Resources = () => {
  return (
    <section className="relative block py-8">
      <Container>
        <div className={cn(crismonPro.variable, "pb-6 font-serif")}>
          <h3 className="text-2xl font-semibold">
            Essential Resources for Students
          </h3>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource, index) => {
              return (
                <Resource
                  key={index}
                  alt={resource.alt}
                  title={resource.title}
                  description={resource.description}
                  icon={resource.icon}
                  href={resource.href}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
