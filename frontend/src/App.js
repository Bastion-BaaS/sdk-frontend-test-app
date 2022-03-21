import React, { useState, useEffect } from 'react';
import CollectionNameInput from './components/CollectionNameInput';
import CollectionItemInput from './components/CollectionItemInput';

import initialize from './bastion-sdk-test/src/index';
const bastion = initialize('http://localhost:3002', '12345');

const App = () => {
  const [ collections, setCollections ] = useState([]);
  const [ resultSection, setResultSection] = useState('');

  useEffect(() => {
    bastion.db.getCollections().then((result) => setCollections(result.data));
  }, []);

  const handleGetCollection = (collectionName) => {
    bastion.db.getCollection(collectionName)
      .then((result) => {
        setResultSection(result.data);
        console.log(result.data);
      });
  }

  const handleCreateCollection = (collectionName) => {
    bastion.db.createCollection(collectionName)
      .then((result) => {
        setResultSection(result.data);
        setCollections(collections.concat(result.data))
        console.log(result.data);
      });
  }

  const handleDeleteCollection = (collectionName) => {
    bastion.db.deleteCollection(collectionName)
      .then((result) => {
        setResultSection('Collection deleted');
        setCollections(collections.filter(obj => obj.name !== collectionName));
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

  return (
    <div>
      All collections:
      <ul>
      {collections.length > 0 ?
        collections.map(collection => 
          <>
            <li>{collection.name}</li>
            <div>
              {collection.data.map(resource =>
                <p>{JSON.stringify(resource)}</p>
              )}
            </div>
          </>
        )
      : null
      }
      </ul>

      <br/>
      <br/>

      <CollectionNameInput title='Get collection:' onSubmit={handleGetCollection}/>
      <CollectionNameInput title='Create collection:' onSubmit={handleCreateCollection}/>
      <CollectionNameInput title='Delete collection:' onSubmit={handleDeleteCollection}/>

      <CollectionItemInput title='Get collection item:' onSubmit={handleGetItem}/>
      <CollectionItemInput title='Create collection item:' onSubmit={handleCreateItem} isJson={true}/>
      <CollectionItemInput title='Update collection item:' onSubmit={handleUpdateItem} isUpdate={true}/>
      <CollectionItemInput title='Delete collection item:' onSubmit={handleDeleteItem}/>

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
