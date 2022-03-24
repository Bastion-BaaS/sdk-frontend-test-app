import React from "react";
import Register from './Register';
import Login from './Login';

const UserForm = ({ onRegister, onLogin, onLogout }) => {
  return (
    <div>
      <Register onRegister={onRegister}/>
      <br/>
      <br/>
      <Login onLogin={onLogin} onLogout={onLogout}/>
    </div>
  )
};

export default UserForm;