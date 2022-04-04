import React, { useState } from "react";
import CollectionItemInput from "./CollectionItemInput";
import CollectionNameInput from "./CollectionNameInput";
import ReactJson from "react-json-view";

const Collections = ({ bastion }) => {
  const [activeItem, setActiveItem] = useState({});
  const [activeCollection, setActiveCollection] = useState([])
  const handleGetItem = (collectionName, itemId) => {
    bastion.db.getItem(collectionName, itemId)
      .then(result => setActiveItem(result.data));
  }

  const handleCreateItem = (collectionName, itemJson) => {
    console.log(typeof itemJson)
    bastion.db.createItem(collectionName, JSON.parse(itemJson)) // assume valid json
      .then(result => console.log(result.data))
      .catch(() => console.log('catch'))
  }

  const handleOverwriteItem = (collectionName, itemId, itemJson) => {
    bastion.db.overwriteItem(collectionName, itemId, itemJson)
      .then(result => console.log(result.data));
  }

  const handleUpdateItem = (collectionName, itemId, itemJson) => {
    bastion.db.updateItem(collectionName, itemId, itemJson)
      .then(result => console.log(result.data));
  }

  const handleDeleteItem = (collectionName, itemId) => {
    bastion.db.deleteItem(collectionName, itemId)
      .then(result => console.log(result.data));
  }

  return (
    <div className="flex-auto flex flex-row max-w-screen-lg pt-12 pb-2 mb-64 h-full">
      {/* <p className="text-2xl text-black mb-2">Data operations</p> */}
    {/* CAN WE PUT JSON DISPLAY THING AT THE TOP HERE TO SHOW RESULTANT DATA? */}
      <div className='flex flex-col items-start'>
        <CollectionNameInput title='Get all records of a collection' bastion={bastion} setActiveCollection={setActiveCollection} />
        <CollectionItemInput title='Get collection item' onSubmit={handleGetItem}/>
        <CollectionItemInput title='Create collection item' onSubmit={handleCreateItem} isJson={true} isCreate={true}/>
        <CollectionItemInput title='PATCH a collection item' onSubmit={handleOverwriteItem} isUpdate={true}/>
        <CollectionItemInput title='PUT a collection item' onSubmit={handleUpdateItem} isUpdate={true}/>
        <CollectionItemInput title='Delete collection item' onSubmit={handleDeleteItem}/>
      </div>
      <div className="px-8 border-black border-1 items-start">
        <p>Current Collection</p>
        <ReactJson displayDataTypes={false} src={activeCollection} name={null} enableClipboard={false} />
      </div>
      <div className="px-8 border-black border-1 items-start">
        <p>Collection Item</p>
        <ReactJson displayDataTypes={false} src={activeItem} name={null} enableClipboard={false} />
      </div>
    </div>
  )
};

export default Collections;
