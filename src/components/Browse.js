import usePlayingMovies from '../customHooks/usePlayingMovies';
import usePopularMovies from '../customHooks/usePopularMovies';
import useTopRatedMovies from '../customHooks/useTopratedMovies';
import useUpComingMovies from '../customHooks/useUpComingMovies';
import Header from './Header';
import MainMovieContainer from './MainMovieContainer';
import MovieListContainer from './MovieListContainer';

const Browse = () => {
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


export default Browse