import React, { useState } from "react";

const Register = ({ bastion, setResultSection }) => {
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const changeInput = (e, setter) => {
    e.preventDefault();
    setter(e.target.value);
  }

  const clearInput = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  }

  const handleRegister = () => {
    bastion.auth.register(username, email, password)
      .then((result) => {
        console.log(result.data);
      })
    clearInput();
  }

  return (
    <div className='flex flex-col items-start'>
      <div className='mt-4 flex flex-row items-start'>
        <div className='flex flex-col mr-6'>
          <label htmlFor='username' className='ml-2 inline-flex'>Username</label>
          <input
            className='border-blue3 text-black border-2 px-4 py-1 inline-flex rounded-xl'
            name='username'
            type="text"
            value={username}
            onChange={(e) => changeInput(e, setUsername)}
            placeholder="enter name here"
          />
        </div>
        <div className='flex flex-col mr-6'>
          <label htmlFor='user-email' className='ml-2 inline-flex'>Email</label>
          <input
            className='border-blue3 text-black border-2 px-4 py-1 inline-flex rounded-xl'
            name='user-email'
            type="text"
            value={email}
            onChange={(e) => changeInput(e, setEmail)}
            placeholder="example@gmail.com"
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='user-password' className='ml-2 inline-flex'>Password</label>
          <input
            className='border-blue3 text-black border-2 px-4 py-1 inline-flex rounded-xl'
            name='user-password'
            type="text"
            value={password}
            onChange={(e) => changeInput(e, setPassword)}
            placeholder="password"
          />
        </div>
      </div>
      <div className='mb-12 flex flex-row items-start'>
        <button
          className='py-1 px-4 my-4 bg-gray hover:bg-blue2 text-white rounded-xl'
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  )
};

export default Register;
