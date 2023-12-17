"use client";
import React, { Dispatch, SetStateAction } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormControl from "../forms/FormControl";
import { useForm } from "@/context/StepperContext";
import SteperControl from "./SteperControl";

const Confirmation = () => {
  const { handleClick, userData, steps, currentStep } = useForm();
  console.log(currentStep);
  console.log(steps[currentStep - 1]);
  const validationSchema = Yup.object({
    age: Yup.string().required("Enter your Age"),
    gender: Yup.string().required("Select your Gender"),
  });
  const onSubmit = async (
    values: any,
    { setSubmitting }: { setSubmitting: any }
  ) => {
    console.log(values);
    setSubmitting(false);
    handleClick("next", values, true);
  };
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={userData}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form className="flex flex-col gap-4">
          <div>{steps[currentStep - 1]}</div>
          <FormControl
            control="input"
            name="age"
            label="Age"
            placeholder="Jane@gmail.com"
          />

          <FormControl
            control="input"
            name="gender"
            label="Gender"
            placeholder="male / female"
          />

          <SteperControl />
        </Form>
      )}
    </Formik>
  );
};

export default Confirmation;
