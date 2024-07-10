import React, { useState } from 'react';
import MessageChild from './message_child';

function MessageParent (){
  const [isOn, setIsOn] = useState("");

  const UpdateMessage = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div className=' m-3 rounded-xl text-center border-solid border-2 border-black bg-blue-300 p-4'>
      <h1 className='text-white text-4xl'>Message Display </h1>
      <MessageChild isOn={isOn} UpdateMessage={UpdateMessage} />
      <button  className='border-solid border-1 border-white rounded-full bg-white p-2 w-[100px] mt-5' onClick={UpdateMessage}>Update</button>
    </div>
  );
};

export default MessageParent;
