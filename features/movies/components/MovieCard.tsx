import { Movie } from "@/types/resultEntity";
import MovieCircleScore from "./MovieCircleScore";
import { formatDateToText } from "@/utils/date";

interface MovieCardProps {
    movie: Movie;
}

export default function MovieCard({movie}: MovieCardProps) {
    const releaseDate = formatDateToText(movie.release_date || movie.first_air_date || '');
    return (
        <div className="w-40 h-80 rounded-lg flex-shrink-0">
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || movie.name}
                className="w-full rounded-lg"
            />
                 
                <div className="relative mt-[-20px] ml-[10px]">
                    <MovieCircleScore rate={movie.vote_average} />
                </div>  
                <div className="px-[10px]">
                    <h2 className="text-black font-bold dark:text-white text-[15px]">{movie.title || movie.name}</h2>
                    <p className="text-black dark:text-gray-400 text-[15px]">{releaseDate}</p>
                </div>
            
        </div>
    )
}