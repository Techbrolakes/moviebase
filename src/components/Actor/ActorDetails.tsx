import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import CustomLoader from '@components/Blocks/CustomLoader';
import { Box, Button, SimpleGrid, Stack, Text, Heading, Flex, HStack, Image, useColorModeValue } from '@chakra-ui/react';
import useActors from '@hooks/useActors';
import config from '@config/index';
import ActorMovies from './ActorMovies';
import useActorMovies from '@hooks/useActorMovies';
import { responsiveText } from '@config/styles';
import AnimationLoader from '@components/Blocks/AnimationLoader';

const { fallbackSrc, tmdbSrc } = config;

const ActorDetails: React.FC = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const { data, isFetching, isLoading } = useActors(id);
   const { data: actorMovies, isLoading: isLoad, isFetching: isFetch } = useActorMovies(data?.id);
   const btnbg = useColorModeValue('#1976d2', '#fff');
   const btnColor = useColorModeValue('#fff', '#121212');

   if (isLoad || isLoading || isFetching || isFetch || !actorMovies) return <AnimationLoader />;

   return (
      <Box>
         <Button bg={btnbg} color={btnColor} mx={6} mb={16} px={4} variant={'solid'} onClick={() => navigate(-1)} leftIcon={<ArrowBackIcon />}>
            Back
         </Button>
         <Stack spacing={20} px={[0, 6]}>
            {isFetching || isLoading || data === undefined ? (
               <CustomLoader />
            ) : (
               <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={6}>
                  <Image
                     width={['520px', '100%', '520x']}
                     objectFit={'contain'}
                     height={['100%', '100%', '80%']}
                     fallbackSrc={fallbackSrc}
                     borderRadius={[0, 0, 2]}
                     src={`${tmdbSrc}${data?.profile_path}`}
                  />

                  <Stack spacing={8}>
                     <Heading textStyle="h1">{data?.name}</Heading>
                     {data?.birthday && <Text sx={responsiveText}>Born: {new Date(data?.birthday).toDateString()}</Text>}{' '}
                     <Stack spacing={6}>
                        <Heading fontSize={'20px'}>Biography</Heading>
                        <Text sx={responsiveText}>{data?.biography}</Text>
                     </Stack>
                  </Stack>
               </SimpleGrid>
            )}
         </Stack>

         <Box mt={20}>
            <ActorMovies actorMovies={actorMovies} name={data?.name} />
         </Box>
      </Box>
   );
};

export default ActorDetails;
