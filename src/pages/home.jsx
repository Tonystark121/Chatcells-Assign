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

const RightPart = () => {
  const [warning, setWarning] = useState(false);
  const handleData = (props) => {
    console.log(props);
    setWarning(props);
  };
  return (
    <div className="pt-8 flex flex-col gap-3 h-full">
      <h1 className="text-3xl font-bold">Update Bank Details</h1>
      <div className="text-sm text-gray-700 w-[75%] ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
        excepturi eius amet eos iste quaerat et fugiat, maxime incidunt eveniet
        accusantium nisi veritatis quo ipsa alias velit sint placeat officiis.
      </div>
      <Form onSaveData={handleData} />
      {warning ? (
        <div className="text-xs w-[75%] py-3 text-center uppercase text-gray-500">
          the above detals are final and used for payment. If any of these details are wrong, please contact your manager immedieatly. Also the same to Account@ExamBazar.com!
        </div>
      ) : (
        <div className="text-xs w-[75%] py-3 text-center uppercase text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, numquam
          aspernatur. Nemo tenetur magni illum repellat exercitationem
          consequuntur ut laudantium. Lorem ipsum dolor sit!!
        </div>
      )}

      <div className="w-[70%] border-b-2 border-gray-300"></div>
    </div>
  );
};

const home = () => {
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
  const {pathname} = useLocation()
  return (
    <>
      <Navbar />
      <div className="flex min-h-[100vh] h-auto pb-16">
        <div className=" w-[25%] relative h-auto">
          <GoArrowLeft className="absolute top-5 left-4 text-2xl cursor-pointer" />
          <div className="w-[90%] h-[101%] pt-14 min-h-[100vh] bg-white border-r-2 border-gray-300">
            <ul className="flex flex-col gap-6">
              {navs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center px-10 py-3 rounded-md hover:bg-gray-300 hover:cursor-pointer"
                  style={item.name === 'Bank Details' ? {backgroundColor:'#c8c8c8'} : {}}
                >
                  <div className="flex gap-4 items-center ">
                    {item.icons}
                    <p>{item.name}</p>
                  </div>
                  <TfiAngleRight />
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[75%] flex-grow-7">
          <RightPart />
        </div>
      </div>
    </>
  );
};

export default home;
