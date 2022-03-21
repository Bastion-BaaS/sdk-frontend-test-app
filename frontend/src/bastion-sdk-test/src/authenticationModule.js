export const authModule = (sendRequest) => {
  const register = (email, password) => {
    return sendRequest('/register', 'POST', { email, password })
  };
  
  const login = (email, password) => {
    return sendRequest('/login', 'POST', { email, password })
  };

  const logout = () => {
    return sendRequest('/logout', 'POST');
  };

  const resetPassword = (email, oldPassword, newPassword) => {
    return sendRequest('/reset', 'PUT', { email, oldPassword, newPassword });
  };

  return {
    register,
    login,
    logout,
    resetPassword,
  };
}