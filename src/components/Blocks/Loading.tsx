import { Skeleton, Stack } from '@chakra-ui/react';
import React from 'react';

const Loading: React.FC = () => {
   return (
      <Stack>
         <Skeleton height="20px" />
         <Skeleton height="20px" />
         <Skeleton height="20px" />
         <Skeleton height="20px" />
         <Skeleton height="20px" />
         <Skeleton height="20px" />
         <Skeleton height="20px" />
         <Skeleton height="20px" />
         <Skeleton height="20px" />
      </Stack>
   );
};

export default Loading;
