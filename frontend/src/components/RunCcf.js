import React, { useState } from "react";

const RunCcf = ({ onSubmit }) => {
  const [ ccfName, setCcfName ] = useState('');
  const [ params, setParams ] = useState([]);

  const changeName = (e) => {
    e.preventDefault();
    setCcfName(e.target.value);
  }

  const changeParams = (e) => {
    e.preventDefault();
    setParams(e.target.value);
  }

  const handleSubmit = () => {
    const paramArray = getParams(params);
    onSubmit(ccfName, paramArray);
    setCcfName('');
  }

  const getParams = (paramString) => {
    return paramString.split(',').map(word => word.trim());
  }

  return (
    <div>
      Enter name of a cloud code function to get its result:
      <input
        type="text"
        value={ccfName}
        onChange={changeName}
        placeholder="function name"
      />
      <input
        type="text"
        value={params}
        onChange={changeParams}
        placeholder="list, optional, params"
      />
      <input
        type="submit"
        onClick={handleSubmit}
      />
    </div>
  )
};

export default RunCcf;