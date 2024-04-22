import Link from "next/link";
import { NavLink } from "./nav-link";
import { NavLogo } from "./nav-logo";
import { NavWordMark } from "./nav-word-mark";
import { Button } from "../ui/button";

const NavBar = () => {
  return (
    <nav className="grid grid-cols-xs-nav sm:grid-cols-2  py-2 px-2 sm:py-4  w-full items-center md:px-[30px] max-w-[1536px] mx-auto 2xl:px-0 text-[.5rem] sm:text-xs 2xl:text-lg">
      <section className="w-full h-full justify-self-start flex items-center">
        <Link
          href={"/"}
          className="w-full h-full gap-1 sm:gap-2 flex items-center"
        >
          <NavLogo />
          <NavWordMark />
        </Link>
      </section>
      <section className="md:block hidden">
        <ul className="md:flex justify-end gap-2 h-full items-center pt-4">
          <li>
            <NavLink href="/" text="Index" />
          </li>
          <div></div>
          <li>
            <NavLink href="/payments" text="Payment" />
          </li>
          <li>
            <NavLink href="/info" text="Info" />
          </li>
          <li>
            <NavLink href="/about" text="About" />
          </li>
          <li>
            <NavLink href="/contact" text="Contact" />
          </li>
          <li>
            <NavLink href="" text="Admissions" />
          </li>
        </ul>
      </section>
      <section className="justify-self-end md:hidden">
        <Button
          // onClick={handleClick}
          variant={`outline`}
          className="border-none p-0 rounded-full block hover:bg-inherit"
        >
          <div className="w-6 md:w-8 xl:w-10  aspect-square rounded-full border-solid border-neutral-950 border p-1.5 md:p-2 grid transition-all gap-1 hover:gap-3 place-items-center">
            <div className="w-full border-b border-solid border-neutral-950"></div>
            <div className="w-full border-b border-solid border-neutral-950"></div>
          </div>
        </Button>
      </section>
    </nav>
  );
};

export default NavBar;
