import Image from "next/image";
import React from "react";

interface Props {}

const Navbar: React.FC<Props> = ({}) => {
  return (
    <header className="w-full flex items-center justify-between bg-white py-4 px-24 top-0">
      <div className="heading flex gap-2 items-center">
        <div className="relative h-12 w-12">
          <Image
            src="/main__logo.png"
            alt="Google Docs logo"
            fill
            className="absolute"
          />
        </div>
        <p> Docs Clone</p>
      </div>
      <div className="extra__items">Hello</div>
    </header>
  );
};
export default Navbar;
