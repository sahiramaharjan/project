import React, { useEffect } from "react";

const MessageChild = ({isOn,UpdateMessage}) => {
  useEffect(() => {
    console.log(`The message is updated.`);
  }, [isOn]);
  return (
    <div>
      <p className="text-2xl mt-2">The current message is : {isOn ?"Hi! My name is Sahira." : "Bye! See You."}</p>
      <button className='border-solid border-1 border-white rounded-full bg-white p-2 w-[180px] mt-5' onClick={UpdateMessage}>Update from Child</button>
    </div>
  );
};

export default MessageChild;
