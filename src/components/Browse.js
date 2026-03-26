import usePlayingMovies from '../customHooks/usePlayingMovies';
import Header from './Header';

const Browse = () => {
usePlayingMovies();
  return (
    <div>
      <Header />
      
    </div>
  )
}


export default Browse