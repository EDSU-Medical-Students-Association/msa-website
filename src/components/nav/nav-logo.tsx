import Image from "next/image";

export const NavLogo = () => {
  return (
    <div className="relative w-6 md:w-8 xl:w-10 aspect-square flex items-center">
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
