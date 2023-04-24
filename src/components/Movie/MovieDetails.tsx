import {
   Box,
   Button,
   Flex,
   HStack,
   Heading,
   Image,
   SimpleGrid,
   Stack,
   Tab,
   TabList,
   TabPanel,
   TabPanels,
   Tabs,
   Text,
   useColorModeValue,
   useDisclosure,
   Modal,
   ModalOverlay,
   ModalContent,
   Show,
   Hide,
} from '@chakra-ui/react';
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
import { FaPlay } from 'react-icons/fa';
import { responsiveText } from '@config/styles';
import AnimationLoader from '@components/Blocks/AnimationLoader';

const { fallbackSrc, tmdbSrc } = config;

const MovieDetails: React.FC = () => {
   const { id } = useParams();
   const { data, isLoading, isFetching, refetch } = useMovie(id);
   const filter = useColorModeValue('none', 'invert(1)');
   const btnbg = useColorModeValue('#1976d2', '#fff');
   const btnColor = useColorModeValue('#fff', '#121212');
   const navigate = useNavigate();
   const [Loading, setLoading] = useState(false);
   const { isOpen, onOpen, onClose } = useDisclosure();
   const trailer = data?.videos?.results.find((video) => video.type === 'Trailer');

   useEffect(() => {
      setLoading(true);

      setTimeout(() => {
         setLoading(false);
      }, 1500);
      refetch();
   }, [id]);

   if (Loading) return <AnimationLoader />;

   if (data === undefined) return null;

   return (
      <Box>
         <Button bg={btnbg} color={btnColor} mx={[2, 6]} mb={16} px={6} variant={'solid'} onClick={() => navigate(-1)} leftIcon={<ArrowBackIcon />}>
            Back
         </Button>

         <Stack spacing={2} px={[0, 2, 6]}>
            {isFetching || isLoading || data === undefined ? (
               <CustomLoader />
            ) : (
               <SimpleGrid columns={{ sm: 1, md: 2 }} px={[0, 2]} spacing={[2, 4, 8]}>
                  <Image
                     width={['520px', '100%', '520x']}
                     objectFit={'contain'}
                     height={['100%', '100%', '80%']}
                     fallbackSrc={fallbackSrc}
                     borderRadius={[0, 0, 2]}
                     src={`${tmdbSrc}${data?.poster_path}`}
                  />
                  <Stack mt={10} spacing={12}>
                     <Heading textStyle="h1">{data?.title}</Heading>
                     <Flex justify={'space-between'} align={'center'}>
                        <Flex align={'center'} gap={2}>
                           <ReactStarRatings rating={data?.vote_average / 2} starRatedColor="#FFD700" numberOfStars={5} starDimension="20px" starSpacing="0px" />
                           <Text mt={2} sx={responsiveText}>
                              {data?.vote_average}
                           </Text>
                        </Flex>
                        <Text mr={4} sx={responsiveText}>
                           Runtime : {data?.runtime} Min
                        </Text>
                     </Flex>
                     <Stack spacing={4}>
                        <Heading fontSize={'20px'}>Overview</Heading>
                        <Text sx={responsiveText}>{data?.overview}</Text>
                     </Stack>
                     <Flex align={'center'} gap={10} wrap={'wrap'}>
                        {data?.genres.map(({ id, name }) => (
                           <HStack key={id} spacing={2}>
                              <Image boxSize="25px" style={{ filter }} src={genresIcons[name.toLowerCase()]} alt="Dan Abramov" />
                              <Button variant={'link'}>{name}</Button>
                           </HStack>
                        ))}
                     </Flex>
                     <Button bg={btnbg} color={btnColor} onClick={onOpen} p={4}>
                        <HStack>
                           <FaPlay />
                           <Text sx={responsiveText}>Play Trailer</Text>
                        </HStack>
                     </Button>
                  </Stack>
               </SimpleGrid>
            )}

            <Tabs pt={[20, 20, 0]} isFitted variant="enclosed">
               <TabList mb="1em">
                  <Tab sx={responsiveText}>Movie Casts</Tab>
                  <Tab sx={responsiveText}>Recommended Movies</Tab>
                  <Tab sx={responsiveText}>Images from {data?.title}</Tab>
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

         <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent h={'fit-content'} w={'fit-content'} mx={0}>
               <Show above="lg">
                  <iframe title="Trailer" src={`https://www.youtube.com/embed/${trailer?.key}`} height={'400px'} width={'700px'} allow="autoplay" allowFullScreen />
               </Show>
               <Hide above="lg">
                  <iframe title="Trailer" src={`https://www.youtube.com/embed/${trailer?.key}`} height={'280px'} width={'380px'} allow="autoplay" allowFullScreen />
               </Hide>
            </ModalContent>
         </Modal>
      </Box>
   );
};

export default MovieDetails;
