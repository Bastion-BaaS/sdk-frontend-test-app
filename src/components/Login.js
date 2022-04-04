import React, { useState } from "react";

const Login = ({ bastion, login }) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const changeInput = (e, setter) => {
    e.preventDefault();
    setter(e.target.value);
  }

  const clearInput = () => {
    setUsername('');
    setPassword('');
  }

  const handleLogin = () => {
    bastion.auth.login(username, password)
      .then(result => {
        if (result.data) {
          login(username);
        } else {
          console.log('login failed');
        }
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
            placeholder="your user name here"
          />
        </div>
        <div className='flex flex-col mr-6'>
        <label htmlFor='user-password' className='ml-2 inline-flex'>Password</label>
          <input
            className='border-blue3 text-black border-2 px-4 py-1 inline-flex rounded-xl'
            name='password'
            type="text"
            value={password}
            onChange={(e) => changeInput(e, setPassword)}
            placeholder="*******"
          />
        </div>
      </div>
      <div className='mb-2 flex flex-row items-start'>
        <button
          className='py-1 px-4 my-4 bg-gray hover:bg-blue2 text-white rounded-xl'
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
      
    </div>
  )
};

export default Login;
