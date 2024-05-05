import React, { useState } from "react";
import Navbar from "../components/nav";
import Form from "../components/form";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { PiLinkSimpleThin } from "react-icons/pi";
import { CiViewList } from "react-icons/ci";
import { BsBank } from "react-icons/bs";
import { TfiAngleRight } from "react-icons/tfi";
import { useLocation } from "react-router-dom";

// Left Side Navigation bar
export const NavItems = ({ navs, width = "" }) => {
  return (
    <div
      className="w-[90%] h-[101%] pt-14 min-h-[100vh] bg-white border-r-2 border-gray-300"
      style={width.length ? { width: "100%" } : {}}
    >
      <ul className="flex flex-col gap-6">
        {navs.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center px-6 tab:px-10 py-3 rounded-md hover:bg-gray-300 hover:cursor-pointer"
            style={
              item.name === "Bank Details" ? { backgroundColor: "#c8c8c8" } : {}
            }
          >
            <div className="flex gap-4 items-center ">
              {item.icons}
              <p className="font-semibold">{item.name}</p>
            </div>
            <TfiAngleRight className="mt-1" />
          </div>
        ))}
      </ul>
    </div>
  );
};

// Right Section
const RightPart = () => {
  // To show Details can't be changed/
  const [warning, setWarning] = useState(false);

  const handleData = (props) => {
    setWarning(props);
  };
  return (
    <div className="pt-8 flex flex-col gap-5 phone:gap-3 h-full">
      <h1 className=" text-[35px] text-start whitespace-nowrap  phone:text-3xl font-bold">
        Update Bank Details
      </h1>
      <div className=" text-[16px] text-justify phone:text-start phone:text-sm text-gray-700 w-[85%] sm_tab:w-[75%] ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
        excepturi eius amet eos iste quaerat et fugiat, maxime incidunt eveniet
        accusantium nisi veritatis quo ipsa alias velit sint placeat officiis.
      </div>
      {/* Form Handlink */}
      <Form onSaveData={handleData} />
      {warning ? (
        <div className=" text-[16px] phone:text-xs w-[90%] phone:w-[85%] sm_tab:w-[75%] py-3 text-center uppercase text-gray-500">
          the above detals are final and used for payment. If any of these
          details are wrong, please contact your manager immedieatly. Also the
          same to Account@ExamBazar.com!
        </div>
      ) : (
        <div className=" text-[16px] phone:text-xs w-[90%] phone:w-[85%] sm_tab:w-[75%] py-3 text-center uppercase text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, numquam
          aspernatur. Nemo tenetur magni illum repellat exercitationem
          consequuntur ut laudantium. Lorem ipsum dolor sit!!
        </div>
      )}
      <div className=" w-[85%] phone:w-[70%] border-b-2 border-gray-300"></div>
    </div>
  );
};

const home = () => {
  const { pathname } = useLocation();
  const [leftNavs, setLeftNavs] = useState(true);
  // Navlinks and Icons
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
  const hideLeftNavs = () => {
    setLeftNavs((prev) => !prev);
  };
  const showLeftNavs = () => {
    setLeftNavs((prev) => !prev);
  };
  return (
    <>
      {/* Top Navigation bar */}
      <Navbar />
      <div className="flex min-h-[100vh] h-auto pb-16">
        <div className=" w-[25%] relative h-auto hidden sm_tab:block">
          {leftNavs ? (
            <GoArrowLeft
              className="absolute top-5 left-4 text-2xl cursor-pointer"
              onClick={hideLeftNavs}
            />
          ) : (
            <GoArrowRight
              className="absolute top-5 left-4 text-2xl cursor-pointer"
              onClick={hideLeftNavs}
            />
          )}

          {/* Left Navigation bar */}
          {leftNavs && <NavItems navs={navs} />}
        </div>
        <div className="sm_tab:w-[75%] w-[90%] m-auto sm_tab:m-0">
          {/* Form and Details */}
          <RightPart />
        </div>
      </div>
    </>
  );
};

export default home;
