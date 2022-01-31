import React, { useContext, useState } from 'react';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState('');

  const updateSession = async token => {
    localStorage.setItem('token', token);
    setSession(token);
  };

  const deleteSession = async () => {
    localStorage.removeItem('token');
    setSession(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ session, updateSession, setSession, deleteSession }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
