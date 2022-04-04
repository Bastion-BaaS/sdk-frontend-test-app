import React, { useState } from "react";

const CollectionItemInput = ({ title, onSubmit, isCreate=false, isUpdate=false }) => {
  const [ collectionName, setCollectionName ] = useState('');
  const [ itemId, setItemId ] = useState('');
  const [ jsonInput, setJsonInput] = useState('');

  const isJson = isCreate || isUpdate;

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
    } else if (isCreate) {
      onSubmit(collectionName, jsonInput);
    } else {
      onSubmit(collectionName, itemId);
    }

    setCollectionName('');
    setItemId('');
  }

  return (
    <div className='flex flex-row items-start mb-6'>
      <div className='flex flex-col items-start w-full'>
        <label className='ml-2 inline-flex'>{title}</label>
        <input
          className='border-blue3 text-black border-2 px-4 py-1 inline-flex rounded-xl'
          type="text"
          value={collectionName}
          onChange={changeCollectionName}
          placeholder="collection name"
        />
      </div>
      <div className='flex flex-col items-start w-full ml-2'>
        {!isCreate &&
          <>
            <label className='ml-2 inline-flex'>Item Id</label>
            <input
              className='border-blue3 text-black border-2 px-4 py-1 inline-flex rounded-xl'
              type="text"
              value={itemId}
              onChange={changeItemId}
              placeholder="item id"
            />
          </>
        }
        {(isUpdate || isCreate) &&
          <div className='flex flex-col items-start w-full mt-2'>
            <label className='inline-flex ml-2'>Json</label>
            <input
              className='border-blue3 text-black border-2 px-4 py-1 inline-flex rounded-xl h-32'
              type="text"
              value={jsonInput}
              onChange={changeJsonInput}
              placeholder="json object"
            />
          </div>
        }
      </div>
      <div className='flex flex-row items-start h-full'>
        <button
          className='py-1 px-4 mt-6 ml-2 bg-gray hover:bg-blue2 text-white rounded-xl'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  )
};

export default CollectionItemInput;
