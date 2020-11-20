import { Box, Image } from '@chakra-ui/react';
import logo from '../images/logo.jpg';

function Main() {
  return (
    <Box boxSize="sm">
      <Image src={logo} alt="Logo Adebayo" w="100vw" h="100vh" />
    </Box>
  );
}

export default Main;
