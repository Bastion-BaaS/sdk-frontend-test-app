import React, { useState } from "react";

const CollectionNameInput = ({ title, bastion, setActiveCollection }) => {
  const [ collectionName, setCollectionName ] = useState('');

  const changeCollection = (e) => {
    e.preventDefault();
    setCollectionName(e.target.value);
  }

  const handleSubmit = () => {
    bastion.db.getAllItems(collectionName)
      .then(result => setActiveCollection(result.data));
  }

  return (
    <div className='flex flex-row items-end mb-6'>
      <div className='flex flex-col items-start w-full'>
        <label htmlFor='getcollections' className='ml-2 inline-flex'>{title}</label>
        <input
          className='border-blue3 text-black border-2 px-4 py-1 inline-flex rounded-xl'
          name='getcollections'
          type="text"
          value={collectionName}
          onChange={changeCollection}
          placeholder="collection name"
        />
      </div>
      <div className='mb-1 flex flex-row items-start'>
        <button
          className='py-1 px-4 bg-gray hover:bg-blue2 text-white rounded-xl'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  )
};

export default CollectionNameInput;
