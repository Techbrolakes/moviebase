import { Box, Button, Flex, HStack, Heading, Image, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from '@chakra-ui/react';
import useMovie from '@hooks/useMovie';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import config from '@config/index';
import genresIcons from '@src/assets/genres';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import ReactStarRatings from 'react-star-ratings';
import RecommendedMovies from './Tabs/RecommendedMovies';
import CustomLoader from '@components/Blocks/CustomLoader';
import CastsTab from './Tabs/CastsTab';
import MovieImages from './Tabs/MovieImages';

const { fallbackSrc, tmdbSrc } = config;

const MovieDetails: React.FC = () => {
   const { id } = useParams();
   const { data, isLoading, isFetching, refetch } = useMovie(id);
   const filter = useColorModeValue('none', 'invert(1)');
   const navigate = useNavigate();
   const [Loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);

      setTimeout(() => {
         setLoading(false);
      }, 1500);
      refetch();
   }, [id]);

   if (Loading) return <CustomLoader />;

   if (data === undefined) return null;

   return (
      <Box>
         <Button mx={6} mb={16} px={6} variant={'solid'} onClick={() => navigate(-1)} leftIcon={<ArrowBackIcon />}>
            Back
         </Button>
         <Stack spacing={20} px={[3, 6]}>
            {isFetching || isLoading || data === undefined ? (
               <CustomLoader />
            ) : (
               <SimpleGrid columns={{ sm: 1, md: 2 }} px={2}>
                  <Image width={'490px'} objectFit={'cover'} height={'530px'} fallbackSrc={fallbackSrc} borderRadius={10} src={`${tmdbSrc}${data?.poster_path}`} />
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
            )}

            <Tabs isFitted variant="enclosed">
               <TabList mb="1em">
                  <Tab>Movie Casts</Tab>
                  <Tab>Recommended Movies</Tab>
                  <Tab>Images from {data?.title}</Tab>
               </TabList>

               <TabPanels>
                  <TabPanel>
                     <CastsTab data={data} />
                  </TabPanel>
                  <TabPanel>
                     <RecommendedMovies key={data?.id} movies={data} />
                  </TabPanel>
                  <TabPanel>
                     <MovieImages data={data} />
                  </TabPanel>
               </TabPanels>
            </Tabs>
         </Stack>
      </Box>
   );
};

export default MovieDetails;
