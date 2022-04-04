import React, { useState } from "react";
import FileInput from "./FileInput";
import FileForm from "./FileForm";
import ReactJson from "react-json-view";

const Files = ({ bastion }) => {
  const [allFiles, setAllFiles] = useState([]);
  const [fileURL, setFileURL] = useState('');

  const handleGetAllFiles = () => {
    bastion.storage.getAllFiles()
    .then((result) => {
      setAllFiles(result.data)
    });
  }

  const handleGetFile = (fileId) => {
    bastion.storage.getFile(fileId)
    .then((result) => {
      try {
        setFileURL(result.data.url);
      } catch {
        alert('File not found')
        setFileURL('');
      }
    });
  }

  const handleDeleteFile = (fileId) => {
    bastion.storage.deleteFile(fileId)
    .then((result) => {
      alert('File deleted')
      console.log(result.data)
    });
  }

  const handleSendFile = (fileState) => {
    bastion.storage.uploadFile(fileState, fileState.name)
      .then((result) => {
        console.log(result.data)
      });
  }

  return (
    <div className="flex flex-row">
      <div className="flex-auto flex flex-col items-center max-w-screen-lg pt-12 pb-2 mb-64 w-1/2 h-full">
        <p className="text-2xl text-black mb-4">Files</p>
        {/* WE SHOULD SHOW CONTENTS OF A FILE HERE, PROBABLY AN IMAGE */}
        {/* WE PROBABLY DONT NEED TO GET ALL */}
        <FileInput title='Get all files: ' onSubmit={handleGetAllFiles}/>
        <FileInput title='Get a file' onSubmit={handleGetFile}/>
        <img src={fileURL} />
        <FileInput title='Delete a file' onSubmit={handleDeleteFile}/>
        <FileForm onSend={handleSendFile}/>
      </div>
      <div className="py-32 px-8 border-black border-1 items-start max-w-sm">
          <p>All Files</p>
          <ReactJson displayDataTypes={false} src={allFiles} name={null} enableClipboard={false} />
        </div>
    </div>
  )
};

export default Files;
