import Link from "next/link";

interface NavLinkProps {
  href: string;
  text: string;
}

export const NavLink = ({ href, text }: NavLinkProps) => {
  return (
    <Link className="hover:underline" href={href}>
      {text}
    </Link>
  );
};
