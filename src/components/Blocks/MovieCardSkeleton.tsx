import { Card, CardBody, SimpleGrid, Skeleton, SkeletonText, Stack, useColorModeValue } from '@chakra-ui/react';

const MovieCardSkeleton = () => {
   const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
   const skeletonTextbg = useColorModeValue('#1976d2', '#121212');

   return (
      <Stack pb={8} pt={['150px', '130px']} px={[3, 5]} spacing={8}>
         <Card bg="#151922">
            <Skeleton height="300px" />
            <CardBody bg={skeletonTextbg}>
               <SkeletonText noOfLines={4} spacing="4" />
            </CardBody>
         </Card>

         <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} padding={['20px', '10px']}>
            {skeletons.map((skeleton) => (
               <Card bg="#151922" boxShadow={'lg'} key={skeleton}>
                  <Skeleton height="250px" />
                  <CardBody bg={skeletonTextbg}>
                     <SkeletonText noOfLines={3} spacing="2" />
                  </CardBody>
               </Card>
            ))}
         </SimpleGrid>
      </Stack>
   );
};

export default MovieCardSkeleton;
