import { tmdbFetch } from "@/lib/tmdbFetch";

export const getMovies = async () => {
    const response = await tmdbFetch<{
        page: number;
        results: any[];
        total_pages: number;
        total_results: number;
    }>("/movie/top_rated");
    return response;
}