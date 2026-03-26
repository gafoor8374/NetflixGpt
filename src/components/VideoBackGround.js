import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
import useMovieTrailer from "../customHooks/useMovieTrailer";

const VideoBackGround = ({ movieId }) => {

  const trailerVideo = useSelector((store)=>store.movies?.movieTrailer);
   useMovieTrailer(movieId);
  return (
    <div className="w-screen">
      {trailerVideo && <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+ trailerVideo.key+"?autoplay=1&mute=1&controls=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerPolicy="strict-origin-when-cross-origin" 
      ></iframe>}
    </div>
  );
};

export default VideoBackGround;
