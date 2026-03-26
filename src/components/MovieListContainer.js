import React from 'react'
import ListMovies from './ListMovies';
import { useSelector } from 'react-redux';

const MovieListContainer = () => {

  const movies = useSelector((store)=>store.movies);
  // console.log(movies);
  if(!movies) return;
  return (
    <div className='bg-black'>
      <div className='-mt-60'>
        <ListMovies title={"Now Playing"} movies={movies?.palyingMovies} />
        <ListMovies title={"Popular"} movies={movies?.popularMovies} />
        <ListMovies title={"Top Rated"} movies={movies?.topRatedMovies} />
        <ListMovies title={"UpComing"} movies={movies?.upComingMovies} />
      </div>
      </div>
     
  );
}

export default MovieListContainer;