import React from 'react';
import Header from './Header';
import MainMovieContainer from './MainMovieContainer';
import MovieListContainer from './MovieListContainer';
import usePlayingMovies from '../customHooks/usePlayingMovies';
import usePopularMovies from '../customHooks/usePopularMovies';
import useTopRatedMovies from '../customHooks/useTopratedMovies';
import useUpComingMovies from '../customHooks/useUpComingMovies';

const Games = () => {
    usePlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpComingMovies();
  return (
    <div>
        <Header />
        <MainMovieContainer />
      <MovieListContainer />
    </div>
  )
}

export default Games