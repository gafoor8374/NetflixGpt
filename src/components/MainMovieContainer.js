import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBackGround from './VideoBackGround';
import { useSelector } from 'react-redux';

const MainMovieContainer = () => {

    const movies = useSelector((store)=>store.movies?.palyingMovies);
    if(!movies) return null;

    const mainMovie = movies?.[0];
    // console.log(mainMovie);
    const {original_title, overview,id} = mainMovie;

  return (
    <div>
        <VideoTitle Info = {{original_title, overview}}/>
        <VideoBackGround movieId={id}/>
    </div>
  )
}

export default MainMovieContainer;