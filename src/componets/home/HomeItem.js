import React from 'react';
import {
  HStack,
  Flex,
  Text,
  Input,
  VStack,
  Image,
  Button,
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const HomeItem = ({ img, title, description, url }) => {
  return (
    <VStack
      justifyContent="center"
      backgroundColor="#F9F9FC"
      width="389px"
      align="left"
      cursor="pointer"
      p={5}
      borderRadius="10px"
      height="400px"
    >
      <Link to={`/${url}`}>
        <Image width="176px" height="110px" src={img}></Image>
        <Text color="#121440" fontSize="30px">
          Book
        </Text>
        <Text color="#B5B5B5">
          You can search about all the books that are available
        </Text>
      </Link>
    </VStack>
  );
};

export default HomeItem;
