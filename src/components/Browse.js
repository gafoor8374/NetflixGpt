import usePlayingMovies from '../customHooks/usePlayingMovies';
import Header from './Header';
import MainMovieContainer from './MainMovieContainer';
import MovieListContainer from './MovieListContainer';

const Browse = () => {
usePlayingMovies();
  return (
    <div>
      <Header />
      <MainMovieContainer />
      <MovieListContainer />
    </div>
  )
}


export default Browse