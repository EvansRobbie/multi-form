import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import TextError from "./TextError";
import { fieldProps } from "./type";
import { BiChevronDown } from "react-icons/bi";
import { useForm } from "@/context/StepperContext";

const Select = ({ label, name, more, options, ...rest }: fieldProps) => {
  const { selectedOption, setSelectedOption } = useForm();
  const [open, setOpen] = useState(false);
  //   console.log(options);
  return (
    <div className="flex flex-col px-4">
      <label htmlFor={name}>{label}</label>
      <div
        onClick={() => setOpen(!open)}
        className=" outline-none border flex items-center justify-between  w-full py-3.5 px-4 rounded-xl"
      >
        {selectedOption ? selectedOption : name}
        <BiChevronDown size={20} />
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } bg-white mt-2 border border-gray-200 max-h-[20vh]  overflow-y-auto shadow-md rounded-xl px-1 py-2`}
      >
        <Field name={name} {...rest} className="">
          {({ field }: { field: any }) => {
            // console.log(field);
            return options?.map((option, index) => (
              <div
                key={option.key}
                onClick={() => {
                  if (
                    option.value.toLowerCase() !== selectedOption.toLowerCase()
                  ) {
                    setSelectedOption(option.key);
                    setOpen(false);
                  }
                }}
                className="flex gap-4 hover:bg-purple-400/20 text-sm py-1 px-3  rounded-md"
              >
                <input
                  className=" "
                  id={option.value}
                  type="radio"
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value} className="w-full">
                  {option.key}
                </label>
              </div>
            ));
          }}
        </Field>
      </div>
      <ErrorMessage name={name}>
        {(errorMsg: any) => <TextError>{errorMsg}</TextError>}
      </ErrorMessage>
    </div>
  );
};

export default Select;
