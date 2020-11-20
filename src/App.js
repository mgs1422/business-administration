import React from 'react';

import NavigationMenu from './components/NavigationMenu';
import HamburgerMenu from './components/HamburgerMenu';
import Main from './components/Main';
import { Flex, useMediaQuery } from '@chakra-ui/react';

function App() {
  const [isLargerThan780] = useMediaQuery('(min-width: 780px)');
  return (
    <Flex height="100vh" direction="column">
      {isLargerThan780 ? <NavigationMenu /> : <HamburgerMenu />}
      <Main />
    </Flex>
  );
}

export default App;
