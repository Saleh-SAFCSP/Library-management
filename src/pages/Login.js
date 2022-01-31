import React, { useState, useEffect, useContext } from 'react';
import {
  HStack,
  Flex,
  Text,
  Input,
  VStack,
  Image,
  Button,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import logo from '../img/logobs.png';
import AuthContext from '../context/AuthContext';
import { successAlertTimer, errorAlert } from '../util/alerts';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { updateSession } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/home');
    }
  }, []);

  const onClick = async e => {
    try {
      const request = await fetch('/api/v1/auth/login', {
        headers: {
          Authorization: `Basic ${btoa(username + ':' + password)}`,
        },
        method: 'POST',
      });
      const data = await request.json();
      if (request.status === 200) {
        successAlertTimer('Welcome back !');
        await updateSession(data.message);
        navigate('/home');
      } else {
        errorAlert(data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <HStack height="100vh">
      <Flex
        height="100%"
        width="50%"
        alignItems="center"
        justifyContent="center"
      >
        <VStack align="left" gap="20px" width="450px">
          <Text color="#121440" fontSize="70px" fontWeight="bold">
            Hello !
          </Text>
          <Input
            height="50px"
            placeholder="Please enter your username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          ></Input>
          <Input
            height="50px"
            placeholder="Please enter your password"
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
          ></Input>
          <Button
            _hover={{ backgroundColor: '#121440' }}
            width="180px"
            color="white"
            backgroundColor="#121440"
            onClick={onClick}
          >
            Login !
          </Button>
          <HStack>
            <Text color="#A8A6AF">You don't have account ?</Text>
            <Text color="#121440">Register !</Text>
          </HStack>
        </VStack>
      </Flex>

      <Flex
        height="100%"
        width="50%"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#F9F9FC"
      >
        <Image src={logo} height="555px" width="493px" alt="Logo"></Image>
      </Flex>
    </HStack>
  );
};

export default Login;
