import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SearchBar from "@/features/search/components/SearchBar";
import MovieCard from "@/features/movies/components/MovieCard";
import MovieTrailerCard from "@/features/movies/components/MovieTrailerCard";
import TrendingMovies from "@/features/movies/containers/TrendingMovies";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-[var(--background)]">
      {/* <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-[var(--background)] sm:items-start"> */}
      <Header />
      <SearchBar />
      <Hero />
      
      <main className="flex flex-5 w-full flex-col items-center justify-between gap-10  sm:items-start">
           {/* Trending Movies */}
           <TrendingMovies />

           {/* Trending Trailers */}
           
          <div className="w-[90%] flex self-center  gap-5 py-10 overflow-x-auto ">
            <MovieTrailerCard />
            <MovieTrailerCard />
            <MovieTrailerCard />
            <MovieTrailerCard />
            <MovieTrailerCard />
            <MovieTrailerCard />
          </div>
          
          <div className="w-full bg-white dark:bg-sky-950 py-10">
            <div className="w-[90%] mx-auto self-center flex gap-5 overflow-x-auto ">
            
            {/* <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard /> */}
          
            </div>
           </div>
          
      </main>
      <Footer />
    </div>
  );
}
