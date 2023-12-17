import { ErrorMessage, Field } from "formik";
import React, { Fragment } from "react";
import TextError from "./TextError";
import { fieldProps } from "./type";
import { useForm } from "@/context/StepperContext";

const Checkbox = ({ label, name, options, ...rest }: fieldProps) => {
  return (
    <div className="px-4">
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }: { field: any }) => {
          return options?.map((option) => {
            return (
              <label
                key={option.key}
                htmlFor={option.value}
                className={`${
                  field.value?.includes(option.value)
                    ? "bg-purple-500 text-white"
                    : ""
                } flex gap-4 items-center border py-3.5 w-full h-full px-4 rounded-xl cursor-pointer my-2  justify-between `}
              >
                <span className="w-full h-full">{option.key}</span>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value?.includes(option.value)}
                  className="w-full "
                />
              </label>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name}>
        {(errorMsg: any) => <TextError>{errorMsg}</TextError>}
      </ErrorMessage>
    </div>
  );
};

export default Checkbox;
