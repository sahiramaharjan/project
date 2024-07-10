import React, {useState} from 'react'
import CounterChild from './counter_child';
const CounterParent = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(prevCount => prevCount + 1);
    };
  
    const decrement = () => {
      setCount(prevCount => prevCount - 1);
    };
  
    return (
      <div className=' m-3 rounded-xl text-center border-solid border-2 border-black bg-green-300 p-4'>
        <h1 className='text-white text-4xl'>Counter</h1>
        <CounterChild count={count} increment={increment} decrement={decrement} />
        <button  className='border-solid border-1 border-white rounded-full bg-white p-2 w-[100px] mt-5' onClick={increment}>Increment</button>
        <button  className='border-solid border-1 border-white rounded-full bg-white p-2 w-[100px] mt-5 ml-3' onClick={decrement}>Decrement</button>
      </div>
    );
  };
  
  export default CounterParent;