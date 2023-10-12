"use client";
import Email from "@/components/forms/Email";
import Password from "@/components/forms/Password";
import React, { useState } from "react";

const Signup = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = (formData: any) => {
    console.log("formData", formData);
  };
  const handleNext = (newData: any, final = false) => {
    setData((prev) => ({
      ...prev,
      ...newData,
    }));
    if (final) {
      makeRequest(newData);
      return;
    }
    setCurrentStep(currentStep + 1);
    console.log(data);
  };
  const steps = [
    <Email next={handleNext} data={data} key={"email-step"} />,
    <Password next={handleNext} data={data} key={"password-step"} />,
  ];

  return (
    <div className="w-1/2 relative mx-auto h-[50vh] top-1/2 my-10 py-16 px-6 bg-white  justify- shadow-md">
      {steps[currentStep]}
    </div>
  );
};

export default Signup;
