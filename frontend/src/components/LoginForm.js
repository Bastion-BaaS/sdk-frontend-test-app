import React, { useState } from "react";

const LoginForm = ({ onRegister, onLogin, onLogout }) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const changeUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  }

  const changePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }

  const handleRegister = () => {
    onRegister(username, password);
    clearInput();
  }

  const handleLogin = () => {
    onLogin(username, password);
    clearInput();
  }

  const handleLogout = () => {
    onLogout(username);
    clearInput();
  }

  const clearInput = () => {
    setUsername('');
    setPassword('');
  }

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={changeUsername}
        placeholder="username"
      />
      <input
        type="text"
        value={password}
        onChange={changePassword}
        placeholder="password"
      />
      <input
        type="submit"
        value="Register"
        onClick={handleRegister}
      />
      <input
        type="submit"
        value="Log in"
        onClick={handleLogin}
      />
      <input
        type="submit"
        value="Log out"
        onClick={handleLogout}
      />
    </div>
  )
};

export default LoginForm;