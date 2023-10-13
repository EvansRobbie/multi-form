"use client";
import { useForm } from "@/context/StepperContext";
import React, { useEffect, useState, useRef } from "react";

interface Step {
  description: string;
  completed: boolean;
  highlighted: boolean;
  selected: boolean;
}
const Stepper = () => {
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
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
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
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-teal-600">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12
         flex items-center justify-center py-3 ${
           step.selected
             ? "bg-green-600 border border-green-600 text-white font-bold"
             : ""
         }`}
          >
            {/* Display Number */}
            {step.completed ? (
              <span className=" text-white font-bold text-xl"> &#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`absolute top-0 text-center mt-16 w-32 text-sm font-medium uppercase ${
              step.highlighted ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {/* Display description */}
            {step.description}
          </div>
        </div>

        <div
          className={`${
            step.completed ? "bg-green-600" : "bg-gray-200"
          } flex-auto  gap-4 mx-2 rounded-md  h-2   transition duration-500 ease-in-out`}
        >
          {/* <div className=" h-2 bg-red-500"></div> */}
          {/* display line */}
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

export default Stepper;
