'use client';
import { useEffect, useState} from 'react';
import { getTrendingMovies, getPopularMovies } from '../services/movieApi';
import { Movie } from '@/types/resultEntity';

export const useGeneralMovies = () => {
    const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
    const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
    const [streamingMovies, setStreamingMovies] = useState<Movie[]>([]);
    const [tvMovies, setTvMovies] = useState<Movie[]>([]);
    const [rentMovies, setRentMovies] = useState<Movie[]>([]);
    const [theaterMovies, setTheaterMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    const fetchMoviesTrending = async () => {
        setIsLoading(true);
        setError(null);
        
        const result = await getTrendingMovies();
        
        if (result.ok) {
            const movies = result.data.results;
            setTrendingMovies(movies.sort((a: Movie, b: Movie) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime()));
        } else {
            setError(result.error);
        }
        
        setIsLoading(false);
    };

    const fetchPopularMovies = async () => {
        setIsLoading(true);
        setError(null);
        
        const result = await getPopularMovies();
        
        if (result.ok) {
            console.log('result', result.data.results)
            setPopularMovies(result.data.results);
        } else {
            setError(result.error);
        }
        
        setIsLoading(false);
    }


    const getTrendingMoviesByTime = async (time: string) => {
        setIsLoading(true);
        setError(null);
        
        const result = await getTrendingMovies(time);
        
        if (result.ok) {
            setTrendingMovies(result.data.results);
        } else {
            setError(result.error);
        }
        
        setIsLoading(false);
    }

    return {
        trendingMovies,
        popularMovies,
        isLoading,
        error,
        getTrendingMoviesByTime,
        fetchPopularMovies
    }
}