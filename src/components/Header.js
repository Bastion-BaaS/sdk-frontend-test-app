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
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="flex space-x-4">
          <Link to='/users' className='text-gray-300 hover:bg-gray hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
            <button>Users</button>
          </Link>
          <Link to='/collections' className='text-gray-300 hover:bg-gray hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
            <button>Collections</button>
          </Link>
          <Link to='/files' className='text-gray-300 hover:bg-gray hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
            <button>Files</button>
          </Link>
          <Link to='/cloudcode' className='text-gray-300 hover:bg-gray hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
            <button>Cloud Code</button>
          </Link>
          <Link to='/stripe' className='text-gray-300 hover:bg-gray hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
            <button>Stripe</button>
          </Link>
        </div>
      </nav>
      <div className='flex flex-col items-center h-full' id='main'>
        <Outlet context={{loggedIn, setLoggedIn}} />
      </div>
    </>
  );
}

export default Header;
