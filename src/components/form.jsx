import React, { useEffect, useState } from "react";
import dateFormatter from "./formatDate";
import { useLocation } from "react-router-dom";

const form = ({ onSaveData }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    ifsc: "",
    bank: "",
    city: "",
    branch: "",
    relation: "",
  });
  const [viewState, setViewState] = useState(false);

  const type = [
    {
      name: "Account Holder Name",
      key: "name",
    },
    {
      name: "Account Number",
      key: "number",
    },
    {
      name: "IFSC Code",
      key: "ifsc",
    },
    {
      name: "Bank Name",
      key: "bank",
    },
    {
      name: "Bank City",
      key: "city",
    },
    {
      name: "Bank Branch",
      key: "branch",
    },
    {
      name: "Relation with Account Holder",
      key: "relation",
    },
  ];

  const handleChange = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.name.length > 0) {
      setViewState(true);
    }
  };

  useEffect(() => {
    onSaveData(viewState);
  }, [viewState]);

  return (
    <div className=" w-[95%] sm_tab:w-[80%] px-8 py-3 border-2 rounded-md border-gray-300">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 pt-4">
          {type.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 sm_form:gap-0 flex-col sm_form:flex-row sm_form:items-center flex-wrap"
            >
              <h3 className="sm_form:flex-1 uppercase font-semibold text-lg">
                {item.name}
              </h3>
              <input
                type="text"
                placeholder={`${item.name}`}
                onChange={(e) => handleChange(item.key, e.target.value)}
                value={formData[item.key]}
                disabled={viewState}
                style={viewState ? { backgroundColor: "#C8C8C8" } : {}}
                required
                className=" w-full phone:w-[90%] sm_form:w-[300px] py-3 sm_form:py-2 px-4 sm_form:flex-1 outline-none border border-gray-400 rounded-md"
              />
            </div>
          ))}
          <div className="flex sm_form:flex-row flex-col sm_form:gap-0 gap-4 items-start flex-wrap">
            <h3 className=" uppercase sm_form:flex-1 font-semibold text-lg">
              Consent
            </h3>
            <div
              className="sm_form:flex-1 w-full phone:w-[90%] sm_form:w-auto flex gap-4 items-start border rounded-md py-2 px-3 pb-4 border-gray-400 bg-gray-100"
              style={
                viewState
                  ? {
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      alignItems: "flex-start",
                      backgroundColor: "#C8C8C8",
                    }
                  : {}
              }
            >
              {!viewState && (
                <input
                  type="checkbox"
                  className=" w-[40px] h-[40px] phone:w-[70px] phone:h-[70px] rounded-md "
                  required
                />
              )}
              <p className="phone:text-sm text-[16px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi in dolor laboriosam beatae aspernatur asperiores.
                Temporibus tenetur quas consequatur libero.
              </p>
              {viewState && (
                <h3 className="font-semibold text-[13px]">
                  {" "}
                  Filled on {dateFormatter(Date.now())}{" "}
                </h3>
              )}
            </div>
          </div>
        </div>
        {!viewState && (
          <div className=" w-full phone:w-[90%] sm_form:w-full flex justify-end mt-4 ">
            <button
              type="submit"
              className="border-none w-[110px] h-[50px] text-xl rounded-md bg-green-500 text-white"
            >
              Save
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default form;
