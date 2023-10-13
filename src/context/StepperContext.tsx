"use client";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface initialProps {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  age: string;
  gender: string;
}
interface contextProps {
  currentStep: number;
  //   setCurrentStep: Dispatch<SetStateAction<number>>;
  userData: initialProps;
  setUserData: Dispatch<SetStateAction<initialProps>>;
  finalData: string[];
  setFinalData: Dispatch<SetStateAction<string[]>>;
  handleClick: (direction?: string, newData?: initialProps) => void;
  steps: string[];
}
const StepperContext = createContext({} as contextProps);

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  age: "",
  gender: "",
};
const StepperContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState(initialValues);
  const [finalData, setFinalData] = useState<string[]>([]);
  const steps = ["Account", "Details", "Confirmation"];
  const handleClick = (direction?: string, newData?: {}) => {
    setUserData((prev) => ({ ...prev, ...newData }));
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <StepperContext.Provider
      value={{
        userData,
        setUserData,
        finalData,
        setFinalData,
        handleClick,
        currentStep,
        steps,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};
export const useForm = () => useContext(StepperContext);
export default StepperContextProvider;
