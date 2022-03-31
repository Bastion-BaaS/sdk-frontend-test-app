import React, { useState } from 'react';
import CollectionNameInput from './components/CollectionNameInput';
import CollectionItemInput from './components/CollectionItemInput';
import UserForm from './components/UserForm';
import RunCcf from './components/RunCcf';
import FileForm from './components/FileForm';
import FileInput from './components/FileInput';
import Header from './components/Header';
import initialize from 'bastion-sdk';

const bastion = initialize('http://localhost:3000', 'development');

const App = () => {
  const [ resultSection, setResultSection] = useState('');

  const handleRegister = (username, email, password) => {
    bastion.auth.register(username, email, password)
      .then((result) => {
        setResultSection(result.data);
        console.log(result.data);
      })
  }

  const handleLogin = (username, email, password) => {
    bastion.auth.login(username, email, password)
      .then((result) => {
        setResultSection(result.data);
        console.log(result.data);
      })
  }

  const handleLogout = () => {
    bastion.auth.logout()
      .then((result) => {
        setResultSection(result.data);
        console.log(result.data);
      })
  }

  const handleGetCollection = (collectionName) => {
    bastion.db.getAllItems(collectionName)
      .then((result) => {
        setResultSection(result.data);
        console.log(result.data);
      });
  }

  const handleGetItem = (collectionName, itemId) => {
    bastion.db.getItem(collectionName, itemId)
      .then((result) => {
        setResultSection(result.data);
        console.log(result.data);
      });
  }

  const handleCreateItem = (collectionName, itemJson) => {
    bastion.db.createItem(collectionName, itemJson) // assume valid json
      .then((result) => {
        setResultSection(result.data);
        console.log(result.data);
      });
  }

  const handleOverwriteItem = (collectionName, itemId, itemJson) => {
    bastion.db.overwriteItem(collectionName, itemId, itemJson)
      .then((result) => {
        setResultSection(result.data);
        console.log(result.data);
      });
  }

  const handleUpdateItem = (collectionName, itemId, itemJson) => {
    bastion.db.updateItem(collectionName, itemId, itemJson)
      .then((result) => {
        setResultSection(result.data);
        console.log(result.data);
      });
  }

  const handleDeleteItem = (collectionName, itemId) => {
    bastion.db.deleteItem(collectionName, itemId)
      .then((result) => {
        setResultSection('Item deleted');
        console.log(result.data);
      });
  }

  const handleRunCcf = (functionName, params) => {
    bastion.ccf.run(functionName, params)
      .then((result) => {
        setResultSection(result.data);
        console.log(result.data);
      });
  }

  const handleGetAllFiles = () => {
    bastion.storage.getAllFiles()
    .then((result) => {
      setResultSection(result.data);
      console.log(result.data)
    });
  }

  const handleGetFile = (fileId) => {
    bastion.storage.getFile(fileId)
    .then((result) => {
      setResultSection(result.data);
      console.log(result.data)
    });
  }

  const handleSendFile = (fileState) => {
    bastion.storage.uploadFile(fileState)
      .then((result) => {
        setResultSection(result.data);
        console.log(result.data)
      });
  }

  const handleDeleteFile = (fileId) => {
    bastion.storage.deleteFile(fileId)
    .then((result) => {
      setResultSection('Deleted');
      console.log(result.data)
    });
  }

  return (
    <div className='h-screen'>
      <Header />
      <div className='flex flex-col items-center h-full' id='main'>
        {/* PAGE /USERS */}
        <div className="flex-auto flex flex-col items-center max-w-screen-lg pt-12 pb-2 mb-64 h-full">
          <p className="text-2xl text-black mb-2">User registration</p>
          <UserForm onRegister={handleRegister} onLogin={handleLogin} onLogout={handleLogout}/>
        </div>
        {/* END OF PAGE /USERS */}

        {/* PAGE /COLLECTIONS */}
        <div className="flex-auto flex flex-col items-center max-w-screen-lg pt-12 pb-2 mb-64 h-full">
          <p className="text-2xl text-black mb-2">Data operations</p>
        {/* CAN WE PUT JSON DISPLAY THING AT THE TOP HERE TO SHOW RESULTANT DATA? */}
          <div className='flex flex-col items-start'>
            <CollectionNameInput title='Get all records of a collection' onSubmit={handleGetCollection}/>
            <CollectionItemInput title='Get collection item' onSubmit={handleGetItem}/>
            <CollectionItemInput title='Create collection item' onSubmit={handleCreateItem} isJson={true}/>
            <CollectionItemInput title='PATCH a collection item' onSubmit={handleOverwriteItem} isUpdate={true}/>
            <CollectionItemInput title='PUT a collection item' onSubmit={handleUpdateItem} isUpdate={true}/>
            <CollectionItemInput title='Delete collection item' onSubmit={handleDeleteItem}/>
          </div>
        </div>
        {/* END OF PAGE /COLLECTIONS */}

        {/* PAGE /CCFS */}
        {/* WE CAN LOOK INTO STRIPE PAYMENT API TEST METHOD AND DEMO GETTING PAYMENT (INTERESTING CHALLENGE) */}
        {/* OR CURSED WORDS */}
        <div className="flex-auto flex flex-col items-center max-w-screen-lg pt-12 pb-2 mb-64 w-1/2 h-full">
          <p className="text-2xl text-black mb-4">Cloud Code Functions</p>
          <RunCcf onSubmit={handleRunCcf}/>
        </div>
        {/* PAGE /CCFS */}


        {/* PAGE /FILES */}
        <div className="flex-auto flex flex-col items-center max-w-screen-lg pt-12 pb-2 mb-64 w-1/2 h-full">
          <p className="text-2xl text-black mb-4">Files</p>
          {/* WE SHOULD SHOW CONTENTS OF A FILE HERE, PROBABLY AN IMAGE */}
          {/* WE PROBABLY DONT NEED TO GET ALL */}
          {/* <FileInput title='Get all files: ' onSubmit={handleGetAllFiles}/> */}
          <FileInput title='Get a file' onSubmit={handleGetFile}/>
          <FileInput title='Delete a file' onSubmit={handleDeleteFile}/>
          <FileForm onSend={handleSendFile}/>
        </div>
        {/* PAGE /FILES */}
      </div>
    </div>
  );
}

export default App;
