import React, { useContext } from 'react';
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
import logo from '../img/logobs.png';
import Navbar from '../componets/ui/Navbar';
import book from '../img/book.png';
import HomeItem from '../componets/home/HomeItem';

const Home = () => {
  return (
    <VStack height="100vh">
      <Navbar />
      <HStack
        alignItems="center"
        justifyContent="center"
        width="100%"
        px="50px"
        spacing="20px"
        height="87vh"
      >
        <HomeItem
          img={book}
          url="books"
          title="Book"
          description="You can search about all the books that are available"
        />
        <HomeItem
          img={book}
          title="Book"
          description="You can search about all the books that are available"
        />
        <HomeItem
          img={book}
          title="Book"
          description="You can search about all the books that are available"
        />
        <HomeItem
          img={book}
          title="Book"
          description="You can search about all the books that are available"
        />
      </HStack>
    </VStack>
  );
};

export default Home;
