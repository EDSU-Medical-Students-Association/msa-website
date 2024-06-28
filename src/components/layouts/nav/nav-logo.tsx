import Image from "next/image";

export const NavLogo = () => {
  return (
    <div className="relative flex aspect-square w-8 items-center md:w-10 xl:w-12">
      <Image
        src="/msa.logo.png"
        fill={true}
        alt="EDSU MSA Logo"
        priority={true}
        sizes="3.5rem, (min-width:768px) 4rem, (min-width: 1280px) 4.5rem"
      />
    </div>
  );
};
