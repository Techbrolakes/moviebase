import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import CustomLoader from '@components/Blocks/CustomLoader';
import { Box, Button, SimpleGrid, Stack, Text, Heading, Flex, HStack, Image } from '@chakra-ui/react';
import useActors from '@hooks/useActors';
import config from '@config/index';
import ActorMovies from './ActorMovies';
import useActorMovies from '@hooks/useActorMovies';

const { fallbackSrc, tmdbSrc } = config;

const ActorDetails: React.FC = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const { data, isFetching, isLoading } = useActors(id);
   const { data: actorMovies, isLoading: isLoad, isFetching: isFetch } = useActorMovies(data?.id);

   if (isLoad || isLoading || isFetching || isFetch || !actorMovies) return <CustomLoader />;

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
                  <Image width={'490px'} objectFit={'cover'} height={'530px'} fallbackSrc={fallbackSrc} borderRadius={10} src={`${tmdbSrc}${data?.profile_path}`} />

                  <Stack spacing={8}>
                     <Heading textStyle="h1">{data?.name}</Heading>
                     {data?.birthday && <Text textStyle="p">Born: {new Date(data?.birthday).toDateString()}</Text>}{' '}
                     <Stack spacing={2}>
                        <Heading fontSize={'20px'}>Biography</Heading>
                        <Text textStyle="p">{data?.biography}</Text>
                     </Stack>
                  </Stack>
               </SimpleGrid>
            )}
         </Stack>

         <Box mt={20}>
            <ActorMovies actorMovies={actorMovies} />
         </Box>
      </Box>
   );
};

export default ActorDetails;
