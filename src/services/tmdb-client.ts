import axios from 'axios';

export interface ApiResponse<T> {
    page: number;
    results: T[];
    total_pages: number;
    total_results: number;
}

const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY;

const tmdbInstance = axios.create({
    baseURL: import.meta.env.VITE_TMDB_BASE_URL,
});

class TmdbClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getWithApiResponse = ({
        page = 1,
        queryParams = '',
        with_genres = '',
        sort_by = '',
    }: { page?: number; queryParams?: string; with_genres?: string; sort_by?: string } = {}) => {
        let url = `${this.endpoint}?api_key=${tmdbApiKey}&page=${page}`;

        if (with_genres) {
            url += `&with_genres=${with_genres}`;
        }

        if (queryParams) {
            url += `&query=${queryParams}`;
        }

        if (sort_by) {
            url += `&sort_by=${sort_by}`;
        }

        return tmdbInstance.get<ApiResponse<T>>(url).then((response) => response.data);
    };

    getWithoutApiResponse = () => {
        const url = `${this.endpoint}?api_key=${tmdbApiKey}`;

        return tmdbInstance.get<T>(url).then((res) => res.data);
    };

    getById = ({ append_to_response = false }: { append_to_response?: boolean } = {}) => {
        let url = `${this.endpoint}?api_key=${tmdbApiKey}`;

        if (append_to_response) {
            url += `&append_to_response=videos,credits,images`;
        }
        return tmdbInstance.get<T>(url).then((res) => res.data);
    };

    getByIdWithApiResponse = ({ page }: { page?: number }) => {
        const url = `${this.endpoint}?api_key=${tmdbApiKey}&page=${page || 1}`;
        return tmdbInstance.get<ApiResponse<T>>(url).then((res) => res.data);
    };
}

export default TmdbClient;
