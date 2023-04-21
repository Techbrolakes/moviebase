import React from 'react';
import useMovies from '../../hooks/useMovies';
import useMovieQueryStore from '../../config/store';
import { Box, Button } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGenres from '../../hooks/useGenres';
import useActors from '../../hooks/useActors';

const HomePage: React.FC = () => {
    const setSortBy = useMovieQueryStore((state) => state.setSortBy);
    const { data, isLoading, fetchNextPage, hasNextPage } = useMovies();
    const { data: genres } = useGenres();
    const { data: actors } = useActors(2219);

    console.log('actors', actors);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Button onClick={() => setSortBy('vote_count.desc')}>Click Me</Button>
            <div>
                {genres?.genres.map((genre) => (
                    <span>{genre.name}</span>
                ))}
            </div>
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
        </>
    );
};

export default HomePage;
