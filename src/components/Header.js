import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState('');
  return (
    <>
      <header className="flex items-center bg-black2 text-white h-24">
        <div className="flex-auto">
          <h1 className="text-4xl text-center font-semibold">Your Customer App</h1>
        </div>
      </header>
      <nav>
        <Link to='/users' className='border-black border-2'>
          <button>Users</button>
        </Link>
        <Link to='/collections' className='border-black border-2'>
          <button>Collections</button>
        </Link>
        <Link to='/files' className='border-black border-2 px-4'>
          <button>Files</button>
        </Link>
        <Link to='/cloudcode' className='border-black border-2'>
          <button>Cloud Code</button>
        </Link>
      </nav>
      <div className='flex flex-col items-center h-full' id='main'>
        <Outlet context={{loggedIn, setLoggedIn}} />
      </div>
    </>
  );
}

export default Header;
