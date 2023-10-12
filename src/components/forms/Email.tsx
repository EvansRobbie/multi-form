"use client";
import React, { Dispatch, SetStateAction } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormControl from "./FormControl";

const Email = ({
  next,
  data,
}: {
  next: (newData: any) => void;
  data: { email: string; password: string };
}) => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Enter your Email"),
  });
  const onSubmit = async (
    values: any,
    { setSubmitting }: { setSubmitting: any }
  ) => {
    console.log(values);
    next(values);
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
            name="email"
            label="Email"
            placeholder="janedoe@gmail.com"
          />

          <div className="flex flex-grow items-center py-2 justify-center w-full">
            <button
              // onClick={() => next(data)}
              disabled={!formik.isValid || formik.isSubmitting}
              className="text-slate-200 bg-black font-bold disabled:bg-accent uppercase text-sm bg-primary rounded px-4 py-2 max-w-max "
              type="submit"
            >
              {formik.isSubmitting ? (
                <span className="flex items-center gap-2">processing..</span>
              ) : (
                "Continue With Email"
              )}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Email;
