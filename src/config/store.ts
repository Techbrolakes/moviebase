import { create } from 'zustand';

interface MovieFilters {
   genre?: string;
   searchText?: string;
   category?: string;
   sortBy?: string;
}

interface MovieQueryStore {
   filters: MovieFilters;
   setSearchText: (searchText: string) => void;
   setGenre: (genre: string) => void;
   setCategory: (category: string) => void;
   setSortBy: (sortBy: string) => void;
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
   filters: {},
   setSearchText: (searchText) => set(() => ({ filters: { searchText } })),
   setGenre: (genre) => set((store) => ({ filters: { ...store.filters, genre, searchText: undefined, setCategory: undefined, category: undefined } })),
   setCategory: (category) => set((store) => ({ filters: { ...store.filters, category, searchText: undefined, genre: undefined } })),
   setSortBy: (sortBy) =>
      set((store) => ({
         filters: { ...store.filters, sortBy, searchText: undefined, genre: undefined, category: undefined },
      })),
}));

export default useMovieQueryStore;
