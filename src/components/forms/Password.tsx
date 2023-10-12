"use client";
import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormControl from "./FormControl";

const Password = ({
  next,
  data,
}: {
  next: (newData: any, final: boolean) => void;
  data: { email: string; password: string };
}) => {
  console.log(data);
  const validationSchema = Yup.object({
    password: Yup.string().required("Enter your Password"),
  });
  const onSubmit = async (
    values: any,
    { setSubmitting }: { setSubmitting: any }
  ) => {
    console.log(values);
    next(values, true);
  };
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={data}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form className="flex flex-col gap-4">
          <FormControl
            control="input"
            name="password"
            label="Password"
            placeholder="123456"
          />

          <div className="flex flex-grow items-center py-2 justify-center w-full">
            <button
              disabled={!formik.isValid || formik.isSubmitting}
              className="text-slate-100 bg-black font-bold disabled:bg-accent uppercase text-sm bg-primary rounded px-4 py-2 max-w-max "
              type="submit"
            >
              {formik.isSubmitting ? (
                <span className="flex items-center gap-2">processing..</span>
              ) : (
                "Continue with Email"
              )}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Password;
