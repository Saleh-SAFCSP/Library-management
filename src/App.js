import React, { useState, useEffect, useContext } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import RequireAuth from './componets/RequireAuth';
import NotFound from './pages/NotFound';
import Books from './pages/Books';
import AuthContext from './context/AuthContext';

function App() {
  const { session, setSession } = useContext(AuthContext);

  useEffect(() => {
    if (!session && localStorage.getItem('token')) {
      setSession(localStorage.getItem('token'));
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/books" element={<Books />}></Route>
        </Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
