import React, { useState } from "react";

const FileInput = ({ title, onSubmit }) => {
  const [fileId, setFileId] = useState('');

  const changeCollection = (e) => {
    e.preventDefault();
    setFileId(e.target.value);
  }

  const handleSubmit = () => {
    onSubmit(fileId);
    setFileId('');
  }

  return (
    <div className='flex flex-col items-start w-full'>
      <div className='mt-4 flex flex-row items-start'>
        <div className='flex flex-col mr-6'>
          <label className='ml-2 inline-flex'>{title}</label>
          {title !== 'Get all files: ' &&
            <input
              className='border-blue3 text-black border-2 px-4 py-1 inline-flex rounded-xl'
              type="text"
              value={fileId}
              onChange={changeCollection}
              placeholder="file id here"
          />
          }
        </div>
      </div>
      <div className='mb-2 flex flex-row items-start'>
        <button
          className='py-1 px-4 mb-4 mt-2 bg-gray hover:bg-blue2 text-white rounded-xl'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  )
};

export default FileInput;
