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
    <div>
      <Header />
      <div className='flex flex-col items-center' id='main'>

        <p className="text-xl text-black mb-4">User registration</p>
        <UserForm onRegister={handleRegister} onLogin={handleLogin} onLogout={handleLogout}/>

        <br/>
        <br/>

        <CollectionNameInput title='Get collection: ' onSubmit={handleGetCollection}/>
        <CollectionItemInput title='Get collection item: ' onSubmit={handleGetItem}/>
        <CollectionItemInput title='Create collection item: ' onSubmit={handleCreateItem} isJson={true}/>
        <CollectionItemInput title='Update collection item (PATCH): ' onSubmit={handleOverwriteItem} isUpdate={true}/>
        <CollectionItemInput title='Update collection item (PUT): ' onSubmit={handleUpdateItem} isUpdate={true}/>
        <CollectionItemInput title='Delete collection item: ' onSubmit={handleDeleteItem}/>

        <br/>
        <br/>

        <RunCcf onSubmit={handleRunCcf}/>

        <br/>
        <br/>

        <FileInput title='Get all files: ' onSubmit={handleGetAllFiles}/>
        <FileInput title='Get file: ' onSubmit={handleGetFile}/>
        <FileInput title='Delete file: ' onSubmit={handleDeleteFile}/>

        <br/>
        <br/>

        <FileForm onSend={handleSendFile}/>

        <br/>
        <br/>

        <div>
          Your result:
          <p className="result">
            {JSON.stringify(resultSection)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
