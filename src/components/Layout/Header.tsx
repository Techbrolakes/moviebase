import React from 'react';
import { Box, Flex, Input, MenuButton, MenuItem, MenuList, useColorModeValue, Button, Menu, InputGroup, InputLeftElement, FormControl } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import useMovieQueryStore from '@config/store';
import ColorModeSwitch from '@components/Blocks/ColorModeSwitch';

const sortOrders = [
   { value: 'popularity.asc', label: 'Popularity (Low to High)' },
   { value: 'popularity.desc', label: 'Popularity (High to Low)' },
   { value: 'release_date.asc', label: 'Release Date (Old to New)' },
   { value: 'release_date.desc', label: 'Release Date (New to Old)' },
   { value: 'revenue.asc', label: 'Revenue (Low to High)' },
   { value: 'revenue.desc', label: 'Revenue (High to Low)' },
   { value: 'vote_average.asc', label: 'Rating (Low to High)' },
   { value: 'vote_average.desc', label: 'Rating (High to Low)' },
];

const Header: React.FC = () => {
   const bg = useColorModeValue('#fff', '#000');
   const setSortBy = useMovieQueryStore((state) => state.setSortBy);
   const setSearchText = useMovieQueryStore((state) => state.setSearchText);
   const navigate = useNavigate();

   const handleSearchInputChange = (event: any) => {
      setSearchText(event.target.value);
      navigate('/');
   };

   const handleSortBySelect = (order: any) => {
      setSortBy(order.value);
   };

   return (
      <Box position="fixed" px={8} py={4} boxShadow="xl" zIndex={10} borderBottom="2px" borderColor="#7B7B7B" bg={bg} w="82.55vw">
         <Flex h="60px" gap={0} align="center" justify="space-between">
            <ColorModeSwitch />
            <FormControl w="60%">
               <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Input type="text" placeholder="Search Movie" borderRadius={20} variant="filled" onChange={handleSearchInputChange} />
               </InputGroup>
            </FormControl>
            <Menu>
               <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost">
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
      </Box>
   );
};

export default Header;
