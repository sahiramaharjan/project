import React, { useEffect } from 'react';

const CounterChild = ({ count, increment, decrement }) => {
  useEffect(() => {
    console.log(`The count is now ${count}`);
  }, [count]);

  return (
    <div>
      <p className="text-2xl mt-2">Current count: {count}</p>
      <button  className='border-solid border-1 border-white rounded-full bg-white p-2 w-[200px] mt-5' onClick={increment}>Increment from Child</button>
      <button  className='border-solid border-1 border-white rounded-full bg-white p-2 w-[200px] mt-5 ml-3' onClick={decrement}>Decrement from Child</button>
    </div>
  );
};

export default CounterChild;
