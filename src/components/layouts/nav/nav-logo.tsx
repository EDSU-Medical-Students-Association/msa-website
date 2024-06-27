import Image from "next/image";

export const NavLogo = () => {
  return (
    <div className="relative flex aspect-square w-10 md:w-12 xl:w-14 items-center">
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
