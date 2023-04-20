import { create } from 'zustand';

interface MovieFilters {
    genre?: string;
    searchText?: string;
    category?: string;
}

interface MovieQueryStore {
    filters: MovieFilters;
    setSearchText: (searchText: string) => void;
    setGenre: (genre: string) => void;
    setCategory: (category: string) => void;
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
    filters: {},
    setSearchText: (searchText) => set(() => ({ filters: { searchText } })),
    setGenre: (genre) => set((store) => ({ filters: { ...store.filters, genre, searchText: undefined } })),
    setCategory: (category) =>
        set((store) => ({ filters: { ...store.filters, category, searchText: undefined, genre: undefined } })),
}));

export default useMovieQueryStore;
