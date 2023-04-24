import React from 'react';
import { Box, Button, HStack, Heading, Image, List, ListItem, useColorModeValue, Stack, Text, Divider } from '@chakra-ui/react';
import useMovieQueryStore from '@config/store';
import useGenres from '@hooks/useGenres';
import genresIcons from '@src/assets/genres';
import SCREEN_TEXTS from './constants';
import Loading from '@components/Blocks/Loading';
import { useNavigate } from 'react-router-dom';

const { BtnStyles, categories } = SCREEN_TEXTS;

const Sidebar: React.FC = () => {
   const { data, isLoading } = useGenres();
   const setGenre = useMovieQueryStore((s) => s.setGenre);
   const setCategory = useMovieQueryStore((s) => s.setCategory);
   const selectedGenreId = useMovieQueryStore((s) => s.filters.genre);
   const selectedCategoryId = useMovieQueryStore((s) => s.filters.category);
   const filter = useColorModeValue('none', 'invert(1)');
   const logo = useColorModeValue('#1976D2', '#dc1a28');
   const link = useColorModeValue('#121212', '#fff');
   const navigate = useNavigate();

   const handleCategoryClick = (id: string) => {
      navigate('/', { replace: true });
      setCategory(id);
   };

   const handleGenreClick = (id: string) => {
      navigate('/', { replace: true });
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
            <Heading cursor={'pointer'} onClick={() => navigate('/')} fontWeight={'bold'} fontFamily={'Cabin'} color={logo} mb={4} fontSize={'4xl'} px={2}>
               Moviebase
            </Heading>
            <Divider />
         </div>

         {/* CATEGORY LISTS */}
         <Stack spacing={6} px={[0, 2, 4]}>
            <Text fontSize={'md'}>Categories</Text>
            <List spacing={8}>
               {categories.map(({ label, value }) => (
                  <ListItem key={value} cursor={'pointer'} onClick={() => handleCategoryClick(value)}>
                     <HStack>
                        <Image boxSize="25px" style={{ filter }} src={genresIcons[label.toLowerCase()]} alt="Dan Abramov" />
                        <Button variant={'link'} sx={BtnStyles} color={value === selectedCategoryId ? 'red.500' : `${link}`}>
                           {label}
                        </Button>
                     </HStack>
                  </ListItem>
               ))}
            </List>
         </Stack>
         <Divider />

         {/* GENRES LISTS */}
         <Stack spacing={6} px={[0, 2, 4]}>
            <Text fontSize={'md'}>Genres</Text>
            <List spacing={8}>
               {data?.genres.map(({ name, id }) => (
                  <ListItem key={id} cursor={'pointer'} onClick={() => handleGenreClick(id)}>
                     <HStack>
                        <Image boxSize="25px" style={{ filter }} src={genresIcons[name.toLowerCase()]} alt="Dan Abramov" />
                        <Button variant={'link'} sx={BtnStyles} color={id === selectedGenreId ? 'red.500' : `${link}`}>
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
