import { Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';
import React from 'react';

export function Input({ name, id,placeholder , ...rest}: ChakraInputProps) {
  return (
    <ChakraInput
      name={name}
      id={id}
      height='50px'
      backgroundColor='gray.800'
      focusBorderColor='purple.500'
      borderRadius='sm'
      border='none'
      placeholder={placeholder}
      mt='2'
      {...rest}
    />
  );
}