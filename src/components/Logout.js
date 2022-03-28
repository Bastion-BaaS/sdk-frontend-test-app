import React from "react";

const Logout = ({currentUser, onLogout, clearInput }) => {

  const handleLogout = () => {
    onLogout(currentUser);
    clearInput();
  }

  return (
    <div>
      <div className='flex flex-col items-start mb-8'>
        {
          currentUser &&
          <div>
            <button
              className='py-1 px-4 my-4 bg-gray hover:bg-blue2 text-white rounded-xl'
              onClick={handleLogout}
            >
              Register
            </button>
            <p className="text-xl text-black mb-2">Current user is: <span className='text-blue2 font-semibold italic'>{currentUser}</span></p>
          </div>
        }
      </div>
    </div>
  )
};

export default Logout
