import React, { useState } from 'react';
import {
  HStack,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Modal,
  ModalOverlay,
  ModalContent,
  FormLabel,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';

const BooksButtons = ({ updateLoading, onChangeWord }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const onClick = async () => {
    const book = { title, author_id: author, genre_id: genre };

    const request = await fetch('/api/v1/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });

    const data = await request.json();

    if (request.status === 201) {
      onClose();
      updateLoading();
    }
  };

  return (
    <HStack justifyContent="space-between">
      <HStack space="10px">
        <Button onClick={onOpen}>Add new Book</Button>
      </HStack>
      <InputGroup ml="auto" width="400px" size="md">
        <Input
          onChange={e => onChangeWord(e.target.value)}
          placeholder="Search"
        />
        <InputRightElement width="4.5rem">
          <SearchIcon size="sm"></SearchIcon>
        </InputRightElement>
      </InputGroup>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new Book</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
              id="title"
              type="text"
            />
            <FormLabel htmlFor="author">Author ID</FormLabel>
            <Input
              value={author}
              onChange={e => setAuthor(e.target.value)}
              id="author"
              type="text"
            />
            <FormLabel htmlFor="genre">Genre ID</FormLabel>
            <Input
              value={genre}
              onChange={e => setGenre(e.target.value)}
              id="genre"
              type="text"
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClick}>Save book</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  );
};

export default BooksButtons;
