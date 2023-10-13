"use client";
import React, { Dispatch, SetStateAction } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormControl from "../forms/FormControl";
import { useForm } from "@/context/StepperContext";
import SteperControl from "./SteperControl";

const Account = () => {
  const { handleClick, userData } = useForm();
  const validationSchema = Yup.object({
    first_name: Yup.string().required("Enter your First Name"),
    last_name: Yup.string().required("Enter your Last Name"),
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

          <SteperControl />
        </Form>
      )}
    </Formik>
  );
};

export default Account;
