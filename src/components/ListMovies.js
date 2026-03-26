import React from "react";
import MovieCard from "./MovieCard";

const ListMovies = ({ title, movies }) => {
//   console.log(movies);
  return (
    movies && (
      <div  className="p-6 pt-6 ">
 <h1 className="text-3xl text-white mb-4">{title}</h1>
        <div className="flex overflow-x-scroll space-x-4">   
          <div className="flex scrollbar-hide">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterpath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default ListMovies;
