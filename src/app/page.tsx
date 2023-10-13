"use client";
import Account from "@/components/steps/Account";
import Confirmation from "@/components/steps/Confirmation";
import Details from "@/components/steps/Details";
import Stepper from "@/components/steps/Stepper";
import { useForm } from "@/context/StepperContext";

export default function Home() {
  const { currentStep } = useForm();

  const displaySteps = (steps: any) => {
    switch (steps) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Confirmation />;
      default:
    }
  };
  return (
    <main className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      <div className="container horizontal  mt-5 ">
        <Stepper />
      </div>
      <div className=" w-full my-8 px-4 min-h-[50vh]">
        {displaySteps(currentStep)}
      </div>
    </main>
  );
}
