import Image from "next/image";

export const NavLogo = () => {
  return (
    <div className="relative flex aspect-square w-6 items-center md:w-8 xl:w-10">
      <Image
        src="/msa.logo.png"
        fill={true}
        alt="EDSU MSA Logo"
        priority={true}
        sizes="1.5rem, (min-width:768px) 2rem, (min-width: 1280px) 2.5rem"
      />
    </div>
  );
};
