import React from "react";

const Logout = ({ bastion, loggedIn, setLoggedIn }) => {

  const handleLogout = () => {
    bastion.auth.logout()
      .then(result => setLoggedIn(''))
  }

  return (
    <div>
      <div className='flex flex-col items-start mb-8'>
        <div>
          <button
            className='py-1 px-4 my-4 bg-gray hover:bg-blue2 text-white rounded-xl'
            onClick={handleLogout}
          >
            Logout
          </button>
          <p className="text-xl text-black mb-2">Current user is: <span className='text-blue2 font-semibold italic'></span>{loggedIn}</p>
        </div>
      </div>
    </div>
  )
};

export default Logout
