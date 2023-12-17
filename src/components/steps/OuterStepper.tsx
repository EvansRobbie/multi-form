"use client";
import { useForm } from "@/context/StepperContext";
import React, { useEffect, useState, useRef } from "react";

interface Step {
  description: string;
  completed: boolean;
  highlighted: boolean;
  selected: boolean;
}
const OuterStepper = () => {
  const { steps, currentStep } = useForm();
  const [newStep, setNewStep] = useState<Array<Step>>([]);
  const stepRef = useRef<null | {}>(null);
  const updateStep = (stepNumber: number, steps: any) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          completed: true,
          selected: true,
          highlighted: true,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          completed: true,
          selected: true,
          highlighted: false,
        };
      } else {
        newSteps[count] = {
          ...newSteps[count],
          completed: false,
          selected: false,
          highlighted: false,
        };
      }
      count++;
    }
    return newSteps; // Return the updated steps array
  };

  useEffect(() => {
    // create object
    const stepsState = steps.map((step: any, index: number) =>
      Object.assign(
        {},
        {
          selected: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);
  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? " w-full flex items-center"
            : "flex items-center "
        }
      >
        <div className="relative flex flex-col  items-center w-full text-teal-600">
          <div
            className={`rounded-md flex-auto flex transition gap-8 mx-3 duration-500 w-32 ease-in-out h-2 
          ${
            step.selected
              ? "bg-green-600 border border-green-600 text-white font-bold"
              : "bg-gray-200"
          }`}
          >
            {/* Display Number */}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className=" mx-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
};

export default OuterStepper;
