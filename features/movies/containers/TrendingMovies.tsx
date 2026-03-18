'use client'

import { useGeneralMovies } from "../hooks/useGeneralMovies";
import MovieCard from "../components/MovieCard";
import FilterBar from "@/components/FilterBar";
import { useState } from "react";

enum TrendingFilter {
    Day = "Day",
    Week = "Week"
}

export default function TrendingMovies() {
    const { trendingMovies, getTrendingMoviesByTime } = useGeneralMovies();
    const [selectedFilter, setSelectedFilter] = useState<number>(0);
    const options: TrendingFilter[] = [TrendingFilter.Day, TrendingFilter.Week];

    return (
        <div className="w-full bg-white dark:bg-sky-950">
            <div className="h-15 w-[90%] mx-auto self-center flex items-end justify-start gap-8">
                <h1 className="text-black dark:text-white text-2xl font-semibold">Trending</h1>
                <FilterBar 
                    options={options}
                    selectedOption={selectedFilter}
                    onSelectOption={(option: number) => {
                        setSelectedFilter(option)
                        getTrendingMoviesByTime(options[option].toLowerCase());
                    }}
                    backgroundColor="#10b981"
                    textSelectedColor="#10b981"
                    textUnselectedColor="#10b981"
                />
            </div>
            <div className="w-[90%] mx-auto self-center flex gap-5 overflow-x-auto overflow-y-hidden py-5">
                {trendingMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
                   
            </div>
        </div>
    )
}