import React, {useState} from 'react'

const Form1 = ({nextStep,handleChange, values}) => {
    const [errors, setErrors] = useState({});

    const validate = () => {
      let tempErrors = {};
      if (!values.firstName) tempErrors.firstName = "First Name is required";
      if (!values.lastName) tempErrors.lastName = "Last Name is required";
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
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Step-1 </h2>
        <div className='mb-4'>
        <label className=" text-gray-700 text-sm font-bold mb-2">First Name:</label>
        <input type="text" name="firstName" value={values.firstName} onChange={handleChange} className="border ml-4 p-2 rounded-lg" />
        {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
        </div>
        
      <div className='mb-4'>
        <label className=" text-gray-700 text-sm font-bold mb-2">Last Name:</label>
        <input type="text" name="lastName" value={values.lastName} onChange={handleChange} className="border ml-4 p-2 rounded-lg" />
        {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
      </div>
      <div>
      <button type="submit" className="bg-blue-900 text-white w-[100px] rounded-xl p-2 mt-4">Next</button>
      </div>
      </div>
    </form>
  )
}

export default Form1