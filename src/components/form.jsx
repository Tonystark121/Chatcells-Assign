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
    <div className=" w-[80%] px-8 py-3 border-2 rounded-md border-gray-300">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 pt-4">
          {type.map((item, idx) => (
            <div key={idx} className="flex items-center flex-wrap">
              <h3 className="flex-1 uppercase font-semibold text-lg">
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
                className="w-[300px] py-2 px-4 flex-1 outline-none border border-gray-400 rounded-md"
              />
            </div>
          ))}
          <div className="flex items-start flex-wrap">
            <h3 className=" uppercase flex-1 font-semibold text-lg">Consnet</h3>
            <div
              className="flex-1 flex gap-4 items-start border rounded-md py-2 px-3 pb-4 border-gray-400 bg-gray-100"
              style={
                viewState
                  ? {
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      alignItems: "flex-start",
                      backgroundColor:'#C8C8C8'
                    }
                  : {}
              }
            >
              {!viewState && (
                <input
                  type="checkbox"
                  className="w-[70px] h-[70px] rounded-md "
                  required
                />
              )}
              <p className="text-sm text-gray-500">
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
          <div className="w-full flex justify-end mt-4 ">
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
