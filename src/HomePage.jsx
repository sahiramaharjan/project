import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
    <img className='relative w-full h-full' src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='event'/>
      <h1 className=" absolute  text-white text-4xl font-bold mb-4">Welcome to the Event Registration</h1>
            <Link to="/register" className=" absolute bg-blue-500 text-white mt-[100px] p-4 rounded-lg">
              Register Now
            </Link>
          </div>
        );
      };

      export default HomePage;