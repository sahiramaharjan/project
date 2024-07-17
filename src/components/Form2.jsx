import React, { useState } from "react";

const Form2 = ({ nextStep, prevStep, handleChange, values }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!values.email) tempErrors.email = "Email is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) nextStep();
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center m-8 p-3">
      <div className=' flex flex-col justify-center items-center p-3  w-[450px] h-[350px] rounded-md bg-blue-300'>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Step-2   </h2>
       <div className="mb-4">
       <label className=" text-gray-700 text-sm font-bold mb-2">Email:</label>
        <input type="email" name="email" value={values.email} onChange={handleChange} className="border ml-4 p-2 rounded-lg" />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
       </div> 
      <div>
        <label className=" text-gray-700 text-sm font-bold mb-2">Phone:</label>
        <input type="text" name="phone" value={values.phone} onChange={handleChange} className="border ml-4 p-2 rounded-lg" />
      </div>
      <div>
      <button type="button" onClick={prevStep} className="bg-gray-500 text-white w-[100px] rounded-lg p-2 mt-6 ml-6">Back</button>
      <button type="submit" className="bg-blue-900 text-white w-[100px] rounded-xl p-2 mt-6 ml-7">Next</button>
      </div>
    </div>
    </form>
  )
};

export default Form2;
