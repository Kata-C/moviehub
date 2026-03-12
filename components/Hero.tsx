

export default function Hero() {
    return (
    <div className="w-full flex-5 relative">
        <img 
            src="https://image.tmdb.org/t/p/original/3nv2TEz2u178xPXzdKlZdUh5uOI.jpg"
            className="w-full h-[400px] object-cover"
        />
        <div className="w-full h-[400px] inset-0 bg-blue-950/50 absolute">
            <h1>Welcome.</h1>
            <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
        </div>
    </div>) 
}

