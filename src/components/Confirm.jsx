import React from 'react'

const Confirm = ({ values, prevStep, submit }) => {
  return (
    <div className="flex justify-center items-center m-8 p-3">
    <div className=' flex flex-col justify-center items-center p-3  w-[450px] h-[350px] rounded-md bg-blue-300'>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Confirmation</h2>
      <ul className='text-justify'>
        <li><strong>First Name:</strong> {values.firstName}</li>
        <li><strong>Last Name:</strong> {values.lastName}</li>
        <li><strong>Email:</strong> {values.email}</li>
        <li><strong>Phone:</strong> {values.phone}</li>
        <li><strong>Event:</strong> {values.event}</li>
      </ul>
      <div>
      <button type="button" onClick={prevStep} className="bg-gray-500 text-white w-[100px] rounded-lg p-2 mt-6 ml-6">Back</button>
      <button type="button" onClick={submit} className="bg-green-500 text-white w-[100px] rounded-xl p-2 mt-6 ml-7">Confirm</button>
      </div>
    </div>
    </div>
  )
}

export default Confirm