import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { PiBellRingingThin } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { VscMenu } from "react-icons/vsc";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { NavItems } from "../pages/home";
import { MdDashboard } from "react-icons/md";
import { PiLinkSimpleThin } from "react-icons/pi";
import { CiViewList } from "react-icons/ci";
import { BsBank } from "react-icons/bs";

const nav = () => {
  // use css as well as npm package as well.
  const isTablet = useMediaQuery({ minWidth: 850 });
  const [showNavs, setShowNavs] = useState(false);
  useEffect(()=>{
    if(isTablet) setShowNavs(false)
  },[isTablet])

  const navs = [
    {
      name: "My Dashboard",
      icons: <MdDashboard />,
    },
    {
      name: "TOTM Links",
      icons: <PiLinkSimpleThin />,
    },
    {
      name: "Daily Summary",
      icons: <CiViewList />,
    },
    {
      name: "Bank Details",
      icons: <BsBank />,
    },
  ];

  const showNavlinks = () => {
    setShowNavs((prev) => !prev);
  };
  return (
    <div className="relative w-full h-20 bg-white border-b-2 border-gray-300 flex items-end justify-between px-5 self-end font-popins font-semibold text-lg lg:text-xl">
      {isTablet ? (
        <div className="pb-4 hidden semi:block">
          <img src="./assets/sbi.png" alt="Logo" width={60} height={60} />
        </div>
      ) : (
        <>
          {showNavs ? (
            <GoArrowLeft
              className="pb-4 text-5xl font-bold cursor-pointer"
              onClick={showNavlinks}
            />
          ) : (
            <VscMenu
              className="pb-4 text-5xl font-bold cursor-pointer"
              onClick={showNavlinks}
            />
          )}
        </>
      )}
      <nav className="w-[60%] bg-red hidden semi:block">
        <ul className="flex items-end justify-between lg:gap-8 gap-4">
          <li className="p-2 h-full cursor-pointer border-green-600 border-b-4">
            <Link to={"/"}>Home</Link>
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
            <Link>About Us</Link>
          </li>
        </ul>
      </nav>
      <div className="sm:flex items-center justify-between hidden gap-4 lg:gap-8 pr-4 pb-5 semi:pb-4">
        <CiSearch className="sm:text-[24px] text-[30px] cursor-pointer" />
        <PiBellRingingThin className="sm:text-[24px] text-[30px] cursor-pointer" />
        <VscAccount className="sm:text-[24px] text-[30px] cursor-pointer " />
      </div>
      {showNavs && !isTablet && (
        <div className="absolute duration-[600ms] left-0 top-20 w-full h-auto min-h-[100vh] z-10 bg-red-400">
            {/* Menu Bar */}
            <NavItems navs={navs} width={'full'} />
        </div>
      )}
    </div>
  );
};

export default nav;
