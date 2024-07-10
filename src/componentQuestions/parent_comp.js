import React, { useState } from 'react';
import ChildComp from './child_comp';

function ParentComp (){
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div className=' m-3 rounded-xl text-center border-solid border-2 border-black bg-blue-300 p-4'>
      <h1 className='text-white text-4xl'>Messsage Display</h1>
      <ChildComp isOn={isOn} toggleSwitch={toggleSwitch} />
      <button  className='border-solid border-1 border-white rounded-full bg-white p-2 w-[100px] mt-5' onClick={toggleSwitch}>Toggle</button>
    </div>
  );
};

export default ParentComp;
