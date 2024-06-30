import React from "react";
import { Container } from "~/components/layouts/base/container";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="absolute left-0 top-0 w-full">
      <Container className="grid items-center justify-center bg-white py-4 shadow-md md:justify-end">
        <section className="text-base md:text-lg 1xl:text-xl">
          <ul className="flex gap-4 md:gap-6">
            <li>
              <Link className="hover:underline px-4 py-2" href="/">
                Index
              </Link>
            </li>
            <li>
              <Link className="hover:underline px-4 py-2" href="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="hover:underline px-4 py-2" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline px-4 py-2" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </section>
      </Container>
    </nav>
  );
};
