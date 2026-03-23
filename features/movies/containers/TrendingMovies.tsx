'use client'

import { useGeneralMovies } from "../hooks/useGeneralMovies";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { ContainerProps, IOptionFilterBar } from "@/types/componentsTypes";
import { HomeSectionContainer } from "./HomeSectionContainer";
import HomeSectionTitle from "../components/HomeSectionTitle";

enum TrendingFilter {
    Day = "Day",
    Week = "Week"
}


export default function TrendingMovies(props: ContainerProps) {
    const { trendingMovies, getTrendingMoviesByTime } = useGeneralMovies();
    const [selectedFilter, setSelectedFilter] = useState<number>(0);
    const options: IOptionFilterBar[] = [
        { label: "Today", value: TrendingFilter.Day },
        { label: "This Week", value: TrendingFilter.Week }
    ];

    useEffect(() => {
        getTrendingMoviesByTime(options[selectedFilter].value.toLowerCase());
    }, []);

    const titleSection = <HomeSectionTitle
                        title="Trending"
                        options={options}
                        onSelectOption={(option: number) => {
                            setSelectedFilter(option)
                            getTrendingMoviesByTime(options[option].value.toLowerCase());
                        }}
                        backgroundColor="#10b981"
                        textSelectedColor="#e9ebeaff"
                        textUnselectedColor="#e9ebeaff"
                    />


    if(trendingMovies.length === 0) {
        return (
            <HomeSectionContainer
                titleSection={titleSection}
            >
                {Array.from({ length: 10 }).map((_, index) => (
                    <MovieCard key={index} movie={null} />
                ))}
            </HomeSectionContainer>
        )
    }

    return (
        <HomeSectionContainer
            titleSection={titleSection}
        >
            {trendingMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </HomeSectionContainer>)

}