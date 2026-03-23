'use client'
import FilterBar from "@/components/FilterBar";
import MovieTrailerCard from "../components/MovieTrailerCard";

export default function TrailersContainer() {
    const filterOptions = [
        { label: "Popular", value: "popular" },
        { label: "Streaming", value: "streaming" },
        { label: "On TV", value: "tv" },
        { label: "For Rent", value: "rent" },
        { label: "In Theaters", value: "theater" },
    ];
        
    return (
        <div className="w-full bg-sky-950 dark:bg-[var(--background)]">
            <div className="w-[85%] h-15 mx-auto flex self-center items-end gap-8">
                <h1 className="text-black dark:text-white text-2xl font-semibold">Trailers</h1>
                <FilterBar 
                    options={filterOptions}
                    onSelectOption={(option: number) => {
                        console.log(option);
                    }}
                    selectedOption={0}
                    
                />
            </div>
            <div className="w-[92%] mx-auto px-10 flex self-center gap-5 overflow-x-auto pb-10 pt-5">
                    <MovieTrailerCard />
                    <MovieTrailerCard />
                    <MovieTrailerCard />
                    <MovieTrailerCard />
                    <MovieTrailerCard />
                    <MovieTrailerCard />
                </div>
        </div>
    )
}
        