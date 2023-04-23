import { Stack } from '@chakra-ui/react';
import React from 'react';
import Loading from './Loading';

const CustomLoader: React.FC = () => {
   return (
      <Stack px={[1, 2, 4]} py={4}>
         <Loading />
         <Loading />
      </Stack>
   );
};

export default CustomLoader;
