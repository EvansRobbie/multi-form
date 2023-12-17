import { useForm } from "@/context/StepperContext";
import React from "react";

const SteperControl = () => {
  const { steps, currentStep, handleClick } = useForm();
  return (
    <div className="container flex justify-around mt-4 mb-8">
      {/* back-button */}
      <button
        onClick={() => handleClick()}
        className={`${
          currentStep === 1 ? "opacity-50 hidden" : " cursor-pointer  "
        } bg-white text-slate-400 uppercase px-4 py-2 font-semibold 
       border-2 border-slate-300 rounded-xl hover:bg-slate-700
        hover:text-white transition duration-200 ease-in-out`}
      >
        Back
      </button>

      {/* next-button */}
      <div></div>
      <button
        type="submit"
        // onClick={() => handleClick("next")}
        className="bg-green-500 text-white uppercase flex justify-end w-full max-w-max  px-4 py-2 font-semibold 
        cursor-pointer rounded-xl hover:bg-slate-700 hover:text-white transition
        duration-200 ease-in-out"
      >
        {currentStep === steps.length ? "Confirm " : "Next"}
      </button>
    </div>
  );
};

export default SteperControl;
