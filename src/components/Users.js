import React from "react";
import Register from './Register';
import Login from './Login';
import Logout from "./Logout";
import { useOutletContext } from "react-router-dom";


const UserForm = ({ bastion }) => {
  const setLoggedIn = useOutletContext().setLoggedIn;
  const loggedIn = useOutletContext().loggedIn;

  return (
    <div className="flex-auto flex flex-col items-center max-w-screen-lg pt-12 pb-2 mb-64 h-full">
      <p className="text-2xl text-black mb-2">User registration</p>
      <div className='flex flex-col h-1/2'>
        {loggedIn ?
          <Logout bastion={bastion} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        :
          <Login bastion={bastion} login= {setLoggedIn} />
        }
        <Register bastion={bastion} />
      </div>
    </div>
  )
};

export default UserForm;
