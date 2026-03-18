import { tmdbFetch } from "@/lib/tmdbFetch";
import { PaginatedResult } from "@/types/result";
import { Movie } from "@/types/resultEntity";

export const getTopRatedMovies = async () => {
    return tmdbFetch<PaginatedResult<Movie>>("/movie/top_rated");
}

export const getTrendingMovies = async (time_window: string = "day") => {
    const response = await tmdbFetch<PaginatedResult<Movie>>(`/trending/all/${time_window}`);
    if(!response.ok){
        return response;
    }
    response.data.results = response.data.results.sort((a: Movie, b: Movie) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
    
    return response;
}

// export const getBanner