import React, { useState } from "react";

const FileForm = ({ onSend }) => {
	const [ fileState, setFileState ] = useState(null);
	const [ isFileSelected, setIsFileSelected ] = useState(false);

  const handleUploadFile = (e) => {
    setFileState(e.target.files[0]);
    setIsFileSelected(true);
  }

  const handleSendFile = () => {
    if (!isFileSelected) {
      console.log('No file selected');
      return;
    }

    onSend(fileState);
    setIsFileSelected(false);
    setFileState(null);
  }

  return (
    <div>
      <input type='file' name='file' onChange={handleUploadFile}/>
      <button onClick={handleSendFile}>Submit File</button>
        {isFileSelected ?
          <p>{fileState.name}</p>
          : null
        }
    </div>
  )
};

export default FileForm;