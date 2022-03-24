import React, { useState } from "react";

const FileInput = ({ title, onSubmit }) => {
  const [ fileId, setFileId ] = useState('');

  const changeCollection = (e) => {
    e.preventDefault();
    setFileId(e.target.value);
  }

  const handleSubmit = () => {
    onSubmit(fileId);
    // setFileId('');
  }

  return (
    <div>
      <br></br>
      {title}
      <input
        type="text"
        value={fileId}
        onChange={changeCollection}
        placeholder="file ID"
      />
      <input
        type="submit"
        onClick={handleSubmit}
      />
    </div>
  )
};

export default FileInput;