import Image from "next/image";

import { Squada_One } from "@next/font/google";

const squadaOne = Squada_One({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const Navbar = () => {
  return (
    <nav
      className={`${squadaOne.className} bg-white h-24 w-full flex border-0 border-b-4 border-b-green`}
    >
      <div className="flex items-center justify-between w-full">
        <Image
          src="/svg/logo.svg"
          height={48}
          width={170}
          alt="Logo My Week Food Planner"
        />
        <ul className="h-full text-grey text-xl justify-between flex items-center gap-7">
          <li>MY WEEK</li>
          <li>MY MENUES</li>
        </ul>
        <Image
          className="mx-5"
          src="/img/iso.png"
          height={65}
          width={65}
          alt="Iso My Week Food Planner"
        />
      </div>
    </nav>
  );
};

export default Navbar;
