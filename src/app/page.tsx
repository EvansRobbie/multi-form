import SteperControl from "@/components/steps/SteperControl";
import Stepper from "@/components/steps/Stepper";
import Image from "next/image";

export default function Home() {
  return (
    <main className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      <div className="container horizontal  mt-5 ">
        <Stepper />
      </div>
      <SteperControl />
    </main>
  );
}
