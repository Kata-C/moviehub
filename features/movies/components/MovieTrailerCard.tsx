import PlayIcon from '@mui/icons-material/PlayArrowRounded'

interface TrailerCardProps {
    // movie: Movie;
}

export default function MovieTrailerCard() {
    return (
        <div className="w-78 rounded-lg flex-shrink-0">
            <div className="w-full h-44 bg-black rounded-lg relative">
                <button 
                    className="absolute z-10 cursor-pointer"
                    style={{
                        // 65 fontSize for playIcon
                        top: "calc(50% - 32.5px)",
                        left: "calc(50% - 32.5px)",
                    }}
                >
                    <PlayIcon sx={{ fontSize: 65, color: "white" }}/>
                </button>
            </div>
            <div className="w-full rounded-lg flex flex-col items-center mt-2">
                <h3 className="text-black dark:text-white text-lg font-bold"> 
                    MOVIE TITLE
                </h3>
                <p className="text-black dark:text-white text-sm"> 
                    MOVIE TITLE MOVIE TITLE MOVIE TITLE
                </p>
            </div>
        </div>
    )
}