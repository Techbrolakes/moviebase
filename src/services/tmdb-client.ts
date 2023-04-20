import axios from 'axios';

export interface ApiResponse<T> {
    page: number;
    results: T[];
    total_pages: number;
    total_results: number;
}

const tmdbApiKey = 'ae5b499166e31fb991742cee179dca6a';

const tmdbInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

class TmdbClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (page?: number | 1, queryParams: string = '') => {
        const url = `${this.endpoint}?api_key=${tmdbApiKey}&page=${page}${queryParams}`;
        return tmdbInstance.get<ApiResponse<T>>(url).then((response) => response.data);
    };

    getById = (id: number | string) => {
        const url = `${this.endpoint}/${id}?api_key=${tmdbApiKey}`;
        return tmdbInstance.get<T>(url).then((res) => res.data);
    };
}

export default TmdbClient;
