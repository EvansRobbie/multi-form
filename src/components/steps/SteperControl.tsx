import React from "react";

const SteperControl = () => {
  return (
    <div className="container flex justify-around mt-4 mb-8">
      {/* back-button */}
      <button
        className="bg-white text-slate-400 uppercase px-4 py-2 font-semibold 
        cursor-pointer border-2 border-slate-300 rounded-xl hover:bg-slate-700
        hover:text-white transition duration-200 ease-in-out"
      >
        Back
      </button>

      {/* next-button */}
      <button
        className="bg-green-500 text-white uppercase px-4 py-2 font-semibold 
        cursor-pointer rounded-xl hover:bg-slate-700 hover:text-white transition
        duration-200 ease-in-out"
      >
        Next
      </button>
    </div>
  );
};

export default SteperControl;
