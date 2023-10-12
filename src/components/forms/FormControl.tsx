import React from "react";
import Input from "./Input";
import { formProps } from "./type";

const FormControl: React.FC<formProps> = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    default:
      return null;
  }
};

export default FormControl;
