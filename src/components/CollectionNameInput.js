import React, { useState } from "react";

const CollectionNameInput = ({ title, onSubmit }) => {
  const [ collectionName, setCollectionName ] = useState('');

  const changeCollection = (e) => {
    e.preventDefault();
    setCollectionName(e.target.value);
  }

  const handleSubmit = () => {
    onSubmit(collectionName);
    // setCollectionName('');
  }

  return (
    <div>
      <br></br>
      {title}
      <input
        type="text"
        value={collectionName}
        onChange={changeCollection}
        placeholder="collection name"
      />
      <input
        type="submit"
        onClick={handleSubmit}
      />
    </div>
  )
};

export default CollectionNameInput;