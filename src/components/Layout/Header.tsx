import { Box } from '@chakra-ui/react';
import React from 'react';

const Header: React.FC = () => {
   return (
      <Box position={'fixed'} zIndex={10} bg={'#000'} w={'82.55vw'} h={'50px'}>
         Header
      </Box>
   );
};

export default Header;
