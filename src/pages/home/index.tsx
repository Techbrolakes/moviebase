import React from 'react';
import useMovies from '../../hooks/useMovies';

const HomePage: React.FC = () => {
    const { data, isLoading } = useMovies();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log(data);
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
};

export default HomePage;
