import React, { useState } from "react";

const RunCcf = ({ onSubmit }) => {
  const [ ccfName, setCcfName ] = useState('');
  const [ params, setParams ] = useState([]);

  const changeName = (e) => {
    e.preventDefault();
    setCcfName(e.target.value);
  }

  const changeParams = (e) => {
    e.preventDefault();
    setParams(e.target.value);
  }

  const handleSubmit = () => {
    const paramArray = getParams(params);
    onSubmit(ccfName, paramArray);
    setCcfName('');
  }

  const getParams = (paramString) => {
    return paramString.split(',').map(word => word.trim());
  }

  return (
    // CAN WE USE FORMATTED JSON DISPLAY PANEL TO LOG THE CCF RESULT HERE?
    // NOT A PRIO, WE CAN STRUCTURE THIS SECTION DEPENDING ON WHAT WE ARE GOING TO SHOW IN OUR DEMO
    <div className='flex flex-col items-start w-full'>
      <div className='mt-4 flex flex-row items-start'>
        <div className='flex flex-col mr-6'>
          <label className='ml-2 inline-flex'>Enter the Cloud-code function name</label>
          <input
            className='border-blue3 text-black border-2 px-4 py-1 inline-flex rounded-xl'
            type="text"
            value={ccfName}
            onChange={changeName}
            placeholder="function name"
          />
        </div>
        <div className='flex flex-col mr-6'>
          <label className='ml-2 inline-flex'>Params</label>
          <input
            className='border-blue3 text-black border-2 px-4 py-1 inline-flex rounded-xl'
            type="text"
            value={params}
            onChange={changeParams}
            placeholder="list, optional, params"
          />
        </div>
      </div>
      <div className='mb-2 flex flex-row items-start'>
        <button
          className='py-1 px-4 my-4 bg-gray hover:bg-blue2 text-white rounded-xl'
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
    </div>
  )
};

export default RunCcf;
