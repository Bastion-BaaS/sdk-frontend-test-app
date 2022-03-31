import React from "react";
import Register from './Register';
import Login from './Login';


const UserForm = ({ onRegister, onLogin, onLogout }) => {
  return (
    <div>
      <div className='flex flex-col h-1/2'>
        <Login onLogin={onLogin} onLogout={onLogout}/>
        <Register onRegister={onRegister}/>
      </div>
    </div>
  )
};

export default UserForm;
