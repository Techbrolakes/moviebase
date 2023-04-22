import React from 'react';
import { Box, Button, HStack, Heading, Image, List, ListItem, useColorModeValue, Stack, Text, Divider } from '@chakra-ui/react';
import useMovieQueryStore from '@config/store';
import useGenres from '@hooks/useGenres';
import genresIcons from '@src/assets/genres';
import SCREEN_TEXTS from './constants';
import Loading from '@components/Blocks/Loading';
import { useNavigate } from 'react-router-dom';

const { BtnStyles, categories } = SCREEN_TEXTS;
const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar: React.FC = () => {
   const { data, isLoading } = useGenres();
   const setGenre = useMovieQueryStore((s) => s.setGenre);
   const setCategory = useMovieQueryStore((s) => s.setCategory);
   const selectedGenreId = useMovieQueryStore((s) => s.filters.genre);
   const selectedCategoryId = useMovieQueryStore((s) => s.filters.category);
   const filter = useColorModeValue('none', 'invert(1)');
   const logo = useColorModeValue(redLogo, blueLogo);
   const navigate = useNavigate();

   const handleCategoryClick = (id: string) => {
      navigate('/');
      setCategory(id);
   };

   const handleGenreClick = (id: string) => {
      navigate('/');
      setGenre(id);
   };

   if (isLoading) {
      return (
         <Stack spacing={4} px={4} py={4}>
            <Loading />
            <Loading />
            <Loading />
         </Stack>
      );
   }
   return (
      <Stack py={4} spacing={6}>
         <div>
            <Heading mb={4} fontSize={'2xl'} textAlign={'center'}>
               <Image width={'150px'} objectFit={'contain'} src={logo} alt="logo" mx={'auto'} />
            </Heading>
            <Divider />
         </div>

         {/* CATEGORY LISTS */}
         <Stack spacing={6} px={4}>
            <Text fontSize={'md'}>Categories</Text>
            <List spacing={8}>
               {categories.map(({ label, value }) => (
                  <ListItem key={value} cursor={'pointer'} onClick={() => handleCategoryClick(value)}>
                     <HStack>
                        <Image boxSize="25px" style={{ filter }} src={genresIcons[label.toLowerCase()]} alt="Dan Abramov" />
                        <Button variant={'link'} sx={BtnStyles} color={value === selectedCategoryId ? 'red.500' : 'white'}>
                           {label}
                        </Button>
                     </HStack>
                  </ListItem>
               ))}
            </List>
         </Stack>
         <Divider />

         {/* GENRES LISTS */}
         <Stack spacing={6} px={4}>
            <Text fontSize={'md'}>Genres</Text>
            <List spacing={8}>
               {data?.genres.map(({ name, id }) => (
                  <ListItem key={id} cursor={'pointer'} onClick={() => handleGenreClick(id)}>
                     <HStack>
                        <Image boxSize="25px" style={{ filter }} src={genresIcons[name.toLowerCase()]} alt="Dan Abramov" />
                        <Button variant={'link'} sx={BtnStyles} color={id === selectedGenreId ? 'red.500' : 'white'}>
                           {name}
                        </Button>
                     </HStack>
                  </ListItem>
               ))}
            </List>
         </Stack>
      </Stack>
   );
};

export default Sidebar;
