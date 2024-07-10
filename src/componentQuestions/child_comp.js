import React, { useEffect } from "react";

const ChildComp = ({isOn,toggleSwitch}) => {
  useEffect(() => {
    console.log(`The switch is now ${isOn ? "ON" : "OFF"}`);
  }, [isOn]);
  return (
    <div>
      <p className="text-2xl mt-2">The switch is {isOn ? "ON" : "OFF"}</p>
      <button className='border-solid border-1 border-white rounded-full bg-white p-2 w-[180px] mt-5' onClick={toggleSwitch}>Toggle from Child</button>
    </div>
  );
};

export default ChildComp;
