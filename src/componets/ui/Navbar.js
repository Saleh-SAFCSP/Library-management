import React, { useContext } from 'react';
import {
  HStack,
  Flex,
  Text,
  Input,
  VStack,
  Image,
  Button,
} from '@chakra-ui/react';
import logo from '../../img/logobs.png';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
const Navbar = () => {
  const { deleteSession } = useContext(AuthContext);

  const navigate = useNavigate();
  const logout = async () => {
    const request = await fetch('/api/v1/logout');

    if (request.status === 204) {
      await deleteSession();
      navigate('/');
    }
  };
  return (
    <HStack
      justifyContent="space-between"
      width="100%"
      backgroundColor="#F9F9FC"
      height="13vh"
      px="35px"
    >
      <Link to="/home">
        <Image src={logo} width="80px" height="93px"></Image>
      </Link>
      <Text fontSize="20px" color="#121440" fontWeight="bold">
        Home
      </Text>
      <Text
        onClick={logout}
        cursor="pointer"
        fontSize="20px"
        color="#121440"
        fontWeight="bold"
      >
        Logout
      </Text>
    </HStack>
  );
};

export default Navbar;
