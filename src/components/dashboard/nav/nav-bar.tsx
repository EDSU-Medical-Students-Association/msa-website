import React from "react";
import { Container } from "~/components/layouts/base/container";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="absolute left-0 top-0 w-full">
      <Container className="grid items-center justify-center bg-white py-1 shadow-sm md:justify-end">
        <section className="md:text-sm 2xl:text-base ">
          <ul className="flex gap-2 md:gap-3">
            <li>
              <Link className="hover:underline " href="/">
                Index
              </Link>
            </li>
            <li>
              <Link className="hover:underline " href="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="hover:underline " href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline " href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </section>
      </Container>
    </nav>
  );
};
