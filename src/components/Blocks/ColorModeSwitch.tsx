import { Box, useColorMode } from '@chakra-ui/react';
import { BiBrightness, BiBrightnessHalf } from 'react-icons/bi';

const ColorModeSwitch = () => {
   const { toggleColorMode, colorMode } = useColorMode();

   return (
      <Box cursor="pointer" onClick={toggleColorMode} mr={['-5', '-5', 0]} ml={[2, 2, 0]}>
         {colorMode === 'dark' ? <BiBrightness color="#fff" size={'32px'} /> : <BiBrightnessHalf color="#fff" size={'32px'} />}
      </Box>
   );
};

export default ColorModeSwitch;
