import React, { useState } from 'react';
import axios from 'axios';
import CollectionNameInput from './components/CollectionNameInput';
import CollectionItemInput from './components/CollectionItemInput';
import LoginForm from './components/LoginForm';

import initialize from 'bastion-sdk';
const bastion = initialize('http://localhost:3000', 'development');

const App = () => {
  const [ collections, setCollections ] = useState([]);
  const [ resultSection, setResultSection] = useState('');
	const [ fileState, setFileState ] = useState();
	const [ isFileSelected, setIsFileSelected ] = useState(false);

  const handleRegister = (username, password) => {
    bastion.auth.register(username, password)
      .then((result) => {
        setResultSection('User registered');
        console.log(result.data);
      })
  }

  const handleLogin = (username, password) => {
    bastion.auth.login(username, password)
      .then((result) => {
        setResultSection('Logged in');
        console.log(result.data);
      })
  }

  const handleLogout = (username) => {
    bastion.auth.logout(username)
      .then((result) => {
        setResultSection('Logged out');
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
        setCollections(collections.map(obj => {
          return obj.name === collectionName
            ? {...obj, data: obj.data.concat(result.data)}
            : obj;
        }));
      });
  }

  const handleOverwriteItem = (collectionName, itemId, itemJson) => {
    bastion.db.overwriteItem(collectionName, itemId, itemJson)
      .then((result) => {
        setResultSection(result.data);
        setCollections(collections.map(obj => {
          return {...obj, data: obj.data.map(item => item.id === Number(itemId)
            ? result.data
            : item)}
        }));
      });
  }

  const handleUpdateItem = (collectionName, itemId, itemJson) => {
    bastion.db.updateItem(collectionName, itemId, itemJson)
      .then((result) => {
        setResultSection(result.data);
        setCollections(collections.map(obj => {
          return {...obj, data: obj.data.map(item => item.id === Number(itemId)
            ? result.data
            : item)}
        }));
      });
  }

  const handleDeleteItem = (collectionName, itemId) => {
    bastion.db.deleteItem(collectionName, itemId)
      .then((result) => {
        setResultSection('Item deleted');
        setCollections(collections.map(obj => {
          return {...obj, data: obj.data.filter(item => item.id !== Number(itemId))};
        }));
      });
  }

  const handleUploadFile = (e) => {
    setFileState(e.target.files[0]);
    setIsFileSelected(true);
  }

  const handleSendFile = () => {
    if (!isFileSelected) {
      console.log('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', fileState)

    axios.post('whatever route you want',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(() => console.log('Success!'))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <LoginForm onRegister={handleRegister} onLogin={handleLogin} onLogout={handleLogout}/>

      <CollectionNameInput title='Get collection:' onSubmit={handleGetCollection}/>
      <CollectionItemInput title='Get collection item:' onSubmit={handleGetItem}/>
      <CollectionItemInput title='Create collection item:' onSubmit={handleCreateItem} isJson={true}/>
      <CollectionItemInput title='Update collection item (PATCH):' onSubmit={handleOverwriteItem} isUpdate={true}/>
      <CollectionItemInput title='Update collection item (PUT):' onSubmit={handleUpdateItem} isUpdate={true}/>
      <CollectionItemInput title='Delete collection item:' onSubmit={handleDeleteItem}/>

      <br/>
      <br/>

      <div>
        <input type='file' name='file' onChange={handleUploadFile}/>
        <button onClick={handleSendFile}>Submit File</button>
        {isFileSelected ?
          <p>{fileState.name}</p>
          : null
        }
      </div>

      <br/>
      <br/>

      <div>
        Your result:
        <p className="result">
          {JSON.stringify(resultSection)}
        </p>
      </div>

      
    </div>
  );
}

export default App;
