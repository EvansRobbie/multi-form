"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormControl from "../forms/FormControl";
import { useForm } from "@/context/StepperContext";
import SteperControl from "./SteperControl";

const Account = () => {
  const { handleClick, userData } = useForm();

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("/api/countries");
        const data = await response.json();
        setCountries(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCountries();
  }, []);
  // console.log(countries);
  const dropDownOptions = [
    { key: "Male", value: "male" },
    { key: "Female", value: "female" },
    { key: "Non-Binary", value: "non-binary" },
    { key: "Prefer not to say", value: "not-say" },
  ];
  const checkboxOptions = [
    { key: "Option 1", value: "coption1" },
    { key: "Option 2", value: "coption2" },
    { key: "Option 3", value: "coption3" },
  ];
  const validationSchema = Yup.object({
    first_name: Yup.string().required("Enter your First Name"),
    last_name: Yup.string().required("Enter your Last Name"),
    selectOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().min(1, "Atleast one").required("Required"),
  });
  const onSubmit = async (
    values: any,
    { setSubmitting }: { setSubmitting: any }
  ) => {
    console.log(values);
    setSubmitting(false);
    handleClick("next", values);
  };
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={userData}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form className="flex flex-col gap-4">
          <FormControl
            control="input"
            name="first_name"
            label="First Name"
            placeholder="Jane"
          />

          <FormControl
            control="input"
            name="last_name"
            label="Last Name"
            placeholder="Doe"
          />

          <FormControl
            control="select"
            type="text"
            name="selectOption"
            label="Select an Option"
            options={dropDownOptions}
          />

          <FormControl
            control="selectCountry"
            type="text"
            name="selectOption"
            label="Select an Option"
            options={countries}
          />

          <FormControl
            control="checkbox"
            name="checkboxOption"
            label="CheckBox"
            options={checkboxOptions}
          />

          <SteperControl />
        </Form>
      )}
    </Formik>
  );
};

export default Account;
