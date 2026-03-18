'use client';
import { useEffect, useState} from 'react';
import { getTrendingMovies } from '../services/movieApi';
import { Movie } from '@/types/resultEntity';

export const useGeneralMovies = () => {
    const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMoviesTrending = async () => {
            setIsLoading(true);
            setError(null);
            
            const result = await getTrendingMovies();
            
            if (result.ok) {
                setTrendingMovies(result.data.results);
            } else {
                setError(result.error);
            }
            
            setIsLoading(false);
        };

        fetchMoviesTrending();
    }, []);

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
        isLoading,
        error,
        getTrendingMoviesByTime
    }
}