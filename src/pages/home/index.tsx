import React from 'react';
import useMovies from '../../hooks/useMovies';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGenres from '../../hooks/useGenres';
import useActors from '../../hooks/useActors';
import useMovie from '../../hooks/useMovie';
import { Image, useColorModeValue, Box } from '@chakra-ui/react';
import HomeSection from '../../components/Home/HomeSection';

const HomePage: React.FC = () => {
    const { data, isLoading, fetchNextPage, hasNextPage } = useMovies();
    const { data: genres } = useGenres();
    const { data: actors } = useActors(2219);
    const { data: movie } = useMovie(640146);
    const filter = useColorModeValue('none', 'invert(1)');

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <HomeSection />
            <Image src="https://example.com/my-image.png" style={{ filter }} alt="My Image" />
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
