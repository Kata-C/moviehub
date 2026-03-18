'use client'

import { getTrendingMovies } from "@/features/movies/services/movieApi";
import { useEffect, useState } from "react";

export default function Watchlist() {
    const [movies, setMovies] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);
            setError(null);
            
            const result = await getTrendingMovies();
            
            if (result.ok) {
                setMovies(result.data.results);
            } else {
                setError(result.error);
            }
            
            setIsLoading(false);
        };

        fetchMovies();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Watchlist</h1>
            
            {isLoading && <p>Cargando películas...</p>}
            
            {error && (
                <div className="bg-red-500/10 text-red-500 p-4 rounded-md mb-4 border border-red-500/20">
                    <p className="font-semibold">Ha ocurrido un error:</p>
                    <p>{error}</p>
                </div>
            )}

            {!isLoading && !error && movies.length === 0 && (
                <p>No hay películas en tu Watchlist.</p>
            )}

            {!isLoading && !error && movies.length > 0 && (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {movies.map((movie) => (
                        <li key={movie.id} className="border border-gray-200 dark:border-gray-800 p-4 rounded-lg shadow-sm">
                            <h2 className="font-semibold text-lg">{movie.title}</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-3">
                                {movie.overview}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}