"use client";
import React, { Dispatch, SetStateAction } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormControl from "../forms/FormControl";
import { useForm } from "@/context/StepperContext";
import SteperControl from "./SteperControl";

const Confirmation = () => {
  const { handleClick, userData } = useForm();
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
