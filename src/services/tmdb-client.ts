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

    getWithApiResponse = ({ page, queryParams }: { page?: any; queryParams?: any } = {}) => {
        const url = `${this.endpoint}?api_key=${tmdbApiKey}&page=${page || 1}&query=${queryParams}`;
        return tmdbInstance.get<ApiResponse<T>>(url).then((response) => response.data);
    };

    getWithoutApiResponse = () => {
        const url = `${this.endpoint}?api_key=${tmdbApiKey}`;
        return tmdbInstance.get<T>(url).then((res) => res.data);
    };

    getById = () => {
        const url = `${this.endpoint}?api_key=${tmdbApiKey}`;
        return tmdbInstance.get<T>(url).then((res) => res.data);
    };

    getByIdWithApiResponse = ({ page }: { page?: number }) => {
        const url = `${this.endpoint}?api_key=${tmdbApiKey}&page=${page || 1}`;
        return tmdbInstance.get<ApiResponse<T>>(url).then((res) => res.data);
    };
}

export default TmdbClient;
