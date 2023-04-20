import React from 'react';
import useMovies from '../../hooks/useMovies';
import useMovieQueryStore from '../../config/store';
import { Box, Button } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';

const HomePage: React.FC = () => {
    const setSearchText = useMovieQueryStore((state) => state.setSearchText);
    const { data, isLoading, fetchNextPage, hasNextPage } = useMovies();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log(data);
    return (
        <InfiniteScroll
            dataLength={data?.pages.length || 0}
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={<p>Loading...</p>}
        >
            {data?.pages.map((page, index) => (
                <Box py={'40'} key={index}>
                    <section>
                        {page?.results.map(({ original_title, id }) => (
                            <div key={id}>{original_title}</div>
                        ))}
                    </section>
                </Box>
            ))}
        </InfiniteScroll>
    );
};

export default HomePage;
