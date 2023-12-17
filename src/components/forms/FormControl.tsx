import React from "react";
import Input from "./Input";
import { formProps } from "./type";
import Select from "./Select";
import SelectCountry from "./SelectCountry";
import Checkbox from "./Checkbox";

const FormControl: React.FC<formProps> = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "selectCountry":
      return <SelectCountry {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    default:
      return null;
  }
};

export default FormControl;
