import React from "react";
import { CiSearch } from "react-icons/ci";
import { PiBellRingingThin } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { VscMenu } from "react-icons/vsc";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const nav = () => {
  const isTablet = useMediaQuery({ minWidth: 850 });
  const isPhone = useMediaQuery({ maxWidth: 470 });
  return (
    <div className=" w-full h-20 bg-white border-b-2 border-gray-300 flex items-end justify-between px-5 self-end font-popins font-semibold text-lg lg:text-xl">
      {isTablet ? (
        <div className="pb-4 hidden semi:block">
          <img src="./assets/sbi.png" alt="Logo" width={60} height={60} />
        </div>
      ) : (
        <VscMenu className="pb-4 text-5xl font-bold " />
      )}
      <nav className="w-[60%] bg-red hidden semi:block">
        <ul className="flex items-end justify-between lg:gap-8 gap-4">
          <li className="p-2 h-full cursor-pointer border-green-600 border-b-4">
            <Link to={'/'}>Home</Link>
          </li>
          <li className="p-3 h-full cursor-pointer ">
            <Link>Services</Link>
          </li>
          <li className="p-3 h-full cursor-pointer">
            <Link>Blog</Link>
          </li>
          <li className="p-3  h-full cursor-pointer">
            <Link>Offers</Link>
          </li>
          <li className="p-3 h-full cursor-pointer">
            <Link >About Us</Link>
          </li>
        </ul>
      </nav>
      <div className="sm:flex items-center justify-between hidden gap-4 lg:gap-8 pr-4 pb-5 semi:pb-4">
        <CiSearch className="sm:text-[24px] text-[30px] cursor-pointer" />
        <PiBellRingingThin className="sm:text-[24px] text-[30px] cursor-pointer" />
        <VscAccount className="sm:text-[24px] text-[30px] cursor-pointer " />
      </div>
    </div>
  );
};

export default nav;
