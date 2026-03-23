'use client'
import FilterBar from "@/components/FilterBar";
import MovieTrailerCard from "../components/MovieTrailerCard";
import { useGeneralMovies } from "../hooks/useGeneralMovies";
import { useEffect } from "react";
import HomeSectionTitle from "../components/HomeSectionTitle";
import { HomeSectionContainer } from "./HomeSectionContainer";

export default function TrailersContainer() {
    const { popularMovies, fetchPopularMovies } = useGeneralMovies();
    const filterOptions = [
        { label: "Popular", value: "popular" },
        { label: "Streaming", value: "streaming" },
        { label: "On TV", value: "tv" },
        { label: "For Rent", value: "rent" },
        { label: "In Theaters", value: "theater" },
    ];

    useEffect(() => {
        fetchPopularMovies();
    }, []);

    const titleSection = <HomeSectionTitle
                        title="Trending"
                        options={filterOptions}
                        onSelectOption={(option: number) => {
                            console.log(option);
                        }}
                        backgroundColor="#10b981"
                        textSelectedColor="#e9ebeaff"
                        textUnselectedColor="#e9ebeaff"
                    />

    if(popularMovies.length === 0) {
        return (
            <HomeSectionContainer
                titleSection={titleSection}
            >
                {Array.from({ length: 10 }).map((_, index) => (
                    <MovieTrailerCard key={index} movie={null} />
                ))}
            </HomeSectionContainer>
        )
    }
        
    return (
        <HomeSectionContainer 
            titleSection={titleSection}
            backgroundColor="transparent"
        >
            {
                popularMovies.map((movie) => (
                    <MovieTrailerCard key={movie.id} movie={movie} />
                )
            )}
        </HomeSectionContainer>
    )
}
        