import { Box, Button, Flex, HStack, Heading, Image, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from '@chakra-ui/react';
import MovieCardSkeleton from '@components/Blocks/MovieCardSkeleton';
import useMovie from '@hooks/useMovie';
import React from 'react';
import { useParams } from 'react-router-dom';
import config from '@config/index';
import genresIcons from '@src/assets/genres';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import ReactStarRatings from 'react-star-ratings';

const { fallbackSrc, tmdbSrc } = config;

const MovieDetails: React.FC = () => {
   const { id } = useParams();
   const { data, isLoading } = useMovie(id);
   const filter = useColorModeValue('none', 'invert(1)');
   const navigate = useNavigate();

   if (id === undefined || isLoading || data === undefined) {
      return <MovieCardSkeleton />;
   }

   return (
      <Box>
         <Button mx={6} mb={16} px={6} variant={'solid'} onClick={() => navigate(-1)} leftIcon={<ArrowBackIcon />}>
            Back
         </Button>
         <Stack spacing={20} px={[3, 6]}>
            <SimpleGrid columns={{ sm: 1, md: 2 }} px={8} spacing={'-10'}>
               <Image width={'490px'} objectFit={'cover'} height={'530px'} borderRadius={10} src={`${tmdbSrc}${data?.poster_path}`} />
               <Stack mt={10} spacing={8}>
                  <Heading textStyle="h1">{data?.title}</Heading>
                  <Flex justify={'space-between'} align={'center'}>
                     <Flex align={'center'} gap={2}>
                        <ReactStarRatings rating={data?.vote_average / 2} starRatedColor="#FFD700" numberOfStars={5} starDimension="20px" starSpacing="0px" />
                        <Text mt={2} textStyle="p">
                           {data?.vote_average}
                        </Text>
                     </Flex>
                     <Text mr={4} textStyle="p">
                        Runtime : {data?.runtime} Min
                     </Text>
                  </Flex>
                  <Stack spacing={2}>
                     <Heading fontSize={'20px'}>Overview</Heading>
                     <Text textStyle="p">{data?.overview}</Text>
                  </Stack>
                  <Flex align={'center'} gap={10}>
                     {data?.genres.map(({ id, name }) => (
                        <HStack key={id} spacing={2}>
                           <Image boxSize="25px" style={{ filter }} src={genresIcons[name.toLowerCase()]} alt="Dan Abramov" />
                           <Button variant={'link'}>{name}</Button>
                        </HStack>
                     ))}
                  </Flex>
               </Stack>
            </SimpleGrid>

            <Tabs isFitted variant="enclosed">
               <TabList mb="1em">
                  <Tab>Recommended Movies</Tab>
                  <Tab>Movie Casts</Tab>
                  <Tab>Images from {data?.title}</Tab>
               </TabList>
               <TabPanels>
                  <TabPanel>
                     <p>one!</p>
                  </TabPanel>
                  <TabPanel>
                     <p>two!</p>
                  </TabPanel>
                  <TabPanel>
                     <p>two!</p>
                  </TabPanel>
               </TabPanels>
            </Tabs>
         </Stack>
      </Box>
   );
};

export default MovieDetails;
