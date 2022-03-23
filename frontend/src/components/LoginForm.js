import React, { useState } from "react";

const LoginForm = ({ onRegister, onLogin, onLogout }) => {
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const changeInput = (e, setter) => {
    e.preventDefault();
    setter(e.target.value);
  }

  const clearInput = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  }

  // all 3 are required
  const handleRegister = () => {
    onRegister(username, email, password);
    clearInput();
  }

  // login only needs username and password
  const handleLogin = () => {
    onLogin(username, email, password);
    clearInput();
  }

  const handleLogout = () => {
    onLogout(username);
    clearInput();
  }

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => changeInput(e, setUsername)}
        placeholder="username"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => changeInput(e, setEmail)}
        placeholder="email"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => changeInput(e, setPassword)}
        placeholder="password"
      />
      <input type="submit" value="Register" onClick={handleRegister}/>
      <input type="submit" value="Log in" onClick={handleLogin}/>
      <input type="submit" value="Log out" onClick={handleLogout}/>
    </div>
  )
};

export default LoginForm;