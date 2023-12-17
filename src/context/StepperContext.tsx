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
  selectOption: string;
}
interface contextProps {
  currentStep: number;
  //   setCurrentStep: Dispatch<SetStateAction<number>>;
  userData: initialProps;
  setUserData: Dispatch<SetStateAction<initialProps>>;
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  handleClick: (
    direction?: string,
    newData?: initialProps,
    isFinal?: boolean
  ) => void;
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
  selectOption: "",
};
const StepperContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState(initialValues);
  const [selectedOption, setSelectedOption] = useState("");
  const steps = ["Account", "Details", "Confirmation"];
  console.log(userData);

  const makeRequest = async (formData: initialProps) => {
    console.log("finalData", formData);
    try {
      await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = (
    direction?: string,
    newData?: initialProps | undefined,
    isFinal = false
  ) => {
    setUserData((prev) => ({ ...prev, ...newData }));
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    isFinal && makeRequest(newData!);
  };
  return (
    <StepperContext.Provider
      value={{
        userData,
        setUserData,
        selectedOption,
        setSelectedOption,
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
