import React, { useState } from "react";

const Login = ({ onLogin, onLogout }) => {
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
    onLogin(username, password);
    clearInput();
  }

  const handleLogout = () => {
    onLogout(username);
    clearInput();
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => changeInput(e, setUsername)}
          placeholder="username"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => changeInput(e, setPassword)}
          placeholder="password"
        />
        <input type="submit" value="Log in" onClick={handleLogin}/>
      </div>

      <br/>
      <br/>
      
      <div>
        <input type="submit" value="Log out" onClick={handleLogout}/>
      </div>
    </div>
  )
};

export default Login;