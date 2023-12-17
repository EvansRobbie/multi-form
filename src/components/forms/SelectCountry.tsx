import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import TextError from "./TextError";
import { fieldProps } from "./type";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const SelectCountry = ({ label, name, more, options, ...rest }: fieldProps) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [open, setOpen] = useState(false);

  //   console.log(options);
  return (
    <div className="flex flex-col px-4">
      <label htmlFor={name}>{label}</label>
      <div
        onClick={() => setOpen(!open)}
        className={` outline-none border flex items-center justify-between  w-full py-3.5 px-4 rounded-xl ${
          !selectedOption && "text-gray-700"
        }`}
      >
        {selectedOption
          ? selectedOption?.length > 25
            ? selectedOption?.substring(0, 25) + "..."
            : selectedOption
          : "Select Country"}
        <BiChevronDown className={`${open && "rotate-180"}`} size={20} />
      </div>
      <ul
        className={`${
          open ? "block" : "hidden"
        } bg-white mt-2 border max-h-[20vh] border-gray-200  overflow-y-auto shadow-md rounded-xl px-1 py-2`}
      >
        <div className="sticky top-0 flex items-center px-2 gap-2 bg-white">
          <AiOutlineSearch size={20} className={`text-gray-700`} />
          <input
            type="text"
            placeholder="Enter your Country name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            className=" placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {options?.map((option) => (
          <li
            key={option.name?.common}
            value={option.value}
            onClick={() => {
              if (
                option.name?.common.toLowerCase() !==
                selectedOption.toLowerCase()
              ) {
                setSelectedOption(option.name?.common!);
                setOpen(false);
              }
            }}
            className={`flex gap-4 hover:bg-purple-400/20 text-sm py-1 px-3 rounded-md  ${
              option.name?.common.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
          >
            <input
              className="text-red-500 bg-red-500"
              type="radio"
              value={option.name?.common}
            />
            {option.name?.common}
          </li>
        ))}
      </ul>
      <ErrorMessage name={name}>
        {(errorMsg: any) => <TextError>{errorMsg}</TextError>}
      </ErrorMessage>
    </div>
  );
};

export default SelectCountry;
