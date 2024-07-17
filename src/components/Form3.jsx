import React from 'react'

const Form3 = ({ nextStep, prevStep, handleChange, values }) => {
  return (
    <form onSubmit={nextStep} className="flex justify-center items-center m-8 p-3">
      <div className=' flex flex-col justify-center items-center p-3  w-[450px] h-[350px] rounded-md bg-blue-300'>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Step-3 </h2>
        <label className="text-3xl font-bold mb-6 text-gray-800">Event:</label>
        <select name="event" value={values.event} onChange={handleChange} className="border ml-4 p-2 w-[300px] rounded-lg">
          <option value="">Select an event</option>
          <option value="event1">Event 1</option>
          <option value="event2">Event 2</option>
        </select>
        <div>
        <button type="button" onClick={prevStep} className="bg-gray-500 text-white w-[100px] rounded-lg p-2 mt-6 ml-6">Back</button>
        <button type="submit" className="bg-blue-900 text-white w-[100px] rounded-xl p-2 mt-6 ml-7">Next</button>
        </div>
      </div> 
    </form>
  )
}

export default Form3