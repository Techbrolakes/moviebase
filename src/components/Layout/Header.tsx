import React from 'react';
import { Box, Flex, Input, MenuButton, MenuItem, MenuList, useColorModeValue, Button, Menu, InputGroup, InputLeftElement, FormControl, Show, Hide, Stack } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import useMovieQueryStore from '@config/store';
import ColorModeSwitch from '@components/Blocks/ColorModeSwitch';
import config from '@config/index';
import { headerBoxStyles } from '@config/styles';

const { sortOrders } = config;

const Header: React.FC = () => {
   const bg = useColorModeValue('#1976D2', '#121212');
   const setSortBy = useMovieQueryStore((state) => state.setSortBy);
   const setSearchText = useMovieQueryStore((state) => state.setSearchText);
   const navigate = useNavigate();

   const handleSearchInputChange = (event: any) => {
      setSearchText(event.target.value);
      navigate('/');
   };

   const handleSortBySelect = (order: any) => {
      navigate('/');
      setSortBy(order.value);
   };

   return (
      <Stack spacing={4} bg={bg} sx={headerBoxStyles}>
         <Hide above="md">
            <FormControl w="80%" mx="auto">
               <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Input type="text" placeholder="Search Movie" focusBorderColor="white" borderRadius={20} variant="filled" onChange={handleSearchInputChange} />
               </InputGroup>
            </FormControl>
         </Hide>

         <Flex h="40px" align="center" justify="space-between">
            <ColorModeSwitch />
            <Show above="md">
               <FormControl w="60%">
                  <InputGroup>
                     <InputLeftElement pointerEvents="none" />
                     <Input type="text" placeholder="Search Movie" focusBorderColor="white" borderRadius={10} variant="filled" onChange={handleSearchInputChange} />
                  </InputGroup>
               </FormControl>
            </Show>
            <Menu>
               <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="solid">
                  Sort By
               </MenuButton>
               <MenuList>
                  {sortOrders.map((order) => (
                     <MenuItem key={order.value} value={order.value} onClick={() => handleSortBySelect(order)}>
                        {order.label}
                     </MenuItem>
                  ))}
               </MenuList>
            </Menu>
         </Flex>
      </Stack>
   );
};

export default Header;
