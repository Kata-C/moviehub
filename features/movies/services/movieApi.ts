import { tmdbFetch } from "@/lib/tmdbFetch";

export const getTopRatedMovies = async () => {
    const response = await tmdbFetch<{
        page: number;
        results: any[];
        total_pages: number;
        total_results: number;
    }>("/movie/top_rated");
    return response;
}

export const getPopularMovies = async () => {
    const response = await tmdbFetch<{
        page: number;
        results: any[];
        total_pages: number;
        total_results: number;
    }>("/movie/top_rated");
    return response;
}

// export const getBanner