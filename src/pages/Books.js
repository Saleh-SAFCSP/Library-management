import React, { useState, useEffect } from 'react';
import {
  VStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import Navbar from '../componets/ui/Navbar';
import BooksButtons from '../componets/books/BooksButtons';
import Spinner from '../componets/ui/Spinner';
import { DeleteIcon } from '@chakra-ui/icons';
import { successAlertTimer, errorAlert } from '../util/alerts';
const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateLoading = () => {
    setLoading(true);
  };
  useEffect(() => {
    const getBooks = async () => {
      try {
        const request = await fetch('/api/v1/books');
        const data = await request.json();
        setBooks(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, [loading]);

  const onChangeWord = title => {
    if (!title) {
      setLoading(true);
      return;
    }
    setBooks(books.filter(book => book.title.includes(title)));
  };

  const deleteBook = async id => {
    const request = await fetch(`/api/v1/books/${id}`, {
      method: 'DELETE',
    });

    const data = await request.json();

    if (request.status === 200) {
      setLoading(true);
      successAlertTimer('Book deleted successfully !');
    } else {
      errorAlert(data.message);
    }
  };

  return (
    <VStack height="100vh">
      <Navbar />
      <VStack
        marginTop="80px !important"
        width="100%"
        px="50px"
        align="left"
        spacing="20px"
        height="87vh"
      >
        {loading ? (
          <Spinner />
        ) : (
          <>
            <BooksButtons
              onChangeWord={onChangeWord}
              updateLoading={updateLoading}
            />
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Book ID</Th>
                  <Th>Title</Th>
                  <Th>Author</Th>
                  <Th>Genre</Th>
                  <Th>#</Th>
                </Tr>
              </Thead>
              <Tbody>
                {books.length > 0 &&
                  books.map(book => (
                    <Tr key={book.id}>
                      <Td>{book.id}</Td>
                      <Td>{book.title}</Td>
                      <Td>{book.author.name}</Td>
                      <Td>{book.genre.name}</Td>
                      <Td
                        onClick={() => deleteBook(book.id)}
                        width="5px"
                        cursor="pointer"
                      >
                        <DeleteIcon />
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </>
        )}
      </VStack>
    </VStack>
  );
};

export default Books;
