import React, { useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import useMovies from '@hooks/useMovies';

const HomeSection: React.FC = () => {
   const { data, isLoading, fetchNextPage, hasNextPage } = useMovies();
   const scrollRef = useRef(null);

   if (isLoading) {
      return <div>Loading...</div>;
   }

   return (
      <div>
         <InfiniteScroll dataLength={data?.pages.length || 0} next={fetchNextPage} hasMore={!!hasNextPage} loader={<p>Loading...</p>} scrollableTarget="scrollableDiv">
            {data?.pages.map((page, index) => (
               <Box py={'20'} key={index}>
                  <section>
                     {page?.results.map(({ poster_path, id }) => (
                        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding="10px">
                           <Box w={'320px'} cursor={'pointer'}>
                              <Image
                                 key={id}
                                 boxSize={'400px'}
                                 objectFit="contain"
                                 src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://www.fillmurray.com/200/300'}
                                 fallbackSrc="https://via.placeholder.com/150"
                              />
                           </Box>
                        </SimpleGrid>
                     ))}
                  </section>
               </Box>
            ))}
         </InfiniteScroll>
      </div>
   );
};

export default HomeSection;
