import React from 'react';
import noData from '@src/assets/animations/no-data.json';
import Lottie from 'lottie-react';
import { Flex, Text } from '@chakra-ui/react';
import useMovieQueryStore from '@config/store';

const NoDataLoader: React.FC = () => {
   const searchTerm = useMovieQueryStore((s) => s.filters.searchText);

   return (
      <Flex justify={'center'} align={'center'} direction={'column'} minH={'60vh'} gap={8}>
         <Lottie
            animationData={noData}
            style={{
               width: '25%',
            }}
         />

         <Text fontSize={'17px'}>Oops no movie fits the searchterm - {searchTerm} </Text>
      </Flex>
   );
};

export default NoDataLoader;
