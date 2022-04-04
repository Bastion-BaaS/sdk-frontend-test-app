import React, { useState } from "react";

const FileForm = ({ onSend }) => {
	const [ fileState, setFileState ] = useState(null);
	const [ isFileSelected, setIsFileSelected ] = useState(false);

  const handleUploadFile = (e) => {
    setFileState(e.target.files[0]);
    setIsFileSelected(true);
  }

  const handleSendFile = (e) => {
    if (!isFileSelected) {
      alert('No file selected');
      return;
    }
    document.getElementById("file").value = '';
    onSend(fileState);
    setIsFileSelected(false);
    setFileState(null);
  }

  return (
    <div className='flex flex-col items-start w-full mt-4'>
      <input
        id='file'
        type='file'
        name='file'
        onChange={handleUploadFile}
      />
      <button
        className='py-1 px-4 mb-4 mt-2 bg-gray hover:bg-blue2 text-white rounded-xl'
        onClick={handleSendFile}
      >
        Submit
      </button>
    </div>
  )
};

export default FileForm;
