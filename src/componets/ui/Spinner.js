import React from 'react';
import { Spinner as ChakraSpinner, VStack } from '@chakra-ui/react';
const Spinner = () => {
  return (
    <VStack alignItems="center" justifyContent="center">
      <ChakraSpinner
        thickness="4px"
        speed="0.65s"
        width="150px"
        height="150px"
      />
    </VStack>
  );
};

export default Spinner;
