import React from 'react';
import {
   Flex,
   Input,
   MenuButton,
   MenuItem,
   MenuList,
   useColorModeValue,
   Button,
   Menu,
   InputGroup,
   InputLeftElement,
   FormControl,
   Show,
   Hide,
   Stack,
   useDisclosure,
   Drawer,
   DrawerBody,
   DrawerOverlay,
   DrawerContent,
   DrawerCloseButton,
   IconButton,
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import useMovieQueryStore from '@config/store';
import ColorModeSwitch from '@components/Blocks/ColorModeSwitch';
import config from '@config/index';
import { headerBoxStyles } from '@config/styles';
import Sidebar from './Sidebar';
import { FaBars } from 'react-icons/fa';

const { sortOrders } = config;

const Header: React.FC = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
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
         <Drawer isOpen={isOpen} size="xs" placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent mx={'-2'} maxW="250px" bg={bg}>
               <DrawerCloseButton />
               <DrawerBody>
                  <Sidebar />
               </DrawerBody>
            </DrawerContent>
         </Drawer>

         <Flex h={['25px, 40px']} ml={['-5', '-5', '0']} align={'center'} justify="space-between">
            <Show below="lg">
               <IconButton mr={4} aria-label="bars" px={4} onClick={onOpen} size={'md'} icon={<FaBars size={'18px'} />} />
            </Show>

            <Show above="md">
               <ColorModeSwitch />
            </Show>
            <Show above="md">
               <FormControl w="55%">
                  <InputGroup>
                     <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.100" />} />
                     <Input
                        type="text"
                        placeholder="Search Movie"
                        _placeholder={{
                           color: 'gray.400',
                        }}
                        _focus={{
                           borderColor: 'white',
                           border: '1px',
                           boxShadow: 'none',
                        }}
                        focusBorderColor="white"
                        variant="outline"
                        onChange={handleSearchInputChange}
                     />
                  </InputGroup>
               </FormControl>
            </Show>

            <Show above="lg">
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
            </Show>

            <Hide above="md">
               <FormControl w="100%">
                  <InputGroup>
                     <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.100" />} />
                     <Input
                        type="text"
                        placeholder="Search Movie"
                        _placeholder={{
                           color: 'gray.100',
                        }}
                        _focus={{
                           borderColor: 'white',
                           border: '1px',
                           boxShadow: 'none',
                        }}
                        focusBorderColor="white"
                        variant="outline"
                        onChange={handleSearchInputChange}
                     />
                  </InputGroup>
               </FormControl>
            </Hide>

            <Hide above="lg">
               <ColorModeSwitch />
            </Hide>
         </Flex>
      </Stack>
   );
};

export default Header;
