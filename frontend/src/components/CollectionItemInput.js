import React, { useState } from "react";

const CollectionItemInput = ({ title, onSubmit, isJson=false, isUpdate=false }) => {
  const [ collectionName, setCollectionName ] = useState('');
  const [ itemId, setItemId ] = useState('');
  const [ jsonInput, setJsonInput] = useState('');

  const changeCollectionName = (e) => {
    e.preventDefault();
    setCollectionName(e.target.value);
  }

  const changeItemId = (e) => {
    e.preventDefault();
    setItemId(e.target.value);
  }

  const changeJsonInput = (e) => {
    e.preventDefault();
    setJsonInput(e.target.value);
  }

  const handleSubmit = () => {
    if (isUpdate) {
      onSubmit(collectionName, itemId, jsonInput);
      setJsonInput('');
    } else {
      onSubmit(collectionName, itemId)
    }
    setCollectionName('');
    setItemId('');
  }

  return (
    <div>
      <br></br>
      {title}
      <input
        type="text"
        value={collectionName}
        onChange={changeCollectionName}
        placeholder="collection name"
      />
      <input
        type="text"
        value={itemId}
        onChange={changeItemId}
        placeholder={isJson ? "json object" : "item id"}
      />
      {isUpdate ?
        <input
          type="text"
          value={jsonInput}
          onChange={changeJsonInput}
          placeholder="json object"
        />
        : null
      }
      <input
        type="submit"
        onClick={handleSubmit}
      />
    </div>
  )
};

export default CollectionItemInput;