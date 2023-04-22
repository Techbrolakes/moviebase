import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
   const { toggleColorMode, colorMode } = useColorMode();

   return (
      <HStack>
         <Switch colorScheme="blue" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
         <Text whiteSpace="nowrap">Dark Mode</Text>
      </HStack>
   );
};

export default ColorModeSwitch;
