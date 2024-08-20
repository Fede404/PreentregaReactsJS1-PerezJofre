import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <ChakraProvider>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenido/a"}/>
    </ChakraProvider>
  )
};

export default App
