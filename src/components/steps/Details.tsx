"use client";
import React, { Dispatch, SetStateAction } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormControl from "../forms/FormControl";
import { useForm } from "@/context/StepperContext";
import SteperControl from "./SteperControl";

const Details = () => {
  const { handleClick, userData } = useForm();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("enter a valid email")
      .required("Enter your Email"),
    password: Yup.string().required("Enter your Password"),
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
            name="email"
            label="Email"
            placeholder="Jane@gmail.com"
          />

          <FormControl
            control="input"
            name="password"
            label="Password"
            placeholder="123456"
          />

          <SteperControl />
        </Form>
      )}
    </Formik>
  );
};

export default Details;
