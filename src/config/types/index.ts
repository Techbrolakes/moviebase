export interface ActorDetails {
    adult: boolean;
    also_known_as: string[];
    biography: string;
    deathday: null;
    gender: number;
    homepage: null;
    id: number;
    imdb_id: string;
    known_for_department: string;
    name: string;
    place_of_birth: string;
    popularity: number;
    profile_path: string;
}

export interface Genres {
    genres: {
        id: number;
        name: string;
    }[];
}

export interface Movies {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: string;
}
